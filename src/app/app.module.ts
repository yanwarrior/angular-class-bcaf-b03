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
import { PagingComponent } from './components/paging/paging.component';
import { BarangCreateComponent } from './pages/barang/barang-create/barang-create.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { WidgetBarangDetailComponent } from './widgets/widget-barang-detail/widget-barang-detail.component';



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
    WidgetBarangDetailComponent
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

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
