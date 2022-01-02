import { Component, OnInit } from '@angular/core';
import { EmployeemanagmentService } from '../serviceemployee/employeemanagment.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeemanagment: EmployeemanagmentService) { }

  ngOnInit(): void {
  }

}
