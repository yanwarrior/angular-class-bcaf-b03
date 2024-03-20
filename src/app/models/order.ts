import { ICustomer } from "../interfaces/i-customer";
import { IItem } from "../interfaces/i-item";
import { IOrder } from "../interfaces/i-order";
import { Customer } from "./customer";

export class Order implements IOrder {
  nomor: string =  "";
  _id?: string =  "";
  tanggal: string = "";
  customer: ICustomer = new Customer();
  dibayar?: number | undefined;
  total?: number | undefined;
  items: IItem[] = [];
}
