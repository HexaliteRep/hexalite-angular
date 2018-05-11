// routerConfig.ts

import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SearcherMapComponent } from './components/searcher-map/searcher-map.component';
import { DispatchManagementComponent } from './components/dispatch-management/dispatch-management.component';
import { AddCaseComponent } from './components/add-case/add-case.component';

export const appRoutes: Routes = [
  { path: 'map',
    component: MapComponent
  },
  {
    path: 'searcher-map',
    component: SearcherMapComponent
  },
  {
    path: 'dispatcher-management',
    component: DispatchManagementComponent
  },
  {
    path: 'add-case',
    component: AddCaseComponent
  }
];
