import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from 'src/app/models/device';
import { DevicemanagmentService } from 'src/app/servicedevice/devicemanagment.service';

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DevicelistComponent implements OnInit {

  mydevices:Device[]=[];
  myformdevice:FormGroup=new FormGroup({serialNumber:new FormControl(),description:new FormControl(),type:new FormControl()});
  toggledevice=false;
  newdevice!: Device;


  constructor(private devicemanagement:DevicemanagmentService) { }


adddevice(){
    this.devicemanagement.publishdevice(this.myformdevice.value).subscribe( (newdevice:any) =>{
    this.mydevices.push(new Device(newdevice.id,this.myformdevice.controls['serialNumber'].value,this.myformdevice.controls['description'].value,this.myformdevice.controls['type'].value))
  })

    this.toggledevice=!this.toggledevice;
}  

  
senddevice(device:Device){
  this.devicemanagement.selecteddevice.emit(device)
}
  

ngOnInit(){

    this.devicemanagement.deviceedited.subscribe( (mydevice:any) =>{
    let index= this.mydevices.findIndex(device =>{
        return device=mydevice
      })
    this.mydevices[index]=mydevice
    })

    this.devicemanagement.devicedeleted.subscribe( (currentdevice:any)=>{ 
    this.mydevices=this.mydevices.filter((device)=>{
        return device!=currentdevice
    })
    this.devicemanagement.selecteddevice.emit(this.mydevices[0])

  })

    this.devicemanagement.getdevices().subscribe( (devices:any) =>{
        for(let key in devices){
        console.log(devices[key])
        this.mydevices.push(new Device(key,devices[key].serialNumber,devices[key].description,devices[key].type));
      }
        this.devicemanagement.selecteddevice.emit(this.mydevices[0])

    });


  }

}
