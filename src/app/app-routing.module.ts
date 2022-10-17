import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATHS, PATH_MATCH } from './common/constants';
import { ExternalAuthguardService, InternalAuthguardService } from './core/guards/auth-guard';

const routes: Routes = [
  { path: PARENT_PATHS.DEFAULT, redirectTo: PARENT_PATHS.MAIN, pathMatch: PATH_MATCH.FULL },
  { path: PARENT_PATHS.AUTH, canActivate: [ExternalAuthguardService], loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: PARENT_PATHS.MAIN, canActivate: [InternalAuthguardService], loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  { path: PARENT_PATHS.WILDCARD, redirectTo: PARENT_PATHS.MAIN, pathMatch: PATH_MATCH.FULL }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ExternalAuthguardService, InternalAuthguardService]
})
export class AppRoutingModule { }
