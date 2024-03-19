import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IBarang } from 'src/app/interfaces/i-barang';
import { Barang } from 'src/app/models/barang';
import { BarangService } from 'src/app/services/barang.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-barang-create',
  templateUrl: './barang-create.component.html',
  styleUrls: ['./barang-create.component.css']
})
export class BarangCreateComponent {
  barang: IBarang = new Barang();

  constructor(private barangService: BarangService, private router: Router) {}

  onCreate() {
    this.barangService.create(this.barang)
      .pipe(catchError((error: HttpErrorResponse) => {
        // error di sini
        Swal.fire({
          title: 'Error!',
          text: error.error.detail,
          icon: 'error',
        })
        return throwError(() => new Error("Something when wrong"))
      }))
      .subscribe((response: IBarang) => {
        Swal.fire({
          title: 'Berhasil!',
          text: `Data '${response.nama}' berhasil dibuat`,
          icon: 'success',
        }).then(() => {
          this.router.navigate(['/main/barang'])
        })
      })
  }
}
