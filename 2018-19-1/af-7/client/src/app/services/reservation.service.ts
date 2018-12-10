import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { WashingMachineService } from './washing-machine.service';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private route = 'reservations';

  constructor(
    private _washingMachineService: WashingMachineService,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
  ) {}

  public getReservations(): Promise<Reservation[]> {
    return this.httpService.get<Reservation[]>(this.route);
  }

  public async addReservation(reservation: Reservation) {
    try {
      await this.httpService.post<Reservation>(this.route, reservation);
      this.router.navigate(['my-reservations']);
    } catch (e) {}
  }

  public getReservationsByUser(user: User): Promise<Reservation[]> {
    return this.httpService.get<Reservation[]>(this.route + '/user/' + user.id)
  }
}
