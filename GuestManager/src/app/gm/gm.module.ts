import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { FilterCustomPipe } from 'src/app/shared/pipes/filter.custom.pipe';
import { GmComponent } from 'src/app/gm/gm.component';
import { GmHeaderComponent } from 'src/app/gm/gm-header/gm-header.component';
import { MemberprofilerComponent } from 'src/app/gm/memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder.component';
import { GmRoutingModule } from 'src/app/gm/gm.routing.module';
import { GmService } from 'src/app/gm/gm.service';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MemberprofilerDetailComponent } from 'src/app/gm/memberprofiler/memberprofiler-detail/memberprofiler-detail.component';
import { SegmentationbuilderSearchComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-search/segmentationbuilder-search.component';
import { SegmentationbuilderCreateComponent } from 'src/app/gm/segmentationbuilder/segmentationbuilder-create/segmentationbuilder-create.component';
import { MemberprofilerSearchComponent } from 'src/app/gm/memberprofiler/memberprofiler-search/memberprofiler-search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { LoggingInterceptor } from 'src/app/shared/interceptors/logging.interceptor';



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
