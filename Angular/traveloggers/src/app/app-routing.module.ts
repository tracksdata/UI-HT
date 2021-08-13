import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingIdComponent } from './booking-id/booking-id.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightFormComponent } from './flight-form/flight-form.component';

const routes: Routes = [
  {path:'home', component: FlightFormComponent},
  {path:'find/:id', component: BookFlightComponent},
  {path:'booking', component: BookingSuccessComponent},
  {path:'bookingid', component: BookingIdComponent},
  {path:'checkin', component: CheckInComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
