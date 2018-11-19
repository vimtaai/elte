import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reservation } from '../classes/reservation';
import { WashingMachine } from '../classes/washing-machine';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  @Input('washingMachine') public washingMachine: WashingMachine;
  @Output('save') public save: EventEmitter<Reservation> 
    = new EventEmitter<Reservation>();

  private _reservation: Reservation = {
    id: null,
    from: null,
    to: null,
    washingMachine: null
  };

  private reservationForm = this.fb.group({
    hours: [''],
    minutes: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  private onSubmit() {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();
    const hours: number = parseInt(this.reservationForm.get('hours').value);
    const minutes: number = parseInt(this.reservationForm.get('minutes').value);

    const endHours: number = minutes === 30 ? hours + 1 : hours;
    const endMinutes: number = minutes === 30 ? 0 : 30;

    this._reservation.from = new Date(year, month, day, hours, minutes);
    this._reservation.to = new Date(year, month, day, endHours, endMinutes);
    this._reservation.washingMachine = this.washingMachine;

    this.save.emit(this._reservation);

    console.log(this._reservation);
  }

}
