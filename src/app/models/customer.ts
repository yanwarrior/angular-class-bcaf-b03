import { ICustomer } from "../interfaces/i-customer";

export class Customer implements ICustomer {
  _id?: string = "";
  nomor: string = "";
  nama: string = "";
  alamat: string = "";
  telepon: string = "";

  public reset() {
    this._id = "";
    this.nomor = "";
    this.nama = "";
    this.alamat = "";
    this.telepon = ""
  }
}
