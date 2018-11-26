import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    reservedFrom: null,
    reservedTo: null,
    washingMachine: null
  };

  private reservationForm = this.fb.group({
    date: ['', Validators.required],
    hours: ['', Validators.required],
    minutes: ['', Validators.required]
  });

  private minDate: Date;
  private maxDate: Date;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const date: Date = new Date();
    date.setDate(date.getDate() + 7);
    this.minDate = new Date();
    this.maxDate = date;
  }

  private onSubmit() {
    //const date: Date = new Date();
    const date: Date = this.reservationForm.get('date').value;
    const hours: number = parseInt(this.reservationForm.get('hours').value);
    const minutes: number = parseInt(this.reservationForm.get('minutes').value);

    // Ha nem helyes az input, akkor return
    if (!date || !hours || !minutes) {
      return;
    }

    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();

    const endHours: number = minutes === 30 ? hours + 1 : hours;
    const endMinutes: number = minutes === 30 ? 0 : 30;

    this._reservation.reservedFrom = new Date(year, month, day, hours, minutes);
    this._reservation.reservedTo = new Date(year, month, day, endHours, endMinutes);
    this._reservation.washingMachine = this.washingMachine;

    this.save.emit(this._reservation);

    console.log(this._reservation);
  }

}
