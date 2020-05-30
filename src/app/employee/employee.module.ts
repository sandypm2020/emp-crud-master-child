import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';



@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
