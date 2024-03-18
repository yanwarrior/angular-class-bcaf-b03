import { Component, OnInit } from '@angular/core';
import { IBarang } from 'src/app/interfaces/i-barang';
import { BarangService } from 'src/app/services/barang.service';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit {
  daftarBarang: IBarang[] = [];

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.onList()
  }

  onList() {
    this.barangService.all()
      .subscribe((response: IBarang[]) => {
        this.daftarBarang = response;
      })
  }

  

}
