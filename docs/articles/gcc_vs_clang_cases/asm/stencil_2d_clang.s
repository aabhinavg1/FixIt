	.text
	.intel_syntax noprefix
	.file	"stencil_2d.cpp"
                                        # Start of file scope inline assembly
	.globl	_ZSt21ios_base_library_initv

                                        # End of file scope inline assembly
	.section	.rodata.cst16,"aM",@progbits,16
	.p2align	4, 0x0                          # -- Begin function main
.LCPI0_0:
	.long	0x3f800000                      # float 1
	.long	0x3f800000                      # float 1
	.long	0x3f800000                      # float 1
	.long	0x3f800000                      # float 1
	.section	.rodata.cst4,"aM",@progbits,4
	.p2align	2, 0x0
.LCPI0_1:
	.long	0x3e000000                      # float 0.125
.LCPI0_2:
	.long	0x3f000000                      # float 0.5
	.text
	.globl	main
	.p2align	4, 0x90
	.type	main,@function
main:                                   # @main
.Lfunc_begin0:
	.cfi_startproc
	.cfi_personality 155, DW.ref.__gxx_personality_v0
	.cfi_lsda 27, .Lexception0
# %bb.0:
	push	rbp
	.cfi_def_cfa_offset 16
	push	r15
	.cfi_def_cfa_offset 24
	push	r14
	.cfi_def_cfa_offset 32
	push	r12
	.cfi_def_cfa_offset 40
	push	rbx
	.cfi_def_cfa_offset 48
	sub	rsp, 16
	.cfi_def_cfa_offset 64
	.cfi_offset rbx, -48
	.cfi_offset r12, -40
	.cfi_offset r14, -32
	.cfi_offset r15, -24
	.cfi_offset rbp, -16
	mov	edi, 4194304
	call	_Znwm@PLT
	mov	r15, rax
	mov	eax, 28
	movapd	xmm0, xmmword ptr [rip + .LCPI0_0] # xmm0 = [1.0E+0,1.0E+0,1.0E+0,1.0E+0]
	.p2align	4, 0x90
.LBB0_1:                                # =>This Inner Loop Header: Depth=1
	movupd	xmmword ptr [r15 + 4*rax - 112], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 96], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 80], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 64], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 48], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 32], xmm0
	movupd	xmmword ptr [r15 + 4*rax - 16], xmm0
	movupd	xmmword ptr [r15 + 4*rax], xmm0
	add	rax, 32
	cmp	rax, 1048604
	jne	.LBB0_1
# %bb.2:
.Ltmp0:
	mov	edi, 4194304
	call	_Znwm@PLT
.Ltmp1:
# %bb.3:
	mov	rbx, rax
	xor	ebp, ebp
	mov	edx, 4194304
	mov	rdi, rax
	xor	esi, esi
	call	memset@PLT
	xorpd	xmm0, xmm0
	movss	xmm1, dword ptr [rip + .LCPI0_1] # xmm1 = [1.25E-1,0.0E+0,0.0E+0,0.0E+0]
	movss	xmm2, dword ptr [rip + .LCPI0_2] # xmm2 = [5.0E-1,0.0E+0,0.0E+0,0.0E+0]
	.p2align	4, 0x90
.LBB0_4:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB0_7 Depth 2
                                        #       Child Loop BB0_8 Depth 3
	mov	r14, rbx
	mov	rbx, r15
	lea	rax, [r15 + 4]
	mov	ecx, 2
	mov	rdx, r14
	.p2align	4, 0x90
.LBB0_7:                                #   Parent Loop BB0_4 Depth=1
                                        # =>  This Loop Header: Depth=2
                                        #       Child Loop BB0_8 Depth 3
	mov	esi, 1025
	.p2align	4, 0x90
.LBB0_8:                                #   Parent Loop BB0_4 Depth=1
                                        #     Parent Loop BB0_7 Depth=2
                                        # =>    This Inner Loop Header: Depth=3
	movss	xmm3, dword ptr [rax + 4*rsi - 8] # xmm3 = mem[0],zero,zero,zero
	addss	xmm3, dword ptr [rax + 4*rsi]
	addss	xmm3, dword ptr [rax + 4*rsi - 4100]
	addss	xmm3, dword ptr [rax + 4*rsi + 4092]
	mulss	xmm3, xmm1
	movss	xmm4, dword ptr [rax + 4*rsi - 4] # xmm4 = mem[0],zero,zero,zero
	mulss	xmm4, xmm2
	addss	xmm4, xmm3
	movss	dword ptr [rdx + 4*rsi], xmm4
	xorps	xmm3, xmm3
	cvtss2sd	xmm3, xmm4
	addsd	xmm0, xmm3
	inc	rsi
	cmp	rsi, 2047
	jne	.LBB0_8
# %bb.6:                                #   in Loop: Header=BB0_7 Depth=2
	inc	rcx
	add	rdx, 4096
	add	rax, 4096
	cmp	rcx, 1024
	jne	.LBB0_7
# %bb.9:                                #   in Loop: Header=BB0_4 Depth=1
	inc	ebp
	mov	r15, r14
	cmp	ebp, 12
	jne	.LBB0_4
# %bb.10:
.Ltmp3:
	mov	rdi, qword ptr [rip + _ZSt4cout@GOTPCREL]
	call	_ZNSo9_M_insertIdEERSoT_@PLT
.Ltmp4:
# %bb.11:
	mov	byte ptr [rsp + 15], 10
	mov	rcx, qword ptr [rax]
	mov	rcx, qword ptr [rcx - 24]
	cmp	qword ptr [rax + rcx + 16], 0
	je	.LBB0_13
# %bb.12:
.Ltmp5:
	lea	rsi, [rsp + 15]
	mov	edx, 1
	mov	rdi, rax
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.Ltmp6:
	jmp	.LBB0_14
.LBB0_13:
.Ltmp7:
	mov	rdi, rax
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.Ltmp8:
.LBB0_14:
	mov	rdi, rbx
	call	_ZdlPv@PLT
	mov	rdi, r14
	call	_ZdlPv@PLT
	xor	eax, eax
	add	rsp, 16
	.cfi_def_cfa_offset 48
	pop	rbx
	.cfi_def_cfa_offset 40
	pop	r12
	.cfi_def_cfa_offset 32
	pop	r14
	.cfi_def_cfa_offset 24
	pop	r15
	.cfi_def_cfa_offset 16
	pop	rbp
	.cfi_def_cfa_offset 8
	ret
.LBB0_5:
	.cfi_def_cfa_offset 64
.Ltmp2:
	mov	r12, rax
	mov	r14, r15
	mov	rdi, r14
	call	_ZdlPv@PLT
	mov	rdi, r12
	call	_Unwind_Resume@PLT
.LBB0_15:
.Ltmp9:
	mov	r12, rax
	mov	rdi, rbx
	call	_ZdlPv@PLT
	mov	rdi, r14
	call	_ZdlPv@PLT
	mov	rdi, r12
	call	_Unwind_Resume@PLT
.Lfunc_end0:
	.size	main, .Lfunc_end0-main
	.cfi_endproc
	.section	.gcc_except_table,"a",@progbits
	.p2align	2, 0x0
GCC_except_table0:
.Lexception0:
	.byte	255                             # @LPStart Encoding = omit
	.byte	255                             # @TType Encoding = omit
	.byte	1                               # Call site Encoding = uleb128
	.uleb128 .Lcst_end0-.Lcst_begin0
.Lcst_begin0:
	.uleb128 .Lfunc_begin0-.Lfunc_begin0    # >> Call Site 1 <<
	.uleb128 .Ltmp0-.Lfunc_begin0           #   Call between .Lfunc_begin0 and .Ltmp0
	.byte	0                               #     has no landing pad
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp0-.Lfunc_begin0           # >> Call Site 2 <<
	.uleb128 .Ltmp1-.Ltmp0                  #   Call between .Ltmp0 and .Ltmp1
	.uleb128 .Ltmp2-.Lfunc_begin0           #     jumps to .Ltmp2
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp1-.Lfunc_begin0           # >> Call Site 3 <<
	.uleb128 .Ltmp3-.Ltmp1                  #   Call between .Ltmp1 and .Ltmp3
	.byte	0                               #     has no landing pad
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp3-.Lfunc_begin0           # >> Call Site 4 <<
	.uleb128 .Ltmp8-.Ltmp3                  #   Call between .Ltmp3 and .Ltmp8
	.uleb128 .Ltmp9-.Lfunc_begin0           #     jumps to .Ltmp9
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp8-.Lfunc_begin0           # >> Call Site 5 <<
	.uleb128 .Lfunc_end0-.Ltmp8             #   Call between .Ltmp8 and .Lfunc_end0
	.byte	0                               #     has no landing pad
	.byte	0                               #   On action: cleanup
.Lcst_end0:
	.p2align	2, 0x0
                                        # -- End function
	.hidden	DW.ref.__gxx_personality_v0
	.weak	DW.ref.__gxx_personality_v0
	.section	.data.DW.ref.__gxx_personality_v0,"awG",@progbits,DW.ref.__gxx_personality_v0,comdat
	.p2align	3, 0x0
	.type	DW.ref.__gxx_personality_v0,@object
	.size	DW.ref.__gxx_personality_v0, 8
DW.ref.__gxx_personality_v0:
	.quad	__gxx_personality_v0
	.ident	"Ubuntu clang version 18.1.3 (1ubuntu1)"
	.section	".note.GNU-stack","",@progbits
	.addrsig
	.addrsig_sym __gxx_personality_v0
	.addrsig_sym _Unwind_Resume
	.addrsig_sym _ZSt4cout
