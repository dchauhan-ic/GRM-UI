
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from 'gm/app/shared/error-page/error-page.component';
import { GmComponent } from 'gm/app/core/gm.component';


const appRoutes: Routes = [
  { path: ' ', component: GmComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {
  
  }
