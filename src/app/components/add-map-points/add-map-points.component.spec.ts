import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapPointsComponent } from './add-map-points.component';

describe('AddMapPointsComponent', () => {
  let component: AddMapPointsComponent;
  let fixture: ComponentFixture<AddMapPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMapPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMapPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
