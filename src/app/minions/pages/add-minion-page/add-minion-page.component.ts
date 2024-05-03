import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MinionService } from '../../Services/minions.service';
import { Minion } from '../../Interfaces/minion.interface';

@Component({

  selector: 'app-add-minion-page',
  templateUrl: './add-minion-page.component.html',
  styles: `
    .gru-image{
    transition: 3s;
    box-shadow: 1px 1px 5px 0 rgb(209, 102, 221), 3px 3px 10px 0 #d66, 0px 0px 24px 2px rgb(221, 197, 102);
  }
  .gru-image:hover{
    transform: scale(1.1);
    transition: 3s;
  }`
})
export class AddMinionPageComponent {
  public minionForm = new FormGroup({
    id:            new FormControl<number>(0, {nonNullable: true}),
    name:          new FormControl<string>('', {nonNullable: true}),
    age:           new FormControl<number>(0, {nonNullable: true}),
    frontLanguage: new FormControl<string>('', {nonNullable: true}),
    backLanguage:  new FormControl<string>('', {nonNullable: true}),
    team:          new FormControl<string>('', {nonNullable: true}),
    project:       new FormControl<string>('', {nonNullable: true})
  });

  constructor(
    private minionService: MinionService,
    private snackbar: MatSnackBar,
    private router: Router,
    ){}

  get currentMinion(): Minion {
    const minion = this.minionForm.value as Minion;
    return minion;
  }

  onSubmit(): void {

    if(this.minionForm.invalid) return;

    this.minionService.addMinion( this.currentMinion )
      .subscribe( minion => {
        //Todo: Snackbar
      })
  }

  showSnackBar( message: string ): void {
    this.snackbar.open( message, 'ok', {duration: 2500})
  }
}
