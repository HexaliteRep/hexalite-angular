import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchManagementComponent } from './dispatch-management.component';

describe('DispatchManagementComponent', () => {
  let component: DispatchManagementComponent;
  let fixture: ComponentFixture<DispatchManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
