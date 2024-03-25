import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { IPaging } from '../interfaces/i-paging';
import { IOrder } from '../interfaces/i-order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  all(params: any = {}): Observable<IPaging<IOrder>> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.get<IPaging<IOrder>>(
      `${environment.baseUrl}/order/`, 
      { headers, params }
    )
  }

  create(order: IOrder): Observable<IOrder> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.post<IOrder>(
      `${environment.baseUrl}/order/`, 
      JSON.stringify(order),
      { headers }
    )
  }

  get(id: string): Observable<IOrder> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.get<IOrder>(
      `${environment.baseUrl}/order/${id}`, 
      { headers }
    );
  }
}
