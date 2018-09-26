import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from './pipes/shorten.pipe';


@NgModule({
  declarations: [
    DropdownDirective,
    ShortenPipe
   
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {}
