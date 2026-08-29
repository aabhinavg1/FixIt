
/tmp/mbb_revalidate/c18/parse.O2_pgo:     file format elf64-x86-64


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

00000000000010c0 <main>:
    10c0:	55                   	push   %rbp
    10c1:	41 57                	push   %r15
    10c3:	41 56                	push   %r14
    10c5:	41 55                	push   %r13
    10c7:	41 54                	push   %r12
    10c9:	53                   	push   %rbx
    10ca:	48 83 ec 28          	sub    $0x28,%rsp
    10ce:	83 ff 02             	cmp    $0x2,%edi
    10d1:	0f 8c ea 01 00 00    	jl     12c1 <main+0x201>
    10d7:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    10db:	31 f6                	xor    %esi,%esi
    10dd:	ba 0a 00 00 00       	mov    $0xa,%edx
    10e2:	e8 79 ff ff ff       	call   1060 <strtoll@plt>
    10e7:	49 89 c7             	mov    %rax,%r15
    10ea:	4b 8d 3c 7f          	lea    (%r15,%r15,2),%rdi
    10ee:	48 c1 e7 04          	shl    $0x4,%rdi
    10f2:	48 83 c7 40          	add    $0x40,%rdi
    10f6:	48 89 7c 24 18       	mov    %rdi,0x18(%rsp)
    10fb:	e8 90 ff ff ff       	call   1090 <malloc@plt>
    1100:	48 89 44 24 10       	mov    %rax,0x10(%rsp)
    1105:	48 85 c0             	test   %rax,%rax
    1108:	0f 84 be 01 00 00    	je     12cc <main+0x20c>
    110e:	31 db                	xor    %ebx,%ebx
    1110:	4d 85 ff             	test   %r15,%r15
    1113:	0f 84 72 01 00 00    	je     128b <main+0x1cb>
    1119:	41 bc 1d 00 00 00    	mov    $0x1d,%r12d
    111f:	41 be 5f f3 6e 3c    	mov    $0x3c6ef35f,%r14d
    1125:	bb 59 17 b7 d1       	mov    $0xd1b71759,%ebx
    112a:	4c 89 7c 24 08       	mov    %r15,0x8(%rsp)
    112f:	4d 89 fd             	mov    %r15,%r13
    1132:	45 31 ff             	xor    %r15d,%r15d
    1135:	41 69 cc 0d 66 19 00 	imul   $0x19660d,%r12d,%ecx
    113c:	44 01 f1             	add    %r14d,%ecx
    113f:	48 89 c8             	mov    %rcx,%rax
    1142:	48 0f af c3          	imul   %rbx,%rax
    1146:	48 c1 e8 2d          	shr    $0x2d,%rax
    114a:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    1150:	44 69 c1 0d 66 19 00 	imul   $0x19660d,%ecx,%r8d
    1157:	29 c1                	sub    %eax,%ecx
    1159:	45 01 f0             	add    %r14d,%r8d
    115c:	4c 89 c0             	mov    %r8,%rax
    115f:	48 0f af c3          	imul   %rbx,%rax
    1163:	48 c1 e8 2d          	shr    $0x2d,%rax
    1167:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    116d:	45 69 e0 0d 66 19 00 	imul   $0x19660d,%r8d,%r12d
    1174:	41 29 c0             	sub    %eax,%r8d
    1177:	45 01 f4             	add    %r14d,%r12d
    117a:	4c 89 e0             	mov    %r12,%rax
    117d:	48 0f af c3          	imul   %rbx,%rax
    1181:	48 c1 e8 2d          	shr    $0x2d,%rax
    1185:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    118b:	45 89 e1             	mov    %r12d,%r9d
    118e:	41 29 c1             	sub    %eax,%r9d
    1191:	48 8b 44 24 10       	mov    0x10(%rsp),%rax
    1196:	4a 8d 3c 38          	lea    (%rax,%r15,1),%rdi
    119a:	48 8b 6c 24 18       	mov    0x18(%rsp),%rbp
    119f:	4c 29 fd             	sub    %r15,%rbp
    11a2:	48 89 ee             	mov    %rbp,%rsi
    11a5:	48 8d 15 5d 0e 00 00 	lea    0xe5d(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    11ac:	31 c0                	xor    %eax,%eax
    11ae:	e8 9d fe ff ff       	call   1050 <snprintf@plt>
    11b3:	85 c0                	test   %eax,%eax
    11b5:	0f 88 d5 00 00 00    	js     1290 <main+0x1d0>
    11bb:	89 c0                	mov    %eax,%eax
    11bd:	48 39 c5             	cmp    %rax,%rbp
    11c0:	0f 86 ca 00 00 00    	jbe    1290 <main+0x1d0>
    11c6:	49 01 c7             	add    %rax,%r15
    11c9:	49 ff cd             	dec    %r13
    11cc:	0f 85 63 ff ff ff    	jne    1135 <main+0x75>
    11d2:	4d 85 ff             	test   %r15,%r15
    11d5:	0f 8e 18 01 00 00    	jle    12f3 <main+0x233>
    11db:	48 8b 4c 24 10       	mov    0x10(%rsp),%rcx
    11e0:	48 89 cb             	mov    %rcx,%rbx
    11e3:	4c 01 fb             	add    %r15,%rbx
    11e6:	45 31 e4             	xor    %r12d,%r12d
    11e9:	4c 8d 6c 24 20       	lea    0x20(%rsp),%r13
    11ee:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    11f3:	66 66 66 66 2e 0f 1f 	data16 data16 data16 cs nopw 0x0(%rax,%rax,1)
    11fa:	84 00 00 00 00 00 
    1200:	48 89 cd             	mov    %rcx,%rbp
    1203:	48 89 cf             	mov    %rcx,%rdi
    1206:	4c 89 ee             	mov    %r13,%rsi
    1209:	ba 0a 00 00 00       	mov    $0xa,%edx
    120e:	e8 6d fe ff ff       	call   1080 <strtol@plt>
    1213:	48 8b 4c 24 20       	mov    0x20(%rsp),%rcx
    1218:	48 39 e9             	cmp    %rbp,%rcx
    121b:	74 1d                	je     123a <main+0x17a>
    121d:	48 39 d9             	cmp    %rbx,%rcx
    1220:	73 10                	jae    1232 <main+0x172>
    1222:	0f b6 11             	movzbl (%rcx),%edx
    1225:	83 fa 2c             	cmp    $0x2c,%edx
    1228:	74 05                	je     122f <main+0x16f>
    122a:	83 fa 0a             	cmp    $0xa,%edx
    122d:	75 03                	jne    1232 <main+0x172>
    122f:	48 ff c1             	inc    %rcx
    1232:	49 01 c4             	add    %rax,%r12
    1235:	48 39 d9             	cmp    %rbx,%rcx
    1238:	72 c6                	jb     1200 <main+0x140>
    123a:	49 81 ff 00 00 10 00 	cmp    $0x100000,%r15
    1241:	0f 85 b9 00 00 00    	jne    1300 <main+0x240>
    1247:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    124e:	00 00 00 
    1251:	31 db                	xor    %ebx,%ebx
    1253:	4d 39 c4             	cmp    %r8,%r12
    1256:	0f 85 d2 00 00 00    	jne    132e <main+0x26e>
    125c:	48 8d 3d e7 0d 00 00 	lea    0xde7(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    1263:	4c 89 fe             	mov    %r15,%rsi
    1266:	4c 89 e2             	mov    %r12,%rdx
    1269:	31 c0                	xor    %eax,%eax
    126b:	e8 d0 fd ff ff       	call   1040 <printf@plt>
    1270:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1275:	e8 b6 fd ff ff       	call   1030 <free@plt>
    127a:	89 d8                	mov    %ebx,%eax
    127c:	48 83 c4 28          	add    $0x28,%rsp
    1280:	5b                   	pop    %rbx
    1281:	41 5c                	pop    %r12
    1283:	41 5d                	pop    %r13
    1285:	41 5e                	pop    %r14
    1287:	41 5f                	pop    %r15
    1289:	5d                   	pop    %rbp
    128a:	c3                   	ret
    128b:	45 31 e4             	xor    %r12d,%r12d
    128e:	eb cc                	jmp    125c <main+0x19c>
    1290:	48 8b 05 49 2d 00 00 	mov    0x2d49(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1297:	48 8b 08             	mov    (%rax),%rcx
    129a:	48 8d 3d 72 0d 00 00 	lea    0xd72(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    12a1:	be 11 00 00 00       	mov    $0x11,%esi
    12a6:	ba 01 00 00 00       	mov    $0x1,%edx
    12ab:	e8 f0 fd ff ff       	call   10a0 <fwrite@plt>
    12b0:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    12b5:	e8 76 fd ff ff       	call   1030 <free@plt>
    12ba:	bb 02 00 00 00       	mov    $0x2,%ebx
    12bf:	eb b9                	jmp    127a <main+0x1ba>
    12c1:	41 bf 00 00 10 00    	mov    $0x100000,%r15d
    12c7:	e9 1e fe ff ff       	jmp    10ea <main+0x2a>
    12cc:	48 8b 05 0d 2d 00 00 	mov    0x2d0d(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    12d3:	48 8b 08             	mov    (%rax),%rcx
    12d6:	48 8d 3d 27 0d 00 00 	lea    0xd27(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    12dd:	be 04 00 00 00       	mov    $0x4,%esi
    12e2:	ba 01 00 00 00       	mov    $0x1,%edx
    12e7:	e8 b4 fd ff ff       	call   10a0 <fwrite@plt>
    12ec:	bb 02 00 00 00       	mov    $0x2,%ebx
    12f1:	eb 87                	jmp    127a <main+0x1ba>
    12f3:	45 31 e4             	xor    %r12d,%r12d
    12f6:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    12fb:	e9 3a ff ff ff       	jmp    123a <main+0x17a>
    1300:	49 83 ff 63          	cmp    $0x63,%r15
    1304:	7f 5a                	jg     1360 <main+0x2a0>
    1306:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    130c:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1311:	49 83 ff 01          	cmp    $0x1,%r15
    1315:	bb 00 00 00 00       	mov    $0x0,%ebx
    131a:	0f 84 33 ff ff ff    	je     1253 <main+0x193>
    1320:	49 83 ff 0a          	cmp    $0xa,%r15
    1324:	75 65                	jne    138b <main+0x2cb>
    1326:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    132c:	eb 53                	jmp    1381 <main+0x2c1>
    132e:	48 8b 05 ab 2c 00 00 	mov    0x2cab(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1335:	48 8b 38             	mov    (%rax),%rdi
    1338:	48 8d 35 e6 0c 00 00 	lea    0xce6(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    133f:	4c 89 fa             	mov    %r15,%rdx
    1342:	4c 89 e1             	mov    %r12,%rcx
    1345:	31 c0                	xor    %eax,%eax
    1347:	e8 24 fd ff ff       	call   1070 <fprintf@plt>
    134c:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1351:	e8 da fc ff ff       	call   1030 <free@plt>
    1356:	bb 01 00 00 00       	mov    $0x1,%ebx
    135b:	e9 1a ff ff ff       	jmp    127a <main+0x1ba>
    1360:	48 83 7c 24 08 64    	cmpq   $0x64,0x8(%rsp)
    1366:	75 08                	jne    1370 <main+0x2b0>
    1368:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    136e:	eb 11                	jmp    1381 <main+0x2c1>
    1370:	48 81 7c 24 08 e8 03 	cmpq   $0x3e8,0x8(%rsp)
    1377:	00 00 
    1379:	75 10                	jne    138b <main+0x2cb>
    137b:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    1381:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1386:	e9 c6 fe ff ff       	jmp    1251 <main+0x191>
    138b:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1390:	31 db                	xor    %ebx,%ebx
    1392:	e9 c5 fe ff ff       	jmp    125c <main+0x19c>
    1397:	66 0f 1f 84 00 00 00 	nopw   0x0(%rax,%rax,1)
    139e:	00 00 

00000000000013a0 <_start>:
    13a0:	f3 0f 1e fa          	endbr64
    13a4:	31 ed                	xor    %ebp,%ebp
    13a6:	49 89 d1             	mov    %rdx,%r9
    13a9:	5e                   	pop    %rsi
    13aa:	48 89 e2             	mov    %rsp,%rdx
    13ad:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
    13b1:	50                   	push   %rax
    13b2:	54                   	push   %rsp
    13b3:	45 31 c0             	xor    %r8d,%r8d
    13b6:	31 c9                	xor    %ecx,%ecx
    13b8:	48 8d 3d 01 fd ff ff 	lea    -0x2ff(%rip),%rdi        # 10c0 <main>
    13bf:	ff 15 f3 2b 00 00    	call   *0x2bf3(%rip)        # 3fb8 <__libc_start_main@GLIBC_2.34>
    13c5:	f4                   	hlt
    13c6:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    13cd:	00 00 00 

00000000000013d0 <deregister_tm_clones>:
    13d0:	48 8d 3d 79 2c 00 00 	lea    0x2c79(%rip),%rdi        # 4050 <__TMC_END__>
    13d7:	48 8d 05 72 2c 00 00 	lea    0x2c72(%rip),%rax        # 4050 <__TMC_END__>
    13de:	48 39 f8             	cmp    %rdi,%rax
    13e1:	74 15                	je     13f8 <deregister_tm_clones+0x28>
    13e3:	48 8b 05 d6 2b 00 00 	mov    0x2bd6(%rip),%rax        # 3fc0 <_ITM_deregisterTMCloneTable@Base>
    13ea:	48 85 c0             	test   %rax,%rax
    13ed:	74 09                	je     13f8 <deregister_tm_clones+0x28>
    13ef:	ff e0                	jmp    *%rax
    13f1:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    13f8:	c3                   	ret
    13f9:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001400 <register_tm_clones>:
    1400:	48 8d 3d 49 2c 00 00 	lea    0x2c49(%rip),%rdi        # 4050 <__TMC_END__>
    1407:	48 8d 35 42 2c 00 00 	lea    0x2c42(%rip),%rsi        # 4050 <__TMC_END__>
    140e:	48 29 fe             	sub    %rdi,%rsi
    1411:	48 89 f0             	mov    %rsi,%rax
    1414:	48 c1 ee 3f          	shr    $0x3f,%rsi
    1418:	48 c1 f8 03          	sar    $0x3,%rax
    141c:	48 01 c6             	add    %rax,%rsi
    141f:	48 d1 fe             	sar    $1,%rsi
    1422:	74 14                	je     1438 <register_tm_clones+0x38>
    1424:	48 8b 05 a5 2b 00 00 	mov    0x2ba5(%rip),%rax        # 3fd0 <_ITM_registerTMCloneTable@Base>
    142b:	48 85 c0             	test   %rax,%rax
    142e:	74 08                	je     1438 <register_tm_clones+0x38>
    1430:	ff e0                	jmp    *%rax
    1432:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)
    1438:	c3                   	ret
    1439:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001440 <__do_global_dtors_aux>:
    1440:	f3 0f 1e fa          	endbr64
    1444:	80 3d 05 2c 00 00 00 	cmpb   $0x0,0x2c05(%rip)        # 4050 <__TMC_END__>
    144b:	75 2b                	jne    1478 <__do_global_dtors_aux+0x38>
    144d:	55                   	push   %rbp
    144e:	48 83 3d 82 2b 00 00 	cmpq   $0x0,0x2b82(%rip)        # 3fd8 <__cxa_finalize@GLIBC_2.2.5>
    1455:	00 
    1456:	48 89 e5             	mov    %rsp,%rbp
    1459:	74 0c                	je     1467 <__do_global_dtors_aux+0x27>
    145b:	48 8b 3d e6 2b 00 00 	mov    0x2be6(%rip),%rdi        # 4048 <__dso_handle>
    1462:	e8 49 fc ff ff       	call   10b0 <__cxa_finalize@plt>
    1467:	e8 64 ff ff ff       	call   13d0 <deregister_tm_clones>
    146c:	c6 05 dd 2b 00 00 01 	movb   $0x1,0x2bdd(%rip)        # 4050 <__TMC_END__>
    1473:	5d                   	pop    %rbp
    1474:	c3                   	ret
    1475:	0f 1f 00             	nopl   (%rax)
    1478:	c3                   	ret
    1479:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001480 <frame_dummy>:
    1480:	f3 0f 1e fa          	endbr64
    1484:	e9 77 ff ff ff       	jmp    1400 <register_tm_clones>
    1489:	0f 1f 00             	nopl   (%rax)

Disassembly of section .fini:

000000000000148c <_fini>:
    148c:	f3 0f 1e fa          	endbr64
    1490:	48 83 ec 08          	sub    $0x8,%rsp
    1494:	48 83 c4 08          	add    $0x8,%rsp
    1498:	c3                   	ret
