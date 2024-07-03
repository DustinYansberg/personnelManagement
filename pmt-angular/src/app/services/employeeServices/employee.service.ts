import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/employee';

  // get all
  getAllEmployees(): Observable<HttpResponse<any>> {
    return this.http.get(this.url, { observe: 'response' });
  }

  // get one
  getEmployee(id: number): Observable<HttpResponse<any>> {
    return this.http.get(this.url + '/' + id, { observe: 'response' });
  }

  // create one
  addEmployee(
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
