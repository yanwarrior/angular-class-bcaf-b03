import { Component } from '@angular/core';
import { IBarang } from 'src/app/interfaces/i-barang';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-barang-create',
  templateUrl: './barang-create.component.html',
  styleUrls: ['./barang-create.component.css']
})
export class BarangCreateComponent {
  barang: IBarang = new Barang();
}
