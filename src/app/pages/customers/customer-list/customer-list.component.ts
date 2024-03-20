import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/i-customer';
import { IPaging } from 'src/app/interfaces/i-paging';
import { Paging } from 'src/app/models/paging';
import { CustomerService } from 'src/app/services/customer.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: IPaging<ICustomer> = new Paging<ICustomer>();
  limit: number = 10;
  search: string = "";

  constructor(
    private customerService: CustomerService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.onList();
  }

  onList(page: number | null = null) {
    this.loadingService.start()
    this.customerService.all({ page, search: this.search, limit: this.limit })
      .subscribe((response: IPaging<ICustomer>) => {
        this.customers = response;
        this.loadingService.stop()
      })
  }

  onPaginate(page: number | null) {
    this.onList(page);
  }

}
