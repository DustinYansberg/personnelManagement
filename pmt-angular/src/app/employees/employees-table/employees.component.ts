import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'office'];

  constructor(private service: EmployeeService, private router: Router) {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.getAllEmployees().subscribe((response) => {
      this.employees = [];
      for (const e of response.body) {
        this.employees.push(
          new Employee(e.employeeId, e.first_name, e.last_name, e.office)
        );
      }
    });
  }

  goToEmployeeDetailsPage(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  goToAddEmployeePage() {
    this.router.navigate(['/addEmployee']);
  }
}
