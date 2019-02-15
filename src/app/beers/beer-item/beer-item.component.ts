import { DrinksState } from './../store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getBeersSelector } from '../store/beers.selectors';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {

  beer: any[];
  isDifferenceShown: boolean;

  constructor(
    private store: Store<DrinksState>
    ) {
      this.store.select(getBeersSelector).subscribe(currentBeer => {
        this.beer = currentBeer;
      })
    }

  ngOnInit() {
    console.log(this.beer)
  }

  showDifference() {
    this.isDifferenceShown = true;
  }

}
