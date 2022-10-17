import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATHS, PATHS } from 'src/app/common/constants';

const routes: Routes = [
  { path: PARENT_PATHS.DEFAULT, redirectTo: PATHS.AUTH.LOGIN },
  { path: PATHS.AUTH.LOGIN, component: LoginComponent },
  { path: PATHS.AUTH.REGISTER, component: RegisterComponent },
  { path: PATHS.AUTH.FORGOT_PASSWORD, component: ForgotPasswordComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
