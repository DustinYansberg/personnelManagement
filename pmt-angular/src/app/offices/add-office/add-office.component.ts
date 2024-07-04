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
  selector: 'app-add-office',
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
  templateUrl: './add-office.component.html',
  styleUrl: './add-office.component.css',
})
export class AddOfficeComponent {
  office: { id: number; name: string; capacity: number; employees: [] } =
    new Office(0, '', 5, []);

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
  ) {}

  saveOffice() {
    this.officeService
      .addOffice(this.office.name, this.office.capacity, this.office.employees)
      .subscribe((response) => {
        this.router.navigate(['/offices']);
      });
  }
}
