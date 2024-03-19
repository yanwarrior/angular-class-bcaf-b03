import { Component, OnInit } from '@angular/core';
import { IBarang } from 'src/app/interfaces/i-barang';
import { IPaging } from 'src/app/interfaces/i-paging';
import { Paging } from 'src/app/models/paging';
import { BarangService } from 'src/app/services/barang.service';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit {
  daftarBarang: IPaging<IBarang> = new Paging<IBarang>();
  loadingIndicatorPaging: boolean = false;

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.onList()
  }

  onList(page: number | null = null) {
    this.loadingIndicatorPaging = true;
    this.barangService.all({ page })
      .subscribe((response: IPaging<IBarang>) => {
        this.daftarBarang = response;
        this.loadingIndicatorPaging = false;
      })
  }

  onPaginate(page: number | null) {
    this.onList(page);
  }

  

}
