
results/perf/parse.O1:     file format elf64-x86-64


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
    11ba:	48 83 ec 28          	sub    $0x28,%rsp
    11be:	bb 00 00 10 00       	mov    $0x100000,%ebx
    11c3:	83 ff 02             	cmp    $0x2,%edi
    11c6:	7c 13                	jl     11db <main+0x2b>
    11c8:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    11cc:	31 f6                	xor    %esi,%esi
    11ce:	ba 0a 00 00 00       	mov    $0xa,%edx
    11d3:	e8 88 fe ff ff       	call   1060 <strtoll@plt>
    11d8:	48 89 c3             	mov    %rax,%rbx
    11db:	4c 8d 2c 5b          	lea    (%rbx,%rbx,2),%r13
    11df:	49 c1 e5 04          	shl    $0x4,%r13
    11e3:	49 83 c5 40          	add    $0x40,%r13
    11e7:	4c 89 ef             	mov    %r13,%rdi
    11ea:	e8 a1 fe ff ff       	call   1090 <malloc@plt>
    11ef:	48 89 44 24 10       	mov    %rax,0x10(%rsp)
    11f4:	48 85 c0             	test   %rax,%rax
    11f7:	0f 84 42 02 00 00    	je     143f <main+0x28f>
    11fd:	48 85 db             	test   %rbx,%rbx
    1200:	48 89 5c 24 18       	mov    %rbx,0x18(%rsp)
    1205:	0f 84 07 01 00 00    	je     1312 <main+0x162>
    120b:	48 8d 6b ff          	lea    -0x1(%rbx),%rbp
    120f:	41 bc 1d 00 00 00    	mov    $0x1d,%r12d
    1215:	41 be 59 17 b7 d1    	mov    $0xd1b71759,%r14d
    121b:	31 db                	xor    %ebx,%ebx
    121d:	c7 44 24 0c 00 00 00 	movl   $0x0,0xc(%rsp)
    1224:	00 
    1225:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
    122c:	00 00 00 00 
    1230:	41 69 cc 0d 66 19 00 	imul   $0x19660d,%r12d,%ecx
    1237:	81 c1 5f f3 6e 3c    	add    $0x3c6ef35f,%ecx
    123d:	48 89 c8             	mov    %rcx,%rax
    1240:	49 0f af c6          	imul   %r14,%rax
    1244:	48 c1 e8 2d          	shr    $0x2d,%rax
    1248:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    124e:	29 c1                	sub    %eax,%ecx
    1250:	45 69 c4 a9 5c 38 17 	imul   $0x17385ca9,%r12d,%r8d
    1257:	41 81 c0 32 29 50 47 	add    $0x47502932,%r8d
    125e:	4c 89 c0             	mov    %r8,%rax
    1261:	49 0f af c6          	imul   %r14,%rax
    1265:	48 c1 e8 2d          	shr    $0x2d,%rax
    1269:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    126f:	41 29 c0             	sub    %eax,%r8d
    1272:	45 69 e4 95 0a 49 af 	imul   $0xaf490a95,%r12d,%r12d
    1279:	41 81 c4 e9 f6 cc d1 	add    $0xd1ccf6e9,%r12d
    1280:	4c 89 e0             	mov    %r12,%rax
    1283:	49 0f af c6          	imul   %r14,%rax
    1287:	48 c1 e8 2d          	shr    $0x2d,%rax
    128b:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    1291:	45 89 e1             	mov    %r12d,%r9d
    1294:	41 29 c1             	sub    %eax,%r9d
    1297:	48 8b 44 24 10       	mov    0x10(%rsp),%rax
    129c:	48 8d 3c 18          	lea    (%rax,%rbx,1),%rdi
    12a0:	4d 89 ef             	mov    %r13,%r15
    12a3:	49 29 df             	sub    %rbx,%r15
    12a6:	4c 89 fe             	mov    %r15,%rsi
    12a9:	48 8d 15 59 0d 00 00 	lea    0xd59(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    12b0:	31 c0                	xor    %eax,%eax
    12b2:	e8 99 fd ff ff       	call   1050 <snprintf@plt>
    12b7:	85 c0                	test   %eax,%eax
    12b9:	78 21                	js     12dc <main+0x12c>
    12bb:	89 c0                	mov    %eax,%eax
    12bd:	49 39 c7             	cmp    %rax,%r15
    12c0:	76 1a                	jbe    12dc <main+0x12c>
    12c2:	48 01 c3             	add    %rax,%rbx
    12c5:	31 c0                	xor    %eax,%eax
    12c7:	48 83 ed 01          	sub    $0x1,%rbp
    12cb:	0f 92 c1             	setb   %cl
    12ce:	84 c0                	test   %al,%al
    12d0:	75 4c                	jne    131e <main+0x16e>
    12d2:	84 c9                	test   %cl,%cl
    12d4:	0f 84 56 ff ff ff    	je     1230 <main+0x80>
    12da:	eb 42                	jmp    131e <main+0x16e>
    12dc:	48 8b 05 fd 2c 00 00 	mov    0x2cfd(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    12e3:	48 8b 08             	mov    (%rax),%rcx
    12e6:	be 11 00 00 00       	mov    $0x11,%esi
    12eb:	ba 01 00 00 00       	mov    $0x1,%edx
    12f0:	48 8d 3d 1c 0d 00 00 	lea    0xd1c(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    12f7:	e8 a4 fd ff ff       	call   10a0 <fwrite@plt>
    12fc:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1301:	e8 2a fd ff ff       	call   1030 <free@plt>
    1306:	b0 01                	mov    $0x1,%al
    1308:	c7 44 24 0c 02 00 00 	movl   $0x2,0xc(%rsp)
    130f:	00 
    1310:	eb b5                	jmp    12c7 <main+0x117>
    1312:	31 c0                	xor    %eax,%eax
    1314:	c7 44 24 0c 00 00 00 	movl   $0x0,0xc(%rsp)
    131b:	00 
    131c:	31 db                	xor    %ebx,%ebx
    131e:	84 c0                	test   %al,%al
    1320:	8b 6c 24 0c          	mov    0xc(%rsp),%ebp
    1324:	0f 85 f5 00 00 00    	jne    141f <main+0x26f>
    132a:	4c 8b 64 24 10       	mov    0x10(%rsp),%r12
    132f:	4d 89 e6             	mov    %r12,%r14
    1332:	49 01 de             	add    %rbx,%r14
    1335:	31 db                	xor    %ebx,%ebx
    1337:	4c 8d 7c 24 20       	lea    0x20(%rsp),%r15
    133c:	eb 10                	jmp    134e <main+0x19e>
    133e:	66 90                	xchg   %ax,%ax
    1340:	48 89 ca             	mov    %rcx,%rdx
    1343:	48 89 c3             	mov    %rax,%rbx
    1346:	4c 39 e1             	cmp    %r12,%rcx
    1349:	49 89 d4             	mov    %rdx,%r12
    134c:	74 4d                	je     139b <main+0x1eb>
    134e:	4d 39 f4             	cmp    %r14,%r12
    1351:	73 45                	jae    1398 <main+0x1e8>
    1353:	4c 89 e7             	mov    %r12,%rdi
    1356:	4c 89 fe             	mov    %r15,%rsi
    1359:	ba 0a 00 00 00       	mov    $0xa,%edx
    135e:	e8 1d fd ff ff       	call   1080 <strtol@plt>
    1363:	48 8b 4c 24 20       	mov    0x20(%rsp),%rcx
    1368:	4c 39 e1             	cmp    %r12,%rcx
    136b:	74 23                	je     1390 <main+0x1e0>
    136d:	48 01 d8             	add    %rbx,%rax
    1370:	4c 39 f1             	cmp    %r14,%rcx
    1373:	73 cb                	jae    1340 <main+0x190>
    1375:	0f b6 11             	movzbl (%rcx),%edx
    1378:	83 fa 2c             	cmp    $0x2c,%edx
    137b:	74 05                	je     1382 <main+0x1d2>
    137d:	83 fa 0a             	cmp    $0xa,%edx
    1380:	75 be                	jne    1340 <main+0x190>
    1382:	48 8d 51 01          	lea    0x1(%rcx),%rdx
    1386:	eb bb                	jmp    1343 <main+0x193>
    1388:	0f 1f 84 00 00 00 00 	nopl   0x0(%rax,%rax,1)
    138f:	00 
    1390:	48 89 d8             	mov    %rbx,%rax
    1393:	4c 89 e2             	mov    %r12,%rdx
    1396:	eb ab                	jmp    1343 <main+0x193>
    1398:	48 89 d8             	mov    %rbx,%rax
    139b:	48 8b 54 24 18       	mov    0x18(%rsp),%rdx
    13a0:	48 83 fa 63          	cmp    $0x63,%rdx
    13a4:	7e 24                	jle    13ca <main+0x21a>
    13a6:	48 83 fa 64          	cmp    $0x64,%rdx
    13aa:	74 32                	je     13de <main+0x22e>
    13ac:	48 81 fa e8 03 00 00 	cmp    $0x3e8,%rdx
    13b3:	74 31                	je     13e6 <main+0x236>
    13b5:	48 81 fa 00 00 10 00 	cmp    $0x100000,%rdx
    13bc:	75 72                	jne    1430 <main+0x280>
    13be:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    13c5:	00 00 00 
    13c8:	eb 2a                	jmp    13f4 <main+0x244>
    13ca:	48 83 fa 01          	cmp    $0x1,%rdx
    13ce:	74 1e                	je     13ee <main+0x23e>
    13d0:	48 83 fa 0a          	cmp    $0xa,%rdx
    13d4:	75 5a                	jne    1430 <main+0x280>
    13d6:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    13dc:	eb 16                	jmp    13f4 <main+0x244>
    13de:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    13e4:	eb 0e                	jmp    13f4 <main+0x244>
    13e6:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    13ec:	eb 06                	jmp    13f4 <main+0x244>
    13ee:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    13f4:	31 c9                	xor    %ecx,%ecx
    13f6:	84 c9                	test   %cl,%cl
    13f8:	75 05                	jne    13ff <main+0x24f>
    13fa:	4c 39 c0             	cmp    %r8,%rax
    13fd:	75 67                	jne    1466 <main+0x2b6>
    13ff:	48 8d 3d 44 0c 00 00 	lea    0xc44(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    1406:	31 ed                	xor    %ebp,%ebp
    1408:	48 89 d6             	mov    %rdx,%rsi
    140b:	48 89 c2             	mov    %rax,%rdx
    140e:	31 c0                	xor    %eax,%eax
    1410:	e8 2b fc ff ff       	call   1040 <printf@plt>
    1415:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    141a:	e8 11 fc ff ff       	call   1030 <free@plt>
    141f:	89 e8                	mov    %ebp,%eax
    1421:	48 83 c4 28          	add    $0x28,%rsp
    1425:	5b                   	pop    %rbx
    1426:	41 5c                	pop    %r12
    1428:	41 5d                	pop    %r13
    142a:	41 5e                	pop    %r14
    142c:	41 5f                	pop    %r15
    142e:	5d                   	pop    %rbp
    142f:	c3                   	ret
    1430:	49 c7 c0 ff ff ff ff 	mov    $0xffffffffffffffff,%r8
    1437:	b1 01                	mov    $0x1,%cl
    1439:	84 c9                	test   %cl,%cl
    143b:	74 bd                	je     13fa <main+0x24a>
    143d:	eb c0                	jmp    13ff <main+0x24f>
    143f:	48 8b 05 9a 2b 00 00 	mov    0x2b9a(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1446:	48 8b 08             	mov    (%rax),%rcx
    1449:	48 8d 3d b4 0b 00 00 	lea    0xbb4(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    1450:	be 04 00 00 00       	mov    $0x4,%esi
    1455:	ba 01 00 00 00       	mov    $0x1,%edx
    145a:	e8 41 fc ff ff       	call   10a0 <fwrite@plt>
    145f:	bd 02 00 00 00       	mov    $0x2,%ebp
    1464:	eb b9                	jmp    141f <main+0x26f>
    1466:	48 8b 0d 73 2b 00 00 	mov    0x2b73(%rip),%rcx        # 3fe0 <stderr@GLIBC_2.2.5>
    146d:	48 8b 39             	mov    (%rcx),%rdi
    1470:	48 8d 35 ae 0b 00 00 	lea    0xbae(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    1477:	48 89 c1             	mov    %rax,%rcx
    147a:	31 c0                	xor    %eax,%eax
    147c:	e8 ef fb ff ff       	call   1070 <fprintf@plt>
    1481:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1486:	e8 a5 fb ff ff       	call   1030 <free@plt>
    148b:	bd 01 00 00 00       	mov    $0x1,%ebp
    1490:	eb 8d                	jmp    141f <main+0x26f>

Disassembly of section .fini:

0000000000001494 <_fini>:
    1494:	f3 0f 1e fa          	endbr64
    1498:	48 83 ec 08          	sub    $0x8,%rsp
    149c:	48 83 c4 08          	add    $0x8,%rsp
    14a0:	c3                   	ret
