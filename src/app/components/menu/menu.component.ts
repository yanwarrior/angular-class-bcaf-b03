import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  

  constructor(private offcanvasService: NgbOffcanvas, private menuService: MenuService) {}

  open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}

  getMenu() {
    return this.menuService.menus;
  }
}
