import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBarang } from 'src/app/interfaces/i-barang';
import { ICustomer } from 'src/app/interfaces/i-customer';
import { IItem } from 'src/app/interfaces/i-item';
import { IOrder } from 'src/app/interfaces/i-order';
import { Customer } from 'src/app/models/customer';
import { Item } from 'src/app/models/item';
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

  constructor(private fb: FormBuilder, private barangService: BarangService) {
    
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      nomor: ['', [Validators.required, Validators.minLength(10)]],
      tanggal: ['', [Validators.required]],
      dibayar: ['', [Validators.required]],
      customer: this.fb.group({
        _id: ['', [Validators.required]],
        nomor: ['', [Validators.required]],
        nama: ['', [Validators.required]],
        alamat: ['', [Validators.required]],
        telepon: ['', [Validators.required]]
      }),
      items: this.fb.array([])
    });

    this.orderForm.valueChanges.subscribe((value: IOrder) => {
      this.order = value;
    })

    this.orderForm.get('items')?.valueChanges.subscribe((value: IItem[]) => {
      // this.order.items = value;
    })

    this.addItem()
    
  }

  getItemsForm(): FormArray {
    return this.orderForm.get("items") as FormArray
  }

  newItem(item: IItem): FormGroup {
    return this.fb.group(item)
  }

  newCustomer(customer: ICustomer): FormGroup {
    return this.fb.group(customer);
  }

  addItem() {
    let sample: IItem = new Item();
    (this.orderForm.get('items') as FormArray).push(this.newItem(sample))
  }

  changeQty(index: number) {
    let qty: number = this.getItemsForm().at(index).get('qty')?.value;
    let hargaJual: number = this.getItemsForm().at(index).get('hargaJual')?.value;
    this.getItemsForm().at(index).get('subtotal')?.patchValue(qty * hargaJual, { emitEvent: true })
  }

  getSubtotal(index: number) {
    return this.getItemsForm().at(index).get('subtotal')?.value
  }

  getCustomer() {
    return this.getItemsForm().get('customer')?.value
  }
  

  onSubmit() {
    console.log(this.orderForm.value);
  }

  onFindBarang(index: number) {
    this.barangService.findNomor(this.order.items[index].nomor).subscribe((response: IItem) => {
      let isDuplicate = false;
      let index2 = 0
      for (let item of this.getItemsForm().value) {
        if (item.nomor === response.nomor) {
          
          isDuplicate = true;
          index2++;
          break;
        }
      }

      if (!isDuplicate) {
        this.getItemsForm().at(index).patchValue(response, {emitEvent: true});
        this.addItem()
      } else {
        alert('duplicate entry');
        // let data = response;
        // data.subtotal = data.qty
        // this.getItemsForm().at(index2).patchValue(response, {emitEvent: true});
        // this.addItem()
      }
      // console.log(this.getItemsForm().value.map((value: IItem) => value.nomor))

      
    })
    console.log("a", this.order.nomor)
  }


  removeItem(index: number) {
    this.getItemsForm().removeAt(index);
  }

  
}
