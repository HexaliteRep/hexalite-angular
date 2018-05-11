import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Case } from '../model/Case';

@Injectable()
export class BackendService {

  readonly url = 'http://10.74.73.12:9001';
  readonly urlCase = 'http://10.74.73.12:9005';
  constructor(private http: HttpClient) { }

  getLocations(): Observable<Object[]> {
    return this.http.get<Object[]>(this.url + '/hxl/paths');
  }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.urlCase + '/hxl/cases');
  }

  addCase(newCase: Case): Observable<Case> {
    return this.http.post(this.urlCase + '/hxl/cases', {
      dispatchTime: newCase.dispatchTime,
      serviceType: newCase.serviceType,
      eventType: newCase.eventType,
      licensePlate: newCase.licensePlate,
      eventLocation: newCase.eventLocation,
      vehicleModel: newCase.vehicleModel,
      vehicleRegDate: newCase.vehicleRegDate,
      assignmentNo: newCase.assignmentNo,
      product: newCase.product,
      status: newCase.status
    });
  }
}
