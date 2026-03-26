	.text
	.intel_syntax noprefix
	.file	"branch_threshold.cpp"
                                        # Start of file scope inline assembly
	.globl	_ZSt21ios_base_library_initv

                                        # End of file scope inline assembly
	.section	.rodata.cst16,"aM",@progbits,16
	.p2align	4, 0x0                          # -- Begin function main
.LCPI0_0:
	.long	0                               # 0x0
	.long	1                               # 0x1
	.long	2                               # 0x2
	.long	3                               # 0x3
.LCPI0_1:
	.long	23                              # 0x17
	.long	23                              # 0x17
	.long	23                              # 0x17
	.long	23                              # 0x17
.LCPI0_2:
	.long	91                              # 0x5b
	.long	91                              # 0x5b
	.long	91                              # 0x5b
	.long	91                              # 0x5b
.LCPI0_3:
	.long	1148159575                      # 0x446f8657
	.long	1148159575                      # 0x446f8657
	.long	1148159575                      # 0x446f8657
	.long	1148159575                      # 0x446f8657
.LCPI0_4:
	.long	101                             # 0x65
	.long	101                             # 0x65
	.long	101                             # 0x65
	.long	101                             # 0x65
.LCPI0_5:
	.long	8                               # 0x8
	.long	8                               # 0x8
	.long	8                               # 0x8
	.long	8                               # 0x8
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
	push	r14
	.cfi_def_cfa_offset 16
	push	rbx
	.cfi_def_cfa_offset 24
	push	rax
	.cfi_def_cfa_offset 32
	.cfi_offset rbx, -24
	.cfi_offset r14, -16
	mov	edi, 4194304
	call	_Znwm@PLT
	mov	rbx, rax
	xor	r14d, r14d
	mov	edx, 4194304
	mov	rdi, rax
	xor	esi, esi
	call	memset@PLT
	movdqa	xmm0, xmmword ptr [rip + .LCPI0_0] # xmm0 = [0,1,2,3]
	movdqa	xmm1, xmmword ptr [rip + .LCPI0_1] # xmm1 = [23,23,23,23]
	movdqa	xmm2, xmmword ptr [rip + .LCPI0_2] # xmm2 = [91,91,91,91]
	movdqa	xmm3, xmmword ptr [rip + .LCPI0_3] # xmm3 = [1148159575,1148159575,1148159575,1148159575]
	movdqa	xmm4, xmmword ptr [rip + .LCPI0_4] # xmm4 = [101,101,101,101]
	movdqa	xmm5, xmmword ptr [rip + .LCPI0_5] # xmm5 = [8,8,8,8]
	.p2align	4, 0x90
.LBB0_1:                                # =>This Inner Loop Header: Depth=1
	movdqa	xmm6, xmm0
	pslld	xmm6, 4
	paddd	xmm6, xmm0
	movdqa	xmm7, xmm6
	paddd	xmm7, xmm1
	paddd	xmm6, xmm2
	movdqa	xmm8, xmm7
	pmuludq	xmm8, xmm3
	pshufd	xmm8, xmm8, 237                 # xmm8 = xmm8[1,3,2,3]
	pshufd	xmm9, xmm7, 245                 # xmm9 = xmm7[1,1,3,3]
	pmuludq	xmm9, xmm3
	pshufd	xmm9, xmm9, 237                 # xmm9 = xmm9[1,3,2,3]
	punpckldq	xmm8, xmm9              # xmm8 = xmm8[0],xmm9[0],xmm8[1],xmm9[1]
	movdqa	xmm9, xmm7
	psubd	xmm9, xmm8
	psrld	xmm9, 1
	paddd	xmm9, xmm8
	psrld	xmm9, 6
	pshufd	xmm8, xmm9, 245                 # xmm8 = xmm9[1,1,3,3]
	pmuludq	xmm9, xmm4
	pshufd	xmm9, xmm9, 232                 # xmm9 = xmm9[0,2,2,3]
	pmuludq	xmm8, xmm4
	pshufd	xmm8, xmm8, 232                 # xmm8 = xmm8[0,2,2,3]
	punpckldq	xmm9, xmm8              # xmm9 = xmm9[0],xmm8[0],xmm9[1],xmm8[1]
	psubd	xmm7, xmm9
	movdqa	xmm8, xmm6
	pmuludq	xmm8, xmm3
	pshufd	xmm8, xmm8, 237                 # xmm8 = xmm8[1,3,2,3]
	pshufd	xmm9, xmm6, 245                 # xmm9 = xmm6[1,1,3,3]
	pmuludq	xmm9, xmm3
	pshufd	xmm9, xmm9, 237                 # xmm9 = xmm9[1,3,2,3]
	punpckldq	xmm8, xmm9              # xmm8 = xmm8[0],xmm9[0],xmm8[1],xmm9[1]
	movdqa	xmm9, xmm6
	psubd	xmm9, xmm8
	psrld	xmm9, 1
	paddd	xmm9, xmm8
	psrld	xmm9, 6
	pshufd	xmm8, xmm9, 245                 # xmm8 = xmm9[1,1,3,3]
	pmuludq	xmm9, xmm4
	pshufd	xmm9, xmm9, 232                 # xmm9 = xmm9[0,2,2,3]
	pmuludq	xmm8, xmm4
	pshufd	xmm8, xmm8, 232                 # xmm8 = xmm8[0,2,2,3]
	punpckldq	xmm9, xmm8              # xmm9 = xmm9[0],xmm8[0],xmm9[1],xmm8[1]
	psubd	xmm6, xmm9
	movdqu	xmmword ptr [rbx + 4*r14], xmm7
	movdqu	xmmword ptr [rbx + 4*r14 + 16], xmm6
	add	r14, 8
	paddd	xmm0, xmm5
	cmp	r14, 1048576
	jne	.LBB0_1
# %bb.2:
	xor	eax, eax
	xor	esi, esi
	jmp	.LBB0_4
	.p2align	4, 0x90
.LBB0_3:                                #   in Loop: Header=BB0_4 Depth=1
	inc	eax
	cmp	eax, 32
	je	.LBB0_12
.LBB0_4:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB0_8 Depth 2
	xor	ecx, ecx
	jmp	.LBB0_8
	.p2align	4, 0x90
.LBB0_5:                                #   in Loop: Header=BB0_8 Depth=2
	lea	rdx, [rdx + 2*rdx]
.LBB0_6:                                #   in Loop: Header=BB0_8 Depth=2
	add	rsi, rdx
	add	rcx, 4
	cmp	rcx, 4194304
	je	.LBB0_3
.LBB0_8:                                #   Parent Loop BB0_4 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	movsxd	rdx, dword ptr [rbx + rcx]
	cmp	rdx, 19
	jle	.LBB0_5
# %bb.9:                                #   in Loop: Header=BB0_8 Depth=2
	mov	edi, edx
	cmp	edi, 69
	ja	.LBB0_11
# %bb.10:                               #   in Loop: Header=BB0_8 Depth=2
	lea	edx, [2*rdx - 7]
	jmp	.LBB0_6
	.p2align	4, 0x90
.LBB0_11:                               #   in Loop: Header=BB0_8 Depth=2
	sub	rsi, rdi
	add	rcx, 4
	cmp	rcx, 4194304
	jne	.LBB0_8
	jmp	.LBB0_3
.LBB0_12:
.Ltmp0:
	mov	rdi, qword ptr [rip + _ZSt4cout@GOTPCREL]
	call	_ZNSo9_M_insertIxEERSoT_@PLT
.Ltmp1:
# %bb.13:
	mov	byte ptr [rsp + 7], 10
	mov	rcx, qword ptr [rax]
	mov	rcx, qword ptr [rcx - 24]
	cmp	qword ptr [rax + rcx + 16], 0
	je	.LBB0_15
# %bb.14:
.Ltmp2:
	lea	rsi, [rsp + 7]
	mov	edx, 1
	mov	rdi, rax
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.Ltmp3:
	jmp	.LBB0_16
.LBB0_15:
.Ltmp4:
	mov	rdi, rax
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.Ltmp5:
.LBB0_16:
	mov	rdi, rbx
	call	_ZdlPv@PLT
	xor	eax, eax
	add	rsp, 8
	.cfi_def_cfa_offset 24
	pop	rbx
	.cfi_def_cfa_offset 16
	pop	r14
	.cfi_def_cfa_offset 8
	ret
.LBB0_17:
	.cfi_def_cfa_offset 32
.Ltmp6:
	mov	r14, rax
	mov	rdi, rbx
	call	_ZdlPv@PLT
	mov	rdi, r14
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
	.uleb128 .Ltmp5-.Ltmp0                  #   Call between .Ltmp0 and .Ltmp5
	.uleb128 .Ltmp6-.Lfunc_begin0           #     jumps to .Ltmp6
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp5-.Lfunc_begin0           # >> Call Site 3 <<
	.uleb128 .Lfunc_end0-.Ltmp5             #   Call between .Ltmp5 and .Lfunc_end0
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
