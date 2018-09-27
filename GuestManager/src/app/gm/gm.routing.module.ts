
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


const gmRoutes: Routes = [
   { path: '', component: GmComponent, children: [
   
    { path: 'memberprofiler/search', component: MemberprofilerSearchComponent },
    { path: 'memberprofiler/detail', component: MemberprofilerDetailComponent },
    { path: 'segmentationbuilder', component: SegmentationbuilderComponent },
    { path: 'segmentationbuilder/create', component: SegmentationbuilderCreateComponent },
    { path: 'create', component: SegmentationbuilderCreateComponent },
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(gmRoutes)
  ],
  exports: [RouterModule]
})
export class GmRoutingModule {}