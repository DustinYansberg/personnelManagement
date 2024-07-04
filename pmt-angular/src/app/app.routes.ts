import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficesComponent } from './offices/offices-table/offices.component';
import { EmployeesComponent } from './employees/employees-table/employees.component';
import { OfficeDetailsComponent } from './offices/office-details/office-details.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { AddOfficeComponent } from './offices/add-office/add-office.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'offices',
    component: OfficesComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'office/:id',
    component: OfficeDetailsComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
  },
  {
    path: 'addOffice',
    component: AddOfficeComponent,
  },
];

// {
//     path:'',
//     component:
// },
