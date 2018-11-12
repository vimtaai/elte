import { Injectable } from '@angular/core';
import { WashingMachine } from '../classes/washing-machine';

@Injectable({
  providedIn: 'root'
})
export class WashingMachineService {
  private _MACHINES: WashingMachine[] = [
    { id: 1, building: 'A', floor: 4, number: 1, outOfOrder: false } as WashingMachine,
    { id: 2, building: 'A', floor: 4, number: 2, outOfOrder: false } as WashingMachine,
    { id: 3, building: 'A', floor: 8, number: 1, outOfOrder: false } as WashingMachine,
    { id: 4, building: 'A', floor: 8, number: 2, outOfOrder: false } as WashingMachine
  ];

  constructor() { }

  public getWashingMachines(): WashingMachine[] {
    return this._MACHINES;
  }

  public getWashingMachine(id: number): WashingMachine {
    return this._MACHINES.find((machine: WashingMachine) => machine.id === id);
    // return this._MACHINES.find(function (machine) {
    //   return machine.id === id;
    // })
  }
}
