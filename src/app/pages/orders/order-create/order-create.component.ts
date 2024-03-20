import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBarang } from 'src/app/interfaces/i-barang';
import { IItem, IOrder } from 'src/app/interfaces/i-order';
import { Order } from 'src/app/models/order';
import { BarangService } from 'src/app/services/barang.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  orderForm!: FormGroup;
  order: IOrder = new Order();
  nomorBarang: string = ""

  constructor(private fb: FormBuilder, private barangService: BarangService) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      nomor: new FormControl('', [Validators.required]),
      tanggal: new FormControl('', [Validators.required]),
      dibayar: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required]),
      customer: this.fb.group({
        nomor: new FormControl({value: '', disabled: false}, [Validators.required]),
        nama: new FormControl('', [Validators.required]),
        alamat: new FormControl('', [Validators.required]),
        telepon: new FormControl('', [Validators.required]),
      }),
      items: this.fb.array([])
    });

    this.orderForm.valueChanges.subscribe((value: IOrder) => {
      this.order = value;
    })
  }

  getItemsForm(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  getItem(index: number) {
    return this.getItemsForm().at(index).value
  }

  newItemForm(barang: IBarang): FormGroup {
    return this.fb.group({
      nomor: new FormControl(barang.nomor, [Validators.required]),
      nama: new FormControl(barang.nama, [Validators.required]),
      satuan: new FormControl(barang.satuan, [Validators.required]),
      hargaJual: new FormControl(barang.hargaJual, [Validators.required]),
      stok: new FormControl(barang.stok, [Validators.required]),
      qty: new FormControl(1, [Validators.required, Validators.pattern('^[0-9]+$')]),
      subtotal: new FormControl(barang.hargaJual * 1, [Validators.required])
    });
  }

  addItemForm(barang: IBarang) {
    this.getItemsForm().push(this.newItemForm(barang));
  }

  updateQtyForm(index: number) {
    let qty: number= this.getItemsForm().at(index).get('qty')?.value;
    let hargaJual: number = this.getItemsForm().at(index).get('hargaJual')?.value;
    this.getItemsForm().at(index).get('subtotal')?.patchValue(qty * hargaJual, {emitEvent: true})
    this.calculateTotal()
  }

  calculateTotal() {
    // calculate total
    let total = 0;
    this.order.items.map((value: IItem) => {
      total += value.subtotal;
    })

    this.orderForm.get('total')?.patchValue(total, {eventEmit: true})
  }

  removeItemForm(index: number) {
    this.getItemsForm().removeAt(index);
  }

  onSubmit() {
    console.log(this.orderForm.value);
  }

  onFindByBarang() {
    this.barangService.findBy(this.nomorBarang)
      .subscribe((response: IBarang) => {
        this.addItemForm(response);
        this.calculateTotal()
      })
  }

}
