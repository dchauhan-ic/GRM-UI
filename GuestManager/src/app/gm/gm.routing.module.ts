
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { GmComponent } from './gm.component';
import { SegmentationbuilderCreateComponent } from './segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';
import { SegmentationbuilderSearchComponent } from './segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { MemberprofilerDetailComponent } from './memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { MemberprofilerSearchComponent } from './memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { SegmentationbuilderComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder.component';
import { AuthGuardService } from 'src/app/shared/auth/auth-guard.service';
import { SegmentationbuilderDialogComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-dialog/segmentationbuilder-dialog.component';
import { SegmentationbuilderEditComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-edit/segmentationbuilder-edit.component';
import { SegmentBuilderResolver } from 'src/app/gm/segmentationbuilder/segmentationbuilder-resolver.service';


const gmRoutes: Routes = [
    { path: '', component: GmComponent, children: [
      //canActivate: [AuthGuardService]
      //resolve: {server: SegmentBuilderResolver}
    { path: 'MemberProfiler/search',component: MemberprofilerSearchComponent },
    { path: 'MemberProfiler/:id', component: MemberprofilerDetailComponent },
    { path: 'SegmentationBuilder',component: SegmentationbuilderComponent },
    { path: 'SegmentationBuilder/buildSegment', component: SegmentationbuilderCreateComponent },
    { path: 'detail', component: MemberprofilerDetailComponent },
    { path: 'SegmentationBuilder/:id/edit', component: SegmentationbuilderEditComponent}
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(gmRoutes)
  ],
  exports: [RouterModule]
})
export class GmRoutingModule {}