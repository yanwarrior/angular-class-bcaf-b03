import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ICustomer } from '../interfaces/i-customer';
import { IPaging } from '../interfaces/i-paging';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,     
    private userService: UserService
  ) { }

  all(params: any = {}): Observable<IPaging<ICustomer>> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }
    
    return this.httpClient.get<IPaging<ICustomer>>(
      `${environment.baseUrl}/customer/`, 
      { headers, params }
    );
  }

  create(customer: ICustomer): Observable<ICustomer> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.post<ICustomer>(
      `${environment.baseUrl}/customer/`, 
      JSON.stringify(customer),
      { headers }
    )
  }

  get(id: string): Observable<ICustomer> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.get<ICustomer>(
      `${environment.baseUrl}/customer/${id}`, 
      { headers }
    );
  }

  update(id: string, customer: ICustomer): Observable<ICustomer> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.put<ICustomer>(
      `${environment.baseUrl}/customer/${id}`, 
      JSON.stringify(customer),
      { headers }
    );
  }

  remove(id: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }

    return this.httpClient.delete<any>(
      `${environment.baseUrl}/customer/${id}`, 
      { headers }
    );
  }
}
