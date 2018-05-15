import { Injectable, NgZone, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Injectable()
export class MapService {

  constructor(
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader) { }

  loadSearcher(searchElementRef: ElementRef, output): string  {
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
            output = place.formatted_address;
          });
        });
      });
    return;
  }

}
