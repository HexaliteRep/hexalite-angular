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

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SearcherMapComponent } from './components/searcher-map/searcher-map.component';
import { LanguageNavbarComponent } from './components/language-navbar/language-navbar.component';
import { DispatchManagementComponent } from './components/dispatch-management/dispatch-management.component';
import { appRoutes } from './routerConfig';
import { Constants } from './constants/constants';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BackendService } from './services/backend.service';
import { DatepickerAdapterComponent } from './components/datepicker-adapter/datepicker-adapter.component';
import { AddCaseComponent } from './components/add-case/add-case.component';

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
    AddCaseComponent
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
    NgbModule.forRoot()
  ],
  providers: [Location, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
