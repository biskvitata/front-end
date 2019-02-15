import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  public getBeers(): Observable<any> {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }

  public getBeer(beerId: number): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers/${beerId}`)
    .pipe((
      map(res => res["0"])
    ));
  }
}
