import { BeerItemComponent } from './beer-item/beer-item.component';
import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';


export const BeersRouting: Routes = [
  {
    path: 'beers',
    component: BeerListComponent
  },
  {
    path: 'beers/:id',
    component: BeerItemComponent
  }
];
