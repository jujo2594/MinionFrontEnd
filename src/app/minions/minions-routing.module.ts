import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/buscar-page/search-page.component';
import { AddMinionPageComponent } from './pages/add-minion-page/add-minion-page.component';
import { EditMinionPageComponent } from './pages/edit-minion-page/edit-minion-page.component';
import { CheckMinionPageComponent } from './pages/check-minion-page/check-minion-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'addMinion', component: AddMinionPageComponent },
      { path: 'editMinion/: id', component: EditMinionPageComponent },
      { path: 'checkMinion', component: CheckMinionPageComponent },
      {path: ':id', component: EditMinionPageComponent },
      {path: '**', redirectTo: 'checkMinion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinionsRoutingModule { }
