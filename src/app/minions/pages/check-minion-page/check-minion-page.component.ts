import { Component, OnInit } from '@angular/core';
import { Minion } from '../../Interfaces/minion.interface';
import { MinionService } from '../../Services/minions.service';

@Component({
  selector: 'app-check-minion-page',
  templateUrl: './check-minion-page.component.html',
  styles: ``
})
export class CheckMinionPageComponent implements OnInit {
  public minions : Minion[] = [];

  public imageRoutes : string[] = [
    'assets/minions/carl.png',
    'assets/minions/dave.png',
    'assets/minions/jerry.png',
    'assets/minions/kevin.png',
    'assets/minions/phil.png',
    'assets/minions/stuart.png',
    'assets/minions/tim.png',
    'assets/minions/tom.png'
  ]

  constructor( private minionService : MinionService  ) {}
  ngOnInit(): void {
    this.minionService.getMinions()
      .subscribe( minions => this.minions = minions);
  }
}
