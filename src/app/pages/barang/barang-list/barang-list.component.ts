import { Component, OnInit } from '@angular/core';
import { IBarang } from 'src/app/interfaces/i-barang';
import { IPaging } from 'src/app/interfaces/i-paging';
import { Paging } from 'src/app/models/paging';
import { BarangService } from 'src/app/services/barang.service';
import { LoadingService } from 'src/app/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit {
  daftarBarang: IPaging<IBarang> = new Paging<IBarang>();
  loadingIndicatorPaging: boolean = false;
  limit: number = 10;
  search: string = "";

  constructor(
    private barangService: BarangService, 
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.onList()
  }

  onList(page: number | null = null) {
    this.loadingService.start()
    this.loadingIndicatorPaging = true;
    this.barangService.all({ page, limit: this.limit, search: this.search })
      .subscribe((response: IPaging<IBarang>) => {
        this.daftarBarang = response;
        this.loadingIndicatorPaging = false;
        this.loadingService.stop()
      })
  }

  onPaginate(page: number | null) {
    this.onList(page);
  }

  onSuccessUpdate(barang: IBarang) {
    this.onList();
  }

  onDelete(id: string) {
    Swal.fire({
      title: `Hapus Data`,
      text: 'Anda yakin ingin menghapus data ini?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, sure!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.barangService.remove(id).subscribe(() => {
          this.onList();
        })
      }
    })
    
  }

}
