import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../hotel';
import { Location } from '@angular/common';
import { City } from '../city';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @Input() city:City;
  hotel:Hotel;
  constructor(private hotelService:HotelService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit() {   
    this.getHotelById();
  }
  
  getHotelById(): void{
    let id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotelById(id).
    subscribe(hotel => this.hotel = hotel )
  };  
  goBack():void{
    this.location.back();
    
  }
}
