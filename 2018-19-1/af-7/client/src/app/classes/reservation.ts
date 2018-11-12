import { WashingMachine } from "./washing-machine";

export class Reservation {
  public id: number;
  public from: Date;
  public to: Date;
  public washingMachine: WashingMachine;
}
