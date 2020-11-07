import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDropboxComponent } from './connect-dropbox.component';

describe('ConnectDropboxComponent', () => {
  let component: ConnectDropboxComponent;
  let fixture: ComponentFixture<ConnectDropboxComponent>;

  beforeEach(async(() => {
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
