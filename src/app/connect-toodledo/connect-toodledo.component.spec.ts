import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToodledoComponent } from './connect-toodledo.component';

describe('ConnectToodledoComponent', () => {
  let component: ConnectToodledoComponent;
  let fixture: ComponentFixture<ConnectToodledoComponent>;

  beforeEach(async(() => {
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
