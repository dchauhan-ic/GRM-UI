import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import 'rxjs/Rx';
import {  memberSearchList, countMap, searchMemberRequest } from '../gm/gm.model';
import { GmService } from '../gm/gm.service';
import { segmentMetaDataList } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';
import { SegmentBuilderService } from 'src/app/gm/segmentationbuilder/segmentationbuilder.service';



@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private appTemplateService: GmService, private segmentBuilderService: SegmentBuilderService) {
  }

  getMemberProfilerList(data: searchMemberRequest) {
    this.httpClient.post('http://localhost:9080/GRM/member/search', data, {
      observe: 'body',
      responseType: 'json',
    }).concat(
      (response: Response) => {
        const memberSearchList: memberSearchList[] = response["memberSearchList"];
        const countMap: countMap[] = response["countMap"];
        return memberSearchList;
      }
      )
      .subscribe(
      (memberSearchList: memberSearchList[]) => {

        this.appTemplateService.setMemberProfilerList(memberSearchList);
      },
      (error) => console.log(error)
      );
  }

  getMemberProfilerListtest(data: searchMemberRequest): any {
    this.httpClient.post('/GRM/member/search', data, {
      observe: 'body',
      responseType: 'json',
    }).map(
      (response: Response) => response.json()
      )
      .subscribe(
      (data) => {
        data;
      },
      (error) => error
      );
  }
  getSegmentList() {
    this.httpClient.get('GRM/segment/segmentInfo/list', {
      observe: 'body',
      responseType: 'json',
    })
      .map(
      (response: Response) => {
        const segmentMetaDataList: segmentMetaDataList[] = response["segmentMetaDataList"];
        return segmentMetaDataList;
      }
      )
      .subscribe(
      (segmentMetaDataList: segmentMetaDataList[]) => {

        this.segmentBuilderService.setSegmentList(segmentMetaDataList);
      },
      (error) => console.log(error)
      );
  }

}
