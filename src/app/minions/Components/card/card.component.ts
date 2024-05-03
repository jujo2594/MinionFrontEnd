import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../../Interfaces/minion.interface';

@Component({
  selector: 'minions-minion-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

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

  public callCount: number = 0;

  @Input()
  public minion!: Minion;

  ngOnInit(): void {

    if( !this.minion ){
      throw Error('Minion property is required')
    }
  }

  public getNextImageRoute(): string {
    this.callCount++; // Incrementa primero para que el primer llamado sea 0
    const imageIndex = this.callCount % this.imageRoutes.length;
    return this.imageRoutes[imageIndex];
  }

}
