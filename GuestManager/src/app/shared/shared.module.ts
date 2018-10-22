import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardService } from 'src/app/shared/auth/auth-guard.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    DropdownDirective,
    ShortenPipe,
    ErrorPageComponent
   ],

  exports: [
    CommonModule,
    DropdownDirective
  ],
  
  providers: [ CookieService,AuthService, AuthGuardService],
})
export class SharedModule {}
