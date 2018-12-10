import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WashingMachineService } from '../services/washing-machine.service';
import { WashingMachine } from '../classes/washing-machine';
import { Reservation } from '../classes/reservation';
import { ReservationService } from '../services/reservation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-reservation-page',
  templateUrl: './new-reservation-page.component.html',
  styleUrls: ['./new-reservation-page.component.css']
})
export class NewReservationPageComponent implements OnInit {
  private _washingMachine: WashingMachine;

  constructor(
    private route: ActivatedRoute,
    private washingMachineService: WashingMachineService,
    private reservationService: ReservationService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._washingMachine = await this.washingMachineService.getWashingMachine(id);
  }

  private onSave(reservation: Reservation) {
    reservation.user = this.authService.user;
    this.reservationService.addReservation(reservation);
  }

}
