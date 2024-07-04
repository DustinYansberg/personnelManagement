import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { OfficeService } from '../../services/officeService/office.service';
import { Office } from '../../models/office';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  employee: Employee = new Employee(0, '', '', new Office(0, '', 0, []));
  // office: Office = this.employee.office;

  offices: Office[] = [];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private officeService: OfficeService,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.getAllOffices();
  }

  getAllOffices() {
    this.officeService.getAllOffices().subscribe((response) => {
      this.offices = [];
      for (const o of response.body) {
        this.offices.push(
          new Office(o.officeId, o.name, o.capacity, o.employees)
        );
      }
    });
  }

  getOfficeName(): string {
    let o: any = this.employee.office;
    return o.name;
  }

  saveEmployee() {
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe((res) => {
      this.router.navigate(['/employees']);
    });
  }
}
