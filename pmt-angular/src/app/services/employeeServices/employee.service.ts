import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { Office } from '../../models/office';

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
  addEmployee(employee: Employee): Observable<HttpResponse<any>> {
    return this.http.post(
      this.url,
      {
        first_name: employee.firstName,
        last_name: employee.lastName,
        office: {
          officeId: (employee.office as Office).id,
          name: (employee.office as Office).name,
          capacity: (employee.office as Office).capacity,
          employees: [],
        },
      },
      { observe: 'response' }
    );
  }

  // update one
  update(employee: Employee): Observable<HttpResponse<any>> {
    return this.http.put(
      this.url + '/' + employee.id,
      {
        employeeId: employee.id,
        first_name: employee.firstName,
        last_name: employee.lastName,
        office: {
          officeId: (employee.office as Office).id,
          name: (employee.office as Office).name,
          capacity: (employee.office as Office).capacity,
          employees: [],
        },
      },
      { observe: 'response' }
    );
  }

  // delete one
  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(this.url + '/' + id, { observe: 'response' });
  }
}
