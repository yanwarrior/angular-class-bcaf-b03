import { ICustomer } from "../interfaces/i-customer";
import { IItem, IOrder } from "../interfaces/i-order";
import { Customer } from "./customer";

export class Order implements IOrder {
  _id?: string = "";
  tanggal: string = "";
  customer: ICustomer = new Customer();
  dibayar: number = 0;
  total: number = 0;
  items: IItem[] = [];
}
