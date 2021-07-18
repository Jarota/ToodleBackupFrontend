import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectDropboxComponent } from './connect-dropbox.component';

describe('ConnectDropboxComponent', () => {
  let component: ConnectDropboxComponent;
  let fixture: ComponentFixture<ConnectDropboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
