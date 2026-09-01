; ModuleID = '/home/aitr/compilersutra/FixIt_Compilersutra/static/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c'
source_filename = "/home/aitr/compilersutra/FixIt_Compilersutra/static/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128"
target triple = "x86_64-pc-linux-gnu"

@stderr = external local_unnamed_addr global ptr, align 8
@.str = private unnamed_addr constant [5 x i8] c"oom\0A\00", align 1
@.str.1 = private unnamed_addr constant [10 x i8] c"%d,%d,%d\0A\00", align 1
@.str.2 = private unnamed_addr constant [18 x i8] c"buffer too small\0A\00", align 1
@.str.3 = private unnamed_addr constant [37 x i8] c"FAIL lines=%zu sum=%ld expected=%ld\0A\00", align 1
@.str.4 = private unnamed_addr constant [24 x i8] c"PASS lines=%zu sum=%ld\0A\00", align 1

; Function Attrs: nounwind uwtable
define dso_local noundef i32 @main(i32 noundef %0, ptr nocapture noundef readonly %1) local_unnamed_addr #0 !prof !42 {
  %3 = alloca ptr, align 8
  %4 = icmp sgt i32 %0, 1
  br i1 %4, label %5, label %9, !prof !43

5:                                                ; preds = %2
  %6 = getelementptr inbounds ptr, ptr %1, i64 1
  %7 = load ptr, ptr %6, align 8, !tbaa !44
  %8 = tail call i64 @strtoll(ptr nocapture noundef nonnull %7, ptr noundef null, i32 noundef 10) #7
  br label %9

9:                                                ; preds = %2, %5
  %10 = phi i64 [ %8, %5 ], [ 1048576, %2 ]
  %11 = mul i64 %10, 48
  %12 = add i64 %11, 64
  %13 = tail call noalias ptr @malloc(i64 noundef %12) #8
  %14 = icmp eq ptr %13, null
  br i1 %14, label %17, label %15, !prof !48

15:                                               ; preds = %9
  %16 = icmp eq i64 %10, 0
  br i1 %16, label %79, label %20, !prof !49

17:                                               ; preds = %9
  %18 = load ptr, ptr @stderr, align 8, !tbaa !44
  %19 = tail call i64 @fwrite(ptr nonnull @.str, i64 4, i64 1, ptr %18) #9
  br label %82

20:                                               ; preds = %15, %43
  %21 = phi i64 [ %44, %43 ], [ 0, %15 ]
  %22 = phi i64 [ %45, %43 ], [ 0, %15 ]
  %23 = phi i32 [ %31, %43 ], [ 29, %15 ]
  %24 = mul i32 %23, 1664525
  %25 = add i32 %24, 1013904223
  %26 = urem i32 %25, 10000
  %27 = mul i32 %25, 1664525
  %28 = add i32 %27, 1013904223
  %29 = urem i32 %28, 10000
  %30 = mul i32 %28, 1664525
  %31 = add i32 %30, 1013904223
  %32 = urem i32 %31, 10000
  %33 = getelementptr inbounds i8, ptr %13, i64 %21
  %34 = sub i64 %12, %21
  %35 = tail call i32 (ptr, i64, ptr, ...) @snprintf(ptr noundef nonnull %33, i64 noundef %34, ptr noundef nonnull @.str.1, i32 noundef %26, i32 noundef %29, i32 noundef %32) #7
  %36 = icmp slt i32 %35, 0
  br i1 %36, label %40, label %37, !prof !50

37:                                               ; preds = %20
  %38 = zext nneg i32 %35 to i64
  %39 = icmp ugt i64 %34, %38
  br i1 %39, label %43, label %40, !prof !51

40:                                               ; preds = %37, %20
  %41 = load ptr, ptr @stderr, align 8, !tbaa !44
  %42 = tail call i64 @fwrite(ptr nonnull @.str.2, i64 17, i64 1, ptr %41) #9
  tail call void @free(ptr noundef %13) #7
  br label %82

43:                                               ; preds = %37
  %44 = add i64 %21, %38
  %45 = add nuw i64 %22, 1
  %46 = icmp eq i64 %45, %10
  br i1 %46, label %47, label %20, !prof !52, !llvm.loop !53

47:                                               ; preds = %43
  %48 = getelementptr inbounds i8, ptr %13, i64 %44
  %49 = icmp sgt i64 %44, 0
  br i1 %49, label %50, label %67, !prof !55

50:                                               ; preds = %47, %63
  %51 = phi ptr [ %64, %63 ], [ %13, %47 ]
  %52 = phi i64 [ %57, %63 ], [ 0, %47 ]
  call void @llvm.lifetime.start.p0(i64 8, ptr nonnull %3) #7
  %53 = call i64 @strtol(ptr noundef %51, ptr noundef nonnull %3, i32 noundef 10) #7
  %54 = load ptr, ptr %3, align 8, !tbaa !44
  %55 = icmp eq ptr %54, %51
  br i1 %55, label %66, label %56, !prof !56

56:                                               ; preds = %50
  %57 = add nsw i64 %53, %52
  %58 = icmp ult ptr %54, %48
  br i1 %58, label %59, label %63, !prof !57

59:                                               ; preds = %56
  %60 = load i8, ptr %54, align 1, !tbaa !58
  switch i8 %60, label %63 [
    i8 44, label %61
    i8 10, label %61
  ], !prof !59

61:                                               ; preds = %59, %59
  %62 = getelementptr inbounds i8, ptr %54, i64 1
  br label %63

63:                                               ; preds = %56, %61, %59
  %64 = phi ptr [ %54, %59 ], [ %62, %61 ], [ %54, %56 ]
  call void @llvm.lifetime.end.p0(i64 8, ptr nonnull %3) #7
  %65 = icmp ult ptr %64, %48
  br i1 %65, label %50, label %67, !prof !60

66:                                               ; preds = %50
  call void @llvm.lifetime.end.p0(i64 8, ptr nonnull %3) #7
  br label %67

67:                                               ; preds = %63, %47, %66
  %68 = phi i64 [ %52, %66 ], [ 0, %47 ], [ %57, %63 ]
  switch i64 %10, label %79 [
    i64 1, label %73
    i64 10, label %69
    i64 100, label %70
    i64 1000, label %71
    i64 1048576, label %72
  ], !prof !61

69:                                               ; preds = %67
  br label %73

70:                                               ; preds = %67
  br label %73

71:                                               ; preds = %67
  br label %73

72:                                               ; preds = %67
  br label %73

73:                                               ; preds = %67, %69, %70, %71, %72
  %74 = phi i64 [ 15723844160, %72 ], [ 15009852, %71 ], [ 1465822, %70 ], [ 140157, %69 ], [ 12313, %67 ]
  %75 = icmp eq i64 %68, %74
  br i1 %75, label %79, label %76, !prof !55

76:                                               ; preds = %73
  %77 = load ptr, ptr @stderr, align 8, !tbaa !44
  %78 = tail call i32 (ptr, ptr, ...) @fprintf(ptr noundef %77, ptr noundef nonnull @.str.3, i64 noundef %10, i64 noundef %68, i64 noundef %74) #9
  tail call void @free(ptr noundef %13) #7
  br label %82

79:                                               ; preds = %15, %67, %73
  %80 = phi i64 [ %68, %67 ], [ %68, %73 ], [ 0, %15 ]
  %81 = tail call i32 (ptr, ...) @printf(ptr noundef nonnull dereferenceable(1) @.str.4, i64 noundef %10, i64 noundef %80)
  tail call void @free(ptr noundef %13) #7
  br label %82

82:                                               ; preds = %40, %79, %76, %17
  %83 = phi i32 [ 2, %17 ], [ 1, %76 ], [ 0, %79 ], [ 2, %40 ]
  ret i32 %83
}

; Function Attrs: mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.start.p0(i64 immarg, ptr nocapture) #1

; Function Attrs: mustprogress nofree nounwind willreturn allockind("alloc,uninitialized") allocsize(0) memory(inaccessiblemem: readwrite)
declare noalias noundef ptr @malloc(i64 noundef) local_unnamed_addr #2

; Function Attrs: nofree nounwind
declare noundef i32 @fprintf(ptr nocapture noundef, ptr nocapture noundef readonly, ...) local_unnamed_addr #3

; Function Attrs: nofree nounwind
declare noundef i32 @snprintf(ptr noalias nocapture noundef writeonly, i64 noundef, ptr nocapture noundef readonly, ...) local_unnamed_addr #3

; Function Attrs: mustprogress nounwind willreturn allockind("free") memory(argmem: readwrite, inaccessiblemem: readwrite)
declare void @free(ptr allocptr nocapture noundef) local_unnamed_addr #4

; Function Attrs: mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.end.p0(i64 immarg, ptr nocapture) #1

; Function Attrs: mustprogress nofree nounwind willreturn
declare i64 @strtol(ptr noundef readonly, ptr nocapture noundef, i32 noundef) local_unnamed_addr #5

; Function Attrs: nofree nounwind
declare noundef i32 @printf(ptr nocapture noundef readonly, ...) local_unnamed_addr #3

; Function Attrs: mustprogress nofree nounwind willreturn
declare i64 @strtoll(ptr noundef readonly, ptr nocapture noundef, i32 noundef) local_unnamed_addr #5

; Function Attrs: nofree nounwind
declare noundef i64 @fwrite(ptr nocapture noundef, i64 noundef, i64 noundef, ptr nocapture noundef) local_unnamed_addr #6

attributes #0 = { nounwind uwtable "min-legal-vector-width"="0" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #1 = { mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite) }
attributes #2 = { mustprogress nofree nounwind willreturn allockind("alloc,uninitialized") allocsize(0) memory(inaccessiblemem: readwrite) "alloc-family"="malloc" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #3 = { nofree nounwind "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #4 = { mustprogress nounwind willreturn allockind("free") memory(argmem: readwrite, inaccessiblemem: readwrite) "alloc-family"="malloc" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #5 = { mustprogress nofree nounwind willreturn "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #6 = { nofree nounwind }
attributes #7 = { nounwind }
attributes #8 = { nounwind allocsize(0) }
attributes #9 = { cold }

!llvm.module.flags = !{!0, !1, !2, !3, !4, !33}
!llvm.ident = !{!41}

!0 = !{i32 1, !"wchar_size", i32 4}
!1 = !{i32 8, !"PIC Level", i32 2}
!2 = !{i32 7, !"PIE Level", i32 2}
!3 = !{i32 7, !"uwtable", i32 2}
!4 = !{i32 1, !"ProfileSummary", !5}
!5 = !{!6, !7, !8, !9, !10, !11, !12, !13, !14, !15}
!6 = !{!"ProfileFormat", !"InstrProf"}
!7 = !{!"TotalCount", i64 17825796}
!8 = !{!"MaxCount", i64 3145728}
!9 = !{!"MaxInternalCount", i64 3145728}
!10 = !{!"MaxFunctionCount", i64 2097152}
!11 = !{!"NumCounts", i64 21}
!12 = !{!"NumFunctions", i64 1}
!13 = !{!"IsPartialProfile", i64 0}
!14 = !{!"PartialProfileRatio", double 0.000000e+00}
!15 = !{!"DetailedSummary", !16}
!16 = !{!17, !18, !19, !20, !21, !22, !23, !24, !25, !26, !27, !28, !29, !30, !31, !32}
!17 = !{i32 10000, i64 3145728, i32 4}
!18 = !{i32 100000, i64 3145728, i32 4}
!19 = !{i32 200000, i64 3145728, i32 4}
!20 = !{i32 300000, i64 3145728, i32 4}
!21 = !{i32 400000, i64 3145728, i32 4}
!22 = !{i32 500000, i64 3145728, i32 4}
!23 = !{i32 600000, i64 3145728, i32 4}
!24 = !{i32 700000, i64 3145728, i32 4}
!25 = !{i32 800000, i64 2097152, i32 5}
!26 = !{i32 900000, i64 1048576, i32 8}
!27 = !{i32 950000, i64 1048576, i32 8}
!28 = !{i32 990000, i64 1048576, i32 8}
!29 = !{i32 999000, i64 1048576, i32 8}
!30 = !{i32 999900, i64 1048576, i32 8}
!31 = !{i32 999990, i64 1048576, i32 8}
!32 = !{i32 999999, i64 1048576, i32 8}
!33 = !{i32 5, !"CG Profile", !34}
!34 = distinct !{!35, !36, !37, !38, !39, !40}
!35 = !{ptr @main, ptr @strtoll, i64 1}
!36 = !{ptr @main, ptr @malloc, i64 1}
!37 = !{ptr @main, ptr @snprintf, i64 1047545}
!38 = !{ptr @main, ptr @strtol, i64 3139545}
!39 = !{ptr @main, ptr @printf, i64 1}
!40 = !{ptr @main, ptr @free, i64 1}
!41 = !{!"Ubuntu clang version 18.1.3 (1ubuntu1)"}
!42 = !{!"function_entry_count", i64 1}
!43 = !{!"branch_weights", i32 1, i32 0}
!44 = !{!45, !45, i64 0}
!45 = !{!"any pointer", !46, i64 0}
!46 = !{!"omnipotent char", !47, i64 0}
!47 = !{!"Simple C/C++ TBAA"}
!48 = !{!"branch_weights", i32 0, i32 1}
!49 = !{!"branch_weights", i32 1, i32 127}
!50 = !{!"branch_weights", i32 0, i32 1048576}
!51 = !{!"branch_weights", i32 1048576, i32 0}
!52 = !{!"branch_weights", i32 127, i32 134217601}
!53 = distinct !{!53, !54}
!54 = !{!"llvm.loop.mustprogress"}
!55 = !{!"branch_weights", i32 -2147483648, i32 0}
!56 = !{!"branch_weights", i32 0, i32 3145728}
!57 = !{!"branch_weights", i32 3145728, i32 0}
!58 = !{!46, !46, i64 0}
!59 = !{!"branch_weights", i32 0, i32 2097152, i32 1048576}
!60 = !{!"branch_weights", i32 402653057, i32 127}
!61 = !{!"branch_weights", i32 0, i32 0, i32 0, i32 0, i32 0, i32 -2147483648}
