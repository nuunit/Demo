import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { City } from '../city';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];
  city:City;
  constructor(private hotelService:HotelService, 
    private route:ActivatedRoute,
    private http:HttpClient ,
    private location:Location) { }

  ngOnInit() {
    let cityCode = this.route.snapshot.paramMap.get('city');
    this.getHotels(cityCode);   
    this.getCityByCode(cityCode);
  }
  getHotels(cityCode:string): void{
 
    this.hotelService.getHotelResults(cityCode).
    subscribe(hotels => this.hotels = hotels )
  };  
  getCityByCode(cityCode:string): void{
    this.hotelService.getCityByCode(cityCode).
    subscribe(city => this.city = city )
  };  

  

  searchAgain():void{
    this.location.back();
  }
}
