import { Injectable } from '@angular/core';
import { WashingMachine } from '../classes/washing-machine';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WashingMachineService {
  // private _MACHINES: WashingMachine[] = [
  //   { id: 1, building: 'A', floor: 4, number: 1, outOfOrder: false } as WashingMachine,
  //   { id: 2, building: 'A', floor: 4, number: 2, outOfOrder: false } as WashingMachine,
  //   { id: 3, building: 'A', floor: 8, number: 1, outOfOrder: true } as WashingMachine,
  //   { id: 4, building: 'A', floor: 8, number: 2, outOfOrder: false } as WashingMachine
  // ];

  private route: string = 'machines';

  constructor(
    private httpService: HttpService
  ) { }

  public getWashingMachines(): Promise<WashingMachine[]> {
    // return this._MACHINES;
    return this.httpService.get<WashingMachine[]>(this.route);
  }

  public getWashingMachine(id: number): Promise<WashingMachine> {
    //return this._MACHINES.find((machine: WashingMachine) => machine.id === id);
    // return this._MACHINES.find(function (machine) {
    //   return machine.id === id;
    // })

    return this.httpService.get<WashingMachine>(this.route + '/' + id);
  }
}
