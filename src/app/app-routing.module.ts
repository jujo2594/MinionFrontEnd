import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { MinionsModule } from './minions/minions.module';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
},
{
  path: 'minions',
  loadChildren: () => import('./minions/minions.module').then( m => m.MinionsModule),
},
{
  path: '404',
  component: Error404PageComponent,
},
{
  path: '',
  redirectTo : 'minions',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
