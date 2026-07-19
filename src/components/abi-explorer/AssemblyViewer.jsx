import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import { Terminal, Copy, Check, Cpu, Layers, FileCode, ArrowRight, Zap } from 'lucide-react';
import styles from './abi.module.css';

// Pre-computed assembly examples per architecture
const ASSEMBLY_EXAMPLES = {
  'x86_64-sysv': {
    'add': {
      title: 'Integer Addition',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'addl    %esi, %edi      # b + a -> a\nmovl    %edi, %eax      # result -> return reg\nret',
      annotations: [
        { line: 0, type: 'register', text: 'a in %edi (arg#1)' },
        { line: 0, type: 'register', text: 'b in %esi (arg#2)' },
        { line: 1, type: 'register', text: 'Return in %eax' },
      ],
      registerMap: { '%edi': 'a', '%esi': 'b', '%eax': 'return value' },
    },
    'mul': {
      title: 'Integer Multiplication',
      c: 'int mul(int a, int b) {\n    return a * b;\n}',
      asm: 'imull   %esi, %edi      # a * b -> a\nmovl    %edi, %eax      # result -> return reg\nret',
      annotations: [
        { line: 0, type: 'register', text: 'a in %edi, b in %esi' },
        { line: 1, type: 'register', text: 'Return in %eax' },
      ],
      registerMap: { '%edi': 'a', '%esi': 'b', '%eax': 'return value' },
    },
    'sum': {
      title: '8 Arguments (Stack Spilling)',
      c: 'long sum(long a, long b, long c, long d,\n         long e, long f, long g, long h) {\n    return a+b+c+d+e+f+g+h;\n}',
      asm: 'leaq    (%rdi,%rsi), %rax    # a + b\naddq    %rdx, %rax            # + c\naddq    %rcx, %rax            # + d\naddq    %r8, %rax             # + e\naddq    %r9, %rax             # + f\naddq    8(%rsp), %rax         # + g (stack)\naddq    16(%rsp), %rax        # + h (stack)\nret',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a-h in rdi,rsi,rdx,rcx,r8,r9 + stack' },
        { line: 5, type: 'stack', text: '7th arg on stack at SP+8' },
        { line: 6, type: 'stack', text: '8th arg on stack at SP+16' },
      ],
      registerMap: { '%rdi': 'a', '%rsi': 'b', '%rdx': 'c', '%rcx': 'd', '%r8': 'e', '%r9': 'f', '8(%rsp)': 'g', '16(%rsp)': 'h' },
    },
  },
  'windows-x64': {
    'add': {
      title: 'Integer Addition',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'leal    (%rcx,%rdx), %eax    # a + b -> return reg\nret',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in rcx, b in rdx (Win64 ABI)' },
        { line: 0, type: 'register', text: 'Shadow space: 32 bytes allocated' },
        { line: 1, type: 'register', text: 'Return in eax' },
      ],
      registerMap: { '%rcx': 'a', '%rdx': 'b', '%eax': 'return value' },
    },
  },
  'aarch64-aapcs64': {
    'add': {
      title: 'Integer Addition',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'add     w0, w0, w1     # a + b -> w0\nret                         # return',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in w0, b in w1 (AAPCS64)' },
        { line: 0, type: 'register', text: 'Return in w0' },
        { line: 1, type: 'register', text: 'LR holds return address' },
      ],
      registerMap: { 'w0': 'a / return', 'w1': 'b', 'x30': 'LR (return address)' },
    },
  },
  'riscv': {
    'add': {
      title: 'Integer Addition',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'add     a0, a0, a1     # a + b -> a0\nret                         # return via ra',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in a0, b in a1 (RISC-V ABI)' },
        { line: 0, type: 'register', text: 'Return in a0' },
        { line: 1, type: 'register', text: 'jr ra -> return to caller' },
      ],
      registerMap: { 'a0': 'a / return', 'a1': 'b', 'ra': 'return address' },
    },
  },
};

// Fill in real assembly for architectures not explicitly listed
const FALLBACK_ASSEMBLY = {
  'x86-sysv': {
    add: {
      title: 'Integer Addition (cdecl, all args on stack)',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'pushl   %ebp                # save frame pointer\nmovl    %esp, %ebp          # set up frame\nmovl    12(%ebp), %eax      # load b from stack\naddl    8(%ebp), %eax       # a + b -> eax\npopl    %ebp                # restore frame pointer\nret                         # return, caller cleans stack',
      annotations: [
        { line: 0, type: 'stack', text: 'cdecl: caller pushes args right-to-left' },
        { line: 3, type: 'calling-convention', text: 'a at [ebp+8], b at [ebp+12]' },
        { line: 4, type: 'register', text: 'Return value in eax' },
        { line: 6, type: 'calling-convention', text: 'cdecl: caller cleans stack with add esp' },
      ],
      registerMap: { '8(%ebp)': 'a (stack arg)', '12(%ebp)': 'b (stack arg)', '%eax': 'return value', '%ebp': 'frame pointer' },
    },
  },
  'aarch32-aapcs': {
    add: {
      title: 'Integer Addition (AAPCS, r0-r3 args)',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'add     r0, r0, r1     @ a + b -> r0\nbx      lr               @ return via link register',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in r0, b in r1 (AAPCS)' },
        { line: 0, type: 'register', text: 'Return value in r0' },
        { line: 1, type: 'register', text: 'lr holds return address' },
      ],
      registerMap: { 'r0': 'a / return', 'r1': 'b', 'lr': 'return address' },
    },
  },
  'powerpc64-elfv2': {
    add: {
      title: 'Integer Addition (ELFv2, r3-r10 args)',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'add     3, 3, 4         # a + b -> r3\nblr                         # return (branch to link register)',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in r3, b in r4 (ELFv2)' },
        { line: 0, type: 'register', text: 'Return value in r3' },
        { line: 1, type: 'register', text: 'blr -> branch to link register' },
      ],
      registerMap: { 'r3': 'a / return', 'r4': 'b', 'lr': 'return address' },
    },
  },
  'mips-n32': {
    add: {
      title: 'Integer Addition (N32, $a0-$a3 args)',
      c: 'int add(int a, int b) {\n    return a + b;\n}',
      asm: 'addu    $v0, $a0, $a1   # a + b -> v0\njr      $ra              # return via return address',
      annotations: [
        { line: 0, type: 'calling-convention', text: 'a in $a0, b in $a1 (N32 ABI)' },
        { line: 0, type: 'register', text: 'Return value in $v0' },
        { line: 1, type: 'register', text: '$ra holds return address' },
      ],
      registerMap: { '$a0': 'a', '$a1': 'b', '$v0': 'return value', '$ra': 'return address' },
    },
  },
};

['x86-sysv', 'aarch32-aapcs', 'powerpc64-elfv2', 'mips-n32'].forEach((id) => {
  if (!ASSEMBLY_EXAMPLES[id]) {
    ASSEMBLY_EXAMPLES[id] = FALLBACK_ASSEMBLY[id];
  }
});

function matchExample(cCode, archId) {
  const code = cCode.trim().toLowerCase();
  const examples = ASSEMBLY_EXAMPLES[archId] || ASSEMBLY_EXAMPLES['x86_64-sysv'];

  if (code.includes('add') && code.includes('int') && code.split(',').length <= 3) {
    return examples.add || examples['add'];
  }
  if (code.includes('mul') || code.includes('multiply')) {
    return examples.mul || examples.add;
  }
  if (code.includes('sum') || code.split(',').length > 4) {
    return examples.sum || examples.add;
  }
  return examples.add;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };
  return (
    <button className={styles.clangCopyBtn} onClick={handleCopy} type="button" title="Copy assembly">
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export default function AssemblyViewer({ arch }) {
  const [cCode, setCCode] = useState('int add(int a, int b) {\n    return a + b;\n}');
  const [result, setResult] = useState(null);
  const [isCompiling, setIsCompiling] = useState(false);

  const archId = arch?.id || 'x86_64-sysv';

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => {
      const matched = matchExample(cCode, archId);
      setResult(matched);
      setIsCompiling(false);
    }, 600);
  };

  return (
    <div className={styles.asmViewer}>
      <div className={styles.asmInput}>
        <div className={styles.asmInputLabel}>
          <FileCode size={14} />
          <span>C Source Code</span>
        </div>
        <textarea
          className={styles.asmTextarea}
          value={cCode}
          onChange={(e) => setCCode(e.target.value)}
          placeholder="Enter C code here..."
          spellCheck={false}
          rows={8}
        />
        <button
          className={clsx(styles.asmCompileBtn, isCompiling && styles.asmCompileBtnLoading)}
          onClick={handleCompile}
          disabled={isCompiling}
          type="button"
        >
          {isCompiling ? (
            <><Zap size={16} className={styles.asmSpin} /> Compiling...</>
          ) : (
            <><Terminal size={16} /> Generate Assembly</>
          )}
        </button>
      </div>

      {result && (
        <div className={styles.asmOutput}>
          <div className={styles.asmOutputHeader}>
            <div className={styles.asmOutputTitle}>
              <Cpu size={14} />
              <span>{result.title}</span>
            </div>
            <CopyButton text={result.asm} />
          </div>

          <div className={styles.asmSplit}>
            <div className={styles.asmCodePanel}>
              <div className={styles.asmCodeLabel}>Assembly Output</div>
              <pre className={styles.asmCode}>
                {result.asm.split('\n').map((line, i) => {
                  const annotation = result.annotations.find((a) => a.line === i);
                  return (
                    <div key={i} className={styles.asmLine}>
                      <span className={styles.asmLineNum}>{i + 1}</span>
                      <span className={styles.asmLineCode}>{line}</span>
                      {annotation && (
                        <span className={clsx(styles.asmAnnotation, styles[`asmAnnotation${annotation.type.replace(/-/g, '')}`])}>
                          {annotation.text}
                        </span>
                      )}
                    </div>
                  );
                })}
              </pre>
            </div>

            {result.registerMap && Object.keys(result.registerMap).length > 0 && (
              <div className={styles.asmRegisterPanel}>
                <div className={styles.asmCodeLabel}>
                  <Layers size={13} />
                  Register Allocation
                </div>
                <div className={styles.asmRegisterMap}>
                  {Object.entries(result.registerMap).map(([reg, value]) => (
                    <div key={reg} className={styles.asmRegisterEntry}>
                      <code className={styles.asmRegisterName}>{reg}</code>
                      <ArrowRight size={12} className={styles.asmArrowIcon} />
                      <span className={styles.asmRegisterValue}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
