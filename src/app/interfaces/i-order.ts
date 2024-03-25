import { IBarang } from "./i-barang";
import { ICustomer } from "./i-customer";

export interface IItem extends IBarang {
  qty: number;
  subtotal: number;
}

export interface IOrder {
  readonly _id?: string;
  nomor: string; 
  customer: ICustomer;
  tanggal: string;
  dibayar: number;
  total: number;
  items: IItem[];
}
