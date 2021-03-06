import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule} from 'agm-direction';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SearcherMapComponent } from './components/searcher-map/searcher-map.component';
import { LanguageNavbarComponent } from './components/language-navbar/language-navbar.component';
import { DispatchManagementComponent } from './components/dispatch-management/dispatch-management.component';
import { DatepickerAdapterComponent } from './components/datepicker-adapter/datepicker-adapter.component';
import { AddCaseComponent } from './components/add-case/add-case.component';
import { AddedNotificationComponent } from './components/added-notification/added-notification.component';

import { appRoutes } from './routerConfig';
import { Constants } from './constants/constants';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BackendService } from './services/backend.service';
import { DomService } from './services/dom.service';
import { NotificationService } from './services/notification.service';
import { MapService } from './services/map.service';

import { SearchPipe } from './search.pipe';
import { AddMapPointsComponent } from './components/add-map-points/add-map-points.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearcherMapComponent,
    LanguageNavbarComponent,
    DispatchManagementComponent,
    DatepickerAdapterComponent,
    AddCaseComponent,
    AddedNotificationComponent,
    SearchPipe,
    AddMapPointsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2E-K3tS8FJiKd-uiSQfwnkvyAzEjGaTA',
      libraries: ['places', 'geometry']
    }),
    AgmDirectionModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
    }),
    NgbModule.forRoot(),
    Ng2OrderModule
  ],
  entryComponents: [
    AddedNotificationComponent

  ],
  providers: [Location, BackendService, DomService, NotificationService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
