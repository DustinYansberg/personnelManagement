import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from '../../models/office';

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
  getOffice(id: number): Observable<HttpResponse<any>> {
    return this.http.get(this.url + '/' + id, { observe: 'response' });
  }

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
  updateOffice(office: Office): Observable<HttpResponse<any>> {
    return this.http.put(
      this.url + '/' + office.id,
      {
        officeId: office.id,
        name: office.name,
        capacity: office.capacity,
        employees: [],
      },
      { observe: 'response' }
    );
  }

  // delete one
  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(this.url + '/' + id, { observe: 'response' });
  }
}
