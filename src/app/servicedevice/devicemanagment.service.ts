import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DevicemanagmentService {

  @Output() selecteddevice=new EventEmitter();
  @Output() deviceadded=new EventEmitter();
  @Output() devicedeleted:EventEmitter<Device>=new EventEmitter();
  @Output() deviceedited:EventEmitter<Device>=new EventEmitter();


  constructor(private http:HttpClient) {
  }


  getdevices(){
  return this.http.get('https://employeeanddevices-default-rtdb.firebaseio.com/Device.json');
  }


  deletedevice(device: any) {
    return this.http.delete('https://employeeanddevices-default-rtdb.firebaseio.com/Device/'+device.id+ '.json')
    
  }
  editdevice(device:Device) {
    return this.http.put('https://employeeanddevices-default-rtdb.firebaseio.com/Device/'+device.id+ '.json',device)

  }
  publishdevice(device: Device) {
    return this.http.post('https://employeeanddevices-default-rtdb.firebaseio.com/Device.json',device)
  }


}