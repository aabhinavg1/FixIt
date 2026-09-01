
results/perf/parse.O2_pgo_np:     file format elf64-x86-64


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
    10d1:	7d 08                	jge    10db <main+0x1b>
    10d3:	41 bf 00 00 10 00    	mov    $0x100000,%r15d
    10d9:	eb 13                	jmp    10ee <main+0x2e>
    10db:	48 8b 7e 08          	mov    0x8(%rsi),%rdi
    10df:	31 f6                	xor    %esi,%esi
    10e1:	ba 0a 00 00 00       	mov    $0xa,%edx
    10e6:	e8 75 ff ff ff       	call   1060 <strtoll@plt>
    10eb:	49 89 c7             	mov    %rax,%r15
    10ee:	4b 8d 3c 7f          	lea    (%r15,%r15,2),%rdi
    10f2:	48 c1 e7 04          	shl    $0x4,%rdi
    10f6:	48 83 c7 40          	add    $0x40,%rdi
    10fa:	48 89 7c 24 18       	mov    %rdi,0x18(%rsp)
    10ff:	e8 8c ff ff ff       	call   1090 <malloc@plt>
    1104:	48 89 44 24 10       	mov    %rax,0x10(%rsp)
    1109:	48 85 c0             	test   %rax,%rax
    110c:	74 2d                	je     113b <main+0x7b>
    110e:	31 db                	xor    %ebx,%ebx
    1110:	4d 85 ff             	test   %r15,%r15
    1113:	75 50                	jne    1165 <main+0xa5>
    1115:	45 31 e4             	xor    %r12d,%r12d
    1118:	48 8d 3d 2b 0f 00 00 	lea    0xf2b(%rip),%rdi        # 204a <_IO_stdin_used+0x4a>
    111f:	4c 89 fe             	mov    %r15,%rsi
    1122:	4c 89 e2             	mov    %r12,%rdx
    1125:	31 c0                	xor    %eax,%eax
    1127:	e8 14 ff ff ff       	call   1040 <printf@plt>
    112c:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    1131:	e8 fa fe ff ff       	call   1030 <free@plt>
    1136:	e9 19 02 00 00       	jmp    1354 <main+0x294>
    113b:	48 8b 05 9e 2e 00 00 	mov    0x2e9e(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1142:	48 8b 08             	mov    (%rax),%rcx
    1145:	48 8d 3d b8 0e 00 00 	lea    0xeb8(%rip),%rdi        # 2004 <_IO_stdin_used+0x4>
    114c:	be 04 00 00 00       	mov    $0x4,%esi
    1151:	ba 01 00 00 00       	mov    $0x1,%edx
    1156:	e8 45 ff ff ff       	call   10a0 <fwrite@plt>
    115b:	bb 02 00 00 00       	mov    $0x2,%ebx
    1160:	e9 ef 01 00 00       	jmp    1354 <main+0x294>
    1165:	41 bc 1d 00 00 00    	mov    $0x1d,%r12d
    116b:	41 be 5f f3 6e 3c    	mov    $0x3c6ef35f,%r14d
    1171:	bb 59 17 b7 d1       	mov    $0xd1b71759,%ebx
    1176:	4c 89 7c 24 08       	mov    %r15,0x8(%rsp)
    117b:	4d 89 fd             	mov    %r15,%r13
    117e:	45 31 ff             	xor    %r15d,%r15d
    1181:	41 69 cc 0d 66 19 00 	imul   $0x19660d,%r12d,%ecx
    1188:	44 01 f1             	add    %r14d,%ecx
    118b:	48 89 c8             	mov    %rcx,%rax
    118e:	48 0f af c3          	imul   %rbx,%rax
    1192:	48 c1 e8 2d          	shr    $0x2d,%rax
    1196:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    119c:	44 69 c1 0d 66 19 00 	imul   $0x19660d,%ecx,%r8d
    11a3:	29 c1                	sub    %eax,%ecx
    11a5:	45 01 f0             	add    %r14d,%r8d
    11a8:	4c 89 c0             	mov    %r8,%rax
    11ab:	48 0f af c3          	imul   %rbx,%rax
    11af:	48 c1 e8 2d          	shr    $0x2d,%rax
    11b3:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    11b9:	45 69 e0 0d 66 19 00 	imul   $0x19660d,%r8d,%r12d
    11c0:	41 29 c0             	sub    %eax,%r8d
    11c3:	45 01 f4             	add    %r14d,%r12d
    11c6:	4c 89 e0             	mov    %r12,%rax
    11c9:	48 0f af c3          	imul   %rbx,%rax
    11cd:	48 c1 e8 2d          	shr    $0x2d,%rax
    11d1:	69 c0 10 27 00 00    	imul   $0x2710,%eax,%eax
    11d7:	45 89 e1             	mov    %r12d,%r9d
    11da:	41 29 c1             	sub    %eax,%r9d
    11dd:	48 8b 44 24 10       	mov    0x10(%rsp),%rax
    11e2:	4a 8d 3c 38          	lea    (%rax,%r15,1),%rdi
    11e6:	48 8b 6c 24 18       	mov    0x18(%rsp),%rbp
    11eb:	4c 29 fd             	sub    %r15,%rbp
    11ee:	48 89 ee             	mov    %rbp,%rsi
    11f1:	48 8d 15 11 0e 00 00 	lea    0xe11(%rip),%rdx        # 2009 <_IO_stdin_used+0x9>
    11f8:	31 c0                	xor    %eax,%eax
    11fa:	e8 51 fe ff ff       	call   1050 <snprintf@plt>
    11ff:	85 c0                	test   %eax,%eax
    1201:	78 07                	js     120a <main+0x14a>
    1203:	89 c0                	mov    %eax,%eax
    1205:	48 39 c5             	cmp    %rax,%rbp
    1208:	77 34                	ja     123e <main+0x17e>
    120a:	48 8b 05 cf 2d 00 00 	mov    0x2dcf(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    1211:	48 8b 08             	mov    (%rax),%rcx
    1214:	48 8d 3d f8 0d 00 00 	lea    0xdf8(%rip),%rdi        # 2013 <_IO_stdin_used+0x13>
    121b:	be 11 00 00 00       	mov    $0x11,%esi
    1220:	ba 01 00 00 00       	mov    $0x1,%edx
    1225:	e8 76 fe ff ff       	call   10a0 <fwrite@plt>
    122a:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    122f:	e8 fc fd ff ff       	call   1030 <free@plt>
    1234:	bb 02 00 00 00       	mov    $0x2,%ebx
    1239:	e9 16 01 00 00       	jmp    1354 <main+0x294>
    123e:	49 01 c7             	add    %rax,%r15
    1241:	49 ff cd             	dec    %r13
    1244:	0f 85 37 ff ff ff    	jne    1181 <main+0xc1>
    124a:	4d 85 ff             	test   %r15,%r15
    124d:	7f 0a                	jg     1259 <main+0x199>
    124f:	45 31 e4             	xor    %r12d,%r12d
    1252:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1257:	eb 52                	jmp    12ab <main+0x1eb>
    1259:	48 8b 4c 24 10       	mov    0x10(%rsp),%rcx
    125e:	48 89 cb             	mov    %rcx,%rbx
    1261:	4c 01 fb             	add    %r15,%rbx
    1264:	45 31 e4             	xor    %r12d,%r12d
    1267:	4c 8d 6c 24 20       	lea    0x20(%rsp),%r13
    126c:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    1271:	48 89 cd             	mov    %rcx,%rbp
    1274:	48 89 cf             	mov    %rcx,%rdi
    1277:	4c 89 ee             	mov    %r13,%rsi
    127a:	ba 0a 00 00 00       	mov    $0xa,%edx
    127f:	e8 fc fd ff ff       	call   1080 <strtol@plt>
    1284:	48 8b 4c 24 20       	mov    0x20(%rsp),%rcx
    1289:	48 39 e9             	cmp    %rbp,%rcx
    128c:	74 1d                	je     12ab <main+0x1eb>
    128e:	48 39 d9             	cmp    %rbx,%rcx
    1291:	73 10                	jae    12a3 <main+0x1e3>
    1293:	0f b6 11             	movzbl (%rcx),%edx
    1296:	83 fa 2c             	cmp    $0x2c,%edx
    1299:	74 05                	je     12a0 <main+0x1e0>
    129b:	83 fa 0a             	cmp    $0xa,%edx
    129e:	75 03                	jne    12a3 <main+0x1e3>
    12a0:	48 ff c1             	inc    %rcx
    12a3:	49 01 c4             	add    %rax,%r12
    12a6:	48 39 d9             	cmp    %rbx,%rcx
    12a9:	72 c6                	jb     1271 <main+0x1b1>
    12ab:	49 81 ff 00 00 10 00 	cmp    $0x100000,%r15
    12b2:	74 5e                	je     1312 <main+0x252>
    12b4:	49 83 ff 63          	cmp    $0x63,%r15
    12b8:	7f 29                	jg     12e3 <main+0x223>
    12ba:	41 b8 19 30 00 00    	mov    $0x3019,%r8d
    12c0:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    12c5:	49 83 ff 01          	cmp    $0x1,%r15
    12c9:	bb 00 00 00 00       	mov    $0x0,%ebx
    12ce:	74 4e                	je     131e <main+0x25e>
    12d0:	49 83 ff 0a          	cmp    $0xa,%r15
    12d4:	75 20                	jne    12f6 <main+0x236>
    12d6:	41 b8 7d 23 02 00    	mov    $0x2237d,%r8d
    12dc:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    12e1:	eb 39                	jmp    131c <main+0x25c>
    12e3:	48 83 7c 24 08 64    	cmpq   $0x64,0x8(%rsp)
    12e9:	74 17                	je     1302 <main+0x242>
    12eb:	48 81 7c 24 08 e8 03 	cmpq   $0x3e8,0x8(%rsp)
    12f2:	00 00 
    12f4:	74 14                	je     130a <main+0x24a>
    12f6:	4c 8b 7c 24 08       	mov    0x8(%rsp),%r15
    12fb:	31 db                	xor    %ebx,%ebx
    12fd:	e9 16 fe ff ff       	jmp    1118 <main+0x58>
    1302:	41 b8 de 5d 16 00    	mov    $0x165dde,%r8d
    1308:	eb d2                	jmp    12dc <main+0x21c>
    130a:	41 b8 3c 08 e5 00    	mov    $0xe5083c,%r8d
    1310:	eb ca                	jmp    12dc <main+0x21c>
    1312:	49 b8 40 d2 36 a9 03 	movabs $0x3a936d240,%r8
    1319:	00 00 00 
    131c:	31 db                	xor    %ebx,%ebx
    131e:	4d 39 c4             	cmp    %r8,%r12
    1321:	0f 84 f1 fd ff ff    	je     1118 <main+0x58>
    1327:	48 8b 05 b2 2c 00 00 	mov    0x2cb2(%rip),%rax        # 3fe0 <stderr@GLIBC_2.2.5>
    132e:	48 8b 38             	mov    (%rax),%rdi
    1331:	48 8d 35 ed 0c 00 00 	lea    0xced(%rip),%rsi        # 2025 <_IO_stdin_used+0x25>
    1338:	4c 89 fa             	mov    %r15,%rdx
    133b:	4c 89 e1             	mov    %r12,%rcx
    133e:	31 c0                	xor    %eax,%eax
    1340:	e8 2b fd ff ff       	call   1070 <fprintf@plt>
    1345:	48 8b 7c 24 10       	mov    0x10(%rsp),%rdi
    134a:	e8 e1 fc ff ff       	call   1030 <free@plt>
    134f:	bb 01 00 00 00       	mov    $0x1,%ebx
    1354:	89 d8                	mov    %ebx,%eax
    1356:	48 83 c4 28          	add    $0x28,%rsp
    135a:	5b                   	pop    %rbx
    135b:	41 5c                	pop    %r12
    135d:	41 5d                	pop    %r13
    135f:	41 5e                	pop    %r14
    1361:	41 5f                	pop    %r15
    1363:	5d                   	pop    %rbp
    1364:	c3                   	ret
    1365:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    136c:	00 00 00 
    136f:	90                   	nop

0000000000001370 <_start>:
    1370:	f3 0f 1e fa          	endbr64
    1374:	31 ed                	xor    %ebp,%ebp
    1376:	49 89 d1             	mov    %rdx,%r9
    1379:	5e                   	pop    %rsi
    137a:	48 89 e2             	mov    %rsp,%rdx
    137d:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
    1381:	50                   	push   %rax
    1382:	54                   	push   %rsp
    1383:	45 31 c0             	xor    %r8d,%r8d
    1386:	31 c9                	xor    %ecx,%ecx
    1388:	48 8d 3d 31 fd ff ff 	lea    -0x2cf(%rip),%rdi        # 10c0 <main>
    138f:	ff 15 23 2c 00 00    	call   *0x2c23(%rip)        # 3fb8 <__libc_start_main@GLIBC_2.34>
    1395:	f4                   	hlt
    1396:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    139d:	00 00 00 

00000000000013a0 <deregister_tm_clones>:
    13a0:	48 8d 3d a9 2c 00 00 	lea    0x2ca9(%rip),%rdi        # 4050 <__TMC_END__>
    13a7:	48 8d 05 a2 2c 00 00 	lea    0x2ca2(%rip),%rax        # 4050 <__TMC_END__>
    13ae:	48 39 f8             	cmp    %rdi,%rax
    13b1:	74 15                	je     13c8 <deregister_tm_clones+0x28>
    13b3:	48 8b 05 06 2c 00 00 	mov    0x2c06(%rip),%rax        # 3fc0 <_ITM_deregisterTMCloneTable@Base>
    13ba:	48 85 c0             	test   %rax,%rax
    13bd:	74 09                	je     13c8 <deregister_tm_clones+0x28>
    13bf:	ff e0                	jmp    *%rax
    13c1:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    13c8:	c3                   	ret
    13c9:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

00000000000013d0 <register_tm_clones>:
    13d0:	48 8d 3d 79 2c 00 00 	lea    0x2c79(%rip),%rdi        # 4050 <__TMC_END__>
    13d7:	48 8d 35 72 2c 00 00 	lea    0x2c72(%rip),%rsi        # 4050 <__TMC_END__>
    13de:	48 29 fe             	sub    %rdi,%rsi
    13e1:	48 89 f0             	mov    %rsi,%rax
    13e4:	48 c1 ee 3f          	shr    $0x3f,%rsi
    13e8:	48 c1 f8 03          	sar    $0x3,%rax
    13ec:	48 01 c6             	add    %rax,%rsi
    13ef:	48 d1 fe             	sar    $1,%rsi
    13f2:	74 14                	je     1408 <register_tm_clones+0x38>
    13f4:	48 8b 05 d5 2b 00 00 	mov    0x2bd5(%rip),%rax        # 3fd0 <_ITM_registerTMCloneTable@Base>
    13fb:	48 85 c0             	test   %rax,%rax
    13fe:	74 08                	je     1408 <register_tm_clones+0x38>
    1400:	ff e0                	jmp    *%rax
    1402:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)
    1408:	c3                   	ret
    1409:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001410 <__do_global_dtors_aux>:
    1410:	f3 0f 1e fa          	endbr64
    1414:	80 3d 35 2c 00 00 00 	cmpb   $0x0,0x2c35(%rip)        # 4050 <__TMC_END__>
    141b:	75 2b                	jne    1448 <__do_global_dtors_aux+0x38>
    141d:	55                   	push   %rbp
    141e:	48 83 3d b2 2b 00 00 	cmpq   $0x0,0x2bb2(%rip)        # 3fd8 <__cxa_finalize@GLIBC_2.2.5>
    1425:	00 
    1426:	48 89 e5             	mov    %rsp,%rbp
    1429:	74 0c                	je     1437 <__do_global_dtors_aux+0x27>
    142b:	48 8b 3d 16 2c 00 00 	mov    0x2c16(%rip),%rdi        # 4048 <__dso_handle>
    1432:	e8 79 fc ff ff       	call   10b0 <__cxa_finalize@plt>
    1437:	e8 64 ff ff ff       	call   13a0 <deregister_tm_clones>
    143c:	c6 05 0d 2c 00 00 01 	movb   $0x1,0x2c0d(%rip)        # 4050 <__TMC_END__>
    1443:	5d                   	pop    %rbp
    1444:	c3                   	ret
    1445:	0f 1f 00             	nopl   (%rax)
    1448:	c3                   	ret
    1449:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)

0000000000001450 <frame_dummy>:
    1450:	f3 0f 1e fa          	endbr64
    1454:	e9 77 ff ff ff       	jmp    13d0 <register_tm_clones>
    1459:	0f 1f 00             	nopl   (%rax)

Disassembly of section .fini:

000000000000145c <_fini>:
    145c:	f3 0f 1e fa          	endbr64
    1460:	48 83 ec 08          	sub    $0x8,%rsp
    1464:	48 83 c4 08          	add    $0x8,%rsp
    1468:	c3                   	ret
