import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICustomer } from 'src/app/interfaces/i-customer';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widget-customer-create',
  templateUrl: './widget-customer-create.component.html',
  styleUrls: ['./widget-customer-create.component.css']
})
export class WidgetCustomerCreateComponent {
  customer: ICustomer = new Customer();

  constructor(
    private modelService: NgbModal,
    private customerService: CustomerService
  ) {}
  
  open(content: TemplateRef<any>) {
    this.modelService.open(content);
  }

  onCreate() {
    this.customerService.create(this.customer).subscribe((response: ICustomer) => {
      Swal.fire({
        title: 'Berhasil!',
        text: `Data '${response.nama}' berhasil dibuat`,
        icon: 'success',
      }).then(() => {
        
        // this.router.navigate(['/main/barang'])
        // this.onSuccess.emit(response);
      })
    })
  }
}
