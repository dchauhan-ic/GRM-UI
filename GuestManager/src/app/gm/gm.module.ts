import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { LoggingInterceptor } from '../shared/interceptors/logging.interceptor';
import { DataStorageService } from '../shared/data-storage.service';
import { GmComponent } from './gm.component';
import { MemberprofilerComponent } from './memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from './segmentationbuilder/segmentationbuilder.component';
import { GmService } from './gm.service';
import { GmRoutingModule } from './gm.routing.module';
import { SegmentationbuilderCreateComponent } from './segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';
import { SegmentationbuilderSearchComponent } from './segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { MemberprofilerDetailComponent } from './memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { MemberprofilerSearchComponent } from './memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { FilterCustomPipe } from 'src/app/shared/pipes/filter.custom.pipe';
import { KeysPipe } from 'src/app/shared/pipes/key.pipe';
import { KeysValuesPipe } from 'src/app/shared/pipes/key-value.pipe';
import { SegmentationbuilderEditComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-edit/segmentationbuilder-edit.component';

import { SegmentBuilderService } from 'src/app/gm/segmentationbuilder/segmentationbuilder.service';
import { SegmentationbuilderDialogComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-dialog/segmentationbuilder-dialog.component';
import { SegmentationbuilderListComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-list/segmentationbuilder-list.component';
import { MemberprofilerDemographicComponent } from 'src/app/gm/memberprofiler/memberprofiler-detail/memberprofiler-demographic/memberprofiler-demographic.component';
import { MemberprofilerCampaignComponent } from 'src/app/gm/memberprofiler/memberprofiler-detail/memberprofiler-campaign/memberprofiler-campaign.component';
import { MemberprofilerPromotionComponent } from 'src/app/gm/memberprofiler/memberprofiler-detail/memberprofiler-promotion/memberprofiler-promotion.component';
import { SegmentationbuilderDynamicviewComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-create/segmentationbuilder-dynamicview/segmentationbuilder-dynamicview.component';
import { MemberprofilerListComponent } from 'src/app/gm/memberprofiler/memberprofiler-search/memberprofiler-list/memberprofiler-list.component';
import { SegmentBuilderResolver } from 'src/app/gm/segmentationbuilder/segmentationbuilder-resolver.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

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
