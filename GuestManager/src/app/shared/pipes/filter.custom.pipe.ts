import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters',
  pure: false
})
export class FilterCustomPipe implements PipeTransform {

  transform(value: any, filterName: string, filterValue: string,propName: string,propValue: string): any {
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if((item[propName] === filterName))
      {
      if (item[propValue] === filterValue) {
        resultArray.push(item);
      }

    }
    }
    return resultArray;
  }

}
