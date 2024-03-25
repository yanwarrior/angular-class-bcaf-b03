import { ICustomer } from "../interfaces/i-customer";
import { IItem, IOrder } from "../interfaces/i-order";
import { Customer } from "./customer";

export class Order implements IOrder {
  _id?: string = "";
  nomor: string = "";
  customer: ICustomer = new Customer();
  tanggal: string = "";
  dibayar: number = 0;
  total: number = 0;
  items: IItem[] = [];
}
