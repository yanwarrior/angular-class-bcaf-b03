import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor(private userService: UserService) { 
    this.socket = io('http://localhost:4000', {
      "extraHeaders": {
        "Authorization": this.userService.getToken()
      }
    });
  }

  listen() {
    let observable = new Observable<any>((observer: any) => {
      this.socket.on('antrian', (data: any) => {
        observer.next(data);
      })
    })
    return observable;
  }
}
