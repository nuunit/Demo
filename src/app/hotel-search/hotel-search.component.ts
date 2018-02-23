import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HotelService } from '../hotel.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import { City } from '../city';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  cities$:Observable<City[]>;
  private searchTerms = new Subject<string>();
  constructor( private hotelService: HotelService) { }

  search(term:string):void{
    this.searchTerms.next(term);
  }
  ngOnInit():void {
    this.cities$ = this.searchTerms.pipe(      
      debounceTime(300),   
      distinctUntilChanged(),    
      switchMap((term: string) => this.hotelService.searchCity(term)),
    );
  }

}
