import {Component} from '@angular/core';
import {DeviceRequest} from './shared/models/device-request';
import {AngularFirestore} from '@angular/fire/firestore';
import {error} from "@angular/compiler/src/util";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  constructor() {
  }
}
