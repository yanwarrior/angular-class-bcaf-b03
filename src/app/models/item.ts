import { IItem } from "../interfaces/i-item";

export class Item implements IItem {
  subtotal: number =  0;
  qty: number = 0;
  _id?: string = "";
  nomor: string = "";
  nama: string = "";
  satuan: string = "";
  hargaJual: number = 0;
  stok: number = 0;
}
