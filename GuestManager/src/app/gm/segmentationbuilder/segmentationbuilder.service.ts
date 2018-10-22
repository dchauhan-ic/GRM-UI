import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { countMap,memberProfiler, memberSearchList } from 'src/app/gm/memberprofiler/memberprofiler.model';
import { segmentMetaDataList, segmentStaticInputData } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';

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

  private segments: segmentMetaDataList[] = [
];

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

  private segmentStaticInputData:segmentStaticInputData[];


  constructor(private httpClient: HttpClient, private http: Http, private router: Router, private route: ActivatedRoute) 
  {
  }
   
  getSegmentDetails(segmentId):any {
    this.dataIsLoading.next(true);
    this.httpClient.get('GRM/segment/segmentInfo/id/'+segmentId, {
       observe: 'body',
       responseType: 'json',
     })
       .subscribe(
       (Results) => {
        this.segmentData=Results["model"];
         
         this.getSegmentStaticData(segmentId);
      return this.segmentData;
      
       },
       (error) => console.log(error)
     );
   }

   getSegmentStaticData(segmentId) {
   
    this.httpClient.get('GRM/segment/segmentStatic/list', {
       observe: 'body',
       responseType: 'json',
     })
       .subscribe(
       (Results: segmentStaticInputData[]) => {
        this.segmentStaticInputData=Results;
        this.dataIsLoading.next(false);
       
        
         this.router.navigate(['/SegmentationBuilder', segmentId, 'edit']);
      return this.segmentStaticInputData;
      
       },
       (error) => 
       {
        this.dataIsLoading.next(false);
        console.log(error)
      }
     );
   }


   getCreateSegmentStaticData() {
    this.dataIsLoading.next(true);
    this.httpClient.get('GRM/segment/segmentStatic/list', {
       observe: 'body',
       responseType: 'json',
     })
       .subscribe(
       (Results: segmentStaticInputData[]) => {
        this.segmentStaticInputData=Results;
        this.dataIsLoading.next(false);
        
         this.router.navigate(['SegmentationBuilder/buildSegment']);
      return this.segmentStaticInputData;
      
       },
       (error) => {
        this.dataIsLoading.next(false);
        console.log(error)
      }
     );
   }


   getSegmentStaticDataDetail() {
    return this.segmentStaticInputData;
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

  getSerachResults( data : string){
    let dataArr = this.getSegmentList();
    let outputArr = [];
    if(data != ""){
      dataArr.forEach(element => {         
          if(element.segmentName.toUpperCase().indexOf(data.toUpperCase())>=0){
            outputArr.push(element);
          }
        });
    }else{
      outputArr = dataArr;
    }
    return outputArr;
  }
  
}
