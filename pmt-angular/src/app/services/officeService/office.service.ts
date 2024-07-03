import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/office';

  // get all
  getAllOffices(): Observable<HttpResponse<any>> {
    return this.http.get(this.url, { observe: 'response' });
  }

  // get one

  // create one
  addOffice(
    name: string,
    capacity: number,
    employees: any
  ): Observable<HttpResponse<any>> {
    return this.http.post(
      this.url,
      { name: name, capacity: capacity, employees: employees },
      { observe: 'response' }
    );
  }

  // update one

  // delete one
  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(this.url + '/' + id, { observe: 'response' });
  }
}
