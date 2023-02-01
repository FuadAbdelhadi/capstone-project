import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { AboutComponent } from './end-user/about/about.component';
import { LandingPageComponent } from './end-user/landing-page/landing-page.component';
import { RequestComponent } from './end-user/request/request.component';
import { StartUpInfoComponent } from './end-user/start-up-info/start-up-info.component';
import { GuardsGuard } from './auth/guards.guard';

const routes: Routes = [
{path: '', component:LandingPageComponent, pathMatch:"full"},
{path:'landing-page', component: LandingPageComponent},
{path: 'request', component:RequestComponent},
{path: 'start-up-info', component:StartUpInfoComponent},
{path:'admin', loadChildren: ()=> import('./admin/admin.module').then((m)=> m.AdminModule), canActivate:[GuardsGuard]},
{path:'auth', loadChildren: ()=> import('./auth/auth.module').then((m)=> m.AuthModule)},

{path:'about', component:AboutComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
