import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../classes/reservation';

@Component({
  selector: 'app-reservation-list-page',
  templateUrl: './reservation-list-page.component.html',
  styleUrls: ['./reservation-list-page.component.css']
})
export class ReservationListPageComponent implements OnInit {
  private _reservations: Reservation[];
  private displayedColumns = ['from', 'to', 'machine'];

  constructor(
    private _reservationService: ReservationService
  ) { }

  async ngOnInit() {
    this._reservations = await this._reservationService.getReservations();
    // console.log(this._reservations[0]);
  }

}
