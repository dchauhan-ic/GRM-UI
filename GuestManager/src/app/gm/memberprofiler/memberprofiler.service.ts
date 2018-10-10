import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http'; import { memberSearchList, memberProfiler, searchMemberRequest } from 'src/app/gm/gm.model';
import { segmentMetaDataList } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';
import { GmService } from 'src/app/gm/gm.service';

@Injectable()
export class MemberProfilerService {
  segmentsChanged = new Subject<segmentMetaDataList[]>();
  private segments: segmentMetaDataList[] = [{
    "count": 5,
    "created": "09/08/2018",
    "segmentId": 1,
    "segmentName": "DJJSegment",
    "successFlag": true,
    "updated": "09/18/2018"
  }, {
    "count": 7,
    "created": "09/17/2018",
    "segmentId": 2,
    "segmentName": "TestSegment",
    "successFlag": true,
    "updated": "09/20/2018"
  }, {
    "count": 11,
    "created": "09/20/2018",
    "segmentId": 3,
    "segmentName": "test1234",
    "successFlag": true,
    "updated": "09/23/2018"
  }];

  segmentNavPillsChanged = new Subject<any[]>();
  private segmentNavPills: any[];
  private memberProfiler: memberProfiler;
  private memberSearchList: memberSearchList[];
  dataEdited = new BehaviorSubject<boolean>(false);
  dataIsLoading = new BehaviorSubject<boolean>(false);
  dataLoadFailed = new Subject<boolean>();
  MemberSearchChanged = new Subject<memberSearchList[]>();
  memberProfilerChanged = new Subject<memberProfiler[]>();

  constructor(private gmService: GmService, private httpClient: HttpClient, private http: Http) {

  }

  getMemberProfilerList() {
    return this.memberSearchList.slice();
  }


  getsegmentNavPills() {
    return this.segmentNavPills;
  }


  addsegmentNavPills(segmentNavPills: any) {
    this.segmentNavPills.push(segmentNavPills);
    this.segmentNavPillsChanged.next(this.segmentNavPills);
  }

  setSegmentList(segmentMetaDataList: segmentMetaDataList[]) {
    this.segments = segmentMetaDataList;
    this.segmentsChanged.next(this.segments.slice());
  }

  getSegmentList() {
    return this.segments.slice();
  }

  setMemberProfilerList(memberSearchList: memberSearchList[]) {
    this.memberSearchList = memberSearchList;
    this.MemberSearchChanged.next(this.memberSearchList.slice());
  }

  getMemberInfo(memberId): any {
    return this.gmService.onFetchMemberInfo(memberId);
  }

  getMemberDetail(data: searchMemberRequest): any {
    return this.gmService.onFetchMember(data);
  }

  getCampaignDetail(memberId): any {
    return this.gmService.OnFetchCampaignDetails(memberId);
  }
  getDemographicInformation(memberId): any {
    return this.gmService.onFetchDemographicInformation(memberId);
  }
  getPromotionActivityData(memberId): any {
    return this.gmService.onFetchPromotionActivityData(memberId);
  }

}