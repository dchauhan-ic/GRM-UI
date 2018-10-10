import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; import { memberSearchList, memberProfiler } from 'src/app/gm/gm.model';
import { segmentMetaDataList } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';

@Injectable()
export class SegmentBuilderService {
  showDialog = false;
  private segmentItem: segmentMetaDataList;
  segmentsChanged = new Subject<segmentMetaDataList[]>();
  segmentNavPillsChanged = new Subject<any[]>();
  private segmentNavPills: any[];
  private memberProfiler: memberProfiler;
  private memberSearchList: memberSearchList[];
  dataEdited = new BehaviorSubject<boolean>(false);
  dataIsLoading = new BehaviorSubject<boolean>(false);
  dataLoadFailed = new Subject<boolean>();
  MemberSearchChanged = new Subject<memberSearchList[]>();
  memberProfilerChanged = new Subject<memberProfiler[]>();

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

  segmentData = {   
    "segments":[{
        "email":{
            "attribute": "Email",
            "operator": "Contains",
            "value": "Tapaswini"
        },
        "inputSource":{
            "attribute": "Input Source",
            "operator": "Is",
            "value": ["web","Fish"]
        },
        "joinDate" : {
            "attribute": "Join Date",
            "endValue": "2018-11-01",
            "operator": "Between",
            "startValue": "2018-10-25"
        }
    }]    
  };



  constructor(private httpClient: HttpClient, private http: Http, private router: Router, private route: ActivatedRoute) 
  {
  }
   
  getSegmentDetails(segmentId):any {
    this.httpClient.get('GRM/segment/segmentInfo/id/'+segmentId, {
       observe: 'body',
       responseType: 'json',
     })
       .subscribe(
       (Results) => {
        this.segmentData=Results["model"];
         console.log('Intercepted!', this.segmentData);
         this.router.navigate(['/SegmentationBuilder', segmentId, 'edit']);
      return this.segmentData;
      
       },
       (error) => console.log(error)
     );
   }


   setSegmentDetail(segmentMetaDataList: segmentMetaDataList[]) {
    this.segments = segmentMetaDataList;
    this.segmentsChanged.next(this.segments.slice());
  }

  getSegmentDetail() {
    return this.segmentData;
  }

  getMemberProfilerList() {
    return this.memberSearchList.slice();
  }


  getsegmentNavPills() {
    return this.segmentNavPills;
  }

  getDialogFlag(): boolean {
    return this.showDialog;
  }


  setDialogFlag(flag: boolean) {
    this.showDialog = flag;
  }

  setSegment(segmentMetaDataList: segmentMetaDataList) {
    this.segmentItem = segmentMetaDataList;

  }

  getSegment() {
    return this.segmentItem;
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
  
}
