import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IToken } from '../interfaces/i-signin';
import io, { Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { IAntrian } from '../interfaces/i-antrian';

@Injectable({
  providedIn: 'root'
})
export class AntrianService {
  baseUrl: string = environment.baseUrl
  
  private socket!: Socket;
  private tokenKey: string = "TC"; 
  
  constructor(private httpClient: HttpClient) { }

  customerSignIn(id: string): Observable<IToken> {
    const headers = {
      'Content-Type': 'application/json'
    };

    return this.httpClient.post<IToken>(`${this.baseUrl}/antrian/customer/signin/${id}`, null, { headers });
  }

  getToken() {
    return localStorage.getItem(this.tokenKey) || "";
  }

  listenAntrian() {
    let observable = new Observable<any>((observer: any) => {
      this.socket.on('antrian', (data: any) => {
        observer.next(data);
      })
    })
    return observable;
  }

  connectAntrian() {
    this.socket = io('http://localhost:4000', {
      "extraHeaders": {
        "Authorization": this.getToken()
      }
    });
  }

  meAntrian(): Observable<IAntrian> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    };

    return this.httpClient.get<IAntrian>(`${this.baseUrl}/antrian/customer/me`, { headers });
  }

  currentAntrian(): Observable<IAntrian> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    };

    return this.httpClient.get<IAntrian>(`${this.baseUrl}/antrian/customer/current`, { headers });
  }
}
