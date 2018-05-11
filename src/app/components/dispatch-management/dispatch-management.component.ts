import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Constants } from '../../constants/constants';
import { Case } from '../../model/Case';
import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';
import { BackendService } from '../../services/backend.service';

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

  constructor(private backendService: BackendService,
  private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    const result = this.backendService.getCases();
    result.subscribe(
      x => {
        if (x) {
          for (let i = 0; i < x.length; i++) {
            this.cases.push(x[i]);
          }
        }
      });
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
}
