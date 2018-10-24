import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {  searchMemberRequest } from 'gm/app/core/gm.model';
import { segmentMetaDataList } from 'gm/app/core/segmentationbuilder/segmentationbuilder.model';
import { first, map } from 'rxjs/operators';
import { countMap, memberSearchList, memberProfiler } from 'gm/app/core/memberprofiler/memberprofiler.model';
import { MemberProfilerService } from 'gm/app/core/memberprofiler/memberprofiler.service';

@Injectable()
export class GmService {
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
  memberID:Number=0;
  private memberProfiler: memberProfiler;
  private memberSearchList: memberSearchList[];
  dataEdited = new BehaviorSubject<boolean>(false);
  dataIsLoading = new BehaviorSubject<boolean>(false);
  dataLoadFailed = new Subject<boolean>();
  MemberSearchChanged = new Subject<memberSearchList[]>();
  memberProfilerChanged = new Subject<memberProfiler[]>();
  memberSearchUrl = 'GRM/member/search';
  memberInfoUrl = 'GRM/member/memberInfo/id/' + this.memberID;
  CampaignDetailsUrl = 'GRM/member/memberId/' + this.memberID + '/campaignSummary';
  DemographicUrl = 'GRM/member/memberId/'+ this.memberID + '/demographic';
  PromotionUrl = 'GRM/member/memberId/'+ this.memberID + '/promotion';
  constructor(private httpClient: HttpClient) {
  }

  getMemberProfilerList() {
    return this.memberSearchList.slice();
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

  //MemberServices 

  onFetchMember(data: searchMemberRequest) {
    return this.httpClient
      .post(this.memberSearchUrl,data,)
      .pipe(map(Results => Results));
  
   }

  //  onFetchMemberTest(data: searchMemberRequest) {
  //   this.httpClient.post('GRM/member/search', data, {
  //     observe: 'body',
  //     responseType: 'json',
  //   })
  //     .subscribe(
  //     (response: memberProfiler) => {
  //       this.MemberProfilerService.setMemberProfiler(response);
  //     },
  //     (error) => console.log(error)
  //     );
  // }

  onFetchMemberInfo(memberId) {
    return this.httpClient
      .get('GRM/member/memberInfo/id/' + memberId, )
      .pipe(map(Results => Results));

  }

  OnFetchCampaignSummary(memberId) { 
    return this.httpClient
      .get('GRM/member/memberId/' + memberId + '/campaignSummary',)
      .pipe(map(Results => Results));
  
   }

   OnFetchCampaignDetails(memberId) { 
    return this.httpClient
      .get('GRM/member/memberId/' + memberId + '/campaignDetail',)
      .pipe(map(Results => Results));
  
   }

   OnFetchSmsSummary(memberId) { 
    return this.httpClient
      .get('GRM/member/memberId/' + memberId + '/smsSummary',)
      .pipe(map(Results => Results));
  
   }

   OnFetchSmsDetail(memberId) { 
    return this.httpClient
      .get('GRM/member/memberId/' + memberId + '/smsDetail',)
      .pipe(map(Results => Results));
  
   }

   onFetchDemographicInformation(memberId) {
    return this.httpClient
      .get('GRM/member/memberId/'+ memberId + '/demographic')
      .pipe(map(Results => Results));
  
   }

   onFetchPromotionActivityData(memberId) { 
    return this.httpClient
      .get('GRM/member/memberId/'+ memberId + '/promotion')
      .pipe(map(Results => Results));
  
   }

   

   //SegmentServices 


}
