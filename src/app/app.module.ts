import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HaloDuniaComponent } from './components/halo-dunia/halo-dunia.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { HttpClientModule } from '@angular/common/http';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { BarangDetailComponent } from './pages/barang/barang-detail/barang-detail.component';
import { PagingComponent } from './components/paging/paging.component';
import { BarangCreateComponent } from './pages/barang/barang-create/barang-create.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { WidgetBarangDetailComponent } from './widgets/widget-barang-detail/widget-barang-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { WidgetCustomerCreateComponent } from './widgets/widget-customer-create/widget-customer-create.component';
import { WidgetCustomerDetailComponent } from './widgets/widget-customer-detail/widget-customer-detail.component';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderCreateComponent } from './pages/orders/order-create/order-create.component';
import { ValidationComponent } from './components/validation/validation.component';
import { SocketComponent } from './pages/socket/socket.component';
import { AntrianInitComponent } from './pages/antrian/antrian-init/antrian-init.component';
import { AntrianCustomerComponent } from './pages/antrian/antrian-customer/antrian-customer.component';
import { AntrianCreateComponent } from './pages/antrian/antrian-create/antrian-create.component';
import { AntrianCustomerSigninComponent } from './pages/antrian/antrian-customer-signin/antrian-customer-signin.component';
import { AntrianCustomerWaitingComponent } from './pages/antrian/antrian-customer-waiting/antrian-customer-waiting.component';



@NgModule({
  declarations: [
    AppComponent,
    HaloDuniaComponent,
    ProductListComponent,
    NavbarComponent,
    UserSigninComponent,
    BarangListComponent,
    ErrorMessageComponent,
    BarangDetailComponent,
    PagingComponent,
    BarangCreateComponent,
    MainComponent,
    NotFoundComponent,
    WidgetBarangDetailComponent,
    MenuComponent,
    CustomerListComponent,
    WidgetCustomerCreateComponent,
    WidgetCustomerDetailComponent,
    OrderListComponent,
    OrderCreateComponent,
    ValidationComponent,
    SocketComponent,
    AntrianInitComponent,
    AntrianCustomerComponent,
    AntrianCreateComponent,
    AntrianCustomerSigninComponent,
    AntrianCustomerWaitingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
