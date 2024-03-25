import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/i-order';
import { IPaging } from 'src/app/interfaces/i-paging';
import { Paging } from 'src/app/models/paging';
import { LoadingService } from 'src/app/services/loading.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: IPaging<IOrder> = new Paging<IOrder>();
  limit: number = 10;
  search: string = "";

  constructor(
    private orderService: OrderService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.onList();
  }

  onList(page: number | null = null) {
    this.loadingService.start();
    this.orderService.all({page, search: this.search, limit: this.limit})
      .subscribe((response: IPaging<IOrder>) => {
        this.orders = response;
        this.loadingService.stop()
      })
  }

  onPaginate(page: number | null) {
    this.onList(page);
  }

  onSuccess(order: IOrder) {
    this.onList();
  }
}
