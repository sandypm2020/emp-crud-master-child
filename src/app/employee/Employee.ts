export class Employee {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public emailAddress: string = '',
    public gender: string = '',
    public profileImage: string = '',
    public companyId: number = 0,
    public age: number = 0
  ) {}
}
