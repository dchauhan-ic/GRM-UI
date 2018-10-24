import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterP',
  pure: false
})
export class FilterProperty implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
   
      if (value.propName) {
        resultArray.push(value[propName]);
      }
    
    return resultArray;
  }

}
