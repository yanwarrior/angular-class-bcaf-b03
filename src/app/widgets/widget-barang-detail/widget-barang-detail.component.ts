import { Component, Input, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBarang } from 'src/app/interfaces/i-barang';
import { Barang } from 'src/app/models/barang';
import { BarangService } from 'src/app/services/barang.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widget-barang-detail',
  templateUrl: './widget-barang-detail.component.html',
  styleUrls: ['./widget-barang-detail.component.css']
})
export class WidgetBarangDetailComponent {
  @Input() id: string = "";

  barang: IBarang = new Barang();

  constructor(
    private modalService: NgbModal, 
    private barangService: BarangService,
    private router: Router
  ) {}

  onDetail() {
    this.barangService.get(this.id)
      .subscribe((response: IBarang) => {
        this.barang = response;
      })
  }

  open(content: TemplateRef<any>) {
    this.onDetail();
    this.modalService.open(content).result.then(
      () => {

      },
    )
  }

  onUpdate() {
    this.barangService.update(this.id, this.barang)
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
