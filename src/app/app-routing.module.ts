import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GeneratenewapikeyComponent } from './generatenewapikey/generatenewapikey.component';
import { AddnewservicesComponent } from './addnewservices/addnewservices.component';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: GeneratenewapikeyComponent,

  },
  {
    path: 'logout',
    redirectTo: ''
  },

  {
    canActivate: [AuthGuardGuard],
    path: 'home',
    component: GeneratenewapikeyComponent,

  },
  {
    path: 'service',
    component: AddnewservicesComponent,

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
