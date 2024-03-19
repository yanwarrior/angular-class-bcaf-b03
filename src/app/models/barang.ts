import { IBarang } from "../interfaces/i-barang";

export class Barang implements IBarang {
  _id?: string | undefined;
  nomor: string = "";
  nama: string = "";
  satuan: string = "";
  hargaJual: number|null = null;
  stok: number|null = null;
}
