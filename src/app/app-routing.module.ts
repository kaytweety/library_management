import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { SortChipsComponent } from  './sort-chips/sort-chips.component';

const routes: Routes = [
  // { path: '', redirectTo: '/showbook', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:  'sort-chips',component:  SortChipsComponent},
  { path:  'login',component:  LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
