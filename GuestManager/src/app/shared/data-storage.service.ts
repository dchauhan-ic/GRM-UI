import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';;
import 'rxjs/Rx';

import { searchQueryObject, memberSearchList, countMap } from '../gm/gm.model';
import { GmService } from '../gm/gm.service';
import { AppTemplate } from './apptemplate-model';



@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,private appTemplateService:GmService) 
  {
  }



  //extra 
  getviewSettings() {
    const headers = new HttpHeaders()
     .set( 'Content-Type', 'application/json; charset=UTF-8')
     .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('client_id', 'C65A0DC0F28C469FB7376F972DEFBCB7')
    .set('Application','web')
    .set('tenantid', '1173')
    .set('Accept','application/json' )
    .set('Access-Control-Allow-Origin','*');
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get('http://localhost:8008/admin/viewSettings', {
      observe: 'body',
      responseType: 'json',
     // headers: headers
    }).map(
        (response: Response) => {
        const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
         return adminConfigSettings;
        }
      )
      .subscribe(
      (adminConfigSettings:AppTemplate[]) => {
        
        this.appTemplateService.setAppTemplate(adminConfigSettings);
      },
      (error) => console.log(error)
    );
}

//memberprofilerServices




getMemberProfilerList(data: searchQueryObject) {
  this.httpClient.post('http://localhost:9080/GRM/member/search',data, {
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

 


 getMemberProfilerListtest(data: searchQueryObject):any {
  this.httpClient.post('/GRM/member/search',data, {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => response.json()
     )
     .subscribe(
      (data)  => { data;      
     },
     (error) =>  error      
   );
 }

//  getMemberProfilerListtest(username: string, password: string){
//   return this.httpClient.post<any>('/api/oauth2/token',"grant_type=password&username="+username+"&password="+password,{
//   headers: {
//   Authorization: 'Basic MjAxOTY5RTFCRkQyNDJFMTg5RkU3QjYyOTdCMUI1QTQ6QzY1QTBEQzBGMjhDNDY5RkI3Mzc2Rjk3MkRFRkJDQjk='
//   }
//   }).pipe(map(resp => {
//   if(resp && resp.UserName){
//   localStorage.setItem('currentUser', JSON.stringify(resp));
//   localStorage.setItem('TenantId', resp.TenantId);
//   localStorage.setItem('access_token', resp.access_token);
//   this.cookieService.set( 'authorizedUser', resp.UserName );
//   this.cookieService.set( 'userRoles', 'ServerAdmin' );
//   }
  
//   return resp;
//   }));
//   }

getMemberProfiler(memberId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/member/memberInfo/id/'+ memberId, {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }


getDemographicInformation(memberId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com//GRM/member/memberId/'+ memberId + '/demographic', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }




getCampaignDetails(memberId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/member/memberId/' + memberId + '/campaignSummary', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }





getPromotionActivityData(memberId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/member/memberId/'+ memberId + '/promotion', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }





//SegmentServices

  saveSegment() {
 this.httpClient.post('https://qa-jamba.fishbowlcloud.com/GRM/segment/createorUpdate', {
    observe: 'body',
    responseType: 'json',
  }).map(
      (response: Response) => {
      const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
       return adminConfigSettings;
      }
    )
    .subscribe(
    (adminConfigSettings:AppTemplate[]) => {
      
      this.appTemplateService.setAppTemplate(adminConfigSettings);
    },
    (error) => console.log(error)
  );
}




exportSegment() {
  this.httpClient.post('https://qa-jamba.fishbowlcloud.com/GRM/segment/export', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }


 getSegmentList() {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/segment/segmentInfo/list', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }

 getSegmentDetails(segmentId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/segment/segmentInfo/id/'+segmentId, {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }

 getSegmentStaticData(segmentId) {
  this.httpClient.get('https://qa-jamba.fishbowlcloud.com/GRM/segment/segmentStatic/list', {
     observe: 'body',
     responseType: 'json',
   }).map(
       (response: Response) => {
       const adminConfigSettings:AppTemplate[] = response["adminConfigSetting"];
        return adminConfigSettings;
       }
     )
     .subscribe(
     (adminConfigSettings:AppTemplate[]) => {
       
       this.appTemplateService.setAppTemplate(adminConfigSettings);
     },
     (error) => console.log(error)
   );
 }
   
}
