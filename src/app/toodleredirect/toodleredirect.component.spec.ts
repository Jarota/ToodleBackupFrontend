import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodleredirectComponent } from './toodleredirect.component';

describe('ToodleredirectComponent', () => {
  let component: ToodleredirectComponent;
  let fixture: ComponentFixture<ToodleredirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodleredirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodleredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
