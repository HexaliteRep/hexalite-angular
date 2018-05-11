import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-language-navbar',
  templateUrl: './language-navbar.component.html',
  styleUrls: ['./language-navbar.component.scss']
})
export class LanguageNavbarComponent implements OnInit {

  currentLanguage: string;
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.switchLanguage('es');
  }

  switchLanguage(language: string) {
    this.appComponent.switchLanguage(language);
    this.currentLanguage = language;
  }

}
