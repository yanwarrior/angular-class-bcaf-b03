import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBarang } from '../interfaces/i-barang';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { IPaging } from '../interfaces/i-paging';

@Injectable({
  providedIn: 'root'
})
export class BarangService {

  constructor(
    private httpClient: HttpClient,     
    private userService: UserService) { }

  all(params: any = {}): Observable<IPaging<IBarang>> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }
    
    return this.httpClient.get<IPaging<IBarang>>(
      `${environment.baseUrl}/barang/`, 
      { headers, params }
    );
  }
}
