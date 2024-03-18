import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AuthGuard, PreventGuard } from './guards/auth-guard.guard';
import { BarangDetailComponent } from './pages/barang/barang-detail/barang-detail.component';

const routes: Routes = [
  {path: "", component: UserSigninComponent, canActivate: [PreventGuard]},
  {
    path: "barang", 
    component: BarangListComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'detail/:id', component: BarangDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
