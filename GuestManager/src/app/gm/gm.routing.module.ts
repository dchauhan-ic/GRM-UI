
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { GmComponent } from 'src/app/gm/gm.component';
import { MemberprofilerComponent } from 'src/app/gm/memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder.component';
import { MemberprofilerSearchComponent } from 'src/app/gm/memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { MemberprofilerDetailComponent } from 'src/app/gm/memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { SegmentationbuilderSearchComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { SegmentationbuilderCreateComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';


const gmRoutes: Routes = [
   { path: '', component: GmComponent, children: [
   
    { path: 'memberprofiler/search', component: MemberprofilerSearchComponent },
    { path: 'memberprofiler/detail', component: MemberprofilerDetailComponent },
    { path: 'segmentationbuilder/search', component: SegmentationbuilderSearchComponent },
    { path: 'segmentationbuilder/create', component: SegmentationbuilderCreateComponent },
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(gmRoutes)
  ],
  exports: [RouterModule]
})
export class GmRoutingModule {}