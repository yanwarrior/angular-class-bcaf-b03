import { IAntrian } from "../interfaces/i-antrian";
import { ICustomer } from "../interfaces/i-customer";
import { Customer } from "./customer";

export class Antrian implements IAntrian {
  _id?: string = "";
  customer: ICustomer = new Customer();
  nomor: string = "";
  tanggal: string = "";
  done: boolean = false;
}
