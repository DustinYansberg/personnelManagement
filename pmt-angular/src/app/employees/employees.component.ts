import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  data: any = [];
  displayedColumns: string[] = [
    'employeeId',
    'first_name',
    'last_name',
    'office',
    'actions',
  ];

  constructor(private http: HttpClient) {
    http
      .get('http://localhost:8080/employee', { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body);
        this.data = response.body;
      });
  }
}
