import { WashingMachine } from "./washing-machine";

export class Reservation {
  public id: number;
  public reservedFrom: Date;
  public reservedTo: Date;
  public machine: WashingMachine;
}
