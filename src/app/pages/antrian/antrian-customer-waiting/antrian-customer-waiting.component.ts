import { Component } from '@angular/core';
import { IAntrian } from 'src/app/interfaces/i-antrian';
import { Antrian } from 'src/app/models/antrian';
import { AntrianService } from 'src/app/services/antrian.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-antrian-customer-waiting',
  templateUrl: './antrian-customer-waiting.component.html',
  styleUrls: ['./antrian-customer-waiting.component.css']
})
export class AntrianCustomerWaitingComponent {
  antrian: IAntrian = new Antrian();
  currentAntrian: IAntrian = new Antrian();

  constructor(private antrianService: AntrianService) {
    this.antrianService.connectAntrian();
  }

  ngOnInit(): void {
    
    this.antrianService.listenAntrian().subscribe((message: IAntrian) => {
      console.log(message)
      this.currentAntrian = message;
    })

    this.onAntrianMe();
    this.onAntrianCurrent();
  }

  onAntrianMe() {
    this.antrianService.meAntrian().subscribe((response: IAntrian) => {
      this.antrian = response;
    })
  }

  onAntrianCurrent() {
    this.antrianService.currentAntrian().subscribe((response: IAntrian) => {
      this.currentAntrian = response;
    })
  }
}
