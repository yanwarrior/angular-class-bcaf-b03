import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICustomer } from 'src/app/interfaces/i-customer';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widget-customer-detail',
  templateUrl: './widget-customer-detail.component.html',
  styleUrls: ['./widget-customer-detail.component.css']
})
export class WidgetCustomerDetailComponent {
  @Input() id: string = "";
  @Output() onSuccess: EventEmitter<ICustomer> = new EventEmitter();

  customer: ICustomer = new Customer();

  constructor(
    private modalService: NgbModal, 
    private customerService: CustomerService,
    private router: Router
  ) {}

  onDetail() {
    this.customerService.get(this.id)
      .subscribe((response: ICustomer) => {
        this.customer = response;
      })
  }

  open(content: TemplateRef<any>) {
    this.onDetail();
    this.modalService.open(content);
  }

  onUpdate() {
    this.customerService.update(this.id, this.customer)
      .subscribe((response: ICustomer) => {
        Swal.fire({
          title: 'Berhasil!',
          text: `Data '${response.nama}' berhasil dibuat`,
          icon: 'success',
        }).then(() => {
          // this.router.navigate(['/main/barang'])
          this.onSuccess.emit(response);
        })
      })
  }
}
