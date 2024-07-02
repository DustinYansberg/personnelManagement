export class Office {
  id: number;
  name: string;
  capacity: number;
  employees: [];

  constructor(id: number, name: string, capacity: number, employees: []) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.employees = employees;
  }
}
