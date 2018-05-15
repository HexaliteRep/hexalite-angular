import { Component, OnInit, Input, ElementRef, ViewChild, NgZone } from '@angular/core';
import { AfterViewInit, Directive, Output, ChangeDetectorRef } from '@angular/core';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { LocationOption } from '../../model/locationOption';
import { Waypoint } from '../../model/waypoint';

import { Constants } from '../../constants/constants';

import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    HttpClient
  ]
})
export class MapComponent implements OnInit {
  title = 'Rutas con backend';

  wp: Waypoint[] = [];

  locationOptions: LocationOption[] = [];

  userForm: FormGroup;
  zoom: number;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private backendService: BackendService
  ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      waypoints: new FormControl(''),
      startLoc: new FormControl(''),
      startSelect: new FormControl(''),
      endLoc: new FormControl(''),
      endSelect: new FormControl('')
    });
  }

  ngOnInit() {
    const result = this.backendService.getLocations();
    result.subscribe(x => (this.locationOptions = x));
    this.zoom = Constants.DEFAULT_ZOOM;
  }

  private changeWaypoints() {
    this.wp = [];
    this.mapsAPILoader.load().then(() => {
      this.wp = this.userForm.value.waypoints.map(waypoint => ({
        location: new google.maps.LatLng(waypoint.lat, waypoint.lng)
      }));
    });
  }

  changeStart() {
    this.setSelectedLocation(this.userForm.value.startSelect, 'startLoc');
  }

  changeEnd() {
    this.setSelectedLocation(this.userForm.value.endSelect, 'endLoc');
  }

  private setSelectedLocation(location, mapPoint) {
    if (!location) {
      return;
    }

    const result = this.locationOptions.find(loc => loc.id === +location);

    if (!result) {
      return;
    }

    this.userForm.value[mapPoint] = new google.maps.LatLng(
      result.lat,
      result.lng
    );
    this.userForm.setValue(this.userForm.value);
  }

  markerIconUrl(isCar) {
     return isCar ? '../../../assets/img/damaged-car.png' : '../../../assets/img/truck.png';
  }
}
