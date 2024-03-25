import { ICustomer } from "./i-customer";

export interface IAntrian {
  readonly _id?: string;
  customer: ICustomer,
  nomor: string;
  tanggal: string;
  done: boolean;
}
