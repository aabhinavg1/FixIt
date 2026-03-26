	.file	"branch_threshold.cpp"
	.intel_syntax noprefix
	.text
#APP
	.globl _ZSt21ios_base_library_initv
#NO_APP
	.section	.text._ZNSt6vectorIiSaIiEED2Ev,"axG",@progbits,_ZNSt6vectorIiSaIiEED5Ev,comdat
	.align 2
	.p2align 4
	.weak	_ZNSt6vectorIiSaIiEED2Ev
	.type	_ZNSt6vectorIiSaIiEED2Ev, @function
_ZNSt6vectorIiSaIiEED2Ev:
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
	.size	_ZNSt6vectorIiSaIiEED2Ev, .-_ZNSt6vectorIiSaIiEED2Ev
	.weak	_ZNSt6vectorIiSaIiEED1Ev
	.set	_ZNSt6vectorIiSaIiEED1Ev,_ZNSt6vectorIiSaIiEED2Ev
	.section	.text.unlikely,"ax",@progbits
.LCOLDB0:
	.section	.text.startup,"ax",@progbits
.LHOTB0:
	.p2align 4
	.globl	main
	.type	main, @function
main:
.LFB2420:
	.cfi_startproc
	.cfi_personality 0x9b,DW.ref.__gxx_personality_v0
	.cfi_lsda 0x1b,.LLSDA2420
	endbr64
	push	rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	mov	edi, 4194304
	push	rbx
	.cfi_def_cfa_offset 24
	.cfi_offset 3, -24
	sub	rsp, 56
	.cfi_def_cfa_offset 80
	mov	rax, QWORD PTR fs:40
	mov	QWORD PTR 40[rsp], rax
	xor	eax, eax
.LEHB0:
	call	_Znwm@PLT
.LEHE0:
	xor	esi, esi
	mov	edx, 4194300
	mov	DWORD PTR [rax], 0
	lea	rbx, 4194304[rax]
	lea	rdi, 4[rax]
	mov	rbp, rax
	mov	QWORD PTR 16[rsp], rax
	mov	QWORD PTR 32[rsp], rbx
	call	memset@PLT
	mov	QWORD PTR 24[rsp], rbx
	mov	rsi, rbp
	mov	ecx, 23
	movabs	rdi, 4931307821684731621
	.p2align 4,,10
	.p2align 3
.L5:
	mov	rax, rcx
	add	rsi, 4
	mul	rdi
	mov	rax, rcx
	sub	rax, rdx
	shr	rax
	add	rdx, rax
	shr	rdx, 6
	lea	rax, [rdx+rdx*4]
	lea	rax, [rax+rax*4]
	lea	rdx, [rdx+rax*4]
	mov	rax, rcx
	add	rcx, 17
	sub	rax, rdx
	mov	DWORD PTR -4[rsi], eax
	cmp	rcx, 17825815
	jne	.L5
	mov	ecx, 32
	xor	esi, esi
	.p2align 4,,10
	.p2align 3
.L10:
	mov	rdx, rbp
	jmp	.L9
	.p2align 4,,10
	.p2align 3
.L23:
	cmp	eax, 69
	jle	.L7
	sub	rsi, rax
.L8:
	add	rdx, 4
	cmp	rdx, rbx
	je	.L22
.L9:
	movsx	rax, DWORD PTR [rdx]
	cmp	eax, 19
	jg	.L23
	lea	eax, [rax+rax*2]
	add	rdx, 4
	cdqe
	add	rsi, rax
	cmp	rdx, rbx
	jne	.L9
.L22:
	sub	ecx, 1
	jne	.L10
	lea	rdi, _ZSt4cout[rip]
.LEHB1:
	call	_ZNSo9_M_insertIxEERSoT_@PLT
	mov	rdi, rax
	mov	rax, QWORD PTR [rax]
	mov	BYTE PTR 15[rsp], 10
	mov	rax, QWORD PTR -24[rax]
	cmp	QWORD PTR 16[rdi+rax], 0
	jne	.L24
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.L12:
	lea	rdi, 16[rsp]
	call	_ZNSt6vectorIiSaIiEED1Ev
	mov	rax, QWORD PTR 40[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L25
	add	rsp, 56
	.cfi_remember_state
	.cfi_def_cfa_offset 24
	xor	eax, eax
	pop	rbx
	.cfi_def_cfa_offset 16
	pop	rbp
	.cfi_def_cfa_offset 8
	ret
	.p2align 4,,10
	.p2align 3
.L7:
	.cfi_restore_state
	lea	eax, -7[rax+rax]
	cdqe
	add	rsi, rax
	jmp	.L8
.L24:
	lea	rsi, 15[rsp]
	mov	edx, 1
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.LEHE1:
	jmp	.L12
.L25:
	call	__stack_chk_fail@PLT
.L16:
	endbr64
	mov	rbx, rax
	jmp	.L13
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
	.uleb128 .L16-.LFB2420
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
	.cfi_def_cfa_offset 80
	.cfi_offset 3, -24
	.cfi_offset 6, -16
	lea	rdi, 16[rsp]
	call	_ZNSt6vectorIiSaIiEED1Ev
	mov	rax, QWORD PTR 40[rsp]
	sub	rax, QWORD PTR fs:40
	jne	.L26
	mov	rdi, rbx
.LEHB2:
	call	_Unwind_Resume@PLT
.LEHE2:
.L26:
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
	.uleb128 .LEHB2-.LCOLDB0
	.uleb128 .LEHE2-.LEHB2
	.uleb128 0
	.uleb128 0
.LLSDACSEC2420:
	.section	.text.unlikely
	.section	.text.startup
	.size	main, .-main
	.section	.text.unlikely
	.size	main.cold, .-main.cold
.LCOLDE0:
	.section	.text.startup
.LHOTE0:
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
