import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hotel/:city', component: HotelComponent },
  { path: 'hotelDetail/:id', component: HotelDetailComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
