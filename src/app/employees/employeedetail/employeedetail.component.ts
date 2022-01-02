import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from 'src/app/models/device';
import { Employee } from 'src/app/models/employee';
import { EmployeemanagmentService } from 'src/app/serviceemployee/employeemanagment.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  myform:any;
  myemployee!:Employee;
  toggle=false;
 
  constructor(private employeemanagement:EmployeemanagmentService){ }
 
  delete(){  
    this.employeemanagement.deleteemployee(this.myemployee).subscribe(()=>{
    this.employeemanagement.employeedeleted.emit(this.myemployee);})
  }


 editemployee(employee:Employee){

    let newr:Employee=new Employee(employee.id,this.myform.controls.name.value,this.myform.controls.email.value)
    this.employeemanagement.editemployee(newr).subscribe(
    (data:any)=>{
   
        this.myemployee=newr;
        this.employeemanagement.employeeedited.emit(this.myemployee)
   })
 }

ngOnInit(): void {
      
      this.employeemanagement.selectedemployee.subscribe((employee:any)=>{
      this.myemployee=employee;
      this.myform=new FormGroup({name:new FormControl( this.myemployee.name), email:new FormControl(this.myemployee.email)});})
   }


   devices: Device[]=[]

  dropDownRefresh(){
    this.employeemanagement.getDeviceDropDown().subscribe(data=>{
      data.forEach((element:any) =>{
        this.devices.push(element["DeviceDescription"])
      })
    })
  }



}
 