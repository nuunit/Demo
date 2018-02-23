import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  cityCode:string;
  hotels: Hotel[];
  constructor(private hotelService:HotelService, 
    private route:ActivatedRoute,
    private http:HttpClient ,
    private location:Location) { }

  ngOnInit() {
    this.getHotels();   
  }
  getHotels(): void{
    this.cityCode = this.route.snapshot.paramMap.get('city');
    this.hotelService.getHotelResults(this.cityCode).
    subscribe(hotels => this.hotels = hotels )
  };  
  searchAgain():void{
    this.location.back();
  }
}
