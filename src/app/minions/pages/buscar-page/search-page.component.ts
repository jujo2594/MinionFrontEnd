import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Minion } from '../../Interfaces/minion.interface';
import { MinionService } from '../../Services/minions.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput  = new FormControl('')
  public minions : Minion[] = [];
  public selectedMinion? : Minion;

  constructor( private minionService : MinionService ){}

  searchMinion () {
    const value : string = this.searchInput.value || '';
    this.minionService.getSuggestions( value )
      .subscribe( minions => this.minions = minions );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if(!event.option.value){
      this.selectedMinion = undefined;
      return;
    }
    const minion : Minion = event.option.value;
    this.searchInput.setValue( minion.name );

    this.selectedMinion = minion;
  }
}
