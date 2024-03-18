import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignin, IToken } from 'src/app/interfaces/i-signin';
import { IUser } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {
  user: ISignin;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      email: "",
      password: ""
    }
  }

  onSignIn() {
    this.userService.signIn(this.user)
      .subscribe((response: IToken) => {
        this.userService.setAuthentication(response)
        this.router.navigate(['/barang'])
      })
  }


}
