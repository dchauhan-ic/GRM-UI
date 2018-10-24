import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import 'rxjs/Rx';
import {   searchMemberRequest } from '../core/gm.model';
import { GmService } from '../core/gm.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { segmentMetaDataList } from 'gm/app/core/segmentationbuilder/segmentationbuilder.model';
import { SegmentBuilderService } from 'gm/app/core/segmentationbuilder/segmentationbuilder.service';
import { countMap, memberSearchList, memberProfiler, memberDemographicList, memberPromotionList, memberCampaignSummary, memberSmsDetail, memberSmsSummary, memberInfo } from 'gm/app/core/memberprofiler/memberprofiler.model';
import { first, map } from 'rxjs/operators';
import { MemberProfilerService } from 'gm/app/core/memberprofiler/memberprofiler.service';
import { menuList } from 'gm/app/shared/menu.model';

@Injectable()
export class DataStorageService {
  dataIsLoading = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private appTemplateService: GmService, private segmentBuilderService: SegmentBuilderService,private MemberProfilerService: MemberProfilerService) {
  }

  // onFetchMenuTest(memberId) {
  //   this.httpClient.get('api/odata/NavigationMenus/Default.GetLoginMenuItems?$orderby=SortOrder', {
  //     observe: 'body',
  //     responseType: 'json',
  //   })
  //     .subscribe(
  //     (Results => Results) => {

      
       
  //     },
  //     (error) => console.log(error)
  //     );
  //   }

  // onFetchMenuTest() { 
  //   return this.httpClient
  //     .get('api/odata/NavigationMenus/Default.GetLoginMenuItems?$orderby=SortOrder',)
  //     .pipe(map(Results => Results));
  
  //  }


   onFetchMenuTest() {
    this.httpClient.get('/api/odata/NavigationMenus/Default.GetLoginMenuItems?$orderby=SortOrder', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: menuList) => {
        this.MemberProfilerService.setMenuList(response);
      },
      (error) => console.log(error)
      );
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

  onFetchMemberTest(data: searchMemberRequest) {
    this.dataIsLoading.next(true);
    this.httpClient.post('GRM/member/search', data, {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberProfiler) => {
        this.dataIsLoading.next(false);
        this.MemberProfilerService.setMemberProfiler(response);
      },
      (error) => {
        this.dataIsLoading.next(false);
        console.log(error)
      }
      );
  }


  

  // onFetchMemberInfo(memberId) {
  //   return this.httpClient
  //     .get('GRM/member/memberInfo/id/' + memberId, )
  //     .pipe(map(Results => Results));

  // }

  onFetchMemberInfoTest(memberId) {
    this.httpClient.get('GRM/member/memberInfo/id/' + memberId, {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberInfo) => {
        this.MemberProfilerService.setMemberInfo(response);
      },
      (error) => console.log(error)
      );
  }



  onFetchDemographicInformationTest(memberId) {
    this.httpClient.get('GRM/member/memberId/'+ memberId + '/demographic', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberDemographicList) => {
        this.MemberProfilerService.setMemberDemographicInformation(response);
      },
      (error) => console.log(error)
      );
  }

  onFetchPromotionActivityDataTest(memberId) {
    this.httpClient.get('GRM/member/memberId/'+ memberId + '/promotion', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberPromotionList) => {
        this.MemberProfilerService.setMemberPromotionActivity(response);
      },
      (error) => console.log(error)
      );
  }

  onFetchCampaignSummaryTest(memberId) {
    this.httpClient.get('GRM/member/memberId/' + memberId + '/campaignSummary', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberCampaignSummary) => {
        this.MemberProfilerService.setMemberCampaignSummary(response);
      },
      (error) => console.log(error)
      );
  }

  // OnFetchCampaignSummary(memberId) { 
  //   return this.httpClient
  //     .get('GRM/member/memberId/' + memberId + '/campaignSummary',)
  //     .pipe(map(Results => Results));
  
  //  }

  OnFetchCampaignDetailsTest(memberId) {
    this.httpClient.get('GRM/member/memberId/' + memberId + '/campaignDetail', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberPromotionList) => {
        this.MemberProfilerService.setMemberPromotionActivity(response);
      },
      (error) => console.log(error)
      );
  }


  //  OnFetchCampaignDetails(memberId) { 
  //   return this.httpClient
  //     .get('GRM/member/memberId/' + memberId + '/campaignDetail',)
  //     .pipe(map(Results => Results));
  
  //  }

  OnFetchSmsDetailTest(memberId) {
    this.httpClient.get('GRM/member/memberId/' + memberId + '/smsDetail', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberSmsDetail[]) => {
        this.MemberProfilerService.setMemberSmsDetail(response);
      },
      (error) => console.log(error)
      );
  }


  OnFetchSmsSummaryTest(memberId) {
    this.httpClient.get('GRM/member/memberId/' + memberId + '/smsSummary', {
      observe: 'body',
      responseType: 'json',
    })
      .subscribe(
      (response: memberSmsSummary) => {
        this.MemberProfilerService.setMemberSmsSummary(response);
      },
      (error) => console.log(error)
      );
  }

  //  OnFetchSmsSummary(memberId) { 
  //   return this.httpClient
  //     .get('GRM/member/memberId/' + memberId + '/smsSummary',)
  //     .pipe(map(Results => Results));
  
  //  }

  

  //  OnFetchSmsDetail(memberId) { 
  //   return this.httpClient
  //     .get('GRM/member/memberId/' + memberId + '/smsDetail',)
  //     .pipe(map(Results => Results));
  
  //  }


  // logout(){
     	 
  //   resetCache($cookies);        	         	
  //   $location.path("/login");
  // },function(){
  //   hideLoader();
  //   resetCache($cookies);  //To clean the desired localstorage.
  //     $location.path("/login");
  // });


 CleanLocalStorage()
{
localStorage.removeItem(location.hostname+"");
localStorage.removeItem(location.hostname+"");   
localStorage.removeItem('currentGame'); 	
}


 getAccessToken(token){
if (token == "undefined" || token == "null" || token == null ) {

} else {
    //getALLMenu(UserName);

}
 }

}
