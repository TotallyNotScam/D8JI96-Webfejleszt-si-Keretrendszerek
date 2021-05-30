
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NewDeviceRequestComponent } from './pages/new-device-request/new-device-request.component';

import { AppComponent } from './app.component';
import { DeviceRequestsComponent } from './pages/device-requests/device-requests.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'registration',
    component : NewDeviceRequestComponent,
  },
  {
    path: 'home',
    component : DeviceRequestsComponent,
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
