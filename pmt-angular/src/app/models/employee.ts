export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  office: Object;

  constructor(id: number, firstName: string, lastName: string, office: Object) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.office = office;
  }
}
