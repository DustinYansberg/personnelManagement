import { Component } from '@angular/core';
import { Office } from '../../models/office';
import { OfficeService } from '../../services/officeService/office.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [],
  templateUrl: './office-details.component.html',
  styleUrl: './office-details.component.css',
})
export class OfficeDetailsComponent {
  office: Office;
  constructor(private service: OfficeService, private route: ActivatedRoute) {
    this.office = this.getOffice(this.route.snapshot.params['id']);
  }

  getOffice(id: number): Office {
    let o = new Office(0, 'default', 0, []);
    this.service.getOffice(id).subscribe((res) => {
      (o.id = res.body.officeId),
        (o.name = res.body.name),
        (o.capacity = res.body.capacity),
        (o.employees = res.body.employees);
    });
    return o;
  }
}
