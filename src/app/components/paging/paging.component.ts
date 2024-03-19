import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {
  @Input() next: number = 0;
  @Input() previous: number = 0;
  @Output() onPaginate: EventEmitter<number> = new EventEmitter();

  onPaginateAction(page: number) {
    this.onPaginate.emit(page)
  }
}
