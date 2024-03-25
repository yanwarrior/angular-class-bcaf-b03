import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  constructor(private socketService: SocketService) {

  }

  ngOnInit(): void {
    this.socketService.listen().subscribe((message: any) => {
      console.log(message)
    })
  }
}
