import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { Play, RotateCcw, ArrowRight, Cpu, Layers } from 'lucide-react';
import styles from './functionCallSimulator.module.css';

const DEFAULT_EXAMPLES = [
  {
    name: 'Simple (2 args)',
    signature: 'int add(int a, int b)',
    args: ['5', '3'],
  },
  {
    name: 'Many args (8)',
    signature: 'long calc(long a, long b, long c, long d, long e, long f, long g, long h)',
    args: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  {
    name: 'Mixed types',
    signature: 'double compute(int x, double y, int z)',
    args: ['42', '3.14', '7'],
  },
];

function parseSignature(signature) {
  const match = signature.match(/^(\S+)\s+\w+\(([^)]*)\)$/);
  if (!match) return { returnType: 'void', params: [] };

  const returnType = match[1];
  const paramStr = match[2].trim();
  if (!paramStr) return { returnType, params: [] };

  const params = paramStr.split(',').map((p) => {
    const parts = p.trim().split(/\s+/);
    return {
      type: parts.slice(0, -1).join(' ') || 'int',
      name: parts[parts.length - 1] || 'arg',
    };
  });

  return { returnType, params };
}

function classifyType(type) {
  const t = type.toLowerCase();
  if (t.includes('double') || t.includes('float')) return 'float';
  if (t.includes('long long') || t.includes('int64') || t === 'long') return 'integer64';
  return 'integer32';
}

function simulateCall(convention, signature, argValues) {
  const { returnType, params } = parseSignature(signature);
  const steps = [];
  const registerState = {};

  const argRegs = convention.argumentRegisters || [];
  const floatRegs = convention.simdRules?.argumentRegisters || [];
  const stackOffset = convention.shadowSpace || 0;

  let floatArgIdx = 0;
  let intArgIdx = 0;
  const stackArgs = [];

  params.forEach((param, i) => {
    const typeClass = classifyType(param.type);
    const value = argValues[i] || '0';

    if (typeClass === 'float' && floatArgIdx < floatRegs.length) {
      const reg = floatRegs[floatArgIdx];
      registerState[reg] = value;
      steps.push({
        step: i + 1,
        action: `Load ${param.name} (${value}) into ${reg}`,
        type: 'register',
        register: reg,
        value,
        param,
      });
      floatArgIdx++;
    } else if (typeClass !== 'float' && intArgIdx < argRegs.length) {
      const reg = argRegs[intArgIdx];
      registerState[reg] = value;
      steps.push({
        step: i + 1,
        action: `Load ${param.name} (${value}) into ${reg}`,
        type: 'register',
        register: reg,
        value,
        param,
      });
      intArgIdx++;
    } else {
      stackArgs.push({ param, value, offset: stackOffset + stackArgs.length * 8 });
      steps.push({
        step: i + 1,
        action: `Push ${param.name} (${value}) onto stack at offset +${(stackOffset + stackArgs.length * 8)}`,
        type: 'stack',
        value,
        param,
      });
    }
  });

  steps.push({
    step: params.length + 1,
    action: `CALL instruction pushes return address onto stack`,
    type: 'call',
  });

  const retRegs = convention.returnRegisters || [];
  steps.push({
    step: params.length + 2,
    action: `Return value in ${retRegs[0]?.register || 'RAX'}`,
    type: 'return',
    register: retRegs[0]?.register || 'RAX',
  });

  return { steps, registerState, stackArgs };
}

function SimulationStep({ step, isLast }) {
  const typeColors = {
    register: '#3b82f6',
    stack: '#f97316',
    call: '#ef4444',
    return: '#22c55e',
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>
        <div
          className={styles.stepDot}
          style={{ backgroundColor: typeColors[step.type] }}
        />
        {!isLast && <div className={styles.stepLine} />}
      </div>
      <div className={styles.stepContent}>
        <div className={styles.stepHeader}>
          <span className={styles.stepNumber}>Step {step.step}</span>
          <span
            className={styles.stepType}
            style={{ color: typeColors[step.type] }}
          >
            {step.type}
          </span>
        </div>
        <p className={styles.stepAction}>{step.action}</p>
        {step.register && (
          <div className={styles.stepRegister}>
            <Cpu size={14} />
            <span className={styles.registerName}>{step.register}</span>
            <ArrowRight size={12} />
            <span className={styles.registerValue}>{step.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FunctionCallSimulator({ callingConvention = {}, registers = [] }) {
  const [signature, setSignature] = useState(DEFAULT_EXAMPLES[0].signature);
  const [argValues, setArgValues] = useState(DEFAULT_EXAMPLES[0].args);
  const [simulation, setSimulation] = useState(null);
  const [selectedExample, setSelectedExample] = useState(0);

  const convention = callingConvention.name || 'Unknown';

  const handleSimulate = () => {
    const result = simulateCall(callingConvention, signature, argValues);
    setSimulation(result);
  };

  const handleReset = () => {
    setSimulation(null);
  };

  const handleExampleSelect = (idx) => {
    setSelectedExample(idx);
    setSignature(DEFAULT_EXAMPLES[idx].signature);
    setArgValues(DEFAULT_EXAMPLES[idx].args);
    setSimulation(null);
  };

  const parsed = useMemo(() => parseSignature(signature), [signature]);

  return (
    <div className={styles.container}>
      <div className={styles.examplesBar}>
        <span className={styles.examplesLabel}>Examples:</span>
        {DEFAULT_EXAMPLES.map((ex, i) => (
          <button
            key={i}
            className={clsx(styles.exampleChip, selectedExample === i && styles.exampleChipActive)}
            onClick={() => handleExampleSelect(i)}
            type="button"
          >
            {ex.name}
          </button>
        ))}
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="func-signature">
            Function Signature
          </label>
          <input
            id="func-signature"
            className={styles.input}
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="int add(int a, int b)"
          />
        </div>

        {parsed.params.length > 0 && (
          <div className={styles.argsGrid}>
            {parsed.params.map((param, i) => (
              <div key={i} className={styles.argInput}>
                <label className={styles.argLabel} htmlFor={`arg-${i}`}>
                  {param.name} ({param.type})
                </label>
                <input
                  id={`arg-${i}`}
                  className={styles.argInputField}
                  value={argValues[i] || ''}
                  onChange={(e) => {
                    const newArgs = [...argValues];
                    newArgs[i] = e.target.value;
                    setArgValues(newArgs);
                  }}
                  placeholder="value"
                />
              </div>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.simulateButton} onClick={handleSimulate} type="button">
            <Play size={16} />
            Simulate Call
          </button>
          <button className={styles.resetButton} onClick={handleReset} type="button">
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      {simulation && (
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <h4 className={styles.resultsTitle}>Simulation Steps</h4>
            <span className={styles.stepCount}>{simulation.steps.length} steps</span>
          </div>
          <div className={styles.stepsList}>
            {simulation.steps.map((step, i) => (
              <SimulationStep key={i} step={step} isLast={i === simulation.steps.length - 1} />
            ))}
          </div>

          <div className={styles.registerSummary}>
            <h5 className={styles.summaryTitle}>
              <Cpu size={14} />
              Register State After Call
            </h5>
            <div className={styles.registerGrid}>
              {Object.entries(simulation.registerState).map(([reg, val]) => (
                <div key={reg} className={styles.registerEntry}>
                  <span className={styles.regName}>{reg}</span>
                  <span className={styles.regVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {simulation.stackArgs.length > 0 && (
            <div className={styles.stackSummary}>
              <h5 className={styles.summaryTitle}>
                <Layers size={14} />
                Stack-Passed Arguments
              </h5>
              <div className={styles.stackList}>
                {simulation.stackArgs.map((arg, i) => (
                  <div key={i} className={styles.stackEntry}>
                    <span className={styles.stackOffset}>[SP+{arg.offset}]</span>
                    <span className={styles.stackValue}>{arg.value}</span>
                    <span className={styles.stackParam}>{arg.param.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
