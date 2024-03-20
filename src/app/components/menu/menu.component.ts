import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus = [
    {
      title: 'Barang',
      mainPath: '/main/barang'
    },
    {
      title: 'Customer',
      mainPath: '/main/customer'
    }
  ]

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}
}
