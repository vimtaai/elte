import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { WashingMachineService } from './washing-machine.service';
import { WashingMachine } from '../classes/washing-machine';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private _RESERVATIONS: Reservation[];

  constructor(
    private _washingMachineService: WashingMachineService
  ) {
    this._RESERVATIONS = [
      {
        id: 1,
        from: new Date('2017-11-12T13:30'),
        to: new Date('2017-11-12T14:00'),
        washingMachine: this._washingMachineService.getWashingMachine(1)
      } as Reservation,
      {
        id: 2,
        from: new Date('2017-11-12T14:00'),
        to: new Date('2017-11-12T14:30'),
        washingMachine: this._washingMachineService.getWashingMachine(1)
      } as Reservation,
      {
        id: 3,
        from: new Date('2017-11-12T14:00'),
        to: new Date('2017-11-12T14:30'),
        washingMachine: this._washingMachineService.getWashingMachine(2)
      } as Reservation
    ];
   }

   public getReservations(): Reservation[] {
    return this._RESERVATIONS;
   }
}
