import { WashingMachine } from "./washing-machine";
import { User } from "./user";

export class Reservation {
  public id: number;
  public reservedFrom: Date;
  public reservedTo: Date;
  public machine: WashingMachine;
  public user: User;
}
