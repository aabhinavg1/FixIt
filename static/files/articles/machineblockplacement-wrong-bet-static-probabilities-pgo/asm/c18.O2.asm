
/tmp/mbb_revalidate/c18/parse.O2:     file format elf64-x86-64


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
    11be:	41 bf 00 00 10 00    	mov    $0x100000,%r15d
    11c4:	83 ff 02             	cmp    $0x2,%edi
    11c7:	7c 13                	jl     11dc <main+0x2c>
    11c9:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    11cd:	31 f6                	xor    %esi,%esi
    11cf:	ba 0a 00 00 00       	mov    $0xa,%edx
    11d4:	e8 87 fe ff ff       	call   1060 <strtoll@plt>
    11d9:	49 89 c7             	mov    %rax,%r15
    11dc:	4f 8d 24 7f          	lea    (%r15,%r15,2),%r12
    11e0:	49 c1 e4 04          	shl    $0x4,%r12
    11e4:	49 83 c4 40          	add    $0x40,%r12
    11e8:	4c 89 e7             	mov    %r12,%rdi
    11eb:	e8 a0 fe ff ff       	call   1090 <malloc@plt>
    11f0:	48 89 04 24          	mov    %rax,(%rsp)
    11f4:	48 85 c0             	test   %rax,%rax
    11f7:	0f 84 fa 01 00 00    	je     13f7 <main+0x247>
    11fd:	45 31 f6             	xor    %r14d,%r14d
    1200:	4d 85 ff             	test   %r15,%r15
    1203:	0f 84 23 01 00 00    	je     132c <main+0x17c>
    1209:	41 bd 1d 00 00 00    	mov    $0x1d,%r13d
    120f:	41 be 59 17 b7 d1    	mov    $0xd1b71759,%r14d
    1215:	4c 89 7c 24 08       	mov    %r15,0x8(%rsp)
    121a:	4c 89 fb             	mov    %r15,%rbx
    121d:	45 31 ff             	xor    %r15d,%r15d
    1220:	41 69 cd 0d 66 19 00 	imul   $0x19660d,%r13d,%ecx
    1227:	81 c1 5f f3 6e 3c    	add    $0x3c6ef35f,%ecx
    122d:	48 89 c8             	mov    %rcx,%rax
    1230:	49 0f af c6          	imul   %r14,%rax
    1234:	48 c1 e8 2d          	shr    $0x2d,%rax
    1238:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    123e:	44 69 c1 0d 66 19 00 	imul   $0x19660d,%ecx,%r8d
    1245:	29 c1                	sub    %eax,%ecx
    1247:	41 81 c0 5f f3 6e 3c 	add    $0x3c6ef35f,%r8d
    124e:	4c 89 c0             	mov    %r8,%rax
    1251:	49 0f af c6          	imul   %r14,%rax
    1255:	48 c1 e8 2d          	shr    $0x2d,%rax
    1259:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    125f:	45 69 e8 0d 66 19 00 	imul   $0x19660d,%r8d,%r13d
    1266:	41 29 c0             	sub    %eax,%r8d
    1269:	41 81 c5 5f f3 6e 3c 	add    $0x3c6ef35f,%r13d
    1270:	4c 89 e8             	mov    %r13,%rax
    1273:	49 0f af c6          	imul   %r14,%rax
    1277:	48 c1 e8 2d          	shr    $0x2d,%rax
    127b:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    1281:	45 89 e9             	mov    %r13d,%r9d
    1284:	41 29 c1             	sub    %eax,%r9d
    1287:	48 8b 04 24          	mov    (%rsp),%rax
    128b:	4a 8d 3c 38          	lea    (%rax,%r15,1),%rdi
    128f:	4c 89 e5             	mov    %r12,%rbp
    1292:	4c 29 fd             	sub    %r15,%rbp
    1295:	48 89 ee             	mov    %rbp,%rsi
    1298:	48 8d 15 6a 0d 00 00 	lea    0xd6a(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    129f:	31 c0                	xor    %eax,%eax
    12a1:	e8 aa fd ff ff       	call   1050 <snprintf@plt>
    12a6:	85 c0                	test   %eax,%eax
    12a8:	0f 88 18 01 00 00    	js     13c6 <main+0x216>
    12ae:	89 c0                	mov    %eax,%eax
    12b0:	48 39 c5             	cmp    %rax,%rbp
    12b3:	0f 86 0d 01 00 00    	jbe    13c6 <main+0x216>
    12b9:	49 01 c7             	add    %rax,%r15
    12bc:	48 ff cb             	dec    %rbx
    12bf:	0f 85 5b ff ff ff    	jne    1220 <main+0x70>
    12c5:	4d 85 ff             	test   %r15,%r15
    12c8:	7e 67                	jle    1331 <main+0x181>
    12ca:	48 8b 0c 24          	mov    (%rsp),%rcx
    12ce:	48 89 cb             	mov    %rcx,%rbx
    12d1:	4c 01 fb             	add    %r15,%rbx
    12d4:	45 31 e4             	xor    %r12d,%r12d
    12d7:	4c 8d 6c 24 10       	lea    0x10(%rsp),%r13
    12dc:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    12e1:	45 31 f6             	xor    %r14d,%r14d
    12e4:	eb 15                	jmp    12fb <main+0x14b>
    12e6:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    12ed:	00 00 00 
    12f0:	48 ff c1             	inc    %rcx
    12f3:	49 01 c4             	add    %rax,%r12
    12f6:	48 39 d9             	cmp    %rbx,%rcx
    12f9:	73 41                	jae    133c <main+0x18c>
    12fb:	48 89 cd             	mov    %rcx,%rbp
    12fe:	48 89 cf             	mov    %rcx,%rdi
    1301:	4c 89 ee             	mov    %r13,%rsi
    1304:	ba 0a 00 00 00       	mov    $0xa,%edx
    1309:	e8 72 fd ff ff       	call   1080 <strtol@plt>
    130e:	48 8b 4c 24 10       	mov    0x10(%rsp),%rcx
    1313:	48 39 e9             	cmp    %rbp,%rcx
    1316:	74 24                	je     133c <main+0x18c>
    1318:	48 39 d9             	cmp    %rbx,%rcx
    131b:	73 d6                	jae    12f3 <main+0x143>
    131d:	0f b6 11             	movzbl (%rcx),%edx
    1320:	83 fa 2c             	cmp    $0x2c,%edx
    1323:	74 cb                	je     12f0 <main+0x140>
    1325:	83 fa 0a             	cmp    $0xa,%edx
    1328:	74 c6                	je     12f0 <main+0x140>
    132a:	eb c7                	jmp    12f3 <main+0x143>
    132c:	45 31 e4             	xor    %r12d,%r12d
    132f:	eb 66                	jmp    1397 <main+0x1e7>
    1331:	45 31 e4             	xor    %r12d,%r12d
    1334:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1339:	45 31 f6             	xor    %r14d,%r14d
    133c:	49 83 ff 63          	cmp    $0x63,%r15
    1340:	7e 24                	jle    1366 <main+0x1b6>
    1342:	49 83 ff 64          	cmp    $0x64,%r15
    1346:	74 38                	je     1380 <main+0x1d0>
    1348:	49 81 ff e8 03 00 00 	cmp    $0x3e8,%r15
    134f:	74 37                	je     1388 <main+0x1d8>
    1351:	49 81 ff 00 00 10 00 	cmp    $0x100000,%r15
    1358:	75 3d                	jne    1397 <main+0x1e7>
    135a:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    1361:	00 00 00 
    1364:	eb 28                	jmp    138e <main+0x1de>
    1366:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    136c:	49 83 ff 01          	cmp    $0x1,%r15
    1370:	74 1c                	je     138e <main+0x1de>
    1372:	49 83 ff 0a          	cmp    $0xa,%r15
    1376:	75 1f                	jne    1397 <main+0x1e7>
    1378:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    137e:	eb 0e                	jmp    138e <main+0x1de>
    1380:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    1386:	eb 06                	jmp    138e <main+0x1de>
    1388:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    138e:	4d 39 c4             	cmp    %r8,%r12
    1391:	0f 85 88 00 00 00    	jne    141f <main+0x26f>
    1397:	48 8d 3d ac 0c 00 00 	lea    0xcac(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    139e:	4c 89 fe             	mov    %r15,%rsi
    13a1:	4c 89 e2             	mov    %r12,%rdx
    13a4:	31 c0                	xor    %eax,%eax
    13a6:	e8 95 fc ff ff       	call   1040 <printf@plt>
    13ab:	48 8b 3c 24          	mov    (%rsp),%rdi
    13af:	e8 7c fc ff ff       	call   1030 <free@plt>
    13b4:	44 89 f0             	mov    %r14d,%eax
    13b7:	48 83 c4 18          	add    $0x18,%rsp
    13bb:	5b                   	pop    %rbx
    13bc:	41 5c                	pop    %r12
    13be:	41 5d                	pop    %r13
    13c0:	41 5e                	pop    %r14
    13c2:	41 5f                	pop    %r15
    13c4:	5d                   	pop    %rbp
    13c5:	c3                   	ret
    13c6:	48 8b 05 13 2c 00 00 	mov    0x2c13(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    13cd:	48 8b 08             	mov    (%rax),%rcx
    13d0:	48 8d 3d 3c 0c 00 00 	lea    0xc3c(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    13d7:	be 11 00 00 00       	mov    $0x11,%esi
    13dc:	ba 01 00 00 00       	mov    $0x1,%edx
    13e1:	e8 ba fc ff ff       	call   10a0 <fwrite@plt>
    13e6:	48 8b 3c 24          	mov    (%rsp),%rdi
    13ea:	e8 41 fc ff ff       	call   1030 <free@plt>
    13ef:	41 be 02 00 00 00    	mov    $0x2,%r14d
    13f5:	eb bd                	jmp    13b4 <main+0x204>
    13f7:	48 8b 05 e2 2b 00 00 	mov    0x2be2(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    13fe:	48 8b 08             	mov    (%rax),%rcx
    1401:	48 8d 3d fc 0b 00 00 	lea    0xbfc(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    1408:	be 04 00 00 00       	mov    $0x4,%esi
    140d:	ba 01 00 00 00       	mov    $0x1,%edx
    1412:	e8 89 fc ff ff       	call   10a0 <fwrite@plt>
    1417:	41 be 02 00 00 00    	mov    $0x2,%r14d
    141d:	eb 95                	jmp    13b4 <main+0x204>
    141f:	48 8b 05 ba 2b 00 00 	mov    0x2bba(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1426:	48 8b 38             	mov    (%rax),%rdi
    1429:	48 8d 35 f5 0b 00 00 	lea    0xbf5(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    1430:	4c 89 fa             	mov    %r15,%rdx
    1433:	4c 89 e1             	mov    %r12,%rcx
    1436:	31 c0                	xor    %eax,%eax
    1438:	e8 33 fc ff ff       	call   1070 <fprintf@plt>
    143d:	48 8b 3c 24          	mov    (%rsp),%rdi
    1441:	e8 ea fb ff ff       	call   1030 <free@plt>
    1446:	41 be 01 00 00 00    	mov    $0x1,%r14d
    144c:	e9 63 ff ff ff       	jmp    13b4 <main+0x204>

Disassembly of section .fini:

0000000000001454 <_fini>:
    1454:	f3 0f 1e fa          	endbr64
    1458:	48 83 ec 08          	sub    $0x8,%rsp
    145c:	48 83 c4 08          	add    $0x8,%rsp
    1460:	c3                   	ret
