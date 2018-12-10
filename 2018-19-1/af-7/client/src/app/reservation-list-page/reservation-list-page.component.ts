import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../classes/reservation';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservation-list-page',
  templateUrl: './reservation-list-page.component.html',
  styleUrls: ['./reservation-list-page.component.css']
})
export class ReservationListPageComponent implements OnInit {
  private reservations: Reservation[];
  private displayedColumns = ['from', 'to', 'machine'];

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    //this._reservations = await this._reservationService.getReservations();
    this.reservations = await this.reservationService.getReservationsByUser(this.authService.user)
    // console.log(this._reservations[0]);
  }

}
