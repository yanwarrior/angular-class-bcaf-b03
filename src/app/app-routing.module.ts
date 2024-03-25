import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AuthGuard, PreventGuard } from './guards/auth-guard.guard';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BarangCreateComponent } from './pages/barang/barang-create/barang-create.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderCreateComponent } from './pages/orders/order-create/order-create.component';
import { SocketComponent } from './pages/socket/socket.component';
import { AntrianCustomerSigninComponent } from './pages/antrian/antrian-customer-signin/antrian-customer-signin.component';
import { AntrianCustomerWaitingComponent } from './pages/antrian/antrian-customer-waiting/antrian-customer-waiting.component';

const routes: Routes = [
  {path: "", component: UserSigninComponent, canActivate: [PreventGuard]},
  {
    path: "main", 
    component: MainComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'barang', component: BarangListComponent },
      { path: 'barang/new', component: BarangCreateComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'order', component: OrderListComponent },
      { path: 'order/new', component: OrderCreateComponent },
    ]
  },
  {
    path: 'antrian/customer/signin/:id',
    component: AntrianCustomerSigninComponent
  },
  {
    path: 'antrian/customer/waiting',
    component: AntrianCustomerWaitingComponent
  },
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
