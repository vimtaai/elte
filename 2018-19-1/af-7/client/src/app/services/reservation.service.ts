import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { WashingMachineService } from './washing-machine.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private route = 'reservations';

  constructor(
    private _washingMachineService: WashingMachineService,
    private httpService: HttpService
  ) {}

  public getReservations(): Promise<Reservation[]> {
    return this.httpService.get<Reservation[]>(this.route);
  }

  public addReservation(reservation: Reservation): void {
    this.httpService.post<Reservation>(this.route, reservation);
  }
}
