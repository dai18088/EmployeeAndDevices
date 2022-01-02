import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Device } from '../models/device';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagmentService {

  @Output() selectedemployee=new EventEmitter();
  @Output() employeeadded=new EventEmitter();
  @Output() employeedeleted:EventEmitter<Employee>=new EventEmitter();
  @Output() employeeedited:EventEmitter<Employee>=new EventEmitter();

  myform!:FormGroup
  Device : Device []=[]

  constructor(private http:HttpClient) {
  }


  getemployees(){
  return this.http.get('https://employeeanddevices-default-rtdb.firebaseio.com/Employee.json');
  }


  deleteemployee(employee: any) {
    return this.http.delete('https://employeeanddevices-default-rtdb.firebaseio.com/Employee/'+employee.id+ '.json')
  }

  editemployee(employee:Employee) {
    return this.http.put('https://employeeanddevices-default-rtdb.firebaseio.com/Employee/'+employee.id+ '.json',employee)
  }
  
  publishemployee(employee: Employee) {
    return this.http.post('https://employeeanddevices-default-rtdb.firebaseio.com/Employee.json',employee)
  }

  getDeviceDropDown(){
    return this.http.get<Device[]>('https://employeeanddevices-default-rtdb.firebaseio.com/Device.json')
  }


}