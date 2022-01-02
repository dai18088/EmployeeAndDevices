import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeAndDevices';

  selector='employees'
 changedselector(event:string){
   this.selector=event;
 }

}
