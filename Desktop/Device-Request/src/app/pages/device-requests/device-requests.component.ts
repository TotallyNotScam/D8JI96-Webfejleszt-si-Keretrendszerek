import { Component, OnInit } from '@angular/core';
import { DeviceRequest } from 'src/app/shared/models/device-request';
import { DeviceRequestService } from 'src/app/shared/models/device-request.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { NewDeviceRequestComponent } from '../new-device-request/new-device-request.component';

@Component({
  selector: 'app-device-requests',
  templateUrl: './device-requests.component.html',
  styleUrls: ['./device-requests.component.scss']
})
export class DeviceRequestsComponent implements OnInit {

  list !: DeviceRequest[];
  constructor(private service: DeviceRequestService, private router: Router, 
    private originalform: NewDeviceRequestComponent, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getDevices().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          firebaseId: item.payload.doc.id,
          ...item.payload.doc.data() as DeviceRequest
        }
      })
    });
  }
  onEdit(emp: DeviceRequest) {
    this.service.data = Object.assign({}, emp);
    console.log(this.service.data);

    this.router.navigate(['/registration', { 

      identifier: this.service.data.id, 
      status: this.service.data?.status, 
      intent: this.service.data.intent,
      priority: this.service.data?.priority, 
      subject: this.service.data.subject, 
      codeCodeableConcept: this.service.data.codeCodeableConcept, 
      authoredOn: this.service.data?.authoredOn, 
      note: this.service.data?.note, 
      relevantHistory: this.service.data?.relevantHistory, 
      insurance: this.service.data?.insurance, 
      occurrenceDateTime: this.service.data?.occurrenceDateTime }])
      
  }
  onDelete(emp: DeviceRequest) {

    this.service.data = Object.assign({}, emp);

    if (confirm("Are you sure, that you want to delete this record? ")) {
      this.firestore.doc('Devicerequests/' + this.service.data).delete;
      alert("Deleted")
    }
  }
 

}
