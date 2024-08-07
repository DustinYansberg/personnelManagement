import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Office } from '../../models/office';
import { OfficeService } from '../../services/officeService/office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.css',
})
export class OfficesComponent {
  officeList: Office[] = [];
  displayedColumns: string[] = ['id', 'name', 'numOfEmployees', 'capacity'];

  constructor(private service: OfficeService, private router: Router) {
    // populate the table with the offices
    this.getAllOffices();
  }

  getAllOffices() {
    this.service.getAllOffices().subscribe((response: any) => {
      this.officeList = [];
      for (const o of response.body) {
        this.officeList.push(
          new Office(o.officeId, o.name, o.capacity, o.employees)
        );
      }
    });
  }

  newName: string = '';
  newCapacity: number = 10;
  newEmployees: any = [];

  addOffice() {
    this.service
      .addOffice(this.newName, this.newCapacity, this.newEmployees)
      .subscribe((response) => {
        this.getAllOffices();
      });

    this.newCapacity = 10;
    this.newEmployees = [];
    this.newName = '';
  }

  deleteOffice(id: number) {
    this.service.delete(id).subscribe((response) => {
      this.getAllOffices();
    });
  }

  gotToOfficeDetailsPage(office: Object) {
    this.router.navigate(['office/' + (office as Office).id]);
  }

  goToAddOfficePage() {
    this.router.navigate(['/addOffice']);
  }
}
