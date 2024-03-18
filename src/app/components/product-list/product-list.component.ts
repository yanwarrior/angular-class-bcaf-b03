import { Component, inject, TemplateRef } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[];
  product: IProduct;

  qty: number = 10;
  price: number = 15000;

  isActive: boolean = true;

  constructor() {
    this.product = {
      name: "",
      stock: 0,
      price: 0,
      imgURL: ""
    }
    this.products = [
      {
        id: 1,
        name: "Prod A",
        stock: 10,
        price: 3000,
        imgURL: "https://icons.iconarchive.com/icons/bokehlicia/captiva/128/brackets-icon.png"
      },
      {
        id: 2,
        name: "Prod B",
        stock: 10,
        price: 3000,
        imgURL: "https://icons.iconarchive.com/icons/bokehlicia/captiva/128/bulb-icon.png"
      }
    ]
  }

  calculate() {
    return this.price * this.qty;
  }

  calculateDiscount(price: number) {
    return price - (price * 10/100)
  }

  toggleButton() {
    this.isActive = !this.isActive;
  }

  getProduct(product: IProduct) {
    this.product = product;
  }

  getEvent($event: any) {
    console.log($event)
  }

  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
