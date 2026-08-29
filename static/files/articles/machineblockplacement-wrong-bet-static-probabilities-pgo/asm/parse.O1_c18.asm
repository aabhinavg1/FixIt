
/home/aitr/compilersutra/FixIt_Compilersutra/static/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/results/perf/parse.O1_c18:     file format elf64-x86-64


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
    11ba:	48 83 ec 38          	sub    $0x38,%rsp
    11be:	bb 00 00 10 00       	mov    $0x100000,%ebx
    11c3:	83 ff 02             	cmp    $0x2,%edi
    11c6:	7c 13                	jl     11db <main+0x2b>
    11c8:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    11cc:	31 f6                	xor    %esi,%esi
    11ce:	ba 0a 00 00 00       	mov    $0xa,%edx
    11d3:	e8 88 fe ff ff       	call   1060 <strtoll@plt>
    11d8:	48 89 c3             	mov    %rax,%rbx
    11db:	48 8d 3c 5b          	lea    (%rbx,%rbx,2),%rdi
    11df:	48 c1 e7 04          	shl    $0x4,%rdi
    11e3:	48 83 c7 40          	add    $0x40,%rdi
    11e7:	48 89 7c 24 28       	mov    %rdi,0x28(%rsp)
    11ec:	e8 9f fe ff ff       	call   1090 <malloc@plt>
    11f1:	48 89 44 24 10       	mov    %rax,0x10(%rsp)
    11f6:	48 85 c0             	test   %rax,%rax
    11f9:	0f 84 70 02 00 00    	je     146f <main+0x2bf>
    11ff:	48 85 db             	test   %rbx,%rbx
    1202:	40 0f 95 c5          	setne  %bpl
    1206:	48 89 5c 24 18       	mov    %rbx,0x18(%rsp)
    120b:	0f 84 29 01 00 00    	je     133a <main+0x18a>
    1211:	48 f7 db             	neg    %rbx
    1214:	48 89 5c 24 20       	mov    %rbx,0x20(%rsp)
    1219:	41 bd 1d 00 00 00    	mov    $0x1d,%r13d
    121f:	41 be 01 00 00 00    	mov    $0x1,%r14d
    1225:	bb 59 17 b7 d1       	mov    $0xd1b71759,%ebx
    122a:	c7 44 24 0c 00 00 00 	movl   $0x0,0xc(%rsp)
    1231:	00 
    1232:	45 31 e4             	xor    %r12d,%r12d
    1235:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
    123c:	00 00 00 00 
    1240:	41 69 cd 0d 66 19 00 	imul   $0x19660d,%r13d,%ecx
    1247:	81 c1 5f f3 6e 3c    	add    $0x3c6ef35f,%ecx
    124d:	48 89 c8             	mov    %rcx,%rax
    1250:	48 0f af c3          	imul   %rbx,%rax
    1254:	48 c1 e8 2d          	shr    $0x2d,%rax
    1258:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    125e:	44 69 c1 0d 66 19 00 	imul   $0x19660d,%ecx,%r8d
    1265:	29 c1                	sub    %eax,%ecx
    1267:	41 81 c0 5f f3 6e 3c 	add    $0x3c6ef35f,%r8d
    126e:	4c 89 c0             	mov    %r8,%rax
    1271:	48 0f af c3          	imul   %rbx,%rax
    1275:	48 c1 e8 2d          	shr    $0x2d,%rax
    1279:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    127f:	45 69 e8 0d 66 19 00 	imul   $0x19660d,%r8d,%r13d
    1286:	41 29 c0             	sub    %eax,%r8d
    1289:	41 81 c5 5f f3 6e 3c 	add    $0x3c6ef35f,%r13d
    1290:	4c 89 e8             	mov    %r13,%rax
    1293:	48 0f af c3          	imul   %rbx,%rax
    1297:	48 c1 e8 2d          	shr    $0x2d,%rax
    129b:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    12a1:	45 89 e9             	mov    %r13d,%r9d
    12a4:	41 29 c1             	sub    %eax,%r9d
    12a7:	48 8b 44 24 10       	mov    0x10(%rsp),%rax
    12ac:	4a 8d 3c 20          	lea    (%rax,%r12,1),%rdi
    12b0:	4c 8b 7c 24 28       	mov    0x28(%rsp),%r15
    12b5:	4d 29 e7             	sub    %r12,%r15
    12b8:	4c 89 fe             	mov    %r15,%rsi
    12bb:	48 8d 15 47 0d 00 00 	lea    0xd47(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    12c2:	31 c0                	xor    %eax,%eax
    12c4:	e8 87 fd ff ff       	call   1050 <snprintf@plt>
    12c9:	85 c0                	test   %eax,%eax
    12cb:	78 33                	js     1300 <main+0x150>
    12cd:	89 c0                	mov    %eax,%eax
    12cf:	49 39 c7             	cmp    %rax,%r15
    12d2:	76 2c                	jbe    1300 <main+0x150>
    12d4:	49 01 c4             	add    %rax,%r12
    12d7:	b0 01                	mov    $0x1,%al
    12d9:	84 c0                	test   %al,%al
    12db:	74 68                	je     1345 <main+0x195>
    12dd:	4c 3b 74 24 18       	cmp    0x18(%rsp),%r14
    12e2:	40 0f 92 c5          	setb   %bpl
    12e6:	48 8b 44 24 20       	mov    0x20(%rsp),%rax
    12eb:	4c 01 f0             	add    %r14,%rax
    12ee:	48 ff c0             	inc    %rax
    12f1:	49 ff c6             	inc    %r14
    12f4:	48 83 f8 01          	cmp    $0x1,%rax
    12f8:	0f 85 42 ff ff ff    	jne    1240 <main+0x90>
    12fe:	eb 45                	jmp    1345 <main+0x195>
    1300:	48 8b 05 d9 2c 00 00 	mov    0x2cd9(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1307:	48 8b 08             	mov    (%rax),%rcx
    130a:	be 11 00 00 00       	mov    $0x11,%esi
    130f:	ba 01 00 00 00       	mov    $0x1,%edx
    1314:	48 8d 3d f8 0c 00 00 	lea    0xcf8(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    131b:	e8 80 fd ff ff       	call   10a0 <fwrite@plt>
    1320:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1325:	e8 06 fd ff ff       	call   1030 <free@plt>
    132a:	c7 44 24 0c 02 00 00 	movl   $0x2,0xc(%rsp)
    1331:	00 
    1332:	31 c0                	xor    %eax,%eax
    1334:	84 c0                	test   %al,%al
    1336:	75 a5                	jne    12dd <main+0x12d>
    1338:	eb 0b                	jmp    1345 <main+0x195>
    133a:	45 31 e4             	xor    %r12d,%r12d
    133d:	c7 44 24 0c 00 00 00 	movl   $0x0,0xc(%rsp)
    1344:	00 
    1345:	40 f6 c5 01          	test   $0x1,%bpl
    1349:	8b 5c 24 0c          	mov    0xc(%rsp),%ebx
    134d:	0f 85 fc 00 00 00    	jne    144f <main+0x29f>
    1353:	48 8b 44 24 10       	mov    0x10(%rsp),%rax
    1358:	48 89 c3             	mov    %rax,%rbx
    135b:	4c 01 e3             	add    %r12,%rbx
    135e:	45 31 f6             	xor    %r14d,%r14d
    1361:	4c 8d 7c 24 30       	lea    0x30(%rsp),%r15
    1366:	49 89 c4             	mov    %rax,%r12
    1369:	eb 13                	jmp    137e <main+0x1ce>
    136b:	0f 1f 44 00 00       	nopl   0x0(%rax,%rax,1)
    1370:	48 89 ca             	mov    %rcx,%rdx
    1373:	49 89 c6             	mov    %rax,%r14
    1376:	4c 39 e1             	cmp    %r12,%rcx
    1379:	49 89 d4             	mov    %rdx,%r12
    137c:	74 4d                	je     13cb <main+0x21b>
    137e:	49 39 dc             	cmp    %rbx,%r12
    1381:	73 45                	jae    13c8 <main+0x218>
    1383:	4c 89 e7             	mov    %r12,%rdi
    1386:	4c 89 fe             	mov    %r15,%rsi
    1389:	ba 0a 00 00 00       	mov    $0xa,%edx
    138e:	e8 ed fc ff ff       	call   1080 <strtol@plt>
    1393:	48 8b 4c 24 30       	mov    0x30(%rsp),%rcx
    1398:	4c 39 e1             	cmp    %r12,%rcx
    139b:	74 23                	je     13c0 <main+0x210>
    139d:	4c 01 f0             	add    %r14,%rax
    13a0:	48 39 d9             	cmp    %rbx,%rcx
    13a3:	73 cb                	jae    1370 <main+0x1c0>
    13a5:	0f b6 11             	movzbl (%rcx),%edx
    13a8:	83 fa 2c             	cmp    $0x2c,%edx
    13ab:	74 05                	je     13b2 <main+0x202>
    13ad:	83 fa 0a             	cmp    $0xa,%edx
    13b0:	75 be                	jne    1370 <main+0x1c0>
    13b2:	48 8d 51 01          	lea    0x1(%rcx),%rdx
    13b6:	eb bb                	jmp    1373 <main+0x1c3>
    13b8:	0f 1f 84 00 00 00 00 	nopl   0x0(%rax,%rax,1)
    13bf:	00 
    13c0:	4c 89 f0             	mov    %r14,%rax
    13c3:	4c 89 e2             	mov    %r12,%rdx
    13c6:	eb ab                	jmp    1373 <main+0x1c3>
    13c8:	4c 89 f0             	mov    %r14,%rax
    13cb:	48 8b 54 24 18       	mov    0x18(%rsp),%rdx
    13d0:	48 83 fa 63          	cmp    $0x63,%rdx
    13d4:	7e 24                	jle    13fa <main+0x24a>
    13d6:	48 83 fa 64          	cmp    $0x64,%rdx
    13da:	74 32                	je     140e <main+0x25e>
    13dc:	48 81 fa e8 03 00 00 	cmp    $0x3e8,%rdx
    13e3:	74 31                	je     1416 <main+0x266>
    13e5:	48 81 fa 00 00 10 00 	cmp    $0x100000,%rdx
    13ec:	75 72                	jne    1460 <main+0x2b0>
    13ee:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    13f5:	00 00 00 
    13f8:	eb 2a                	jmp    1424 <main+0x274>
    13fa:	48 83 fa 01          	cmp    $0x1,%rdx
    13fe:	74 1e                	je     141e <main+0x26e>
    1400:	48 83 fa 0a          	cmp    $0xa,%rdx
    1404:	75 5a                	jne    1460 <main+0x2b0>
    1406:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    140c:	eb 16                	jmp    1424 <main+0x274>
    140e:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    1414:	eb 0e                	jmp    1424 <main+0x274>
    1416:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    141c:	eb 06                	jmp    1424 <main+0x274>
    141e:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    1424:	31 c9                	xor    %ecx,%ecx
    1426:	84 c9                	test   %cl,%cl
    1428:	75 05                	jne    142f <main+0x27f>
    142a:	4c 39 c0             	cmp    %r8,%rax
    142d:	75 67                	jne    1496 <main+0x2e6>
    142f:	48 8d 3d 14 0c 00 00 	lea    0xc14(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    1436:	31 db                	xor    %ebx,%ebx
    1438:	48 89 d6             	mov    %rdx,%rsi
    143b:	48 89 c2             	mov    %rax,%rdx
    143e:	31 c0                	xor    %eax,%eax
    1440:	e8 fb fb ff ff       	call   1040 <printf@plt>
    1445:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    144a:	e8 e1 fb ff ff       	call   1030 <free@plt>
    144f:	89 d8                	mov    %ebx,%eax
    1451:	48 83 c4 38          	add    $0x38,%rsp
    1455:	5b                   	pop    %rbx
    1456:	41 5c                	pop    %r12
    1458:	41 5d                	pop    %r13
    145a:	41 5e                	pop    %r14
    145c:	41 5f                	pop    %r15
    145e:	5d                   	pop    %rbp
    145f:	c3                   	ret
    1460:	49 c7 c0 ff ff ff ff 	mov    $0xffffffffffffffff,%r8
    1467:	b1 01                	mov    $0x1,%cl
    1469:	84 c9                	test   %cl,%cl
    146b:	74 bd                	je     142a <main+0x27a>
    146d:	eb c0                	jmp    142f <main+0x27f>
    146f:	48 8b 05 6a 2b 00 00 	mov    0x2b6a(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1476:	48 8b 08             	mov    (%rax),%rcx
    1479:	48 8d 3d 84 0b 00 00 	lea    0xb84(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    1480:	be 04 00 00 00       	mov    $0x4,%esi
    1485:	ba 01 00 00 00       	mov    $0x1,%edx
    148a:	e8 11 fc ff ff       	call   10a0 <fwrite@plt>
    148f:	bb 02 00 00 00       	mov    $0x2,%ebx
    1494:	eb b9                	jmp    144f <main+0x29f>
    1496:	48 8b 0d 43 2b 00 00 	mov    0x2b43(%rip),%rcx        # 3fe0 <stderr@GLIBC_2.2.5>
    149d:	48 8b 39             	mov    (%rcx),%rdi
    14a0:	48 8d 35 7e 0b 00 00 	lea    0xb7e(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    14a7:	48 89 c1             	mov    %rax,%rcx
    14aa:	31 c0                	xor    %eax,%eax
    14ac:	e8 bf fb ff ff       	call   1070 <fprintf@plt>
    14b1:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    14b6:	e8 75 fb ff ff       	call   1030 <free@plt>
    14bb:	bb 01 00 00 00       	mov    $0x1,%ebx
    14c0:	eb 8d                	jmp    144f <main+0x29f>

Disassembly of section .fini:

00000000000014c4 <_fini>:
    14c4:	f3 0f 1e fa          	endbr64
    14c8:	48 83 ec 08          	sub    $0x8,%rsp
    14cc:	48 83 c4 08          	add    $0x8,%rsp
    14d0:	c3                   	ret
