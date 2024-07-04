import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Office } from '../../models/office';
import { OfficeService } from '../../services/officeService/office.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [
    MatTableModule,
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
  templateUrl: './office-details.component.html',
  styleUrl: './office-details.component.css',
})
export class OfficeDetailsComponent {
  office: Office;
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  isDisabled: boolean = true;

  constructor(
    private service: OfficeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.office = this.getOffice(this.route.snapshot.params['id']);
  }

  getOffice(id: number): Office {
    let o = new Office(0, 'default', 0, []);
    this.service.getOffice(id).subscribe((res) => {
      this.employees = [];
      o.id = res.body.officeId;
      o.name = res.body.name;
      o.capacity = res.body.capacity;
      o.employees = res.body.employees;
      for (const e of res.body.employees) {
        this.employees.push(
          new Employee(
            e.employeeId,
            e.first_name,
            e.last_name,
            new Office(e.officeId, e.name, e.capacity, [])
          )
        );
      }
    });
    return o;
  }

  deleteOffice() {
    console.log(this.office.id);
  }

  goToEmployeeDetailsPage(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  makeEditable() {
    this.isDisabled = !this.isDisabled;
  }

  saveChanges() {
    this.service.updateOffice(this.office).subscribe((res) => {
      this.isDisabled = !this.isDisabled;
      this.router.navigate(['/offices']);
    });
  }
}
