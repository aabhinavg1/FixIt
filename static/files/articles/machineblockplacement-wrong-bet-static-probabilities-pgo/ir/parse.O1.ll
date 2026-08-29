; ModuleID = 'source/machine_block_placement_csv_parse.c'
source_filename = "source/machine_block_placement_csv_parse.c"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

@stderr = external local_unnamed_addr global ptr, align 8
@.str = private unnamed_addr constant [5 x i8] c"oom\0A\00", align 1
@.str.1 = private unnamed_addr constant [10 x i8] c"%d,%d,%d\0A\00", align 1
@.str.2 = private unnamed_addr constant [18 x i8] c"buffer too small\0A\00", align 1
@.str.3 = private unnamed_addr constant [37 x i8] c"FAIL lines=%zu sum=%ld expected=%ld\0A\00", align 1
@.str.4 = private unnamed_addr constant [24 x i8] c"PASS lines=%zu sum=%ld\0A\00", align 1

; Function Attrs: nounwind uwtable
define dso_local range(i32 0, 3) i32 @main(i32 noundef %0, ptr nofree noundef readonly captures(none) %1) local_unnamed_addr #0 {
  %3 = alloca ptr, align 8
  %4 = icmp sgt i32 %0, 1
  br i1 %4, label %5, label %9

5:                                                ; preds = %2
  %6 = getelementptr inbounds nuw i8, ptr %1, i64 8
  %7 = load ptr, ptr %6, align 8, !tbaa !9
  %8 = tail call i64 @strtoll(ptr noundef nonnull captures(none) %7, ptr noundef null, i32 noundef 10) #7, !inline_history !12
  br label %9

9:                                                ; preds = %2, %5
  %10 = phi i64 [ %8, %5 ], [ 1048576, %2 ]
  %11 = mul i64 %10, 48
  %12 = add i64 %11, 64
  %13 = tail call noalias ptr @malloc(i64 noundef %12) #8
  %14 = icmp eq ptr %13, null
  br i1 %14, label %17, label %15

15:                                               ; preds = %9
  %16 = icmp eq i64 %10, 0
  br i1 %16, label %53, label %20

17:                                               ; preds = %9
  %18 = load ptr, ptr @stderr, align 8, !tbaa !13
  %19 = tail call i64 @fwrite(ptr nonnull @.str, i64 4, i64 1, ptr %18) #9
  br label %94

20:                                               ; preds = %15, %46
  %21 = phi i64 [ %50, %46 ], [ 0, %15 ]
  %22 = phi i64 [ %49, %46 ], [ 0, %15 ]
  %23 = phi i32 [ %47, %46 ], [ 0, %15 ]
  %24 = phi i32 [ %32, %46 ], [ 29, %15 ]
  %25 = mul i32 %24, 1664525
  %26 = add i32 %25, 1013904223
  %27 = urem i32 %26, 10000
  %28 = mul i32 %26, 1664525
  %29 = add i32 %28, 1013904223
  %30 = urem i32 %29, 10000
  %31 = mul i32 %29, 1664525
  %32 = add i32 %31, 1013904223
  %33 = urem i32 %32, 10000
  %34 = getelementptr inbounds nuw i8, ptr %13, i64 %22
  %35 = sub i64 %12, %22
  %36 = tail call i32 (ptr, i64, ptr, ...) @snprintf(ptr noundef nonnull %34, i64 noundef %35, ptr noundef nonnull @.str.1, i32 noundef %27, i32 noundef %30, i32 noundef %33) #7
  %37 = icmp slt i32 %36, 0
  br i1 %37, label %41, label %38

38:                                               ; preds = %20
  %39 = zext nneg i32 %36 to i64
  %40 = icmp ugt i64 %35, %39
  br i1 %40, label %44, label %41

41:                                               ; preds = %38, %20
  %42 = load ptr, ptr @stderr, align 8, !tbaa !13
  %43 = tail call i64 @fwrite(ptr nonnull @.str.2, i64 17, i64 1, ptr %42) #9
  tail call void @free(ptr noundef %13) #7
  br label %46

44:                                               ; preds = %38
  %45 = add i64 %22, %39
  br label %46

46:                                               ; preds = %44, %41
  %47 = phi i32 [ 2, %41 ], [ %23, %44 ]
  %48 = phi i1 [ true, %41 ], [ false, %44 ]
  %49 = phi i64 [ %22, %41 ], [ %45, %44 ]
  %50 = add nuw i64 %21, 1
  %51 = icmp eq i64 %50, %10
  %52 = select i1 %48, i1 true, i1 %51
  br i1 %52, label %53, label %20, !llvm.loop !15

53:                                               ; preds = %46, %15
  %54 = phi i1 [ false, %15 ], [ %48, %46 ]
  %55 = phi i32 [ 0, %15 ], [ %47, %46 ]
  %56 = phi i64 [ 0, %15 ], [ %49, %46 ]
  br i1 %54, label %94, label %57

57:                                               ; preds = %53
  %58 = getelementptr inbounds nuw i8, ptr %13, i64 %56
  br label %59

59:                                               ; preds = %74, %57
  %60 = phi i64 [ 0, %57 ], [ %75, %74 ]
  %61 = phi ptr [ %13, %57 ], [ %76, %74 ]
  %62 = icmp ult ptr %61, %58
  br i1 %62, label %63, label %77

63:                                               ; preds = %59
  call void @llvm.lifetime.start.p0(ptr nonnull %3) #7
  %64 = call i64 @strtol(ptr noundef %61, ptr noundef nonnull %3, i32 noundef 10) #7
  %65 = load ptr, ptr %3, align 8, !tbaa !9
  %66 = icmp eq ptr %65, %61
  br i1 %66, label %74, label %67

67:                                               ; preds = %63
  %68 = add nsw i64 %64, %60
  %69 = icmp ult ptr %65, %58
  br i1 %69, label %70, label %74

70:                                               ; preds = %67
  %71 = load i8, ptr %65, align 1, !tbaa !18
  switch i8 %71, label %74 [
    i8 44, label %72
    i8 10, label %72
  ]

72:                                               ; preds = %70, %70
  %73 = getelementptr inbounds nuw i8, ptr %65, i64 1
  br label %74

74:                                               ; preds = %67, %72, %70, %63
  %75 = phi i64 [ %60, %63 ], [ %68, %70 ], [ %68, %72 ], [ %68, %67 ]
  %76 = phi ptr [ %61, %63 ], [ %65, %70 ], [ %73, %72 ], [ %65, %67 ]
  call void @llvm.lifetime.end.p0(ptr nonnull %3) #7
  br i1 %66, label %77, label %59

77:                                               ; preds = %74, %59
  %78 = phi i64 [ %75, %74 ], [ %60, %59 ]
  switch i64 %10, label %83 [
    i64 1, label %84
    i64 10, label %79
    i64 100, label %80
    i64 1000, label %81
    i64 1048576, label %82
  ]

79:                                               ; preds = %77
  br label %84

80:                                               ; preds = %77
  br label %84

81:                                               ; preds = %77
  br label %84

82:                                               ; preds = %77
  br label %84

83:                                               ; preds = %77
  br label %84

84:                                               ; preds = %77, %79, %80, %81, %82, %83
  %85 = phi i1 [ true, %83 ], [ false, %82 ], [ false, %79 ], [ false, %80 ], [ false, %81 ], [ false, %77 ]
  %86 = phi i64 [ -1, %83 ], [ 15723844160, %82 ], [ 140157, %79 ], [ 1465822, %80 ], [ 15009852, %81 ], [ 12313, %77 ]
  %87 = icmp eq i64 %78, %86
  %88 = select i1 %85, i1 true, i1 %87
  br i1 %88, label %92, label %89

89:                                               ; preds = %84
  %90 = load ptr, ptr @stderr, align 8, !tbaa !13
  %91 = tail call i32 (ptr, ptr, ...) @fprintf(ptr noundef %90, ptr noundef nonnull @.str.3, i64 noundef %10, i64 noundef %78, i64 noundef %86) #10
  tail call void @free(ptr noundef %13) #7
  br label %94

92:                                               ; preds = %84
  %93 = tail call i32 (ptr, ...) @printf(ptr noundef nonnull dereferenceable(1) @.str.4, i64 noundef %10, i64 noundef %78)
  tail call void @free(ptr noundef %13) #7
  br label %94

94:                                               ; preds = %53, %92, %89, %17
  %95 = phi i32 [ 2, %17 ], [ %55, %53 ], [ 1, %89 ], [ 0, %92 ]
  ret i32 %95
}

; Function Attrs: mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.start.p0(ptr captures(none)) #1

; Function Attrs: mustprogress nofree nounwind willreturn allockind("alloc,uninitialized") allocsize(0) memory(inaccessiblemem: readwrite, errnomem: write)
declare noalias noundef ptr @malloc(i64 noundef) local_unnamed_addr #2

; Function Attrs: nofree nounwind
declare noundef i32 @fprintf(ptr noundef captures(none), ptr noundef readonly captures(none), ...) local_unnamed_addr #3

; Function Attrs: nofree nounwind
declare noundef i32 @snprintf(ptr noalias noundef writeonly captures(none), i64 noundef, ptr noundef readonly captures(none), ...) local_unnamed_addr #3

; Function Attrs: mustprogress nounwind willreturn allockind("free") memory(argmem: readwrite, inaccessiblemem: readwrite)
declare void @free(ptr allocptr noundef captures(none)) local_unnamed_addr #4

; Function Attrs: mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.end.p0(ptr captures(none)) #1

; Function Attrs: mustprogress nocallback nofree nounwind willreturn
declare i64 @strtol(ptr noundef readonly, ptr noundef captures(none), i32 noundef) local_unnamed_addr #5

; Function Attrs: nofree nounwind
declare noundef i32 @printf(ptr noundef readonly captures(none), ...) local_unnamed_addr #3

; Function Attrs: mustprogress nocallback nofree nounwind willreturn
declare i64 @strtoll(ptr noundef readonly, ptr noundef captures(none), i32 noundef) local_unnamed_addr #5

; Function Attrs: nofree nounwind
declare noundef i64 @fwrite(ptr noundef readonly captures(none), i64 noundef, i64 noundef, ptr noundef captures(none)) local_unnamed_addr #6

attributes #0 = { nounwind uwtable "min-legal-vector-width"="0" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #1 = { mustprogress nocallback nofree nosync nounwind willreturn memory(argmem: readwrite) }
attributes #2 = { mustprogress nofree nounwind willreturn allockind("alloc,uninitialized") allocsize(0) memory(inaccessiblemem: readwrite, errnomem: write) "alloc-family"="malloc" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #3 = { nofree nounwind "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #4 = { mustprogress nounwind willreturn allockind("free") memory(argmem: readwrite, inaccessiblemem: readwrite) "alloc-family"="malloc" "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #5 = { mustprogress nocallback nofree nounwind willreturn "no-trapping-math"="true" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cmov,+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "tune-cpu"="generic" }
attributes #6 = { nofree nounwind }
attributes #7 = { nounwind }
attributes #8 = { nounwind allocsize(0) }
attributes #9 = { cold }
attributes #10 = { cold nounwind }

!llvm.module.flags = !{!0, !1, !2}
!llvm.ident = !{!3}
!llvm.errno.tbaa = !{!4}

!0 = !{i32 8, !"PIC Level", i32 2}
!1 = !{i32 7, !"PIE Level", i32 2}
!2 = !{i32 7, !"uwtable", i32 2}
!3 = !{!"clang version 24.0.0git (https://github.com/compilersutra/llvm-project.git b7dc8e356b89a57b86f1571d52675327db52c506)"}
!4 = !{!5, !6, i64 0}
!5 = !{!"__libc_errno", !6, i64 0}
!6 = !{!"int", !7, i64 0}
!7 = !{!"omnipotent char", !8, i64 0}
!8 = !{!"Simple C/C++ TBAA"}
!9 = !{!10, !10, i64 0}
!10 = !{!"p1 omnipotent char", !11, i64 0}
!11 = !{!"any pointer", !7, i64 0}
!12 = distinct !{null}
!13 = !{!14, !14, i64 0}
!14 = !{!"p1 _ZTS8_IO_FILE", !11, i64 0}
!15 = distinct !{!15, !16, !17}
!16 = !{!"llvm.loop.mustprogress"}
!17 = !{!"llvm.loop.unroll.disable"}
!18 = !{!7, !7, i64 0}
