import { Pipe, PipeTransform } from '@angular/core';
import { filter } from "lodash";

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args[1] !== '' ? value.filter((obj) => obj[args[0]].search(args[1]) >= 0 ? obj : null) : value;
  }

}


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a: any, b: any) => {
      return (a[args[0]] > b[args[0]])
    });
  }

}

@Pipe({
  name: 'filterByCountry'
})
export class FilterByCountryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args[0] !== '' ? value.filter((obj) => obj['country'] === args[0] ? obj : null) : value;
  }

}

@Pipe({
  name: 'filterByGenre'
})
export class FilterByGenrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args[0] !== '' ? value.filter((obj) => obj['genre'] === args[0] ? obj : null) : value;
  }

}
