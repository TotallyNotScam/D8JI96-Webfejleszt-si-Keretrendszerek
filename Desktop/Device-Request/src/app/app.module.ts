import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewDeviceRequestComponent } from "./pages/new-device-request/new-device-request.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore'
import { DeviceRequestService } from './shared/models/device-request.service';
import { DeviceRequestsComponent } from './pages/device-requests/device-requests.component'
[]
@NgModule({

  declarations: [AppComponent, NewDeviceRequestComponent,DeviceRequestsComponent],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    



  ],
  exports: [
    NewDeviceRequestComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AngularFirestore, DeviceRequestService, NewDeviceRequestComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
