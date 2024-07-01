import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.css',
})
export class OfficesComponent {
  data: any = [];
  newOfficeName: string = '';

  constructor(private http: HttpClient) {
    http
      .get('http://localhost:8080/office', { observe: 'response' })
      .subscribe((response) => {
        this.data = response.body;
        this.data.sort((a: any, b: any) => a.officeId - b.officeId);
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
        this.data.push(response.body);
        this.newOfficeName = '';
      });
  }
}
