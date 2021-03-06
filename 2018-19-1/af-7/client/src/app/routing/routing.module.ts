import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MachineListPageComponent } from '../machine-list-page/machine-list-page.component';
import { ReservationListPageComponent } from '../reservation-list-page/reservation-list-page.component';
import { NewReservationPageComponent } from '../new-reservation-page/new-reservation-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AuthGuard } from '../auth.guard';

const routes: Route[] = [
  { path: '', component: MachineListPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'my-reservations', component: ReservationListPageComponent, canActivate: [AuthGuard] },
  { path: 'new-reservation/:id', component: NewReservationPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
