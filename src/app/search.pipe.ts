import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
    if (!filter) {
      return items;
    } else if (items) {
      return items.filter(item => {
        let initMoment = null;
        let endMoment = null;
        if(filter["initDate"] !== "") { initMoment = moment(filter["initDate"]) };
        if(filter["endDate"] !== "") { endMoment = moment(filter["endDate"])};

        let a = moment(item["dispatchTime"]).isBetween(initMoment, endMoment);
        let notMatchingField = Object.keys(filter)
          .find(key => item[key] !== filter[key] && filter[key] !=="" && !moment(item["dispatchTime"]).isBetween(initMoment, endMoment));

        return !notMatchingField; // true if matches all fields
      });
    }
  }
}
