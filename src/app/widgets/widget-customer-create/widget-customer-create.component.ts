import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
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
  @Output() onSuccess: EventEmitter<ICustomer> = new EventEmitter();

  constructor(
    private modelService: NgbModal,
    private customerService: CustomerService
  ) {}
  
  open(content: TemplateRef<any>) {
    this.modelService.open(content).result.then(
			(result) => {
        console.log(result)
				// this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
        console.log(reason)
        // this.reset()
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);;
  }

  reset() {
    this.customer = new Customer();
  }

  onCreate() {
    this.customerService.create(this.customer).subscribe((response: ICustomer) => {
      this.onSuccess.emit(response);
      
      Swal.fire({
        title: 'Berhasil!',
        text: `Data '${response.nama}' berhasil dibuat`,
        icon: 'success',
      }).then(() => {
        this.reset();
        // this.router.navigate(['/main/barang'])
        // this.onSuccess.emit(response);
      })
    })
  }
}
