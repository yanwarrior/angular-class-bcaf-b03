import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IError } from 'src/app/interfaces/i-error';
import { ISignin, IToken } from 'src/app/interfaces/i-signin';
import { IUser } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {
  user: ISignin;
  error: IError;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      email: "",
      password: ""
    }

    this.error = {
      detail: ""
    }
  }

  onSignIn() {
    this.userService.signIn(this.user)
      .pipe(catchError((error: HttpErrorResponse) => {
        // console.log(error.error.detail);
        this.error.detail = error.error.detail;
        Swal.fire({
          title: 'Error!',
          text: error.error.detail,
          icon: 'error',
        })
        return throwError(() => new Error("Something when wrong"))
      }))
      .subscribe((response: IToken) => {
        this.userService.setAuthentication(response)
        Swal.fire({
          icon: "success",
          title: "Sign Berhasil",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/barang'])
        });

      })
  }


}
