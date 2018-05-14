import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentTab: string;
  tabs = [{
      name: 'home',
      path: '/'
    },
    {
      name: 'map',
      path: 'map'
    },
    {
      name: 'searcher-map',
      path: 'searcher-map'
    },
    {
      name: 'dispatcher-management',
      path: 'dispatcher-management'
    },
    {
      name: 'add-case',
      path: 'add-case'
    }
  ];

  constructor(private translate:  TranslateService, private notificationService: NotificationService) {
    let lan = window.navigator.language.substring(0, 2);
    const arrayLan = ['en', 'es'];
    if (!arrayLan.includes(lan)) {
      lan = 'en';
    }
    translate.setDefaultLang(lan);
    translate.use(lan);
  }

  ngOnInit(): void {
    this.setCurrentTab('/');
  }

  switchLanguage(language:  string) {
    this.translate.use(language);
  }

  setCurrentTab(tab) {
    this.currentTab = tab;
  }

  removeNotification() {
    this.notificationService.destroy();
  }

}
