import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.css',
})
export class OfficesComponent {
  dataSource: any = [];
  displayedColumns: string[] = ['officeId', 'name', 'actions'];
  newOfficeName: string = '';

  constructor(private http: HttpClient) {
    http
      .get('http://localhost:8080/office', { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body);
        this.dataSource = response.body;
        this.dataSource.sort((a: any, b: any) => a.officeId - b.officeId);
      });
  }

  addOffice() {
    this.http
      .post(
        'http://localhost:8080/office',
        { name: this.newOfficeName },
        { observe: 'response' }
      )
      .subscribe((response) => {
        this.dataSource.push(response.body);
        this.newOfficeName = '';
      });
  }

  deleteOffice(officeId: number) {
    // Remove the office from the data source
  }

  editOffice(office: any) {
    // Update the office in the data source
  }
}
