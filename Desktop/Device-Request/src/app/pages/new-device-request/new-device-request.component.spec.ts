import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceRequestComponent } from './new-device-request.component';

describe('NewDeviceRequestComponent', () => {
  let component: NewDeviceRequestComponent;
  let fixture: ComponentFixture<NewDeviceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeviceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
