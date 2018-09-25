import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from 'src/app/shared/pipes/shorten.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

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
