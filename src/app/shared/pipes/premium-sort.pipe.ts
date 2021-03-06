import {Pipe, PipeTransform} from '@angular/core';
import {FacetValue} from '../../domain/facet';
import {Funder} from '../../domain/eic-model';

@Pipe({name: 'premiumsort'})
export class PremiumSortPipe implements PipeTransform {
  transform(arr: string[], weights: string[]): any {
    const ret = (arr || []).sort((a, b): number => {
      let val = 0;
      const weightA = weights.indexOf(a);
      const weightB = weights.indexOf(b);
      if (weightA !== -1 && weightB !== -1) {
        val = weightA - weightB;
      } else if (weightA !== -1) {
        val = -1;
      } else if (weightB !== -1) {
        val = 1;
      } else {
        val = a.localeCompare(b);
      }
      return val;
    });
    return ret;
  }
}

@Pipe({name: 'premiumSortFacets'})
export class PremiumSortFacetsPipe implements PipeTransform {
  transform(arr: FacetValue[], weights: string[]): any {
    const ret = (arr || []).sort((a, b): number => {
      let val = 0;
      const weightA = weights.indexOf(a.label);
      const weightB = weights.indexOf(b.label);
      if (weightA !== -1 && weightB !== -1) {
        val = weightA - weightB;
      } else if (weightA !== -1) {
        val = -1;
      } else if (weightB !== -1) {
        val = 1;
      } else {
        val = a.label.localeCompare(b.label);
      }
      return val;
    });
    return ret;
  }
}

@Pipe({name: 'premiumSortFunders'})
export class PremiumSortFundersPipe implements PipeTransform {
  transform(arr: Funder[], weights: string[]): any {
    const ret = (arr || []).sort((a, b): number => {
      let val = 0;
      const weightA = weights.indexOf(a.id);
      const weightB = weights.indexOf(b.id);
      if (weightA !== -1 && weightB !== -1) {
        val = weightA - weightB;
      } else if (weightA !== -1) {
        val = -1;
      } else if (weightB !== -1) {
        val = 1;
      } else {
        val = a.id.localeCompare(b.id);
      }
      return val;
    });
    return ret;
  }
}
