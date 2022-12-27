import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './end-user/landing-page/landing-page.component';
import { RequestComponent } from './end-user/request/request.component';
import { StartUpInfoComponent } from './end-user/start-up-info/start-up-info.component';

const routes: Routes = [
{path: '', component:LandingPageComponent, pathMatch:"full"},
{path:'landing-page', component: LandingPageComponent},
{path: 'request', component:RequestComponent},
{path: 'start-uo-info', component:StartUpInfoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
