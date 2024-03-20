import { ICustomer } from "./i-customer";
import { IItem } from "./i-item";

export interface IOrder {
  readonly _id?: string;
  nomor: string;
  tanggal: string;
  customer: ICustomer;
  dibayar?: number;
  total?: number;
  items: IItem[];
}
