import {Injectable} from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import {DeviceRequest} from "./device-request";

@Injectable({
  providedIn : 'root'
})
export class DeviceRequestService{

  data!: DeviceRequest;

  constructor(private firestore :AngularFirestore) {
  }
  getActive(){
    this.firestore.collection('Devicerequests',ref => ref.where('status', '==' ,'active' ).orderBy('created','asc').orderBy('id','desc')).get().subscribe(res =>{
      res.docs.forEach(el =>{
        console.log(el.data());
      })
    },error =>{
      console.log('hiba', error);
    })
  }
  getDevices(){
    
    return this.firestore.collection('Devicerequests').snapshotChanges();
  }
  
  
}
