import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IToken } from 'src/app/interfaces/i-signin';
import { AntrianService } from 'src/app/services/antrian.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-antrian-customer-signin',
  templateUrl: './antrian-customer-signin.component.html',
  styleUrls: ['./antrian-customer-signin.component.css']
})
export class AntrianCustomerSigninComponent implements OnInit {
  message: string = ""
  constructor(
    private antrianService: AntrianService, 
    private activateRoute: ActivatedRoute,
    private loading: LoadingService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.onSignIn(params['id'])
    });
  }

  onSignIn(id: string) {
    this.loading.start()
    this.antrianService.customerSignIn(id).subscribe((response: IToken) => {
      this.message = "Inisialisasi antrian customer..."
      setTimeout(() => {
        localStorage.setItem("TC", response.token);
        this.message = "Customer berhasil masuk ke dalam antrian..."
        this.loading.stop()
        this.router.navigate(['antrian/customer/waiting'])
      }, 2000)
    })
  }
}
