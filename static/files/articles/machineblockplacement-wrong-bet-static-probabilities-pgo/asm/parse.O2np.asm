
results/perf/parse.O2np:     file format elf64-x86-64


Disassembly of section .init:

0000000000001000 <_init>:
    1000:	f3 0f 1e fa          	endbr64
    1004:	48 83 ec 08          	sub    $0x8,%rsp
    1008:	48 8b 05 b9 2f 00 00 	mov    0x2fb9(%rip),%rax        # 3fc8 <__gmon_start__@Base>
    100f:	48 85 c0             	test   %rax,%rax
    1012:	74 02                	je     1016 <_init+0x16>
    1014:	ff d0                	call   *%rax
    1016:	48 83 c4 08          	add    $0x8,%rsp
    101a:	c3                   	ret

Disassembly of section .plt:

0000000000001020 <free@plt-0x10>:
    1020:	ff 35 ca 2f 00 00    	push   0x2fca(%rip)        # 3ff0 <_GLOBAL_OFFSET_TABLE_+0x8>
    1026:	ff 25 cc 2f 00 00    	jmp    *0x2fcc(%rip)        # 3ff8 <_GLOBAL_OFFSET_TABLE_+0x10>
    102c:	0f 1f 40 00          	nopl   0x0(%rax)

0000000000001030 <free@plt>:
    1030:	ff 25 ca 2f 00 00    	jmp    *0x2fca(%rip)        # 4000 <free@GLIBC_2.2.5>
    1036:	68 00 00 00 00       	push   $0x0
    103b:	e9 e0 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001040 <printf@plt>:
    1040:	ff 25 c2 2f 00 00    	jmp    *0x2fc2(%rip)        # 4008 <printf@GLIBC_2.2.5>
    1046:	68 01 00 00 00       	push   $0x1
    104b:	e9 d0 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001050 <snprintf@plt>:
    1050:	ff 25 ba 2f 00 00    	jmp    *0x2fba(%rip)        # 4010 <snprintf@GLIBC_2.2.5>
    1056:	68 02 00 00 00       	push   $0x2
    105b:	e9 c0 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001060 <strtoll@plt>:
    1060:	ff 25 b2 2f 00 00    	jmp    *0x2fb2(%rip)        # 4018 <strtoll@GLIBC_2.2.5>
    1066:	68 03 00 00 00       	push   $0x3
    106b:	e9 b0 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001070 <fprintf@plt>:
    1070:	ff 25 aa 2f 00 00    	jmp    *0x2faa(%rip)        # 4020 <fprintf@GLIBC_2.2.5>
    1076:	68 04 00 00 00       	push   $0x4
    107b:	e9 a0 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001080 <strtol@plt>:
    1080:	ff 25 a2 2f 00 00    	jmp    *0x2fa2(%rip)        # 4028 <strtol@GLIBC_2.2.5>
    1086:	68 05 00 00 00       	push   $0x5
    108b:	e9 90 ff ff ff       	jmp    1020 <_init+0x20>

0000000000001090 <malloc@plt>:
    1090:	ff 25 9a 2f 00 00    	jmp    *0x2f9a(%rip)        # 4030 <malloc@GLIBC_2.2.5>
    1096:	68 06 00 00 00       	push   $0x6
    109b:	e9 80 ff ff ff       	jmp    1020 <_init+0x20>

00000000000010a0 <fwrite@plt>:
    10a0:	ff 25 92 2f 00 00    	jmp    *0x2f92(%rip)        # 4038 <fwrite@GLIBC_2.2.5>
    10a6:	68 07 00 00 00       	push   $0x7
    10ab:	e9 70 ff ff ff       	jmp    1020 <_init+0x20>

Disassembly of section .plt.got:

00000000000010b0 <__cxa_finalize@plt>:
    10b0:	ff 25 22 2f 00 00    	jmp    *0x2f22(%rip)        # 3fd8 <__cxa_finalize@GLIBC_2.2.5>
    10b6:	66 90                	xchg   %ax,%ax

Disassembly of section .text:

00000000000010c0 <_start>:
    10c0:	f3 0f 1e fa          	endbr64
    10c4:	31 ed                	xor    %ebp,%ebp
    10c6:	49 89 d1             	mov    %rdx,%r9
    10c9:	5e                   	pop    %rsi
    10ca:	48 89 e2             	mov    %rsp,%rdx
    10cd:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
    10d1:	50                   	push   %rax
    10d2:	54                   	push   %rsp
    10d3:	45 31 c0             	xor    %r8d,%r8d
    10d6:	31 c9                	xor    %ecx,%ecx
    10d8:	48 8d 3d d1 00 00 00 	lea    0xd1(%rip),%rdi        # 11b0 <main>
    10df:	ff 15 d3 2e 00 00    	call   *0x2ed3(%rip)        # 3fb8 <__libc_start_main@GLIBC_2.34>
    10e5:	f4                   	hlt
    10e6:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    10ed:	00 00 00 

00000000000010f0 <deregister_tm_clones>:
    10f0:	48 8d 3d 59 2f 00 00 	lea    0x2f59(%rip),%rdi        # 4050 <__TMC_END__>
    10f7:	48 8d 05 52 2f 00 00 	lea    0x2f52(%rip),%rax        # 4050 <__TMC_END__>
    10fe:	48 39 f8             	cmp    %rdi,%rax
    1101:	74 15                	je     1118 <deregister_tm_clones+0x28>
    1103:	48 8b 05 b6 2e 00 00 	mov    0x2eb6(%rip),%rax        # 3fc0 <_ITM_deregisterTMCloneTable@Base>
    110a:	48 85 c0             	test   %rax,%rax
    110d:	74 09                	je     1118 <deregister_tm_clones+0x28>
    110f:	ff e0                	jmp    *%rax
    1111:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    1118:	c3                   	ret
    1119:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001120 <register_tm_clones>:
    1120:	48 8d 3d 29 2f 00 00 	lea    0x2f29(%rip),%rdi        # 4050 <__TMC_END__>
    1127:	48 8d 35 22 2f 00 00 	lea    0x2f22(%rip),%rsi        # 4050 <__TMC_END__>
    112e:	48 29 fe             	sub    %rdi,%rsi
    1131:	48 89 f0             	mov    %rsi,%rax
    1134:	48 c1 ee 3f          	shr    $0x3f,%rsi
    1138:	48 c1 f8 03          	sar    $0x3,%rax
    113c:	48 01 c6             	add    %rax,%rsi
    113f:	48 d1 fe             	sar    $1,%rsi
    1142:	74 14                	je     1158 <register_tm_clones+0x38>
    1144:	48 8b 05 85 2e 00 00 	mov    0x2e85(%rip),%rax        # 3fd0 <_ITM_registerTMCloneTable@Base>
    114b:	48 85 c0             	test   %rax,%rax
    114e:	74 08                	je     1158 <register_tm_clones+0x38>
    1150:	ff e0                	jmp    *%rax
    1152:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)
    1158:	c3                   	ret
    1159:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001160 <__do_global_dtors_aux>:
    1160:	f3 0f 1e fa          	endbr64
    1164:	80 3d e5 2e 00 00 00 	cmpb   $0x0,0x2ee5(%rip)        # 4050 <__TMC_END__>
    116b:	75 2b                	jne    1198 <__do_global_dtors_aux+0x38>
    116d:	55                   	push   %rbp
    116e:	48 83 3d 62 2e 00 00 	cmpq   $0x0,0x2e62(%rip)        # 3fd8 <__cxa_finalize@GLIBC_2.2.5>
    1175:	00 
    1176:	48 89 e5             	mov    %rsp,%rbp
    1179:	74 0c                	je     1187 <__do_global_dtors_aux+0x27>
    117b:	48 8b 3d c6 2e 00 00 	mov    0x2ec6(%rip),%rdi        # 4048 <__dso_handle>
    1182:	e8 29 ff ff ff       	call   10b0 <__cxa_finalize@plt>
    1187:	e8 64 ff ff ff       	call   10f0 <deregister_tm_clones>
    118c:	c6 05 bd 2e 00 00 01 	movb   $0x1,0x2ebd(%rip)        # 4050 <__TMC_END__>
    1193:	5d                   	pop    %rbp
    1194:	c3                   	ret
    1195:	0f 1f 00             	nopl   (%rax)
    1198:	c3                   	ret
    1199:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

00000000000011a0 <frame_dummy>:
    11a0:	f3 0f 1e fa          	endbr64
    11a4:	e9 77 ff ff ff       	jmp    1120 <register_tm_clones>
    11a9:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

00000000000011b0 <main>:
    11b0:	55                   	push   %rbp
    11b1:	41 57                	push   %r15
    11b3:	41 56                	push   %r14
    11b5:	41 55                	push   %r13
    11b7:	41 54                	push   %r12
    11b9:	53                   	push   %rbx
    11ba:	48 83 ec 18          	sub    $0x18,%rsp
    11be:	bb 00 00 10 00       	mov    $0x100000,%ebx
    11c3:	83 ff 02             	cmp    $0x2,%edi
    11c6:	7c 13                	jl     11db <main+0x2b>
    11c8:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    11cc:	31 f6                	xor    %esi,%esi
    11ce:	ba 0a 00 00 00       	mov    $0xa,%edx
    11d3:	e8 88 fe ff ff       	call   1060 <strtoll@plt>
    11d8:	48 89 c3             	mov    %rax,%rbx
    11db:	4c 8d 24 5b          	lea    (%rbx,%rbx,2),%r12
    11df:	49 c1 e4 04          	shl    $0x4,%r12
    11e3:	49 83 c4 40          	add    $0x40,%r12
    11e7:	4c 89 e7             	mov    %r12,%rdi
    11ea:	e8 a1 fe ff ff       	call   1090 <malloc@plt>
    11ef:	48 89 04 24          	mov    %rax,(%rsp)
    11f3:	48 85 c0             	test   %rax,%rax
    11f6:	74 2d                	je     1225 <main+0x75>
    11f8:	45 31 ff             	xor    %r15d,%r15d
    11fb:	48 85 db             	test   %rbx,%rbx
    11fe:	75 50                	jne    1250 <main+0xa0>
    1200:	45 31 e4             	xor    %r12d,%r12d
    1203:	48 8d 3d 40 0e 00 00 	lea    0xe40(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    120a:	48 89 de             	mov    %rbx,%rsi
    120d:	4c 89 e2             	mov    %r12,%rdx
    1210:	31 c0                	xor    %eax,%eax
    1212:	e8 29 fe ff ff       	call   1040 <printf@plt>
    1217:	48 8b 3c 24          	mov    (%rsp),%rdi
    121b:	e8 10 fe ff ff       	call   1030 <free@plt>
    1220:	e9 0d 02 00 00       	jmp    1432 <main+0x282>
    1225:	48 8b 05 b4 2d 00 00 	mov    0x2db4(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    122c:	48 8b 08             	mov    (%rax),%rcx
    122f:	48 8d 3d ce 0d 00 00 	lea    0xdce(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    1236:	be 04 00 00 00       	mov    $0x4,%esi
    123b:	ba 01 00 00 00       	mov    $0x1,%edx
    1240:	e8 5b fe ff ff       	call   10a0 <fwrite@plt>
    1245:	41 bf 02 00 00 00    	mov    $0x2,%r15d
    124b:	e9 e2 01 00 00       	jmp    1432 <main+0x282>
    1250:	48 89 5c 24 08       	mov    %rbx,0x8(%rsp)
    1255:	41 bf 1d 00 00 00    	mov    $0x1d,%r15d
    125b:	41 be 59 17 b7 d1    	mov    $0xd1b71759,%r14d
    1261:	45 31 ed             	xor    %r13d,%r13d
    1264:	31 db                	xor    %ebx,%ebx
    1266:	41 69 cf 0d 66 19 00 	imul   $0x19660d,%r15d,%ecx
    126d:	81 c1 5f f3 6e 3c    	add    $0x3c6ef35f,%ecx
    1273:	48 89 c8             	mov    %rcx,%rax
    1276:	49 0f af c6          	imul   %r14,%rax
    127a:	48 c1 e8 2d          	shr    $0x2d,%rax
    127e:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    1284:	29 c1                	sub    %eax,%ecx
    1286:	45 69 c7 a9 5c 38 17 	imul   $0x17385ca9,%r15d,%r8d
    128d:	41 81 c0 32 29 50 47 	add    $0x47502932,%r8d
    1294:	4c 89 c0             	mov    %r8,%rax
    1297:	49 0f af c6          	imul   %r14,%rax
    129b:	48 c1 e8 2d          	shr    $0x2d,%rax
    129f:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    12a5:	41 29 c0             	sub    %eax,%r8d
    12a8:	45 69 ff 95 0a 49 af 	imul   $0xaf490a95,%r15d,%r15d
    12af:	41 81 c7 e9 f6 cc d1 	add    $0xd1ccf6e9,%r15d
    12b6:	4c 89 f8             	mov    %r15,%rax
    12b9:	49 0f af c6          	imul   %r14,%rax
    12bd:	48 c1 e8 2d          	shr    $0x2d,%rax
    12c1:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    12c7:	45 89 f9             	mov    %r15d,%r9d
    12ca:	41 29 c1             	sub    %eax,%r9d
    12cd:	48 8b 04 24          	mov    (%rsp),%rax
    12d1:	48 8d 3c 18          	lea    (%rax,%rbx,1),%rdi
    12d5:	4c 89 e5             	mov    %r12,%rbp
    12d8:	48 29 dd             	sub    %rbx,%rbp
    12db:	48 89 ee             	mov    %rbp,%rsi
    12de:	48 8d 15 24 0d 00 00 	lea    0xd24(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    12e5:	31 c0                	xor    %eax,%eax
    12e7:	e8 64 fd ff ff       	call   1050 <snprintf@plt>
    12ec:	85 c0                	test   %eax,%eax
    12ee:	78 07                	js     12f7 <main+0x147>
    12f0:	89 c0                	mov    %eax,%eax
    12f2:	48 39 c5             	cmp    %rax,%rbp
    12f5:	77 34                	ja     132b <main+0x17b>
    12f7:	48 8b 05 e2 2c 00 00 	mov    0x2ce2(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    12fe:	48 8b 08             	mov    (%rax),%rcx
    1301:	48 8d 3d 0b 0d 00 00 	lea    0xd0b(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    1308:	be 11 00 00 00       	mov    $0x11,%esi
    130d:	ba 01 00 00 00       	mov    $0x1,%edx
    1312:	e8 89 fd ff ff       	call   10a0 <fwrite@plt>
    1317:	48 8b 3c 24          	mov    (%rsp),%rdi
    131b:	e8 10 fd ff ff       	call   1030 <free@plt>
    1320:	41 bf 02 00 00 00    	mov    $0x2,%r15d
    1326:	e9 07 01 00 00       	jmp    1432 <main+0x282>
    132b:	48 01 c3             	add    %rax,%rbx
    132e:	49 ff c5             	inc    %r13
    1331:	4c 39 6c 24 08       	cmp    %r13,0x8(%rsp)
    1336:	0f 85 2a ff ff ff    	jne    1266 <main+0xb6>
    133c:	48 85 db             	test   %rbx,%rbx
    133f:	75 0d                	jne    134e <main+0x19e>
    1341:	45 31 e4             	xor    %r12d,%r12d
    1344:	48 8b 5c 24 08       	mov    0x8(%rsp),%rbx
    1349:	45 31 ff             	xor    %r15d,%r15d
    134c:	eb 54                	jmp    13a2 <main+0x1f2>
    134e:	48 8b 0c 24          	mov    (%rsp),%rcx
    1352:	49 89 ce             	mov    %rcx,%r14
    1355:	49 01 de             	add    %rbx,%r14
    1358:	45 31 e4             	xor    %r12d,%r12d
    135b:	4c 8d 6c 24 10       	lea    0x10(%rsp),%r13
    1360:	48 8b 5c 24 08       	mov    0x8(%rsp),%rbx
    1365:	45 31 ff             	xor    %r15d,%r15d
    1368:	48 89 cd             	mov    %rcx,%rbp
    136b:	48 89 cf             	mov    %rcx,%rdi
    136e:	4c 89 ee             	mov    %r13,%rsi
    1371:	ba 0a 00 00 00       	mov    $0xa,%edx
    1376:	e8 05 fd ff ff       	call   1080 <strtol@plt>
    137b:	48 8b 4c 24 10       	mov    0x10(%rsp),%rcx
    1380:	48 39 e9             	cmp    %rbp,%rcx
    1383:	74 1d                	je     13a2 <main+0x1f2>
    1385:	4c 39 f1             	cmp    %r14,%rcx
    1388:	73 10                	jae    139a <main+0x1ea>
    138a:	0f b6 11             	movzbl (%rcx),%edx
    138d:	83 fa 2c             	cmp    $0x2c,%edx
    1390:	74 05                	je     1397 <main+0x1e7>
    1392:	83 fa 0a             	cmp    $0xa,%edx
    1395:	75 03                	jne    139a <main+0x1ea>
    1397:	48 ff c1             	inc    %rcx
    139a:	49 01 c4             	add    %rax,%r12
    139d:	4c 39 f1             	cmp    %r14,%rcx
    13a0:	72 c6                	jb     1368 <main+0x1b8>
    13a2:	48 83 fb 63          	cmp    $0x63,%rbx
    13a6:	7f 1e                	jg     13c6 <main+0x216>
    13a8:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    13ae:	48 83 fb 01          	cmp    $0x1,%rbx
    13b2:	74 48                	je     13fc <main+0x24c>
    13b4:	48 83 fb 0a          	cmp    $0xa,%rbx
    13b8:	0f 85 45 fe ff ff    	jne    1203 <main+0x53>
    13be:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    13c4:	eb 36                	jmp    13fc <main+0x24c>
    13c6:	48 83 fb 64          	cmp    $0x64,%rbx
    13ca:	74 22                	je     13ee <main+0x23e>
    13cc:	48 81 fb e8 03 00 00 	cmp    $0x3e8,%rbx
    13d3:	74 21                	je     13f6 <main+0x246>
    13d5:	48 81 fb 00 00 10 00 	cmp    $0x100000,%rbx
    13dc:	0f 85 21 fe ff ff    	jne    1203 <main+0x53>
    13e2:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    13e9:	00 00 00 
    13ec:	eb 0e                	jmp    13fc <main+0x24c>
    13ee:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    13f4:	eb 06                	jmp    13fc <main+0x24c>
    13f6:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    13fc:	4d 39 c4             	cmp    %r8,%r12
    13ff:	0f 84 fe fd ff ff    	je     1203 <main+0x53>
    1405:	48 8b 05 d4 2b 00 00 	mov    0x2bd4(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    140c:	48 8b 38             	mov    (%rax),%rdi
    140f:	48 8d 35 0f 0c 00 00 	lea    0xc0f(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    1416:	48 89 da             	mov    %rbx,%rdx
    1419:	4c 89 e1             	mov    %r12,%rcx
    141c:	31 c0                	xor    %eax,%eax
    141e:	e8 4d fc ff ff       	call   1070 <fprintf@plt>
    1423:	48 8b 3c 24          	mov    (%rsp),%rdi
    1427:	e8 04 fc ff ff       	call   1030 <free@plt>
    142c:	41 bf 01 00 00 00    	mov    $0x1,%r15d
    1432:	44 89 f8             	mov    %r15d,%eax
    1435:	48 83 c4 18          	add    $0x18,%rsp
    1439:	5b                   	pop    %rbx
    143a:	41 5c                	pop    %r12
    143c:	41 5d                	pop    %r13
    143e:	41 5e                	pop    %r14
    1440:	41 5f                	pop    %r15
    1442:	5d                   	pop    %rbp
    1443:	c3                   	ret

Disassembly of section .fini:

0000000000001444 <_fini>:
    1444:	f3 0f 1e fa          	endbr64
    1448:	48 83 ec 08          	sub    $0x8,%rsp
    144c:	48 83 c4 08          	add    $0x8,%rsp
    1450:	c3                   	ret
