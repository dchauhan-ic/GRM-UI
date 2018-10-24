
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { SegmentationbuilderCreateComponent } from './segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';
import { SegmentationbuilderSearchComponent } from './segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { MemberprofilerDetailComponent } from './memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { MemberprofilerSearchComponent } from './memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { SegmentationbuilderComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder.component';
import { AuthGuardService } from 'gm/app/shared/auth/auth-guard.service';
import { SegmentationbuilderDialogComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-dialog/segmentationbuilder-dialog.component';
import { SegmentationbuilderEditComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-edit/segmentationbuilder-edit.component';
import { SegmentBuilderResolver } from 'gm/app/core/segmentationbuilder/segmentationbuilder-resolver.service';
import { GmComponent } from 'gm/app/core/gm.component';


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