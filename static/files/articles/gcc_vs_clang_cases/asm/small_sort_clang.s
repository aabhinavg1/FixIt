	.text
	.intel_syntax noprefix
	.file	"small_sort.cpp"
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
	.long	12996205                        # 0xc64e6d
	.long	12996205                        # 0xc64e6d
	.long	12996205                        # 0xc64e6d
	.long	12996205                        # 0xc64e6d
.LCPI0_2:
	.long	12345                           # 0x3039
	.long	12345                           # 0x3039
	.long	12345                           # 0x3039
	.long	12345                           # 0x3039
.LCPI0_3:
	.long	1665517                         # 0x1969ed
	.long	1665517                         # 0x1969ed
	.long	1665517                         # 0x1969ed
	.long	1665517                         # 0x1969ed
.LCPI0_4:
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	0                               # 0x0
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	0                               # 0x0
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	0                               # 0x0
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	255                             # 0xff
	.byte	0                               # 0x0
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
	push	rbp
	.cfi_def_cfa_offset 16
	push	r15
	.cfi_def_cfa_offset 24
	push	r14
	.cfi_def_cfa_offset 32
	push	r13
	.cfi_def_cfa_offset 40
	push	r12
	.cfi_def_cfa_offset 48
	push	rbx
	.cfi_def_cfa_offset 56
	sub	rsp, 104
	.cfi_def_cfa_offset 160
	.cfi_offset rbx, -56
	.cfi_offset r12, -48
	.cfi_offset r13, -40
	.cfi_offset r14, -32
	.cfi_offset r15, -24
	.cfi_offset rbp, -16
	mov	edi, 1048576
	call	_Znwm@PLT
	mov	r12, rax
	mov	rbx, rax
	xor	r14d, r14d
	mov	edx, 1048576
	mov	rdi, rax
	xor	esi, esi
	call	memset@PLT
	movdqa	xmm0, xmmword ptr [rip + .LCPI0_0] # xmm0 = [0,1,2,3]
	movdqa	xmm1, xmmword ptr [rip + .LCPI0_1] # xmm1 = [12996205,12996205,12996205,12996205]
	movdqa	xmm2, xmmword ptr [rip + .LCPI0_2] # xmm2 = [12345,12345,12345,12345]
	movdqa	xmm3, xmmword ptr [rip + .LCPI0_3] # xmm3 = [1665517,1665517,1665517,1665517]
	movdqa	xmm4, xmmword ptr [rip + .LCPI0_4] # xmm4 = [255,255,255,0,255,255,255,0,255,255,255,0,255,255,255,0]
	movdqa	xmm5, xmmword ptr [rip + .LCPI0_5] # xmm5 = [8,8,8,8]
	.p2align	4, 0x90
.LBB0_1:                                # =>This Inner Loop Header: Depth=1
	movdqa	xmm6, xmm0
	pmuludq	xmm6, xmm1
	pshufd	xmm6, xmm6, 232                 # xmm6 = xmm6[0,2,2,3]
	pshufd	xmm7, xmm0, 245                 # xmm7 = xmm0[1,1,3,3]
	pmuludq	xmm7, xmm1
	pshufd	xmm7, xmm7, 232                 # xmm7 = xmm7[0,2,2,3]
	punpckldq	xmm6, xmm7              # xmm6 = xmm6[0],xmm7[0],xmm6[1],xmm7[1]
	movdqa	xmm7, xmm6
	paddd	xmm7, xmm2
	paddd	xmm6, xmm3
	pand	xmm7, xmm4
	pand	xmm6, xmm4
	movdqu	xmmword ptr [rbx + 4*r14], xmm7
	movdqu	xmmword ptr [rbx + 4*r14 + 16], xmm6
	add	r14, 8
	paddd	xmm0, xmm5
	cmp	r14, 262144
	jne	.LBB0_1
# %bb.2:
	lea	r15, [r12 + 1048576]
.Ltmp0:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp1:
# %bb.3:
.Ltmp2:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp3:
# %bb.4:
	add	r12, 4096
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 68], eax       # 4-byte Spill
	mov	eax, dword ptr [rbx + 524288]
	mov	qword ptr [rsp + 96], rax       # 8-byte Spill
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 64], eax       # 4-byte Spill
.Ltmp4:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp5:
# %bb.5:
.Ltmp6:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp7:
# %bb.6:
.Ltmp8:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp9:
# %bb.7:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 60], eax       # 4-byte Spill
	mov	eax, dword ptr [rbx + 524288]
	mov	qword ptr [rsp + 88], rax       # 8-byte Spill
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 56], eax       # 4-byte Spill
.Ltmp10:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp11:
# %bb.8:
.Ltmp12:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp13:
# %bb.9:
.Ltmp14:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp15:
# %bb.10:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 52], eax       # 4-byte Spill
	mov	eax, dword ptr [rbx + 524288]
	mov	qword ptr [rsp + 80], rax       # 8-byte Spill
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 48], eax       # 4-byte Spill
.Ltmp16:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp17:
# %bb.11:
.Ltmp18:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp19:
# %bb.12:
.Ltmp20:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp21:
# %bb.13:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 44], eax       # 4-byte Spill
	mov	eax, dword ptr [rbx + 524288]
	mov	qword ptr [rsp + 72], rax       # 8-byte Spill
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 40], eax       # 4-byte Spill
.Ltmp22:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp23:
# %bb.14:
.Ltmp24:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp25:
# %bb.15:
.Ltmp26:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp27:
# %bb.16:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 36], eax       # 4-byte Spill
	mov	r13d, dword ptr [rbx + 524288]
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 32], eax       # 4-byte Spill
.Ltmp28:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp29:
# %bb.17:
.Ltmp30:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp31:
# %bb.18:
.Ltmp32:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp33:
# %bb.19:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 28], eax       # 4-byte Spill
	mov	ebp, dword ptr [rbx + 524288]
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 24], eax       # 4-byte Spill
.Ltmp34:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp35:
# %bb.20:
.Ltmp36:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp37:
# %bb.21:
.Ltmp38:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp39:
# %bb.22:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 20], eax       # 4-byte Spill
	mov	r14d, dword ptr [rbx + 524288]
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 16], eax       # 4-byte Spill
.Ltmp40:
	mov	rdi, rbx
	mov	rsi, r12
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp41:
# %bb.23:
.Ltmp42:
	mov	edx, 36
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
.Ltmp43:
# %bb.24:
.Ltmp44:
	mov	rdi, rbx
	mov	rsi, r15
	call	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
.Ltmp45:
# %bb.25:
	mov	eax, dword ptr [rbx + 349524]
	mov	dword ptr [rsp + 12], eax       # 4-byte Spill
	mov	rsi, r12
	mov	r12d, dword ptr [rbx + 524288]
	mov	eax, dword ptr [rbx + 699048]
	mov	dword ptr [rsp + 8], eax        # 4-byte Spill
.Ltmp47:
	mov	rdi, rbx
	mov	rdx, r15
	call	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
.Ltmp48:
# %bb.26:
	mov	rax, qword ptr [rsp + 96]       # 8-byte Reload
	add	eax, dword ptr [rsp + 68]       # 4-byte Folded Reload
	add	eax, dword ptr [rsp + 64]       # 4-byte Folded Reload
	mov	rcx, qword ptr [rsp + 88]       # 8-byte Reload
	add	ecx, dword ptr [rsp + 60]       # 4-byte Folded Reload
	add	ecx, dword ptr [rsp + 56]       # 4-byte Folded Reload
	add	rcx, rax
	mov	rax, qword ptr [rsp + 80]       # 8-byte Reload
	add	eax, dword ptr [rsp + 52]       # 4-byte Folded Reload
	add	eax, dword ptr [rsp + 48]       # 4-byte Folded Reload
	add	rax, rcx
	mov	rcx, qword ptr [rsp + 72]       # 8-byte Reload
	add	ecx, dword ptr [rsp + 44]       # 4-byte Folded Reload
	add	ecx, dword ptr [rsp + 40]       # 4-byte Folded Reload
	add	rcx, rax
	add	r13d, dword ptr [rsp + 36]      # 4-byte Folded Reload
	add	r13d, dword ptr [rsp + 32]      # 4-byte Folded Reload
	add	r13, rcx
	add	ebp, dword ptr [rsp + 28]       # 4-byte Folded Reload
	add	ebp, dword ptr [rsp + 24]       # 4-byte Folded Reload
	add	rbp, r13
	add	r14d, dword ptr [rsp + 20]      # 4-byte Folded Reload
	add	r14d, dword ptr [rsp + 16]      # 4-byte Folded Reload
	add	r14, rbp
	add	r12d, dword ptr [rsp + 12]      # 4-byte Folded Reload
	add	r12d, dword ptr [rsp + 8]       # 4-byte Folded Reload
	add	r12, r14
.Ltmp50:
	mov	rdi, qword ptr [rip + _ZSt4cout@GOTPCREL]
	mov	rsi, r12
	call	_ZNSo9_M_insertImEERSoT_@PLT
.Ltmp51:
# %bb.27:
	mov	byte ptr [rsp + 7], 10
	mov	rcx, qword ptr [rax]
	mov	rcx, qword ptr [rcx - 24]
	cmp	qword ptr [rax + rcx + 16], 0
	je	.LBB0_31
# %bb.28:
.Ltmp52:
	lea	rsi, [rsp + 7]
	mov	edx, 1
	mov	rdi, rax
	call	_ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_PKS3_l@PLT
.Ltmp53:
	jmp	.LBB0_32
.LBB0_31:
.Ltmp54:
	mov	rdi, rax
	mov	esi, 10
	call	_ZNSo3putEc@PLT
.Ltmp55:
.LBB0_32:
	mov	rdi, rbx
	call	_ZdlPv@PLT
	xor	eax, eax
	add	rsp, 104
	.cfi_def_cfa_offset 56
	pop	rbx
	.cfi_def_cfa_offset 48
	pop	r12
	.cfi_def_cfa_offset 40
	pop	r13
	.cfi_def_cfa_offset 32
	pop	r14
	.cfi_def_cfa_offset 24
	pop	r15
	.cfi_def_cfa_offset 16
	pop	rbp
	.cfi_def_cfa_offset 8
	ret
.LBB0_33:
	.cfi_def_cfa_offset 160
.Ltmp56:
	jmp	.LBB0_34
.LBB0_30:
.Ltmp49:
	jmp	.LBB0_34
.LBB0_29:
.Ltmp46:
.LBB0_34:
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
	.uleb128 .Ltmp3-.Ltmp0                  #   Call between .Ltmp0 and .Ltmp3
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp4-.Lfunc_begin0           # >> Call Site 3 <<
	.uleb128 .Ltmp5-.Ltmp4                  #   Call between .Ltmp4 and .Ltmp5
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp6-.Lfunc_begin0           # >> Call Site 4 <<
	.uleb128 .Ltmp9-.Ltmp6                  #   Call between .Ltmp6 and .Ltmp9
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp10-.Lfunc_begin0          # >> Call Site 5 <<
	.uleb128 .Ltmp11-.Ltmp10                #   Call between .Ltmp10 and .Ltmp11
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp12-.Lfunc_begin0          # >> Call Site 6 <<
	.uleb128 .Ltmp15-.Ltmp12                #   Call between .Ltmp12 and .Ltmp15
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp16-.Lfunc_begin0          # >> Call Site 7 <<
	.uleb128 .Ltmp17-.Ltmp16                #   Call between .Ltmp16 and .Ltmp17
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp18-.Lfunc_begin0          # >> Call Site 8 <<
	.uleb128 .Ltmp21-.Ltmp18                #   Call between .Ltmp18 and .Ltmp21
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp22-.Lfunc_begin0          # >> Call Site 9 <<
	.uleb128 .Ltmp23-.Ltmp22                #   Call between .Ltmp22 and .Ltmp23
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp24-.Lfunc_begin0          # >> Call Site 10 <<
	.uleb128 .Ltmp27-.Ltmp24                #   Call between .Ltmp24 and .Ltmp27
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp28-.Lfunc_begin0          # >> Call Site 11 <<
	.uleb128 .Ltmp29-.Ltmp28                #   Call between .Ltmp28 and .Ltmp29
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp30-.Lfunc_begin0          # >> Call Site 12 <<
	.uleb128 .Ltmp33-.Ltmp30                #   Call between .Ltmp30 and .Ltmp33
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp34-.Lfunc_begin0          # >> Call Site 13 <<
	.uleb128 .Ltmp35-.Ltmp34                #   Call between .Ltmp34 and .Ltmp35
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp36-.Lfunc_begin0          # >> Call Site 14 <<
	.uleb128 .Ltmp39-.Ltmp36                #   Call between .Ltmp36 and .Ltmp39
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp40-.Lfunc_begin0          # >> Call Site 15 <<
	.uleb128 .Ltmp41-.Ltmp40                #   Call between .Ltmp40 and .Ltmp41
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp42-.Lfunc_begin0          # >> Call Site 16 <<
	.uleb128 .Ltmp45-.Ltmp42                #   Call between .Ltmp42 and .Ltmp45
	.uleb128 .Ltmp46-.Lfunc_begin0          #     jumps to .Ltmp46
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp47-.Lfunc_begin0          # >> Call Site 17 <<
	.uleb128 .Ltmp48-.Ltmp47                #   Call between .Ltmp47 and .Ltmp48
	.uleb128 .Ltmp49-.Lfunc_begin0          #     jumps to .Ltmp49
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp50-.Lfunc_begin0          # >> Call Site 18 <<
	.uleb128 .Ltmp55-.Ltmp50                #   Call between .Ltmp50 and .Ltmp55
	.uleb128 .Ltmp56-.Lfunc_begin0          #     jumps to .Ltmp56
	.byte	0                               #   On action: cleanup
	.uleb128 .Ltmp55-.Lfunc_begin0          # >> Call Site 19 <<
	.uleb128 .Lfunc_end0-.Ltmp55            #   Call between .Ltmp55 and .Lfunc_end0
	.byte	0                               #     has no landing pad
	.byte	0                               #   On action: cleanup
.Lcst_end0:
	.p2align	2, 0x0
                                        # -- End function
	.section	.text._ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_,"axG",@progbits,_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_,comdat
	.weak	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_ # -- Begin function _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
	.p2align	4, 0x90
	.type	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_,@function
_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_: # @_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
	.cfi_startproc
# %bb.0:
	push	rbp
	.cfi_def_cfa_offset 16
	push	r15
	.cfi_def_cfa_offset 24
	push	r14
	.cfi_def_cfa_offset 32
	push	r13
	.cfi_def_cfa_offset 40
	push	r12
	.cfi_def_cfa_offset 48
	push	rbx
	.cfi_def_cfa_offset 56
	push	rax
	.cfi_def_cfa_offset 64
	.cfi_offset rbx, -56
	.cfi_offset r12, -48
	.cfi_offset r13, -40
	.cfi_offset r14, -32
	.cfi_offset r15, -24
	.cfi_offset rbp, -16
	mov	rbp, rsi
	sub	rbp, rdi
	sar	rbp, 2
	cmp	rbp, 17
	jl	.LBB1_38
# %bb.1:
	mov	r14, rdx
	mov	rbx, rdi
	lea	r12, [rdi + 4]
	mov	r13, -4
	sub	r13, rdi
	jmp	.LBB1_2
	.p2align	4, 0x90
.LBB1_37:                               #   in Loop: Header=BB1_2 Depth=1
	mov	rdi, r15
	mov	rdx, r14
	call	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
	sar	rbp, 2
	mov	rsi, r15
	cmp	rbp, 16
	jle	.LBB1_38
.LBB1_2:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB1_31 Depth 2
                                        #       Child Loop BB1_32 Depth 3
                                        #       Child Loop BB1_34 Depth 3
	sub	r14, 1
	jb	.LBB1_3
# %bb.19:                               #   in Loop: Header=BB1_2 Depth=1
	shr	rbp
	mov	ecx, dword ptr [rbx + 4]
	mov	edx, dword ptr [rbx + 4*rbp]
	mov	eax, dword ptr [rsi - 4]
	cmp	ecx, edx
	jae	.LBB1_25
# %bb.20:                               #   in Loop: Header=BB1_2 Depth=1
	cmp	edx, eax
	jae	.LBB1_22
# %bb.21:                               #   in Loop: Header=BB1_2 Depth=1
	mov	eax, dword ptr [rbx]
	mov	dword ptr [rbx], edx
	mov	dword ptr [rbx + 4*rbp], eax
	jmp	.LBB1_30
	.p2align	4, 0x90
.LBB1_25:                               #   in Loop: Header=BB1_2 Depth=1
	cmp	ecx, eax
	jae	.LBB1_27
# %bb.26:                               #   in Loop: Header=BB1_2 Depth=1
	mov	eax, dword ptr [rbx]
	mov	dword ptr [rbx], ecx
	mov	dword ptr [rbx + 4], eax
	jmp	.LBB1_30
	.p2align	4, 0x90
.LBB1_22:                               #   in Loop: Header=BB1_2 Depth=1
	mov	edx, dword ptr [rbx]
	cmp	ecx, eax
	jae	.LBB1_24
# %bb.23:                               #   in Loop: Header=BB1_2 Depth=1
	mov	dword ptr [rbx], eax
	mov	dword ptr [rsi - 4], edx
	jmp	.LBB1_30
	.p2align	4, 0x90
.LBB1_27:                               #   in Loop: Header=BB1_2 Depth=1
	mov	ecx, dword ptr [rbx]
	cmp	edx, eax
	jae	.LBB1_29
# %bb.28:                               #   in Loop: Header=BB1_2 Depth=1
	mov	dword ptr [rbx], eax
	mov	dword ptr [rsi - 4], ecx
	jmp	.LBB1_30
.LBB1_24:                               #   in Loop: Header=BB1_2 Depth=1
	mov	dword ptr [rbx], ecx
	mov	dword ptr [rbx + 4], edx
	jmp	.LBB1_30
.LBB1_29:                               #   in Loop: Header=BB1_2 Depth=1
	mov	dword ptr [rbx], edx
	mov	dword ptr [rbx + 4*rbp], ecx
	.p2align	4, 0x90
.LBB1_30:                               #   in Loop: Header=BB1_2 Depth=1
	mov	rax, r12
	mov	rcx, rsi
	.p2align	4, 0x90
.LBB1_31:                               #   Parent Loop BB1_2 Depth=1
                                        # =>  This Loop Header: Depth=2
                                        #       Child Loop BB1_32 Depth 3
                                        #       Child Loop BB1_34 Depth 3
	mov	edx, dword ptr [rbx]
	lea	rbp, [rax + r13]
	.p2align	4, 0x90
.LBB1_32:                               #   Parent Loop BB1_2 Depth=1
                                        #     Parent Loop BB1_31 Depth=2
                                        # =>    This Inner Loop Header: Depth=3
	mov	edi, dword ptr [rax]
	add	rax, 4
	add	rbp, 4
	cmp	edi, edx
	jb	.LBB1_32
# %bb.33:                               #   in Loop: Header=BB1_31 Depth=2
	lea	r15, [rax - 4]
	.p2align	4, 0x90
.LBB1_34:                               #   Parent Loop BB1_2 Depth=1
                                        #     Parent Loop BB1_31 Depth=2
                                        # =>    This Inner Loop Header: Depth=3
	mov	r8d, dword ptr [rcx - 4]
	add	rcx, -4
	cmp	edx, r8d
	jb	.LBB1_34
# %bb.35:                               #   in Loop: Header=BB1_31 Depth=2
	cmp	r15, rcx
	jae	.LBB1_37
# %bb.36:                               #   in Loop: Header=BB1_31 Depth=2
	mov	dword ptr [r15], r8d
	mov	dword ptr [rcx], edi
	jmp	.LBB1_31
.LBB1_3:
	lea	rdx, [rsp + 7]
	mov	rdi, rbx
	mov	r14, rsi
	call	_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_
	jmp	.LBB1_4
	.p2align	4, 0x90
.LBB1_17:                               #   in Loop: Header=BB1_4 Depth=1
	xor	edx, edx
.LBB1_18:                               #   in Loop: Header=BB1_4 Depth=1
	mov	dword ptr [rbx + 4*rdx], eax
	cmp	rcx, 4
	jle	.LBB1_38
.LBB1_4:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB1_7 Depth 2
                                        #     Child Loop BB1_15 Depth 2
	mov	eax, dword ptr [r14 - 4]
	mov	edx, dword ptr [rbx]
	mov	dword ptr [r14 - 4], edx
	add	r14, -4
	mov	rcx, r14
	sub	rcx, rbx
	mov	rsi, rcx
	sar	rsi, 2
	cmp	rsi, 3
	jl	.LBB1_5
# %bb.6:                                #   in Loop: Header=BB1_4 Depth=1
	lea	rdx, [rsi - 1]
	shr	rdx, 63
	lea	rdi, [rsi + rdx]
	dec	rdi
	sar	rdi
	xor	r8d, r8d
	jmp	.LBB1_7
	.p2align	4, 0x90
.LBB1_9:                                #   in Loop: Header=BB1_7 Depth=2
	lea	rdx, [2*r8 + 2]
.LBB1_10:                               #   in Loop: Header=BB1_7 Depth=2
	mov	r9d, dword ptr [rbx + 4*rdx]
	mov	dword ptr [rbx + 4*r8], r9d
	mov	r8, rdx
	cmp	rdx, rdi
	jge	.LBB1_11
.LBB1_7:                                #   Parent Loop BB1_4 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	rdx, [r8 + r8]
	mov	r9d, dword ptr [rbx + 4*rdx + 8]
	cmp	r9d, dword ptr [rbx + 4*rdx + 4]
	jae	.LBB1_9
# %bb.8:                                #   in Loop: Header=BB1_7 Depth=2
	lea	rdx, [2*r8 + 1]
	jmp	.LBB1_10
	.p2align	4, 0x90
.LBB1_5:                                #   in Loop: Header=BB1_4 Depth=1
	xor	edx, edx
.LBB1_11:                               #   in Loop: Header=BB1_4 Depth=1
	test	cl, 4
	jne	.LBB1_14
# %bb.12:                               #   in Loop: Header=BB1_4 Depth=1
	add	rsi, -2
	sar	rsi
	cmp	rdx, rsi
	jne	.LBB1_14
# %bb.13:                               #   in Loop: Header=BB1_4 Depth=1
	lea	rsi, [rdx + rdx]
	mov	esi, dword ptr [rbx + 4*rsi + 4]
	mov	dword ptr [rbx + 4*rdx], esi
	lea	rdx, [2*rdx + 1]
.LBB1_14:                               #   in Loop: Header=BB1_4 Depth=1
	test	rdx, rdx
	jle	.LBB1_18
	.p2align	4, 0x90
.LBB1_15:                               #   Parent Loop BB1_4 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	rsi, [rdx - 1]
	mov	rdi, rsi
	shr	rdi
	mov	r8d, dword ptr [rbx + 4*rdi]
	cmp	r8d, eax
	jae	.LBB1_18
# %bb.16:                               #   in Loop: Header=BB1_15 Depth=2
	mov	dword ptr [rbx + 4*rdx], r8d
	mov	rdx, rdi
	cmp	rsi, 1
	ja	.LBB1_15
	jmp	.LBB1_17
.LBB1_38:
	add	rsp, 8
	.cfi_def_cfa_offset 56
	pop	rbx
	.cfi_def_cfa_offset 48
	pop	r12
	.cfi_def_cfa_offset 40
	pop	r13
	.cfi_def_cfa_offset 32
	pop	r14
	.cfi_def_cfa_offset 24
	pop	r15
	.cfi_def_cfa_offset 16
	pop	rbp
	.cfi_def_cfa_offset 8
	ret
.Lfunc_end1:
	.size	_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_, .Lfunc_end1-_ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_
	.cfi_endproc
                                        # -- End function
	.section	.text._ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_,"axG",@progbits,_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_,comdat
	.weak	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_ # -- Begin function _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
	.p2align	4, 0x90
	.type	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_,@function
_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_: # @_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
	.cfi_startproc
# %bb.0:
	push	rbp
	.cfi_def_cfa_offset 16
	push	r15
	.cfi_def_cfa_offset 24
	push	r14
	.cfi_def_cfa_offset 32
	push	r13
	.cfi_def_cfa_offset 40
	push	r12
	.cfi_def_cfa_offset 48
	push	rbx
	.cfi_def_cfa_offset 56
	push	rax
	.cfi_def_cfa_offset 64
	.cfi_offset rbx, -56
	.cfi_offset r12, -48
	.cfi_offset r13, -40
	.cfi_offset r14, -32
	.cfi_offset r15, -24
	.cfi_offset rbp, -16
	mov	rbx, rsi
	mov	r14, rdi
	mov	rax, rsi
	sub	rax, rdi
	cmp	rax, 65
	jl	.LBB2_2
# %bb.1:
	mov	qword ptr [rsp], rbx            # 8-byte Spill
	lea	r15, [r14 + 4]
	mov	r12d, 4
	mov	r13, r15
	mov	rbp, r14
	jmp	.LBB2_18
.LBB2_2:
	cmp	r14, rbx
	je	.LBB2_30
# %bb.3:
	lea	rax, [r14 + 4]
	cmp	rax, rbx
	je	.LBB2_30
# %bb.4:
	mov	r15, r14
	jmp	.LBB2_9
	.p2align	4, 0x90
.LBB2_5:                                #   in Loop: Header=BB2_9 Depth=1
	mov	rdx, r15
	sub	rdx, r14
	mov	rax, rdx
	sar	rax, 2
	cmp	rax, 2
	jl	.LBB2_13
# %bb.6:                                #   in Loop: Header=BB2_9 Depth=1
	shl	rax, 2
	sub	rdi, rax
	add	rdi, 8
	mov	rsi, r14
	call	memmove@PLT
.LBB2_7:                                #   in Loop: Header=BB2_9 Depth=1
	mov	rax, r14
.LBB2_8:                                #   in Loop: Header=BB2_9 Depth=1
	mov	dword ptr [rax], ebp
	lea	rax, [r15 + 4]
	cmp	rax, rbx
	je	.LBB2_30
.LBB2_9:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB2_12 Depth 2
	mov	rdi, r15
	mov	r15, rax
	mov	ebp, dword ptr [rdi + 4]
	mov	ecx, dword ptr [r14]
	cmp	ebp, ecx
	jb	.LBB2_5
# %bb.10:                               #   in Loop: Header=BB2_9 Depth=1
	mov	ecx, dword ptr [rdi]
	mov	rax, r15
	cmp	ebp, ecx
	jae	.LBB2_8
# %bb.11:                               #   in Loop: Header=BB2_9 Depth=1
	mov	rax, r15
	.p2align	4, 0x90
.LBB2_12:                               #   Parent Loop BB2_9 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	dword ptr [rax], ecx
	mov	ecx, dword ptr [rax - 8]
	add	rax, -4
	cmp	ebp, ecx
	jb	.LBB2_12
	jmp	.LBB2_8
.LBB2_13:                               #   in Loop: Header=BB2_9 Depth=1
	mov	rax, r14
	cmp	rdx, 4
	jne	.LBB2_8
# %bb.14:                               #   in Loop: Header=BB2_9 Depth=1
	mov	dword ptr [rdi + 4], ecx
	jmp	.LBB2_7
.LBB2_15:                               #   in Loop: Header=BB2_18 Depth=1
	mov	dword ptr [rax + 4], ecx
	.p2align	4, 0x90
.LBB2_16:                               #   in Loop: Header=BB2_18 Depth=1
	mov	rax, r14
.LBB2_17:                               #   in Loop: Header=BB2_18 Depth=1
	mov	dword ptr [rax], ebx
	add	r12, 4
	add	r13, 4
	cmp	r12, 64
	je	.LBB2_24
.LBB2_18:                               # =>This Loop Header: Depth=1
                                        #     Child Loop BB2_23 Depth 2
	mov	rax, rbp
	lea	rbp, [r14 + r12]
	mov	ebx, dword ptr [r14 + r12]
	mov	ecx, dword ptr [r14]
	cmp	ebx, ecx
	jae	.LBB2_21
# %bb.19:                               #   in Loop: Header=BB2_18 Depth=1
	cmp	r12, 5
	jb	.LBB2_15
# %bb.20:                               #   in Loop: Header=BB2_18 Depth=1
	mov	rdi, r15
	mov	rsi, r14
	mov	rdx, r12
	call	memmove@PLT
	jmp	.LBB2_16
	.p2align	4, 0x90
.LBB2_21:                               #   in Loop: Header=BB2_18 Depth=1
	mov	ecx, dword ptr [rax]
	mov	rax, rbp
	cmp	ebx, ecx
	jae	.LBB2_17
# %bb.22:                               #   in Loop: Header=BB2_18 Depth=1
	mov	rax, r13
	.p2align	4, 0x90
.LBB2_23:                               #   Parent Loop BB2_18 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	dword ptr [rax], ecx
	mov	ecx, dword ptr [rax - 8]
	add	rax, -4
	cmp	ebx, ecx
	jb	.LBB2_23
	jmp	.LBB2_17
.LBB2_24:
	add	r14, 64
	mov	rsi, qword ptr [rsp]            # 8-byte Reload
	jmp	.LBB2_26
	.p2align	4, 0x90
.LBB2_25:                               #   in Loop: Header=BB2_26 Depth=1
	mov	dword ptr [rdx], eax
	add	r14, 4
.LBB2_26:                               # =>This Loop Header: Depth=1
                                        #     Child Loop BB2_29 Depth 2
	cmp	r14, rsi
	je	.LBB2_30
# %bb.27:                               #   in Loop: Header=BB2_26 Depth=1
	mov	ecx, dword ptr [r14 - 4]
	mov	eax, dword ptr [r14]
	mov	rdx, r14
	cmp	eax, ecx
	jae	.LBB2_25
# %bb.28:                               #   in Loop: Header=BB2_26 Depth=1
	mov	rdx, r14
	.p2align	4, 0x90
.LBB2_29:                               #   Parent Loop BB2_26 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	dword ptr [rdx], ecx
	mov	ecx, dword ptr [rdx - 8]
	add	rdx, -4
	cmp	eax, ecx
	jb	.LBB2_29
	jmp	.LBB2_25
.LBB2_30:
	add	rsp, 8
	.cfi_def_cfa_offset 56
	pop	rbx
	.cfi_def_cfa_offset 48
	pop	r12
	.cfi_def_cfa_offset 40
	pop	r13
	.cfi_def_cfa_offset 32
	pop	r14
	.cfi_def_cfa_offset 24
	pop	r15
	.cfi_def_cfa_offset 16
	pop	rbp
	.cfi_def_cfa_offset 8
	ret
.Lfunc_end2:
	.size	_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_, .Lfunc_end2-_ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_
	.cfi_endproc
                                        # -- End function
	.section	.text._ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_,"axG",@progbits,_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_,comdat
	.weak	_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_ # -- Begin function _ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_
	.p2align	4, 0x90
	.type	_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_,@function
_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_: # @_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_
	.cfi_startproc
# %bb.0:
	sub	rsi, rdi
	mov	rax, rsi
	sar	rax, 2
	cmp	rax, 2
	jge	.LBB3_2
.LBB3_1:
	ret
.LBB3_2:
	lea	rdx, [rax - 2]
	mov	rcx, rdx
	shr	rcx
	dec	rax
	shr	rax
	test	sil, 4
	jne	.LBB3_20
# %bb.3:
	or	rdx, 1
	mov	rsi, rcx
	jmp	.LBB3_6
	.p2align	4, 0x90
.LBB3_4:                                #   in Loop: Header=BB3_6 Depth=1
	mov	r10, r9
.LBB3_5:                                #   in Loop: Header=BB3_6 Depth=1
	mov	dword ptr [rdi + 4*r10], r8d
	sub	rsi, 1
	jb	.LBB3_1
.LBB3_6:                                # =>This Loop Header: Depth=1
                                        #     Child Loop BB3_10 Depth 2
                                        #     Child Loop BB3_15 Depth 2
	mov	r8d, dword ptr [rdi + 4*rsi]
	mov	r9, rsi
	cmp	rax, rsi
	jle	.LBB3_12
# %bb.7:                                #   in Loop: Header=BB3_6 Depth=1
	mov	r10, rsi
	jmp	.LBB3_10
	.p2align	4, 0x90
.LBB3_8:                                #   in Loop: Header=BB3_10 Depth=2
	lea	r9, [2*r10 + 2]
.LBB3_9:                                #   in Loop: Header=BB3_10 Depth=2
	mov	r11d, dword ptr [rdi + 4*r9]
	mov	dword ptr [rdi + 4*r10], r11d
	mov	r10, r9
	cmp	r9, rax
	jge	.LBB3_12
.LBB3_10:                               #   Parent Loop BB3_6 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	r9, [r10 + r10]
	mov	r11d, dword ptr [rdi + 4*r9 + 8]
	cmp	r11d, dword ptr [rdi + 4*r9 + 4]
	jae	.LBB3_8
# %bb.11:                               #   in Loop: Header=BB3_10 Depth=2
	lea	r9, [2*r10 + 1]
	jmp	.LBB3_9
	.p2align	4, 0x90
.LBB3_12:                               #   in Loop: Header=BB3_6 Depth=1
	cmp	r9, rcx
	jne	.LBB3_14
# %bb.13:                               #   in Loop: Header=BB3_6 Depth=1
	mov	r9d, dword ptr [rdi + 4*rdx]
	mov	dword ptr [rdi + 4*rcx], r9d
	mov	r9, rdx
.LBB3_14:                               #   in Loop: Header=BB3_6 Depth=1
	cmp	r9, rsi
	jle	.LBB3_4
	.p2align	4, 0x90
.LBB3_15:                               #   Parent Loop BB3_6 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	r10, [r9 - 1]
	shr	r10, 63
	add	r10, r9
	dec	r10
	sar	r10
	mov	r11d, dword ptr [rdi + 4*r10]
	cmp	r11d, r8d
	jae	.LBB3_4
# %bb.16:                               #   in Loop: Header=BB3_15 Depth=2
	mov	dword ptr [rdi + 4*r9], r11d
	mov	r9, r10
	cmp	r10, rsi
	jg	.LBB3_15
	jmp	.LBB3_5
	.p2align	4, 0x90
.LBB3_18:                               #   in Loop: Header=BB3_20 Depth=1
	mov	r8, rsi
.LBB3_19:                               #   in Loop: Header=BB3_20 Depth=1
	mov	dword ptr [rdi + 4*r8], edx
	sub	rcx, 1
	jb	.LBB3_1
.LBB3_20:                               # =>This Loop Header: Depth=1
                                        #     Child Loop BB3_24 Depth 2
                                        #     Child Loop BB3_27 Depth 2
	mov	edx, dword ptr [rdi + 4*rcx]
	mov	r8, rcx
	cmp	rax, rcx
	jle	.LBB3_19
# %bb.21:                               #   in Loop: Header=BB3_20 Depth=1
	mov	r8, rcx
	jmp	.LBB3_24
	.p2align	4, 0x90
.LBB3_22:                               #   in Loop: Header=BB3_24 Depth=2
	lea	rsi, [2*r8 + 2]
.LBB3_23:                               #   in Loop: Header=BB3_24 Depth=2
	mov	r9d, dword ptr [rdi + 4*rsi]
	mov	dword ptr [rdi + 4*r8], r9d
	mov	r8, rsi
	cmp	rsi, rax
	jge	.LBB3_26
.LBB3_24:                               #   Parent Loop BB3_20 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	rsi, [r8 + r8]
	mov	r9d, dword ptr [rdi + 4*rsi + 8]
	cmp	r9d, dword ptr [rdi + 4*rsi + 4]
	jae	.LBB3_22
# %bb.25:                               #   in Loop: Header=BB3_24 Depth=2
	lea	rsi, [2*r8 + 1]
	jmp	.LBB3_23
	.p2align	4, 0x90
.LBB3_26:                               #   in Loop: Header=BB3_20 Depth=1
	cmp	rsi, rcx
	jle	.LBB3_18
	.p2align	4, 0x90
.LBB3_27:                               #   Parent Loop BB3_20 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	lea	r8, [rsi - 1]
	shr	r8, 63
	add	r8, rsi
	dec	r8
	sar	r8
	mov	r9d, dword ptr [rdi + 4*r8]
	cmp	r9d, edx
	jae	.LBB3_18
# %bb.28:                               #   in Loop: Header=BB3_27 Depth=2
	mov	dword ptr [rdi + 4*rsi], r9d
	mov	rsi, r8
	cmp	r8, rcx
	jg	.LBB3_27
	jmp	.LBB3_19
.Lfunc_end3:
	.size	_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_, .Lfunc_end3-_ZSt11__make_heapIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_RT0_
	.cfi_endproc
                                        # -- End function
	.section	.text._ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag,"axG",@progbits,_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag,comdat
	.weak	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag # -- Begin function _ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
	.p2align	4, 0x90
	.type	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag,@function
_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag: # @_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
	.cfi_startproc
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
	.cfi_offset rbx, -48
	.cfi_offset r12, -40
	.cfi_offset r14, -32
	.cfi_offset r15, -24
	.cfi_offset rbp, -16
	mov	rax, rdx
	cmp	rdi, rsi
	je	.LBB4_9
# %bb.1:
	mov	rbx, rax
	sub	rbx, rsi
	je	.LBB4_10
# %bb.2:
	sub	rax, rdi
	sar	rax, 2
	mov	rdx, rsi
	sub	rdx, rdi
	mov	rcx, rdx
	sar	rcx
	cmp	rax, rcx
	jne	.LBB4_12
# %bb.3:
	add	rdx, -4
	cmp	rdx, 60
	jb	.LBB4_6
# %bb.4:
	mov	rax, rdx
	and	rax, -4
	lea	rcx, [rsi + rax]
	add	rcx, 4
	cmp	rcx, rdi
	jbe	.LBB4_62
# %bb.5:
	add	rax, rdi
	add	rax, 4
	cmp	rax, rsi
	jbe	.LBB4_62
.LBB4_6:
	mov	rax, rsi
	mov	rcx, rdi
	.p2align	4, 0x90
.LBB4_7:                                # =>This Inner Loop Header: Depth=1
	mov	edx, dword ptr [rcx]
	mov	edi, dword ptr [rax]
	mov	dword ptr [rcx], edi
	mov	dword ptr [rax], edx
	add	rcx, 4
	add	rax, 4
	cmp	rcx, rsi
	jne	.LBB4_7
.LBB4_8:
	mov	rbx, rsi
	jmp	.LBB4_11
.LBB4_9:
	mov	rbx, rax
	jmp	.LBB4_11
.LBB4_10:
	mov	rbx, rdi
.LBB4_11:
	mov	rax, rbx
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
.LBB4_12:
	.cfi_def_cfa_offset 48
	sar	rdx, 2
	movabs	rsi, 9223372036854775800
	add	rbx, rdi
	jmp	.LBB4_14
.LBB4_36:                               #   in Loop: Header=BB4_14 Depth=1
                                        # kill: def $eax killed $eax killed $rax
	xor	edx, edx
	div	r8d
	mov	eax, edx
	test	rax, rax
	je	.LBB4_11
.LBB4_37:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rdx, r8
	sub	rdx, rax
	mov	rdi, rcx
	mov	rax, r8
.LBB4_14:                               # =>This Loop Header: Depth=1
                                        #     Child Loop BB4_53 Depth 2
                                        #     Child Loop BB4_30 Depth 2
                                        #     Child Loop BB4_46 Depth 2
                                        #     Child Loop BB4_50 Depth 2
                                        #     Child Loop BB4_22 Depth 2
	mov	r8, rdx
	mov	r9, rax
	sub	r9, rdx
	cmp	rdx, r9
	jge	.LBB4_24
# %bb.15:                               #   in Loop: Header=BB4_14 Depth=1
	cmp	r8, 1
	je	.LBB4_60
# %bb.16:                               #   in Loop: Header=BB4_14 Depth=1
	test	r9, r9
	jle	.LBB4_32
# %bb.17:                               #   in Loop: Header=BB4_14 Depth=1
	lea	rdx, [rdi + 4*r8]
	cmp	r9, 8
	jb	.LBB4_20
# %bb.18:                               #   in Loop: Header=BB4_14 Depth=1
	lea	rcx, [rdi + 4*rax]
	cmp	rdi, rcx
	jae	.LBB4_49
# %bb.19:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rcx, rax
	sub	rcx, r8
	lea	rcx, [rdi + 4*rcx]
	cmp	rdx, rcx
	jae	.LBB4_49
.LBB4_20:                               #   in Loop: Header=BB4_14 Depth=1
	xor	r10d, r10d
	mov	rcx, rdi
.LBB4_21:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rdi, rax
	sub	rdi, r10
	sub	rdi, r8
	xor	r9d, r9d
	xor	r10d, r10d
	.p2align	4, 0x90
.LBB4_22:                               #   Parent Loop BB4_14 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	r11d, dword ptr [rcx + 4*r10]
	mov	ebp, dword ptr [rdx + 4*r10]
	mov	dword ptr [rcx + 4*r10], ebp
	mov	dword ptr [rdx + 4*r10], r11d
	inc	r10
	add	r9, -4
	cmp	rdi, r10
	jne	.LBB4_22
# %bb.23:                               #   in Loop: Header=BB4_14 Depth=1
	sub	rcx, r9
	jmp	.LBB4_33
	.p2align	4, 0x90
.LBB4_24:                               #   in Loop: Header=BB4_14 Depth=1
	lea	rcx, [rdi + 4*rax]
	cmp	r9, 1
	je	.LBB4_58
# %bb.25:                               #   in Loop: Header=BB4_14 Depth=1
	lea	r10, [4*r9]
	mov	rdx, rcx
	sub	rdx, r10
	test	r8, r8
	jle	.LBB4_35
# %bb.26:                               #   in Loop: Header=BB4_14 Depth=1
	cmp	r8, 32
	jae	.LBB4_38
.LBB4_27:                               #   in Loop: Header=BB4_14 Depth=1
	xor	r10d, r10d
.LBB4_28:                               #   in Loop: Header=BB4_14 Depth=1
	mov	r11, r8
	and	r11, 3
	je	.LBB4_44
# %bb.29:                               #   in Loop: Header=BB4_14 Depth=1
	neg	r11
	xor	r14d, r14d
	.p2align	4, 0x90
.LBB4_30:                               #   Parent Loop BB4_14 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	ebp, dword ptr [rdx - 4]
	mov	r15d, dword ptr [rcx - 4]
	mov	dword ptr [rdx - 4], r15d
	add	rdx, -4
	mov	dword ptr [rcx - 4], ebp
	add	rcx, -4
	dec	r14
	cmp	r11, r14
	jne	.LBB4_30
# %bb.31:                               #   in Loop: Header=BB4_14 Depth=1
	mov	r11, r10
	sub	r11, r14
	sub	r10, r8
	cmp	r10, -4
	jbe	.LBB4_45
	jmp	.LBB4_47
.LBB4_32:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rcx, rdi
.LBB4_33:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rdx, rax
	or	rdx, r8
	shr	rdx, 32
	je	.LBB4_36
# %bb.34:                               #   in Loop: Header=BB4_14 Depth=1
	cqo
	idiv	r8
	mov	rax, rdx
	test	rax, rax
	jne	.LBB4_37
	jmp	.LBB4_11
.LBB4_35:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rdi, rdx
	jmp	.LBB4_47
.LBB4_38:                               #   in Loop: Header=BB4_14 Depth=1
	lea	r11, [rdi + 4*r8]
	add	r11, -4
	lea	r10, [4*r8 - 4]
	mov	r14, r11
	sub	r14, r10
	cmp	r14, r11
	ja	.LBB4_27
# %bb.39:                               #   in Loop: Header=BB4_14 Depth=1
	lea	r11, [rdi + 4*rax]
	add	r11, -4
	mov	r14, r11
	sub	r14, r10
	cmp	r14, r11
	ja	.LBB4_27
# %bb.40:                               #   in Loop: Header=BB4_14 Depth=1
	lea	r10, [r8 - 1]
	shr	r10, 62
	jne	.LBB4_27
# %bb.41:                               #   in Loop: Header=BB4_14 Depth=1
	cmp	rdi, rcx
	jae	.LBB4_52
# %bb.42:                               #   in Loop: Header=BB4_14 Depth=1
	mov	r10, rax
	sub	r10, r8
	lea	r10, [rdi + 4*r10]
	cmp	r10, rdx
	jb	.LBB4_27
.LBB4_52:                               #   in Loop: Header=BB4_14 Depth=1
	lea	r11, [4*r8]
	lea	r14, [4*rax]
	mov	r10, r8
	and	r10, rsi
	lea	r15, [4*r10]
	sub	rcx, r15
	sub	rdx, r15
	add	r11, rdi
	add	r11, -16
	add	r14, rdi
	add	r14, -16
	mov	r15, r10
	neg	r15
	xor	r12d, r12d
	.p2align	4, 0x90
.LBB4_53:                               #   Parent Loop BB4_14 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	movups	xmm0, xmmword ptr [r11 + 4*r12 - 16]
	movups	xmm1, xmmword ptr [r11 + 4*r12]
	movups	xmm2, xmmword ptr [r14 + 4*r12 - 16]
	movups	xmm3, xmmword ptr [r14 + 4*r12]
	movups	xmmword ptr [r11 + 4*r12], xmm3
	movups	xmmword ptr [r11 + 4*r12 - 16], xmm2
	movups	xmmword ptr [r14 + 4*r12], xmm1
	movups	xmmword ptr [r14 + 4*r12 - 16], xmm0
	add	r12, -8
	cmp	r15, r12
	jne	.LBB4_53
# %bb.54:                               #   in Loop: Header=BB4_14 Depth=1
	cmp	r8, r10
	jne	.LBB4_28
	jmp	.LBB4_47
.LBB4_44:                               #   in Loop: Header=BB4_14 Depth=1
	mov	r11, r10
	sub	r10, r8
	cmp	r10, -4
	ja	.LBB4_47
.LBB4_45:                               #   in Loop: Header=BB4_14 Depth=1
	sub	r11, r8
	xor	r8d, r8d
	.p2align	4, 0x90
.LBB4_46:                               #   Parent Loop BB4_14 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	mov	r10d, dword ptr [rdx + 4*r8 - 4]
	mov	ebp, dword ptr [rcx + 4*r8 - 4]
	mov	dword ptr [rdx + 4*r8 - 4], ebp
	mov	dword ptr [rcx + 4*r8 - 4], r10d
	mov	r10d, dword ptr [rdx + 4*r8 - 8]
	mov	ebp, dword ptr [rcx + 4*r8 - 8]
	mov	dword ptr [rdx + 4*r8 - 8], ebp
	mov	dword ptr [rcx + 4*r8 - 8], r10d
	mov	r10d, dword ptr [rdx + 4*r8 - 12]
	mov	ebp, dword ptr [rcx + 4*r8 - 12]
	mov	dword ptr [rdx + 4*r8 - 12], ebp
	mov	dword ptr [rcx + 4*r8 - 12], r10d
	mov	r10d, dword ptr [rdx + 4*r8 - 16]
	mov	ebp, dword ptr [rcx + 4*r8 - 16]
	mov	dword ptr [rdx + 4*r8 - 16], ebp
	mov	dword ptr [rcx + 4*r8 - 16], r10d
	add	r8, -4
	cmp	r11, r8
	jne	.LBB4_46
.LBB4_47:                               #   in Loop: Header=BB4_14 Depth=1
	mov	rcx, rax
	or	rcx, r9
	shr	rcx, 32
	je	.LBB4_13
# %bb.48:                               #   in Loop: Header=BB4_14 Depth=1
	cqo
	idiv	r9
	mov	rax, r9
	test	rdx, rdx
	jne	.LBB4_14
	jmp	.LBB4_11
.LBB4_13:                               #   in Loop: Header=BB4_14 Depth=1
                                        # kill: def $eax killed $eax killed $rax
	xor	edx, edx
	div	r9d
                                        # kill: def $edx killed $edx def $rdx
	mov	rax, r9
	test	rdx, rdx
	jne	.LBB4_14
	jmp	.LBB4_11
.LBB4_49:                               #   in Loop: Header=BB4_14 Depth=1
	mov	r10, r9
	and	r10, rsi
	lea	rcx, [rdi + 4*r10]
	lea	rdx, [rdx + 4*r10]
	lea	r11, [rdi + 4*r8]
	add	r11, 16
	add	rdi, 16
	xor	r14d, r14d
	.p2align	4, 0x90
.LBB4_50:                               #   Parent Loop BB4_14 Depth=1
                                        # =>  This Inner Loop Header: Depth=2
	movups	xmm0, xmmword ptr [rdi + 4*r14 - 16]
	movups	xmm1, xmmword ptr [rdi + 4*r14]
	movups	xmm2, xmmword ptr [r11 + 4*r14 - 16]
	movups	xmm3, xmmword ptr [r11 + 4*r14]
	movups	xmmword ptr [rdi + 4*r14 - 16], xmm2
	movups	xmmword ptr [rdi + 4*r14], xmm3
	movups	xmmword ptr [r11 + 4*r14 - 16], xmm0
	movups	xmmword ptr [r11 + 4*r14], xmm1
	add	r14, 8
	cmp	r10, r14
	jne	.LBB4_50
# %bb.51:                               #   in Loop: Header=BB4_14 Depth=1
	cmp	r9, r10
	jne	.LBB4_21
	jmp	.LBB4_33
.LBB4_58:
	lea	rax, [rcx - 4]
	mov	ebp, dword ptr [rcx - 4]
	mov	rdx, rax
	mov	r14, rdi
	sub	rdx, rdi
	mov	rsi, rdx
	sar	rsi, 2
	cmp	rsi, 2
	jl	.LBB4_66
# %bb.59:
	shl	rsi, 2
	sub	rcx, rsi
	mov	rdi, rcx
	mov	rsi, r14
	call	memmove@PLT
	mov	dword ptr [r14], ebp
	jmp	.LBB4_11
.LBB4_60:
	mov	ebp, dword ptr [rdi]
	lea	rdx, [4*rax - 4]
	mov	r14, rax
	cmp	rax, 3
	jl	.LBB4_69
# %bb.61:
	lea	rsi, [rdi + 4]
	mov	r15, rdi
	call	memmove@PLT
	mov	dword ptr [r15 + 4*r14 - 4], ebp
	jmp	.LBB4_11
.LBB4_62:
	shr	rdx, 2
	inc	rdx
	mov	r8, rdx
	and	r8, -8
	lea	rax, [rsi + 4*r8]
	lea	rcx, [rdi + 4*r8]
	xor	r9d, r9d
	.p2align	4, 0x90
.LBB4_63:                               # =>This Inner Loop Header: Depth=1
	movups	xmm0, xmmword ptr [rdi + 4*r9]
	movups	xmm1, xmmword ptr [rdi + 4*r9 + 16]
	movups	xmm2, xmmword ptr [rsi + 4*r9]
	movups	xmm3, xmmword ptr [rsi + 4*r9 + 16]
	movups	xmmword ptr [rdi + 4*r9], xmm2
	movups	xmmword ptr [rdi + 4*r9 + 16], xmm3
	movups	xmmword ptr [rsi + 4*r9], xmm0
	movups	xmmword ptr [rsi + 4*r9 + 16], xmm1
	add	r9, 8
	cmp	r8, r9
	jne	.LBB4_63
# %bb.64:
	cmp	rdx, r8
	jne	.LBB4_7
	jmp	.LBB4_8
.LBB4_66:
	cmp	rdx, 4
	jne	.LBB4_68
# %bb.67:
	mov	ecx, dword ptr [r14]
	mov	dword ptr [rax], ecx
.LBB4_68:
	mov	dword ptr [r14], ebp
	jmp	.LBB4_11
.LBB4_69:
	mov	r15, rdi
	cmp	rdx, 4
	jne	.LBB4_71
# %bb.70:
	mov	rax, r15
	mov	ecx, dword ptr [r15 + 4]
	mov	dword ptr [r15], ecx
.LBB4_71:
	mov	dword ptr [r15 + 4*r14 - 4], ebp
	jmp	.LBB4_11
.Lfunc_end4:
	.size	_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag, .Lfunc_end4-_ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag
	.cfi_endproc
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
