import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { LoggingInterceptor } from '../shared/interceptors/logging.interceptor';
import { DataStorageService } from '../shared/data-storage.service';

import { MemberprofilerComponent } from './memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from './segmentationbuilder/segmentationbuilder.component';


import { SegmentationbuilderCreateComponent } from './segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';
import { SegmentationbuilderSearchComponent } from './segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { MemberprofilerDetailComponent } from './memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { MemberprofilerSearchComponent } from './memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { FilterPipe } from 'gm/app/shared/pipes/filter.pipe';
import { FilterCustomPipe } from 'gm/app/shared/pipes/filter.custom.pipe';
import { KeysPipe } from 'gm/app/shared/pipes/key.pipe';
import { KeysValuesPipe } from 'gm/app/shared/pipes/key-value.pipe';
import { SegmentationbuilderEditComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-edit/segmentationbuilder-edit.component';

import { SegmentBuilderService } from 'gm/app/core/segmentationbuilder/segmentationbuilder.service';
import { SegmentationbuilderDialogComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-dialog/segmentationbuilder-dialog.component';
import { SegmentationbuilderListComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-list/segmentationbuilder-list.component';
import { MemberprofilerDemographicComponent } from 'gm/app/core/memberprofiler/memberprofiler-detail/memberprofiler-demographic/memberprofiler-demographic.component';
import { MemberprofilerCampaignComponent } from 'gm/app/core/memberprofiler/memberprofiler-detail/memberprofiler-campaign/memberprofiler-campaign.component';
import { MemberprofilerPromotionComponent } from 'gm/app/core/memberprofiler/memberprofiler-detail/memberprofiler-promotion/memberprofiler-promotion.component';
import { SegmentationbuilderDynamicviewComponent } from 'gm/app/core/segmentationbuilder/segmentationbuilder-create/segmentationbuilder-dynamicview/segmentationbuilder-dynamicview.component';
import { MemberprofilerListComponent } from 'gm/app/core/memberprofiler/memberprofiler-search/memberprofiler-list/memberprofiler-list.component';
import { SegmentBuilderResolver } from 'gm/app/core/segmentationbuilder/segmentationbuilder-resolver.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MemberProfilerService } from 'gm/app/core/memberprofiler/memberprofiler.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { GmRoutingModule } from 'gm/app/core/gm.routing.module';
import { GmService } from 'gm/app/core/gm.service';
import { GmComponent } from 'gm/app/core/gm.component';

@NgModule({
  declarations: [
    GmComponent,
    MemberprofilerComponent,
    MemberprofilerSearchComponent,
    MemberprofilerListComponent,
    MemberprofilerDetailComponent,
    MemberprofilerDemographicComponent,
    MemberprofilerCampaignComponent,
    MemberprofilerPromotionComponent,
    SegmentationbuilderComponent,
    SegmentationbuilderSearchComponent,
    SegmentationbuilderDialogComponent,
    SegmentationbuilderListComponent,
    SegmentationbuilderCreateComponent,
    SegmentationbuilderEditComponent,
    SegmentationbuilderDynamicviewComponent,
    FilterCustomPipe,
    KeysPipe,
    KeysValuesPipe
  ],

  imports: [
    CommonModule,
    GmRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
  ]
  
  ,
  providers: [
    DataStorageService,
    GmService,
   
    SegmentBuilderService,
    MemberProfilerService,
    SegmentBuilderResolver,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }

  ]
})
export class GmModule { }
