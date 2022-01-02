import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from 'src/app/models/device';
import { DevicemanagmentService } from 'src/app/servicedevice/devicemanagment.service';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.css']
})
export class DevicedetailComponent implements OnInit {

  myformdevice:any;
  mydevice!:Device;
  toggledevice=false;
 
  constructor(private devicemanagement:DevicemanagmentService){ }
 
  delete(){
    this.devicemanagement.deletedevice(this.mydevice).subscribe(()=>{
    this.devicemanagement.devicedeleted.emit(this.mydevice);
    })
  }

 editdevice(device:Device){
    let newr:Device=new Device(device.id,this.myformdevice.controls.serialNumber.value,this.myformdevice.controls.description.value,this.myformdevice.controls.type.value)
 
    this.devicemanagement.editdevice(newr).subscribe((data:any)=>{
      this.mydevice=newr;
      this.devicemanagement.deviceedited.emit(this.mydevice)})
 }

   ngOnInit(): void {
      
      this.devicemanagement.selecteddevice.subscribe((device:any)=>{
      this.mydevice=device;
      this.myformdevice=new FormGroup({serialNumber:new FormControl( this.mydevice.serialNumber), description:new FormControl(this.mydevice.description), type:new FormControl(this.mydevice.type)});
 })
   }
 
 }
 