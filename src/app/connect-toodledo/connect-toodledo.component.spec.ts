import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectToodledoComponent } from './connect-toodledo.component';

describe('ConnectToodledoComponent', () => {
  let component: ConnectToodledoComponent;
  let fixture: ComponentFixture<ConnectToodledoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectToodledoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectToodledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
