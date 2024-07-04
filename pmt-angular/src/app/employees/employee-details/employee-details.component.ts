import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Office } from '../../models/office';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OfficeService } from '../../services/officeService/office.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  employee: Employee;
  office: Office = new Office(0, 'default', 0, []);
  offices: Office[] = [];
  isDisabled: boolean = true;
  showError: boolean = false;

  constructor(
    private service: EmployeeService,
    private officeService: OfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employee = this.getEmployee(this.route.snapshot.params['id']);
    this.getOffices();
  }

  getEmployee(id: number): Employee {
    let e = new Employee(0, 'default', 'default', { name: 'default' });
    this.office = new Office(0, 'default', 0, []);
    this.service.getEmployee(id).subscribe((res) => {
      e.id = res.body.employeeId;
      e.firstName = res.body.first_name;
      e.lastName = res.body.last_name;
      this.office.id = res.body.office.officeId;
      this.office.name = res.body.office.name;
      this.office.capacity = res.body.office.capacity;
      e.office = this.office;
    });

    return e;
  }

  getOffices() {
    this.officeService.getAllOffices().subscribe((res) => {
      for (const o of res.body) {
        this.offices.push(
          new Office(o.officeId, o.name, o.capacity, o.employees)
        );
      }
    });
  }

  deleteEmployee() {
    console.log(this.employee.id);
    this.service.delete(this.employee.id).subscribe((res) => {
      this.router.navigate(['/employees']);
    });
  }

  makeEditable() {
    this.isDisabled = !this.isDisabled;
  }

  showCapacityError() {
    this.showError = !this.showError;
  }

  saveChanges() {
    console.log(this.employee.office);
    if (
      (this.employee.office as Office).capacity <=
      (this.employee.office as Office).employees.length
    ) {
      console.log('Cant do it!');
      this.showCapacityError();
    } else {
      this.isDisabled = !this.isDisabled;
      this.service.update(this.employee).subscribe((res) => {
        this.router.navigate(['/employees']);
      });
    }
  }
}

//// Implement Add Employee Functionality
//// Add a add Employee Page and an Add Office Page
//// Implement Delete Employee Functionality

////  Make the employee and office detail page editable when the edit button is pressed. alternatively, make a separate edit page for each.
//// Implement Update Employee Functionality
//// Implement Update Office Functionality
//// make capacity logic

//// TODO: Add a Dialog box to confirm deletion of an employee or office
//// TODO: Add Sort header functionality to tables (available in angular material table)
//// TODO: Paginate the lists of employees and offices
//// TODO: Add a search bar to the employees and offices pages
