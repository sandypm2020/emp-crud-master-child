import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const EmployeeRoutes: Route[] = [
  { path: 'employees', component: EmployeeListComponent },
];

@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(EmployeeRoutes)],
})
export class EmployeeModule {}
