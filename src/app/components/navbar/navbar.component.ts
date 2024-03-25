import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private userService: UserService, 
    private router: Router, 
    private loadingService: LoadingService,
    private menuService: MenuService
  ) {
    console.log(this.router.url)
  }

  
  get hidenNavbar() {
    return this.router.url === '/' ? true : false;
  }

  onSignOut() {
    this.userService.signout()
  }

  isLoading() {
    return this.loadingService.isLoading();
  }

  getMenu() {
    return this.menuService.menus;
  }
}

