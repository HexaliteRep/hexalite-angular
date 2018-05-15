import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Constants } from '../../constants/constants';
import { Case } from '../../model/Case';
import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';
import { AddedNotificationComponent } from '../added-notification/added-notification.component';

import { BackendService } from '../../services/backend.service';

import { NotificationService } from '../../services/notification.service';

import { DatePipe } from '@angular/common';


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

  valueSearch: { [key: string]: any };



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
    this.searchForm.value.serviceType = 'undefined';
    this.searchForm.value.eventType = 'undefined';
    this.searchForm.value.status = 'undefined';
    this.searchForm.setValue(this.searchForm.value);
  }

  filter() {
    this.valueSearch = {

      licensePlate:
        this.searchForm.value.licensePlate === ''
          ? ''
          : this.searchForm.value.licensePlate,
      assignmentNo:
        this.searchForm.value.assignmentNo === ''
          ? ''
          : this.searchForm.value.assignmentNo,
      serviceType:
        this.searchForm.value.serviceType === '' ||
        this.searchForm.value.serviceType === 'undefined'
          ? ''
          : this.serviceTypeOptions[this.searchForm.value.serviceType - 1].name,
      eventType:
        this.searchForm.value.eventType === '' ||
        this.searchForm.value.eventType === 'undefined'
          ? ''
          : this.searchForm.value.eventType,
      status:
        this.searchForm.value.status === '' ||
        this.searchForm.value.status === 'undefined'
          ? ''
          : this.searchForm.value.status,
      initDate:
        this.searchForm.value.initDate === '' ||
        this.searchForm.value.initDate === 'undefined'
          ? ''
          : this.searchForm.value.initDate,
      endDate:
        this.searchForm.value.endDate === '' ||
        this.searchForm.value.endDate === 'undefined'
          ? ''
          : this.searchForm.value.endDate
    };

  }

  reset() {
    this.searchForm.value.licensePlate = '';
    this.searchForm.value.assignmentNo = '';
    this.searchForm.value.serviceType = 'undefined';
    this.searchForm.value.eventType = 'undefined';
    this.searchForm.value.status = 'undefined';
    this.searchForm.value.initDate = new Date();
    this.searchForm.value.endDate = '';
    this.searchForm.setValue(this.searchForm.value);
    this.valueSearch = null;
    this.filter();
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
