export interface IBarang {
  readonly _id?: string;
  nomor: string;
  nama: string;
  satuan: string;
  hargaJual: number | null;
  stok: number | null;
}
