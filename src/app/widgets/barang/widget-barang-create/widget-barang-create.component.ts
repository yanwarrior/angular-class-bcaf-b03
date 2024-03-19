import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBarang } from 'src/app/interfaces/i-barang';
import { Barang } from 'src/app/models/barang';
import { BarangService } from 'src/app/services/barang.service';

@Component({
  selector: 'app-widget-barang-create',
  templateUrl: './widget-barang-create.component.html',
  styleUrls: ['./widget-barang-create.component.css']
})
export class WidgetBarangCreateComponent {
  @Output() callback: EventEmitter<IBarang> = new EventEmitter();

  barang: IBarang = new Barang();

  constructor(private modalService: NgbModal, private barangService: BarangService) {}

  open(content: TemplateRef<any>) {
		this.modalService.open(content).result.then(
			(result) => {
				console.log(`Closed with: ${result}`);
        this.callback.emit();
			},
			(reason) => {
				console.log(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
