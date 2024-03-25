import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBarang } from 'src/app/interfaces/i-barang';
import { ICustomer } from 'src/app/interfaces/i-customer';
import { IItem, IOrder } from 'src/app/interfaces/i-order';
import { Order } from 'src/app/models/order';
import { BarangService } from 'src/app/services/barang.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  orderForm!: FormGroup;
  order: IOrder = new Order()
  nomorBarang: string = "";
  nomorCustomer: string = "";

  constructor(
    private fb: FormBuilder, 
    private barangService: BarangService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      nomor: new FormControl('', [
        Validators.required, 
        Validators.maxLength(6),
        Validators.minLength(6)
      ]),
      tanggal: new FormControl('', [
        Validators.required,
      ]),
      dibayar: new FormControl('', [
        Validators.required,
      ]),
      total: new FormControl(0, [
        Validators.required,
      ]),
      customer: this.fb.group({
        nomor: new FormControl('', [
          Validators.required, 
          Validators.maxLength(6),
          Validators.minLength(6)
        ]),
        nama: new FormControl('', [
          Validators.required, 
        ]),
        alamat: new FormControl('', [
          Validators.required, 
        ]),
        telepon: new FormControl('', [
          Validators.required, 
        ])
      }),
      items: this.fb.array([])
    })

    this.orderForm.valueChanges.subscribe((value: IOrder) => {
      this.order = value;
    })
  }

  newItemForm(barang: IBarang): FormGroup {
    return this.fb.group({
      _id: new FormControl(barang._id, [Validators.required]),
      nomor: new FormControl(barang.nomor, [
        Validators.required, 
        Validators.maxLength(6),
        Validators.minLength(6)
      ]),
      nama: new FormControl(barang.nama, [
        Validators.required, 
      ]),
      satuan: new FormControl(barang.satuan, [
        Validators.required, 
      ]),
      hargaJual: new FormControl(barang.hargaJual, [
        Validators.required, 
      ]),
      stok: new FormControl(barang.stok, [
        Validators.required, 
      ]),
      qty: new FormControl(1, [
        Validators.required, 
      ]),
      subtotal: new FormControl(barang.hargaJual * 1, [
        Validators.required, 
      ]),
    })
  }

  getItemsForm(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  getItemForm(index: number): IItem {
    return this.getItemsForm().at(index).value
  }

  addItemForm(barang: IBarang) {
    this.getItemsForm().push(this.newItemForm(barang));
  }
  
  onCreate() {
    console.log(this.orderForm.value);
    this.orderService.create(this.orderForm.value).subscribe((value: IOrder) => {
      this.router.navigate(['main/order'])
    });
  }

  onFindCustomer() {
    this.customerService.find(this.nomorCustomer)
      .subscribe((response: ICustomer) => {
        this.orderForm.get('customer')?.patchValue(response)
      })
  }

  onFindBarang() {
    this.barangService.find(this.nomorBarang)
      .subscribe((response: IBarang) => {
        this.addItemForm(response);
        this.calculateTotal();
      })
  }

  updateQtyForm(index: number) {
    let itemForm = this.getItemForm(index);

    this.getItemsForm()
      .at(index)
      .get('subtotal')?.patchValue(itemForm.qty * itemForm.hargaJual)

      this.calculateTotal()
  }

  calculateTotal() {
    let total = 0;
    this.order.items.map((value: IItem) => {
      total += value.subtotal;
    })
    this.orderForm.get('total')?.patchValue(total);
  }
}
