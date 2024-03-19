import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {
  @Input() next: number = 0;
  @Input() previous: number = 0;
  @Input() loadingIndicator: boolean = false;
  @Output() onPaginate: EventEmitter<number> = new EventEmitter();

  btnClick: number = 0;

  onPaginateAction(page: number, status: number) {
    this.btnClick = status;
    this.onPaginate.emit(page)
  }
}
