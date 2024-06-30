import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficesComponent } from './offices/offices.component';
import { EmployeesComponent } from './employees/employees.component';

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
];

// {
//     path:'',
//     component:
// },
