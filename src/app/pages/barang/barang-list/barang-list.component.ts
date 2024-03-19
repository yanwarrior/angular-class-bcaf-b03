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
  // daftarBarang: IBarang[] = [];
  daftarBarang: IPaging<IBarang> = new Paging<IBarang>();

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.onList()
  }

  onList(page: number | null = 1) {
    const params = {page}

    this.barangService.all(params)
      .subscribe((response: IPaging<IBarang>) => {
        this.daftarBarang = response;
      })
  }

  onPaginate(page: number) {
    console.log(typeof page)
    this.onList(page)
  }

  callback() {
    this.onList();
  }

}
