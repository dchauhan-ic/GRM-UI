import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GmComponent } from './gm/gm.component';
import { MemberprofilerComponent } from './gm/memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from './gm/segmentationbuilder/segmentationbuilder.component';
import { GmModule } from 'src/app/gm/gm.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GmHeaderComponent } from 'src/app/gm/gm-header/gm-header.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GmHeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GmModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
