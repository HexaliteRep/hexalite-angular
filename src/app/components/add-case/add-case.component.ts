import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Constants } from '../../constants/constants';
import { Case } from '../../model/Case';
import { DatepickerAdapterComponent } from '../datepicker-adapter/datepicker-adapter.component';
import { AddedNotificationComponent } from '../added-notification/added-notification.component';

import { BackendService } from '../../services/backend.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.scss']
})
export class AddCaseComponent implements OnInit {
  addCaseForm: FormGroup;

  serviceTypeOptions = Constants.SERVICE_TYPE;
  eventTypeOptions = Constants.EVENT_TYPE;
  statusOptions = Constants.STATUS;

  dispatchTime: Date;
  vehicleRegDate: Date;

  constructor(private location: Location,
    private backendService: BackendService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService) {
      this.createForm();
     }

  ngOnInit() {
  }

  // addCase() {
  //   this.backendService.addCase(new Case (new Date(),
  //   'Towing',
  //   'Flat tyre',
  //   '9KWYR',
  //   'door num street name Vienna Vienna A 123456',
  //   'CARAVAN',
  //   new Date(),
  //   'ASG1518579392902',
  //   'ONDEMAND',
  //   'Provider Timeout'
  // ))
  //     .subscribe(
  //       x => console.log('Case added!'),
  //       error => console.log('Error when adding case'));
  // }

  addCase() {
    console.log('Case: ', this.addCaseForm.value);
    this.backendService.addCase(this.addCaseForm.value)
    .subscribe(x => {
      this.notificationService.init(AddedNotificationComponent, { Content: `The case has been added!` }, {});
      this.router.navigate(['/dispatcher-management']);
    },
    error => console.log('Error'));
  }

  goBack() {
    this.location.back();
  }

  createForm() {
    this.addCaseForm = this.formBuilder.group({
      dispatchTime: new FormControl(''),
      serviceType: new FormControl(''),
      eventType: new FormControl(''),
      licensePlate: new FormControl(''),
      eventLocation: new FormControl(''),
      vehicleModel: new FormControl(''),
      vehicleRegDate: new FormControl(''),
      assignmentNo: new FormControl(''),
      product: new FormControl(''),
      status: new FormControl('')
    });
  }


  setDate($event, date) {
    this.addCaseForm.value[date] = $event;
    this.addCaseForm.setValue(this.addCaseForm.value);
  }

}
