import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.css',
})
export class OfficesComponent {
  data: any = [];

  constructor(private http: HttpClient) {
    http
      .get('http://localhost:8080/office', { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body);
        this.data = response.body;
      });
  }
}
