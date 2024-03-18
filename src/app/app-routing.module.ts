import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AuthGuard, PreventGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path: "", component: UserSigninComponent, canActivate: [PreventGuard]},
  {
    path: "barang", 
    component: BarangListComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
