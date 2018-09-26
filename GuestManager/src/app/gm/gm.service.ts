import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { HttpClient,HttpHeaders } from '@angular/common/http';import { memberSearchList, searchQueryObject, memberProfiler } from 'src/app/gm/gm.model';
import { AppTemplate, CompareData } from '../shared/apptemplate-model';
;



@Injectable()
export class GmService {

  private appTemplate: AppTemplate[];
  private memberProfiler: memberProfiler;
  
  private memberSearchList: memberSearchList[];
  dataEdited = new BehaviorSubject<boolean>(false);
  dataIsLoading = new BehaviorSubject<boolean>(false);
  dataLoaded = new Subject<CompareData[]>();
  dataLoadFailed = new Subject<boolean>();
  userData: CompareData;
  AppTemplateChanged = new Subject<AppTemplate[]>();
  MemberSearchChanged = new Subject<memberSearchList[]>();
  memberProfilerChanged = new Subject<memberProfiler[]>();

  constructor(private httpClient: HttpClient,private http: Http) 
  {
  }

  


getAppTemplate() {
  return this.appTemplate.slice();
}

setAppTemplate(adminConfigSettings:AppTemplate[]) {
  this.appTemplate = adminConfigSettings;
  this.AppTemplateChanged.next(this.appTemplate.slice());
}

getMemberProfilerList() {
  return this.memberSearchList.slice();
}

setMemberProfilerList(memberSearchList: memberSearchList[]) {
  this.memberSearchList = memberSearchList;
  this.MemberSearchChanged.next(this.memberSearchList.slice());
}

// setMemberProfilerListTest(response: Response) {
//   this.memberProfiler = response;
//   this.MemberSearchChanged.next(this.memberSearchList.slice());
// }


// onRetrieveData(all = true) {
//   this.dataLoaded.next(null);
//   this.dataLoadFailed.next(false);
//   this.authService.getAuthenticatedUser().getSession((err, session) => {
//     const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
//     let urlParam = 'all';
//     if (!all) {
//       urlParam = 'single';
//     }
//     this.http.get('https://API_ID.execute-api.REGION.amazonaws.com/dev/compare-yourself/' + urlParam + queryParam, {
//       headers: new Headers({'Authorization': session.getIdToken().getJwtToken()})
//     })
//       .map(
//         (response: Response) => response.json()
//       )
//       .subscribe(
//         (data) => {
//           if (all) {
//             this.dataLoaded.next(data);
//           } else {
//             console.log(data);
//             if (!data) {
//               this.dataLoadFailed.next(true);
//               return;
//             }
//             this.userData = data[0];
//             this.dataEdited.next(true);
//           }
//         },
//         (error) => {
//           console.log(error);
//           this.dataLoadFailed.next(true);
//           this.dataLoaded.next(null);
//         }
//       );
//   });
// }


getMemberProfilerListTest(data: searchQueryObject) {
    this.dataLoadFailed.next(false);
    this.dataIsLoading.next(true);
    this.dataEdited.next(false);
      this.http.post('http://localhost:9080/GRM/member/search', data, {    
      })
      .map(
        (response: Response) => response.json()
      )
        .subscribe(
          (data) => {
            this.memberProfilerChanged.next(data);
            this.dataLoadFailed.next(false);
            this.dataIsLoading.next(false);
            this.dataEdited.next(true);
          },
          (error) => {
            console.log(error);
            this.dataIsLoading.next(false);
            this.dataLoadFailed.next(true);
            this.dataLoaded.next(null);
          }
        );
    
  }

}
