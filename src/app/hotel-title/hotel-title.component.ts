import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hotel-title',
  templateUrl: './hotel-title.component.html',
  styleUrls: ['./hotel-title.component.css']
})
export class HotelTitleComponent implements OnInit {
  @Input() titleName:string;
  constructor() { }

  ngOnInit() {
  }

}
