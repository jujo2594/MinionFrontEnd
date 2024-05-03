import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';
import { min, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Minion } from '../../Interfaces/minion.interface';
import { MinionService } from '../../Services/minions.service';
import { ConfirmDialogComponent } from '../../Components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-minion-page',
  templateUrl: './edit-minion-page.component.html',
  styles: `
  .gru-image{
    transition: 3s;
    box-shadow: 1px 1px 5px 0 rgb(209, 102, 221), 3px 3px 10px 0 #d66, 0px 0px 24px 2px rgb(221, 197, 102);
  }
  .gru-image:hover{
    transform: scale(1.1);
    transition: 3s;
  }
  `
})
export class EditMinionPageComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ){}

  get currentMinion(): Minion {
    const minion = this.minionForm.value as Minion;
    return minion;
  }

  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.minionService.updateMinion( id ) ),
      ).subscribe( minion => {

        if(!minion)
        {
          return this.router.navigateByUrl('/');
        }

        this.minionForm.reset( minion );
        return;
      });
  }

  onDeleteHero() {
    if( !this.currentMinion.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.minionForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }


  onSubmit(): void {

    if(this.minionForm.invalid) return;

    if( this.currentMinion.id){
      this.minionService.updateMinion( this.currentMinion )
      .subscribe( minion => {
        //todo: Snackbar
      });

      return;
    }
  }
}
