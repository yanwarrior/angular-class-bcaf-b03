import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { BarangListComponent } from './pages/barang/barang-list/barang-list.component';
import { AuthGuard, PreventGuard } from './guards/auth-guard.guard';
import { BarangDetailComponent } from './pages/barang/barang-detail/barang-detail.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BarangCreateComponent } from './pages/barang/barang-create/barang-create.component';

const routes: Routes = [
  {path: "", component: UserSigninComponent, canActivate: [PreventGuard]},
  {
    path: "main", 
    component: MainComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'barang', component: BarangListComponent },
      { path: 'barang/new', component: BarangCreateComponent },
      { path: 'detail/:id', component: BarangDetailComponent }
    ]
  },
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
