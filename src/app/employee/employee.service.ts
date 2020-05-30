import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    // const getEmpUrl = `${this.baseUrl}/employees`;
    const getEmpUrl = `assets/employees.json`;

    return this.http.get<Employee[]>(getEmpUrl);
  }
}
