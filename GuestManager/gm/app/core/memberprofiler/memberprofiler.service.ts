import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {  searchMemberRequest } from 'gm/app/core/gm.model';
import { segmentMetaDataList } from 'gm/app/core/segmentationbuilder/segmentationbuilder.model';
import { GmService } from 'gm/app/core/gm.service';
import { memberProfiler, memberSearchList, countMap, memberDemographicList, memberPromotionList, memberCampaignSummary, memberSmsDetail, memberSmsSummary, memberInfo } from 'gm/app/core/memberprofiler/memberprofiler.model';
import { menuList } from 'gm/app/shared/menu.model';

@Injectable()
export class MemberProfilerService {
  segmentsChanged = new Subject<segmentMetaDataList[]>();

  private memberInfo: memberInfo={
    "fullName":null,
    "emailAddress":null,
    "mobileNumber":null,
    "joinDate":"11/20/2007",
    "ageInProgram":"10 years, 10 months, 25 days ",
    "zip":"95621",
    "acquisitionSource":"S",
    "birthDate":"07/06/1904",
    "programName":null,
    "emailOptIn":"Yes",
    "smsOptIn":"No",
    "favoriteStore":null,
    "displayAddress1":null,
    "displayAddress2":null,
    "storeCity":null,
     "storeState":null
    }
  
  ;
 

  

  segmentNavPillsChanged = new Subject<any[]>();




  private segmentNavPills: any[];




  private memberSmsSummary: memberSmsSummary=
  {
"memberId":27917587067,
"subscriptionStatus":"Opt-Out",
"statusChangeDate":"03/27/2013",
"smsSent":0,
"firstSmsSent":null,
"lastSmsSent":null,
"firstCampaignName":null,
"lastCampaignName":null
}
  
  ;

  private memberSmsDetail: memberSmsDetail[]=
  [
    {
    "memberId":27917587067,
    "dateSent":null,
    "campaignName":null,
    "campaignType":null
    }
    ]
  
  ;

  private memberCampaignSummary: memberCampaignSummary=
  {
    "subscriptionStatus":"Opt-Out",
    "statusChangeDate":"03/27/2013",
    "campaignsSent":0,
    "open":0,
    "firstEmailReceived":null,
    "lastEmailReceived":null,
    "lastEmailOpened":null,
    "lastEmailClicked":null,
    "openRate":"0.00",
    "click":0,
    "clickRate":"0.00",
    "redemption":0,
    "redemptionRate":0,
    "numberOfBouncedMail":0
    }
  
  ;

  private memberPromotionList: memberPromotionList=
  {
  "memberId":27917587067,
  "promotionIssued":0,
  "promotionRedemmed":0,
  "promotionExpired":0,
  "promotionRejeted":0,
  "totalSales":"0.00",
  "totalDiscount":"0.00",
  "netSales":"0.00",
  "averageCheckSize":"0.00",
  "discountAverage":"0.00",
  "discountPercentage":"0.00",
  "lastSuccessfulRedemption":{
  "offerName":null,
  "date":null,
  "location":null,
  "reason":null,
  "amount":"0.00",
  "discountAmount":"0.00"
  },
  "lastRejectedRedemption":null
  }
  
  ;

  private menuList: menuList;
  private memberDemographicList: memberDemographicList=
  {
    "memberId":27917581320,
    "personaType":null,
    "gender":null,
    "ageRange":null,
    "homeOwnerShip":null,
    "maritalStatus":null,
    "primaryEthnicity":null,
    "education":null,
    "occupation":null,
    "children":null,
    "houseHoldIncome":null
    }
  
  ;
  private memberProfiler: memberProfiler=
  {
    "memberSearchList":[

    {
    "memberId":27917581320,
    "firstName":"Laduana",
    "lastName":"Jones",
    "email":"TERRAWALLS@AOL.COM",
    "mobilePhone":null,
    "joinDate":"11/20/2007"
    },
    {
    "memberId":27917580495,
    "firstName":"Jonelle",
    "lastName":"Hawks",
    "email":"LUSTING4YOU22@HOTMAIL.COM",
    "mobilePhone":null,
    "joinDate":"11/20/2007"
    },
    {
    "memberId":27917581497,
    "firstName":"Stephanie",
    "lastName":"Jones",
    "email":"INACTIVE20130327_JERSEYGURL222003@YAHOO.COM",
    "mobilePhone":null,
    "joinDate":"11/20/2007"
    },
    {
    "memberId":27917582768,
    "firstName":"Jonah",
    "lastName":"Mabry",
    "email":"INACTIVE20130327_JONAHMABRY@SBCGLOBAL.NET",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917582950,
    "firstName":"Jonathan",
    "lastName":"Drosnock",
    "email":"DRO213@RCN.COM",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917585086,
    "firstName":"Joni",
    "lastName":"Marcy",
    "email":"GOLFER_148@HOTMAIL.COM",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917584391,
    "firstName":"Kim",
    "lastName":"Jones",
    "email":"STAR_BURST_BABY_15@YAHOO.COM",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917584476,
    "firstName":"Jonathan",
    "lastName":"Johnson",
    "email":"JJJOHNSON92101@YAHOO.COM",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917584575,
    "firstName":"Thomas",
    "lastName":"Jones",
    "email":"READER_OF_THOUGHT@YAHOO.COM",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917584611,
    "firstName":"Sherman",
    "lastName":"Jones",
    "email":"KOREAN@YPOWESUDDENLINK.NET",
    "mobilePhone":null,
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917587128,
    "firstName":"Christine",
    "lastName":"Jones",
    "email":"dancingchrissy@yahoo.com",
    "mobilePhone":"(760) 269-9499",
    "joinDate":"11/26/2007"
    },
    {
    "memberId":27917586488,
    "firstName":"Norma",
    "lastName":"Jones",
    "email":"LANDNJONES@AOL.COM",
    "mobilePhone":null,
    "joinDate":"11/29/2007"
    },
    {
    "memberId":27917587969,
    "firstName":"Nikki",
    "lastName":"Jones",
    "email":"JONESO@ECU.EDU",
    "mobilePhone":null,
    "joinDate":"11/30/2007"
    },
    {
    "memberId":27917587973,
    "firstName":"Jolynn",
    "lastName":"Crigger",
    "email":"JOJONAVIE@YAHOO.COM",
    "mobilePhone":null,
    "joinDate":"11/30/2007"
    },
    {
    "memberId":27917588063,
    "firstName":"Jon",
    "lastName":"Moulton",
    "email":"INACTIVE20130327_colt03sd@yahoo.com",
    "mobilePhone":null,
    "joinDate":"12/01/2007"
    }
    ],
    "countMap":{
    "matchedMember":81,
    "totalMember":10000
    }

    
    };
  private memberSearchList: memberSearchList[];
  private countMap: countMap;
  dataEdited = new BehaviorSubject<boolean>(false);
  dataIsLoading = new BehaviorSubject<boolean>(false);
  dataLoadFailed = new Subject<boolean>();
  MemberSearchChanged = new Subject<memberSearchList[]>();
  memberProfilerChanged = new Subject<memberProfiler>();
  memberInfoChanged = new Subject<memberInfo>();
  memberDemographicInformationChanged = new Subject<memberDemographicList>();
  memberPromotionActivityChanged = new Subject<memberPromotionList>();
  memberCampaignSummaryChanged = new Subject<memberCampaignSummary>();
  memberSmsSummaryChanged = new Subject<memberSmsSummary>();
  menuChanges = new Subject<menuList>();
  
  memberSmsDetailChanged = new Subject<memberSmsDetail[]>();
  
  countMapChanged = new Subject<countMap>();

  constructor(private gmService: GmService, private httpClient: HttpClient, private http: Http) {

  }

  // const memberProfiless: memberProfiler=response;
  // const memberSearchList: memberSearchList[] = response["memberSearchList"];
  // const countMap: countMap[] = response["countMap"];

  getMemberProfiler() {
    return this.memberProfiler;
  }

  setMemberProfiler(memberProfiler: memberProfiler) {
    this.memberProfiler = memberProfiler;
    this.memberProfilerChanged.next(this.memberProfiler);
  }

  getMenuList() {
    return this.menuList;
  }

  setMenuList(menuList: menuList) {
    this.menuList = menuList;
    this.menuChanges.next(this.menuList);
  }


  getMemberSmsDetail() {
    return this.memberSmsDetail;
  }

  setMemberSmsDetail(memberSmsDetail: memberSmsDetail[]) {
    this.memberSmsDetail = memberSmsDetail;
    this.memberSmsDetailChanged.next(this.memberSmsDetail);
  }

  getMemberSmsSummary() {
    return this.memberSmsSummary;
  }

  setMemberSmsSummary(memberSmsSummary: memberSmsSummary) {
    this.memberSmsSummary = memberSmsSummary;
    this.memberSmsSummaryChanged.next(this.memberSmsSummary);
  }


  getMemberCampaignSummary() {
    return this.memberCampaignSummary;
  }

  setMemberCampaignSummary(memberCampaignSummary: memberCampaignSummary) {
    this.memberCampaignSummary = memberCampaignSummary;
    this.memberCampaignSummaryChanged.next(this.memberCampaignSummary);
  }

  getMemberPromotionActivity() {
    return this.memberPromotionList;
  }

  setMemberPromotionActivity(memberPromotionList: memberPromotionList) {
    this.memberPromotionList = memberPromotionList;
    this.memberPromotionActivityChanged.next(this.memberPromotionList);
  }


  getMemberInformation() {
    return this.memberInfo;
  }

  setMemberInfo(memberInfo: memberInfo) {
    this.memberInfo = memberInfo;
    this.memberInfoChanged.next(this.memberInfo);
  }

  getMemberDemographicInformation() {
    return this.memberDemographicList;
  }

  setMemberDemographicInformation(memberDemographicList: memberDemographicList) {
    this.memberDemographicList = memberDemographicList;
    this.memberDemographicInformationChanged.next(this.memberDemographicList);
  }


  setCountMap(countMap: countMap) {
    this.countMap = countMap;
   // this.countMap.next();
  }

  getCountMap() {
    //return this.countMap.slice();
  }

  setMemberProfilerList(memberSearchList: memberSearchList[]) {
    this.memberSearchList = memberSearchList;
    this.MemberSearchChanged.next(this.memberSearchList.slice());
  }

  getMemberProfilerList() {
    return this.memberSearchList.slice();
  }

  getMemberDetail(data: searchMemberRequest): any {
    return this.gmService.onFetchMember(data);
  }


  getMemberInfo(memberId): any {
    return this.gmService.onFetchMemberInfo(memberId);
  }

 
  getCampaignSummary(memberId): any {
    return this.gmService.OnFetchCampaignSummary(memberId);
  }

  getCampaignDetail(memberId): any {
    return this.gmService.OnFetchCampaignDetails(memberId);
  }

  getSmsSummary(memberId): any {
    return this.gmService.OnFetchSmsSummary(memberId);
  }

  getSmsDetail(memberId): any {
    return this.gmService.OnFetchSmsDetail(memberId);
  }
  getDemographicInformation(memberId): any {
    return this.gmService.onFetchDemographicInformation(memberId);
  }
  getPromotionActivityData(memberId): any {
    return this.gmService.onFetchPromotionActivityData(memberId);
  }

}