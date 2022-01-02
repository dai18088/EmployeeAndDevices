import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/models/device';
import { Employee } from 'src/app/models/employee';
import { EmployeemanagmentService } from 'src/app/serviceemployee/employeemanagment.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


  myemployees:Employee[]=[];
  myform:FormGroup=new FormGroup({name:new FormControl(), email:new FormControl("",[Validators.minLength(5),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required])});
  toggle=false;
  newemployee!: Employee;


  constructor(private employeemanagement:EmployeemanagmentService) { }

  addemployee(){
    this.employeemanagement.publishemployee(this.myform.value).subscribe( (newemployee:any) =>{
    this.myemployees.push(new Employee(newemployee.id,this.myform.controls['name'].value,this.myform.controls['email'].value))
  })

  this.toggle=!this.toggle;

}  

  
  sendemployee(employee:Employee){
    this.employeemanagement.selectedemployee.emit(employee)
}
  

  ngOnInit(){

      this.dropDownRefresh();


      this.employeemanagement.employeeedited.subscribe( (myemployee:any) =>{
      let index= this.myemployees.findIndex(employee =>{
        return employee=myemployee
      })
      this.myemployees[index]=myemployee
    })

      this.employeemanagement.employeedeleted.subscribe( (currentemployee:any)=>{ 
      this.myemployees=this.myemployees.filter((employee)=>{
        return employee!=currentemployee
    })
      this.employeemanagement.selectedemployee.emit(this.myemployees[0])

  })


      this.employeemanagement.getemployees().subscribe( (employees:any) =>{
        for(let key in employees){
          console.log(employees[key])
          this.myemployees.push(new Employee(key,employees[key].name,employees[key].email));
      }
           this.employeemanagement.selectedemployee.emit(this.myemployees[0])

    });


  }

  devices: Device[]=[]

  dropDownRefresh(){
    this.employeemanagement.getDeviceDropDown().subscribe(data=>{
      data.forEach((element:any) =>{
        this.devices.push(element["Device"])
      })
    })
  }

}
