	.file	"stencil_2d.cpp"
	.intel_syntax noprefix
	.text
#APP
	.globl _ZSt21ios_base_library_initv
#NO_APP
	.section	.text._ZNSt6vectorIfSaIfEED2Ev,"axG",@progbits,_ZNSt6vectorIfSaIfEED5Ev,comdat
	.align 2
	.p2align 4
	.weak	_ZNSt6vectorIfSaIfEED2Ev
	.type	_ZNSt6vectorIfSaIfEED2Ev, @function
_ZNSt6vectorIfSaIfEED2Ev:
.LFB2685:
	.cfi_startproc
	endbr64
	mov	rax, QWORD PTR [rdi]
	test	rax, rax
	je	.L1
	mov	rsi, QWORD PTR 16[rdi]
	mov	rdi, rax
	sub	rsi, rax
	jmp	_ZdlPvm@PLT
	.p2align 4,,10
	.p2align 3
.L1:
	ret
	.cfi_endproc
.LFE2685:
	.size	_ZNSt6vectorIfSaIfEED2Ev, .-_ZNSt6vectorIfSaIfEED2Ev
	.weak	_ZNSt6vectorIfSaIfEED1Ev
	.set	_ZNSt6vectorIfSaIfEED1Ev,_ZNSt6vectorIfSaIfEED2Ev
	.section	.text.unlikely,"ax",@progbits
.LCOLDB6:
	.section	.text.startup,"ax",@progbits
.LHOTB6:
	.p2align 4
	.globl	main
	.type	main, @function
main:
.LFB2420:
	.cfi_startproc
	.cfi_personality 0x9b,DW.ref.__gxx_personality_v0
	.cfi_lsda 0x1b,.LLSDA2420
	endbr64
	push	r12
	.cfi_def_cfa_offset 16
	.cfi_offset 12, -16
	mov	edi, 4194304
	push	rbp
	.cfi_def_cfa_offset 24
	.cfi_offset 6, -24
	push	rbx
	.cfi_def_cfa_offset 32
	.cfi_offset 3, -32
	sub	rsp, 80
	.cfi_def_cfa_offset 112
	mov	rax, QWORD PTR fs:40
	mov	QWORD PTR 72[rsp], rax
	xor	eax, eax
.LEHB0:
	call	_Znwm@PLT
.LEHE0:
	movss	xmm0, DWORD PTR .LC2[rip]
	lea	rbx, 4194304[rax]
	mov	QWORD PTR 16[rsp], rax
	mov	r12, rax
	mov	QWORD PTR 32[rsp], rbx
	shufps	xmm0, xmm0, 0
.L5:
	movups	XMMWORD PTR [rax], xmm0
	add	rax, 32
	movups	XMMWORD PTR -16[rax], xmm0
	cmp	rbx, rax
	jne	.L5
	pxor	xmm0, xmm0
	mov	edi, 4194304
	mov	QWORD PTR 24[rsp], rbx
	movups	XMMWORD PTR 56[rsp], xmm0
.LEHB1:
	call	_Znwm@PLT
.LEHE1:
	mov	edx, 4194304
	xor	esi, esi
	mov	rdi, rax
	lea	rbp, 4194304[rax]
	call	memset@PLT
	mov	r9d, 12
	pxor	xmm1, xmm1
	movss	xmm4, DWORD PTR .LC3[rip]
	movss	xmm3, DWORD PTR .LC4[rip]
	mov	r8, rax
.L6:
	lea	rdi, 4100[r8]
	lea	rcx, 8184[r12]
	mov	esi, 1024
	.p2align 4,,10
	.p2align 3
.L10:
	lea	rax, -4088[rcx]
	mov	rdx, rdi
	.p2align 4,,10
	.p2align 3
.L7:
	movss	xmm0, DWORD PTR [rax]
	addss	xmm0, DWORD PTR 8[rax]
	add	rax, 4
	add	rdx, 4
	addss	xmm0, DWORD PTR -4096[rax]
	addss	xmm0, DWORD PTR 4096[rax]
	movss	xmm2, DWORD PTR [rax]
	mulss	xmm0, xmm4
	mulss	xmm2, xmm3
	addss	xmm0, xmm2
	movss	DWORD PTR -4[rdx], xmm0
	cvtss2sd	xmm0, xmm0
	addsd	xmm1, xmm0
	cmp	rax, rcx
	jne	.L7
	add	rsi, 1024
	add	rdi, 4096
	lea	rcx, 4096[rax]
	cmp	rsi, 1047552
	jne	.L10
	sub	r9d, 1
	je	.L9
	mov	rax, rbx
	mov	rbx, rbp
	mov	rbp, rax
	mov	rax, r12
	mov	r12, r8
	mov	r8, rax
	jmp	.L6
.L9:
	movapd	xmm0, xmm1
	lea	rdi, _ZSt4cout[rip]
	mov	QWORD PTR 16[rsp], r8
	mov	QWORD PTR 24[rsp], rbp
	mov	QWORD PTR 32[rsp], rbp
	mov	QWORD PTR 48[rsp], r12
	mov	QWORD PTR 56[rsp], rbx
	mov	QWORD PTR 64[rsp], rbx
.LEHB2:
	call	_ZNSo9_M_insertIdEERSoT_@PLT
	mov	rdi, rax
	mov	rax, QWORD PTR [rax]
	mov	BYTE PTR 15[rsp], 10
	mov	rax, QWORD PTR -24[rax]
	cmp	QWORD PTR 16[rdi+rax], 0
	je	.L11
	lea	rsi, 15[rsp]
	mov	edx, 1
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.L12:
	lea	rdi, 48[rsp]
	call	_ZNSt6vectorIfSaIfEED1Ev
	lea	rdi, 16[rsp]
	call	_ZNSt6vectorIfSaIfEED1Ev
	mov	rax, QWORD PTR 72[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L24
	add	rsp, 80
	.cfi_remember_state
	.cfi_def_cfa_offset 32
	xor	eax, eax
	pop	rbx
	.cfi_def_cfa_offset 24
	pop	rbp
	.cfi_def_cfa_offset 16
	pop	r12
	.cfi_def_cfa_offset 8
	ret
.L11:
	.cfi_restore_state
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.LEHE2:
	jmp	.L12
.L24:
	call	__stack_chk_fail@PLT
.L18:
	endbr64
	mov	rbx, rax
	jmp	.L13
.L17:
	endbr64
	mov	rbx, rax
	jmp	.L14
	.globl	__gxx_personality_v0
	.section	.gcc_except_table,"a",@progbits
.LLSDA2420:
	.byte	0xff
	.byte	0xff
	.byte	0x1
	.uleb128 .LLSDACSE2420-.LLSDACSB2420
.LLSDACSB2420:
	.uleb128 .LEHB0-.LFB2420
	.uleb128 .LEHE0-.LEHB0
	.uleb128 0
	.uleb128 0
	.uleb128 .LEHB1-.LFB2420
	.uleb128 .LEHE1-.LEHB1
	.uleb128 .L17-.LFB2420
	.uleb128 0
	.uleb128 .LEHB2-.LFB2420
	.uleb128 .LEHE2-.LEHB2
	.uleb128 .L18-.LFB2420
	.uleb128 0
.LLSDACSE2420:
	.section	.text.startup
	.cfi_endproc
	.section	.text.unlikely
	.cfi_startproc
	.cfi_personality 0x9b,DW.ref.__gxx_personality_v0
	.cfi_lsda 0x1b,.LLSDAC2420
	.type	main.cold, @function
main.cold:
.LFSB2420:
.L13:
	.cfi_def_cfa_offset 112
	.cfi_offset 3, -32
	.cfi_offset 6, -24
	.cfi_offset 12, -16
	lea	rdi, 48[rsp]
	call	_ZNSt6vectorIfSaIfEED1Ev
.L14:
	lea	rdi, 16[rsp]
	call	_ZNSt6vectorIfSaIfEED1Ev
	mov	rax, QWORD PTR 72[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L25
	mov	rdi, rbx
.LEHB3:
	call	_Unwind_Resume@PLT
.LEHE3:
.L25:
	call	__stack_chk_fail@PLT
	.cfi_endproc
.LFE2420:
	.section	.gcc_except_table
.LLSDAC2420:
	.byte	0xff
	.byte	0xff
	.byte	0x1
	.uleb128 .LLSDACSEC2420-.LLSDACSBC2420
.LLSDACSBC2420:
	.uleb128 .LEHB3-.LCOLDB6
	.uleb128 .LEHE3-.LEHB3
	.uleb128 0
	.uleb128 0
.LLSDACSEC2420:
	.section	.text.unlikely
	.section	.text.startup
	.size	main, .-main
	.section	.text.unlikely
	.size	main.cold, .-main.cold
.LCOLDE6:
	.section	.text.startup
.LHOTE6:
	.section	.rodata.cst4,"aM",@progbits,4
	.align 4
.LC2:
	.long	1065353216
	.align 4
.LC3:
	.long	1040187392
	.align 4
.LC4:
	.long	1056964608
	.hidden	DW.ref.__gxx_personality_v0
	.weak	DW.ref.__gxx_personality_v0
	.section	.data.rel.local.DW.ref.__gxx_personality_v0,"awG",@progbits,DW.ref.__gxx_personality_v0,comdat
	.align 8
	.type	DW.ref.__gxx_personality_v0, @object
	.size	DW.ref.__gxx_personality_v0, 8
DW.ref.__gxx_personality_v0:
	.quad	__gxx_personality_v0
	.ident	"GCC: (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	1f - 0f
	.long	4f - 1f
	.long	5
0:
	.string	"GNU"
1:
	.align 8
	.long	0xc0000002
	.long	3f - 2f
2:
	.long	0x3
3:
	.align 8
4:
