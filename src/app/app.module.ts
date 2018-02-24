import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { HotelService } from './hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelTitleComponent } from './hotel-title/hotel-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelSearchComponent,
    HotelComponent,
    HomeComponent,
    HotelDetailComponent,
    HotelTitleComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
