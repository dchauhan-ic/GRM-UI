import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SegmentBuilderService } from 'gm/app/core/segmentationbuilder/segmentationbuilder.service';

interface segmentData {
}

@Injectable()
export class SegmentBuilderResolver implements Resolve<segmentData> {

  constructor(private segmentBuilderService: SegmentBuilderService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<segmentData> | Promise<segmentData> | segmentData {
    return this.segmentBuilderService.getSegmentDetails(+route.params['id']);
  }
}