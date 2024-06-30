import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  data: any = [];

  constructor(private http: HttpClient) {
    http
      .get('http://localhost:8080/employee', { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body);
        this.data = response.body;
      });
  }
}
