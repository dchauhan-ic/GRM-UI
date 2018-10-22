import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GmComponent } from './gm/gm.component';
import { MemberprofilerComponent } from './gm/memberprofiler/memberprofiler.component';
import { SegmentationbuilderComponent } from './gm/segmentationbuilder/segmentationbuilder.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { GmHeaderComponent } from './gm/gm-header/gm-header.component';
import { SharedModule } from './shared/shared.module';
import { GmModule } from './gm/gm.module';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { FilterProperty } from 'src/app/shared/pipes/filter.property';

@NgModule({
  declarations: [
    AppComponent,
    GmHeaderComponent,
    FilterPipe,
    FilterProperty
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
