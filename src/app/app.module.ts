import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient , HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeedetailComponent } from './employees/employeedetail/employeedetail.component';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeemanagmentService } from './serviceemployee/employeemanagment.service';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { DevicedetailComponent } from './devices/devicedetail/devicedetail.component';
import { DevicelistComponent } from './devices/devicelist/devicelist.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'devices', component: DevicesComponent},
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeedetailComponent,
    EmployeelistComponent,
    DevicesComponent,
    DevicedetailComponent,
    DevicelistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeemanagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
