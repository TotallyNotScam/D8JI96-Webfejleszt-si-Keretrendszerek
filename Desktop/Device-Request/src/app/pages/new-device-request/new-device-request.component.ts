import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators, NgForm } from '@angular/forms';
import { DeviceRequestService } from 'src/app/shared/models/device-request.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceRequest } from 'src/app/shared/models/device-request';


@Component({
  selector: 'app-new-device-request',
  templateUrl: './new-device-request.component.html',
  styleUrls: ['./new-device-request.component.scss'],

})
export class NewDeviceRequestComponent implements OnInit {
  
  ngOnInit(): void {

 
  this.form.controls['status'].setValue(this.route.snapshot.paramMap.get('status'))
  this.form.controls['intent'].setValue(this.route.snapshot.paramMap.get('intent'))
  this.form.controls['priority'].setValue(this.route.snapshot.paramMap.get('priority'))
  this.form.controls['subject'].setValue(this.route.snapshot.paramMap.get('subject'))
  this.form.controls['codeCodeableConcept'].setValue(this.route.snapshot.paramMap.get('codeCodeableConcept'))
  this.form.controls['authoredOn'].setValue(this.route.snapshot.paramMap.get('authoredOn'))
  this.form.controls['note'].setValue(this.route.snapshot.paramMap.get('note'))
  this.form.controls['relevantHistory'].setValue(this.route.snapshot.paramMap.get('relevantHistory'))
  this.form.controls['insurance'].setValue(this.route.snapshot.paramMap.get('insurance'))
  this.form.controls['occurrenceDateTime'].setValue(this.route.snapshot.paramMap.get('occurrenceDateTime'))


    console.log()

  }
  constructor(protected service: DeviceRequestService, private firestore: AngularFirestore, private route: ActivatedRoute) { }

  form: FormGroup = new FormGroup({
    identifier: new FormArray([]),
    status: new FormControl(),
    intent: new FormControl(),
    priority: new FormControl(),
    subject: new FormControl(),
    codeCodeableConcept: new FormControl(),
    authoredOn: new FormControl(), //date
    note: new FormControl(),
    relevantHistory: new FormControl(),
    insurance: new FormControl(),
    occurrenceDateTime: new FormControl()
  });

  error = false;




  onSave() {
    let data = Object.assign({}, this.form.value);
    delete data.identifier;
    if (data.identifier == null) {
      this.firestore.collection('Devicerequests').add(data);
    }
    else
      this.firestore.doc('Devicerequests').update(data)
    this.resetForm();
    console.log()
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.data = {
      id: '',
      identifier: [],
      status: undefined,
      intent: 'plan',
      priority: undefined,
      subject: '',
      codeCodeableConcept: '',
      authoredOn: 'YYYY-MM-DD',
      note: '',
      relevantHistory: '',
      insurance: '',
      occurrenceDateTime: ''




    }
  }
}
