import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherMapComponent } from './searcher-map.component';

describe('SearcherMapComponent', () => {
  let component: SearcherMapComponent;
  let fixture: ComponentFixture<SearcherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
