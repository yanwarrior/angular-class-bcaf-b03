import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBarang } from '../interfaces/i-barang';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarangService {

  constructor(
    private httpClient: HttpClient,     
    private userService: UserService) { }

  all(): Observable<IBarang[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.userService.getToken()
    }
    
    return this.httpClient.get<IBarang[]>(
      `${environment.baseUrl}/barang/`, 
      { headers }
    );
  }
}
