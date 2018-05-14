import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Constants } from '../../constants/constants';
import { Case } from '../../model/Case';
import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';
import { AddedNotificationComponent } from '../added-notification/added-notification.component';

import { BackendService } from '../../services/backend.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-dispatch-management',
  templateUrl: './dispatch-management.component.html',
  styleUrls: ['./dispatch-management.component.scss']
})
export class DispatchManagementComponent implements OnInit {
  cases: Case[] = [];
  searchForm: FormGroup;
  serviceTypeOptions = Constants.SERVICE_TYPE;
  eventTypeOptions = Constants.EVENT_TYPE;
  statusOptions = Constants.STATUS;
  initDate: Date;
  endDate: Date;
  lastUpdate: Date;

  // sorting
  key = 'dispatchTime'; // set default
  reverse = false;

  constructor(private backendService: BackendService,
  private formBuilder: FormBuilder,
  private notificationService: NotificationService) {
    this.createForm();
   }

  ngOnInit() {
    this.getCases();
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      licensePlate: new FormControl(''),
      assignmentNo: new FormControl(''),
      serviceType: new FormControl(''),
      initDate: new FormControl(''),
      endDate: new FormControl(''),
      eventType: new FormControl(''),
      status: new FormControl('')
    });
  }

  setDate($event, date) {
    this.searchForm.value[date] = $event;
    this.searchForm.setValue(this.searchForm.value);
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getCases() {
    const result = this.backendService.getCases();
    result.subscribe(
      x => {
        this.cases = x ? x : [];
        this.lastUpdate = new Date();
        this.notificationService.init(AddedNotificationComponent, { Content: `The list has been updated` }, {}, 'OK');
      },
      error => this.notificationService.init(AddedNotificationComponent, { Content: `Error updating the list` }, {}, 'KO'));
  }

}
