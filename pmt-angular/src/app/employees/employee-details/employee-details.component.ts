import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Office } from '../../models/office';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  employee: Employee;
  office: Office = new Office(0, 'default', 0, []);
  constructor(private service: EmployeeService, private route: ActivatedRoute) {
    this.employee = this.getEmployee(this.route.snapshot.params['id']);
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
}

// TODO: Implement Add Employee Functionality
// TODO: Implement Delete Employee Functionality
// TODO: Implement Update Employee Functionality

// TODO: Add a add Employee Page and an Add Office Page

// TODO Make the employee and office detail page editable when the edit button is pressed. alternatively, make a separate edit page for each.

// TODO: Add Sort header functionality to tables (available in angular material table)
// TODO: Paginate the lists of employees and offices
// TODO: Add a search bar to the employees and offices pages
