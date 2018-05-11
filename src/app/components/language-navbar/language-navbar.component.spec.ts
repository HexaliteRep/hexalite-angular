import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageNavbarComponent } from './language-navbar.component';

describe('LanguageNavbarComponent', () => {
  let component: LanguageNavbarComponent;
  let fixture: ComponentFixture<LanguageNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
