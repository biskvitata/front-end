import { BeersService } from './../beers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit, OnDestroy {

  beerId: number;
  isDifferenceShown: boolean;
  beer = [];

  private subscriptionList: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private beerService: BeersService
  ) {}

  ngOnInit() {
    this.beerId = +this.route.snapshot.paramMap.get('id');
    this.subscriptionList.push(
      this.beerService.getBeer(this.beerId).subscribe(res => {
        this.beer = res;
      })
    )
  }
  
  showDifference() {
    this.isDifferenceShown = true;
  }

  ngOnDestroy() {
    this.subscriptionList.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
