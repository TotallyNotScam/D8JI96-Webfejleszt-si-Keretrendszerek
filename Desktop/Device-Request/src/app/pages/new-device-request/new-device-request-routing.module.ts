import { NewDeviceRequestComponent } from './new-device-request.component';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: NewDeviceRequestComponent,
    data: { title: 'New Device Request' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewDeviceRequestRoutingModule { }
