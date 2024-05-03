import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sideBarItems = [
    {label : 'Search', icon: 'search', url: './search'},
    {label : 'Add', icon: 'add', url: './addMinion'},
    {label : 'Edit', icon: 'edit', url: './editMinion'},
    {label : 'Check', icon: 'check', url: './checkMinion'},
  ]
}
