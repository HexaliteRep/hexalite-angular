import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedNotificationComponent } from './added-notification.component';

describe('AddedNotificationComponent', () => {
  let component: AddedNotificationComponent;
  let fixture: ComponentFixture<AddedNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
