import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getAllTemples(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/temples');
  }

  addTemple(val: any) {
    return this.http.post(this.APIUrl+'/temples/',val);
  }

  updateTemple(val: any) {
    return this.http.put(this.APIUrl+'/temples/',val);
  }

  deleteTemple(val: any) {
    return this.http.delete(this.APIUrl+'/temples/'+val);
  }

}