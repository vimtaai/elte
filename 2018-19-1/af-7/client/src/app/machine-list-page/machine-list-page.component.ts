import { Component, OnInit } from '@angular/core';
import { WashingMachineService } from '../services/washing-machine.service';
import { WashingMachine } from '../classes/washing-machine';

@Component({
  selector: 'app-machine-list-page',
  templateUrl: './machine-list-page.component.html',
  styleUrls: ['./machine-list-page.component.css']
})
export class MachineListPageComponent implements OnInit {
  private _washingMachines: WashingMachine[];

  constructor(
    private _washingMachineService: WashingMachineService
  ) { }

  ngOnInit() {
    this._washingMachines = this._washingMachineService.getWashingMachines();
  }

}
