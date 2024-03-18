import { Component } from '@angular/core';
import A, { IUser } from 'src/app/interfaces/i-user';



@Component({
  selector: 'app-halo-dunia',
  templateUrl: './halo-dunia.component.html',
  styleUrls: ['./halo-dunia.component.css']
})
export class HaloDuniaComponent {
  title: string = "Halo Dunia";
  user: IUser;

  constructor() {
    this.user = {
      username: "budi",
      password: "",
      email: "budi@mail.com",
      firstName: "Budi",
      lastName: "Prakoso"
    }
  }

}
