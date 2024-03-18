import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HaloDuniaComponent } from './components/halo-dunia/halo-dunia.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { HttpClientModule } from '@angular/common/http';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { BarangDetailComponent } from './pages/barang/barang-detail/barang-detail.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HaloDuniaComponent,
    ProductListComponent,
    NavbarComponent,
    UserSigninComponent,
    BarangListComponent,
    ErrorMessageComponent,
    BarangDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    // SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
