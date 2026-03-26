	.file	"small_sort.cpp"
	.intel_syntax noprefix
	.text
#APP
	.globl _ZSt21ios_base_library_initv
#NO_APP
	.p2align 4
	.type	_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0, @function
_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0:
.LFB3313:
	.cfi_startproc
	lea	rax, -1[rdx]
	push	r13
	.cfi_def_cfa_offset 16
	.cfi_offset 13, -16
	mov	r13, rdx
	mov	r8, rsi
	push	r12
	.cfi_def_cfa_offset 24
	.cfi_offset 12, -24
	mov	r9d, ecx
	mov	r12, rdx
	and	r13d, 1
	push	rbp
	.cfi_def_cfa_offset 32
	.cfi_offset 6, -32
	mov	rbp, rax
	shr	rbp, 63
	push	rbx
	.cfi_def_cfa_offset 40
	.cfi_offset 3, -40
	add	rbp, rax
	sar	rbp
	cmp	rsi, rbp
	jl	.L4
	jmp	.L2
	.p2align 4,,10
	.p2align 3
.L9:
	mov	rsi, rax
.L4:
	lea	rdx, 1[rsi]
	lea	rax, [rdx+rdx]
	lea	rdx, [rdi+rdx*8]
	lea	r10, -1[rax]
	mov	ecx, DWORD PTR [rdx]
	lea	r11, [rdi+r10*4]
	mov	ebx, DWORD PTR [r11]
	cmp	ecx, ebx
	jnb	.L3
	mov	ecx, ebx
	mov	rdx, r11
	mov	rax, r10
.L3:
	mov	DWORD PTR [rdi+rsi*4], ecx
	cmp	rbp, rax
	jg	.L9
	test	r13, r13
	je	.L8
.L5:
	lea	rsi, -1[rax]
	mov	rcx, rsi
	shr	rcx, 63
	add	rcx, rsi
	sar	rcx
	cmp	rax, r8
	jg	.L7
	jmp	.L6
	.p2align 4,,10
	.p2align 3
.L16:
	mov	DWORD PTR [rdx], esi
	lea	rdx, -1[rcx]
	mov	rax, rdx
	shr	rax, 63
	add	rax, rdx
	sar	rax
	mov	rdx, rax
	mov	rax, rcx
	cmp	r8, rcx
	jge	.L15
	mov	rcx, rdx
.L7:
	lea	r10, [rdi+rcx*4]
	lea	rdx, [rdi+rax*4]
	mov	esi, DWORD PTR [r10]
	cmp	esi, r9d
	jb	.L16
.L6:
	mov	DWORD PTR [rdx], r9d
	pop	rbx
	.cfi_remember_state
	.cfi_def_cfa_offset 32
	pop	rbp
	.cfi_def_cfa_offset 24
	pop	r12
	.cfi_def_cfa_offset 16
	pop	r13
	.cfi_def_cfa_offset 8
	ret
	.p2align 4,,10
	.p2align 3
.L2:
	.cfi_restore_state
	lea	rdx, [rdi+rsi*4]
	test	r13, r13
	jne	.L6
	mov	rax, r8
	.p2align 4,,10
	.p2align 3
.L8:
	sub	r12, 2
	mov	rcx, r12
	shr	rcx, 63
	add	rcx, r12
	sar	rcx
	cmp	rax, rcx
	jne	.L5
	lea	rax, 1[rax+rax]
	lea	rcx, [rdi+rax*4]
	mov	esi, DWORD PTR [rcx]
	mov	DWORD PTR [rdx], esi
	mov	rdx, rcx
	jmp	.L5
	.p2align 4,,10
	.p2align 3
.L15:
	mov	rdx, r10
	mov	DWORD PTR [rdx], r9d
	pop	rbx
	.cfi_def_cfa_offset 32
	pop	rbp
	.cfi_def_cfa_offset 24
	pop	r12
	.cfi_def_cfa_offset 16
	pop	r13
	.cfi_def_cfa_offset 8
	ret
	.cfi_endproc
.LFE3313:
	.size	_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0, .-_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0
	.p2align 4
	.type	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0, @function
_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0:
.LFB3314:
	.cfi_startproc
	mov	rax, rsi
	sub	rax, rdi
	cmp	rax, 64
	jle	.L52
	push	r13
	.cfi_def_cfa_offset 16
	.cfi_offset 13, -16
	mov	r9, rsi
	mov	r13, rdx
	push	r12
	.cfi_def_cfa_offset 24
	.cfi_offset 12, -24
	mov	r12, rdi
	push	rbp
	.cfi_def_cfa_offset 32
	.cfi_offset 6, -32
	push	rbx
	.cfi_def_cfa_offset 40
	.cfi_offset 3, -40
	lea	rbx, 4[rdi]
	sub	rsp, 8
	.cfi_def_cfa_offset 48
	test	rdx, rdx
	je	.L53
.L20:
	sar	rax, 3
	movq	xmm0, QWORD PTR [r12]
	mov	edx, DWORD PTR -4[r9]
	sub	r13, 1
	lea	rdi, [r12+rax*4]
	mov	eax, DWORD PTR [rdi]
	pshufd	xmm2, xmm0, 0xe5
	movd	esi, xmm2
	pshufd	xmm1, xmm0, 225
	movd	ecx, xmm0
	cmp	esi, eax
	jnb	.L26
	cmp	eax, edx
	jb	.L32
	cmp	esi, edx
	jb	.L51
.L29:
	movq	QWORD PTR [r12], xmm1
	mov	edi, DWORD PTR -4[r9]
.L28:
	mov	rdx, r9
	mov	rax, rbx
	cmp	ecx, esi
	jnb	.L42
	.p2align 4,,10
	.p2align 3
.L55:
	add	rax, 4
	.p2align 4,,10
	.p2align 3
.L34:
	mov	r8, rax
	mov	ecx, DWORD PTR [rax]
	add	rax, 4
	cmp	ecx, esi
	jb	.L34
	mov	rbp, r8
.L33:
	sub	rdx, 4
	cmp	esi, edi
	jnb	.L35
	.p2align 4,,10
	.p2align 3
.L36:
	mov	edi, DWORD PTR -4[rdx]
	sub	rdx, 4
	cmp	esi, edi
	jb	.L36
.L35:
	cmp	rbp, rdx
	jnb	.L54
	mov	DWORD PTR 0[rbp], edi
	lea	rax, 4[rbp]
	mov	edi, DWORD PTR -4[rdx]
	mov	DWORD PTR [rdx], ecx
	mov	esi, DWORD PTR [r12]
	mov	ecx, DWORD PTR 4[rbp]
	cmp	ecx, esi
	jb	.L55
.L42:
	mov	rbp, rax
	jmp	.L33
.L26:
	cmp	esi, edx
	jb	.L29
	cmp	eax, edx
	jnb	.L32
.L51:
	mov	DWORD PTR [r12], edx
	mov	edi, ecx
	mov	DWORD PTR -4[r9], ecx
	mov	esi, DWORD PTR [r12]
	mov	ecx, DWORD PTR 4[r12]
	jmp	.L28
	.p2align 4,,10
	.p2align 3
.L54:
	mov	rdx, r13
	mov	rsi, r9
	mov	rdi, rbp
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0
	mov	rax, rbp
	sub	rax, r12
	cmp	rax, 64
	jle	.L17
	test	r13, r13
	je	.L39
	mov	r9, rbp
	jmp	.L20
.L32:
	mov	DWORD PTR [r12], eax
	mov	DWORD PTR [rdi], ecx
	mov	ecx, DWORD PTR 4[r12]
	mov	esi, DWORD PTR [r12]
	mov	edi, DWORD PTR -4[r9]
	jmp	.L28
.L53:
	mov	rbp, rsi
.L39:
	sar	rax, 2
	lea	r13, -2[rax]
	mov	rbx, rax
	sar	r13
	jmp	.L22
.L56:
	sub	r13, 1
.L22:
	mov	ecx, DWORD PTR [r12+r13*4]
	mov	rdx, rbx
	mov	rsi, r13
	mov	rdi, r12
	call	_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0
	test	r13, r13
	jne	.L56
	sub	rbp, 4
	.p2align 4,,10
	.p2align 3
.L23:
	mov	eax, DWORD PTR [r12]
	mov	rbx, rbp
	mov	ecx, DWORD PTR 0[rbp]
	xor	esi, esi
	sub	rbx, r12
	mov	rdi, r12
	sub	rbp, 4
	mov	DWORD PTR 4[rbp], eax
	mov	rdx, rbx
	sar	rdx, 2
	call	_ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEljNS0_5__ops15_Iter_less_iterEEvT_T0_SA_T1_T2_.isra.0
	cmp	rbx, 4
	jg	.L23
.L17:
	add	rsp, 8
	.cfi_def_cfa_offset 40
	pop	rbx
	.cfi_def_cfa_offset 32
	pop	rbp
	.cfi_def_cfa_offset 24
	pop	r12
	.cfi_def_cfa_offset 16
	pop	r13
	.cfi_def_cfa_offset 8
	ret
.L52:
	.cfi_restore 3
	.cfi_restore 6
	.cfi_restore 12
	.cfi_restore 13
	ret
	.cfi_endproc
.LFE3314:
	.size	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0, .-_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0
	.section	.text._ZNSt6vectorIjSaIjEED2Ev,"axG",@progbits,_ZNSt6vectorIjSaIjEED5Ev,comdat
	.align 2
	.p2align 4
	.weak	_ZNSt6vectorIjSaIjEED2Ev
	.type	_ZNSt6vectorIjSaIjEED2Ev, @function
_ZNSt6vectorIjSaIjEED2Ev:
.LFB2939:
	.cfi_startproc
	endbr64
	mov	rax, QWORD PTR [rdi]
	test	rax, rax
	je	.L57
	mov	rsi, QWORD PTR 16[rdi]
	mov	rdi, rax
	sub	rsi, rax
	jmp	_ZdlPvm@PLT
	.p2align 4,,10
	.p2align 3
.L57:
	ret
	.cfi_endproc
.LFE2939:
	.size	_ZNSt6vectorIjSaIjEED2Ev, .-_ZNSt6vectorIjSaIjEED2Ev
	.weak	_ZNSt6vectorIjSaIjEED1Ev
	.set	_ZNSt6vectorIjSaIjEED1Ev,_ZNSt6vectorIjSaIjEED2Ev
	.section	.text.unlikely,"ax",@progbits
.LCOLDB5:
	.section	.text.startup,"ax",@progbits
.LHOTB5:
	.p2align 4
	.globl	main
	.type	main, @function
main:
.LFB2674:
	.cfi_startproc
	.cfi_personality 0x9b,DW.ref.__gxx_personality_v0
	.cfi_lsda 0x1b,.LLSDA2674
	endbr64
	push	r15
	.cfi_def_cfa_offset 16
	.cfi_offset 15, -16
	mov	edi, 1048576
	push	r14
	.cfi_def_cfa_offset 24
	.cfi_offset 14, -24
	push	r13
	.cfi_def_cfa_offset 32
	.cfi_offset 13, -32
	push	r12
	.cfi_def_cfa_offset 40
	.cfi_offset 12, -40
	push	rbp
	.cfi_def_cfa_offset 48
	.cfi_offset 6, -48
	push	rbx
	.cfi_def_cfa_offset 56
	.cfi_offset 3, -56
	sub	rsp, 88
	.cfi_def_cfa_offset 144
	mov	rax, QWORD PTR fs:40
	mov	QWORD PTR 72[rsp], rax
	xor	eax, eax
.LEHB0:
	call	_Znwm@PLT
.LEHE0:
	mov	edx, 1048572
	xor	esi, esi
	mov	DWORD PTR [rax], 0
	lea	r13, 1048576[rax]
	mov	r15, rax
	mov	QWORD PTR 48[rsp], rax
	lea	rax, 4[rax]
	mov	rdi, rax
	mov	QWORD PTR 64[rsp], r13
	mov	QWORD PTR 16[rsp], rax
	call	memset@PLT
	mov	QWORD PTR 56[rsp], r13
	mov	rax, r15
	movdqa	xmm1, XMMWORD PTR .LC0[rip]
	movdqa	xmm5, XMMWORD PTR .LC1[rip]
	movdqa	xmm4, XMMWORD PTR .LC2[rip]
	movdqa	xmm3, XMMWORD PTR .LC3[rip]
	movdqa	xmm2, XMMWORD PTR .LC4[rip]
	.p2align 4,,10
	.p2align 3
.L60:
	movdqa	xmm6, xmm1
	add	rax, 16
	paddq	xmm1, xmm5
	movdqa	xmm0, xmm6
	paddq	xmm0, xmm4
	shufps	xmm6, xmm0, 136
	movdqa	xmm0, xmm6
	pslld	xmm0, 8
	psubd	xmm0, xmm6
	pslld	xmm0, 3
	paddd	xmm0, xmm6
	pslld	xmm0, 7
	paddd	xmm0, xmm6
	pslld	xmm0, 3
	psubd	xmm0, xmm6
	movdqa	xmm7, xmm0
	pslld	xmm7, 5
	paddd	xmm0, xmm7
	pslld	xmm0, 2
	psubd	xmm0, xmm6
	pslld	xmm0, 2
	paddd	xmm0, xmm6
	paddd	xmm0, xmm3
	pand	xmm0, xmm2
	movups	XMMWORD PTR -16[rax], xmm0
	cmp	rax, r13
	jne	.L60
	mov	DWORD PTR 28[rsp], 8
	lea	rbp, 64[r15]
	lea	r14, 1044480[r15]
	mov	QWORD PTR 8[rsp], 0
	.p2align 4,,10
	.p2align 3
.L72:
	mov	edx, 36
	mov	rsi, r13
	mov	rdi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0
	mov	rbx, QWORD PTR 16[rsp]
	jmp	.L67
	.p2align 4,,10
	.p2align 3
.L89:
	mov	rdx, rbx
	sub	rdx, r15
	cmp	rdx, 4
	jle	.L62
	mov	edi, 4
	mov	rsi, r15
	sub	rdi, rdx
	add	rdi, rbx
	call	memmove@PLT
.L63:
	add	rbx, 4
	mov	DWORD PTR [r15], r12d
	cmp	rbp, rbx
	je	.L88
.L67:
	mov	r12d, DWORD PTR [rbx]
	mov	eax, DWORD PTR [r15]
	mov	rsi, rbx
	cmp	r12d, eax
	jb	.L89
	mov	edx, DWORD PTR -4[rbx]
	lea	rax, -4[rbx]
	cmp	r12d, edx
	jnb	.L65
	.p2align 4,,10
	.p2align 3
.L66:
	mov	DWORD PTR 4[rax], edx
	mov	rsi, rax
	mov	edx, DWORD PTR -4[rax]
	sub	rax, 4
	cmp	r12d, edx
	jb	.L66
.L65:
	add	rbx, 4
	mov	DWORD PTR [rsi], r12d
	cmp	rbp, rbx
	jne	.L67
.L88:
	mov	r9, rbp
	.p2align 4,,10
	.p2align 3
.L70:
	mov	esi, DWORD PTR [r9]
	mov	edx, DWORD PTR -4[r9]
	mov	rdi, r9
	lea	rax, -4[r9]
	cmp	esi, edx
	jnb	.L68
	.p2align 4,,10
	.p2align 3
.L69:
	mov	DWORD PTR 4[rax], edx
	mov	rdi, rax
	mov	edx, DWORD PTR -4[rax]
	sub	rax, 4
	cmp	esi, edx
	jb	.L69
.L68:
	add	r9, 4
	mov	DWORD PTR [rdi], esi
	cmp	r9, r13
	jne	.L70
	mov	eax, DWORD PTR 524288[r15]
	add	eax, DWORD PTR 349524[r15]
	add	eax, DWORD PTR 699048[r15]
	add	QWORD PTR 8[rsp], rax
	mov	rax, r15
	.p2align 4,,10
	.p2align 3
.L71:
	movdqu	xmm0, XMMWORD PTR [rax]
	movdqu	xmm2, XMMWORD PTR 4096[rax]
	add	rax, 16
	movups	XMMWORD PTR -16[rax], xmm2
	movups	XMMWORD PTR 4080[rax], xmm0
	cmp	r14, rax
	jne	.L71
	sub	DWORD PTR 28[rsp], 1
	jne	.L72
	mov	rsi, QWORD PTR 8[rsp]
	lea	rdi, _ZSt4cout[rip]
.LEHB1:
	call	_ZNSo9_M_insertImEERSoT_@PLT
	mov	rdi, rax
	mov	rax, QWORD PTR [rax]
	mov	BYTE PTR 47[rsp], 10
	mov	rax, QWORD PTR -24[rax]
	cmp	QWORD PTR 16[rdi+rax], 0
	jne	.L90
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.L74:
	lea	rdi, 48[rsp]
	call	_ZNSt6vectorIjSaIjEED1Ev
	mov	rax, QWORD PTR 72[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L91
	add	rsp, 88
	.cfi_remember_state
	.cfi_def_cfa_offset 56
	xor	eax, eax
	pop	rbx
	.cfi_def_cfa_offset 48
	pop	rbp
	.cfi_def_cfa_offset 40
	pop	r12
	.cfi_def_cfa_offset 32
	pop	r13
	.cfi_def_cfa_offset 24
	pop	r14
	.cfi_def_cfa_offset 16
	pop	r15
	.cfi_def_cfa_offset 8
	ret
.L62:
	.cfi_restore_state
	jne	.L63
	mov	DWORD PTR [rbx], eax
	jmp	.L63
.L90:
	lea	rsi, 47[rsp]
	mov	edx, 1
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.LEHE1:
	jmp	.L74
.L91:
	call	__stack_chk_fail@PLT
.L78:
	endbr64
	mov	rbx, rax
	jmp	.L75
	.globl	__gxx_personality_v0
	.section	.gcc_except_table,"a",@progbits
.LLSDA2674:
	.byte	0xff
	.byte	0xff
	.byte	0x1
	.uleb128 .LLSDACSE2674-.LLSDACSB2674
.LLSDACSB2674:
	.uleb128 .LEHB0-.LFB2674
	.uleb128 .LEHE0-.LEHB0
	.uleb128 0
	.uleb128 0
	.uleb128 .LEHB1-.LFB2674
	.uleb128 .LEHE1-.LEHB1
	.uleb128 .L78-.LFB2674
	.uleb128 0
.LLSDACSE2674:
	.section	.text.startup
	.cfi_endproc
	.section	.text.unlikely
	.cfi_startproc
	.cfi_personality 0x9b,DW.ref.__gxx_personality_v0
	.cfi_lsda 0x1b,.LLSDAC2674
	.type	main.cold, @function
main.cold:
.LFSB2674:
.L75:
	.cfi_def_cfa_offset 144
	.cfi_offset 3, -56
	.cfi_offset 6, -48
	.cfi_offset 12, -40
	.cfi_offset 13, -32
	.cfi_offset 14, -24
	.cfi_offset 15, -16
	lea	rdi, 48[rsp]
	call	_ZNSt6vectorIjSaIjEED1Ev
	mov	rax, QWORD PTR 72[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L92
	mov	rdi, rbx
.LEHB2:
	call	_Unwind_Resume@PLT
.LEHE2:
.L92:
	call	__stack_chk_fail@PLT
	.cfi_endproc
.LFE2674:
	.section	.gcc_except_table
.LLSDAC2674:
	.byte	0xff
	.byte	0xff
	.byte	0x1
	.uleb128 .LLSDACSEC2674-.LLSDACSBC2674
.LLSDACSBC2674:
	.uleb128 .LEHB2-.LCOLDB5
	.uleb128 .LEHE2-.LEHB2
	.uleb128 0
	.uleb128 0
.LLSDACSEC2674:
	.section	.text.unlikely
	.section	.text.startup
	.size	main, .-main
	.section	.text.unlikely
	.size	main.cold, .-main.cold
.LCOLDE5:
	.section	.text.startup
.LHOTE5:
	.section	.rodata.cst16,"aM",@progbits,16
	.align 16
.LC0:
	.quad	0
	.quad	1
	.align 16
.LC1:
	.quad	4
	.quad	4
	.align 16
.LC2:
	.quad	2
	.quad	2
	.align 16
.LC3:
	.long	12345
	.long	12345
	.long	12345
	.long	12345
	.align 16
.LC4:
	.long	16777215
	.long	16777215
	.long	16777215
	.long	16777215
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
