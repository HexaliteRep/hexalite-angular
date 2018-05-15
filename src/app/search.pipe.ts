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
        if (filter['initDate'] !== '') {
          initMoment = moment(filter['initDate']);
        }
        if (filter['endDate'] !== '') {
          endMoment = moment(filter['endDate']);
        }

        let notMatchingField = Object.keys(filter).find(
          key =>
            key === 'initDate' || key === 'endDate' ? this.fecha(item, filter, key) : item[key] !== filter[key] &&
                filter[key] !== ''
        );

        return !notMatchingField; // true if matches all fields
      });
    }
  }

  fecha(item: Array<any>, filter: { [key: string]: any }, iKey: string) {
    if (iKey === 'initDate' && filter['initDate'] !== '' && filter['endDate'] !== '') {
      return  ! moment(item['dispatchTime']).isBetween(moment(filter['initDate']), moment(filter['endDate']));

    }
    return false;
  }
}
