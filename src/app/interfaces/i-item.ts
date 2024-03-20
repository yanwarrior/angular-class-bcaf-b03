import { IBarang } from "./i-barang";

export interface IItem extends IBarang {
  subtotal: number;
  qty: number;
}
