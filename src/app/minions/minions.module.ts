import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MinionsRoutingModule } from './minions-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/buscar-page/search-page.component';
import { AddMinionPageComponent } from './pages/add-minion-page/add-minion-page.component';
import { EditMinionPageComponent } from './pages/edit-minion-page/edit-minion-page.component';
import { CheckMinionPageComponent } from './pages/check-minion-page/check-minion-page.component';
import { CardComponent } from './Components/card/card.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent,
    AddMinionPageComponent,
    EditMinionPageComponent,
    CheckMinionPageComponent,
    CardComponent,
    ConfirmDialogComponent,

  ],
  imports: [
    CommonModule,
    MinionsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MinionsModule { }
