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




@NgModule({
  declarations: [
    GmComponent,
    MemberprofilerComponent,
    MemberprofilerSearchComponent,
    MemberprofilerDetailComponent,
    SegmentationbuilderComponent,
    SegmentationbuilderSearchComponent,
    SegmentationbuilderCreateComponent
   
    
  ],
  imports: [
    CommonModule,
    GmRoutingModule,
   ]
  ,
  providers: [ 
    DataStorageService,
    GmService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
   
   ]
})
export class GmModule {}
