import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { AddedNotificationComponent } from '../added-notification/added-notification.component';

import { Constants } from '../../constants/constants';
import { BackendService } from '../../services/backend.service';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-add-map-points',
  templateUrl: './add-map-points.component.html',
  styleUrls: ['./add-map-points.component.scss']
})
export class AddMapPointsComponent implements OnInit {

  markerTypeOptions = Constants.MARKER_TYPE;
  addMapPointsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.addMapPointsForm = this.formBuilder.group({
      name: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      markerType: new FormControl('')
    });
  }

  addMapPoints() {
    console.log('Point: ', this.addMapPointsForm.value);
    // this.backendService.addCase(this.addMapPointsForm.value)
    // .subscribe(x => {
    //   this.notificationService.init(AddedNotificationComponent, { Content: `The point has been added!` }, {}, 'OK');
    //   this.router.navigate(['/map']);
    // },
    // error => this.notificationService.init(AddedNotificationComponent, { Content: `Error adding point` }, {}, 'KO'));
  }

}
