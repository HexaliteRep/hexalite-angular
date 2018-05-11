import { Component, OnInit, Input, ElementRef, NgZone, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searcher-map',
  templateUrl: './searcher-map.component.html',
  styleUrls: ['./searcher-map.component.scss']
})
export class SearcherMapComponent implements OnInit {

  title = 'Búsquedas en google';

  mapForm: FormGroup;

  @Input() lat;
  @Input() lng;

  // LOCATION MAP
  @ViewChild('startSearch') public startSearch: ElementRef;
  @ViewChild('endSearch') public endSearch: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { this.createForm(); }

  ngOnInit() {
    this.loadSearcher(this.startSearch, 0);
    this.loadSearcher(this.endSearch, 1);
  }

  createForm() {
    this.mapForm = this.formBuilder.group({
      waypoints: new FormControl(''),
      startLoc: new FormControl(''),
      startSelect: new FormControl(''),
      endLoc: new FormControl(''),
      endSelect: new FormControl('')
    });
  }

  private loadSearcher(searchElementRef: ElementRef, startOrEnd) {
    // GOOGLE MAPS AUTOFILL
    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(searchElementRef.nativeElement, {});

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            if (startOrEnd === 0) { // Is start location
              // this.userForm.value.startLoc = {lat: this.lat, lng: this.lng};
              this.mapForm.value.startLoc = place.formatted_address;
            } else if (startOrEnd === 1) { // Is end location
              // this.userForm.value.endLoc = {lat: this.lat, lng: this.lng};
              this.mapForm.value.endLoc = place.formatted_address;
            }
          });
        });
      });
    return;
  }
}
