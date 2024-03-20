import { ICustomer } from "../interfaces/i-customer";

export class Customer implements ICustomer {
  _id?: string = "";
  nomor: string =  "";
  nama: string = "";
  alamat: string = "";
  telepon: string = "";
}
