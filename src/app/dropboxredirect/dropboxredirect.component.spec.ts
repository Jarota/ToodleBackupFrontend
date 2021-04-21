import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxredirectComponent } from './dropboxredirect.component';

describe('DropboxredirectComponent', () => {
  let component: DropboxredirectComponent;
  let fixture: ComponentFixture<DropboxredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropboxredirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
