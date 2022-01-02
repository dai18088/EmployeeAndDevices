import { Component, OnInit } from '@angular/core';
import { DevicemanagmentService } from '../servicedevice/devicemanagment.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private devicemanagment: DevicemanagmentService) { }

  ngOnInit(): void {
  }

}
