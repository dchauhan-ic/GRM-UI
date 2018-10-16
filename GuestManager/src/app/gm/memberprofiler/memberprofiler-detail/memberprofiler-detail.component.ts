import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { memberInfo } from 'src/app/gm/memberprofiler/memberprofiler.model';
@Component({
  selector: 'app-memberprofiler-detail',
  templateUrl: './memberprofiler-detail.component.html',
  styleUrls: ['./memberprofiler-detail.component.scss']
})
export class MemberprofilerDetailComponent implements OnInit {

  smaScreenTitle = "Member Profile";
  selectedDashboard = "";
  memberId ;
  demographicInformation;
  profilerResponse;
  fullName;
  headerclick;
  subscription: Subscription;
  isPromotionClicked = false;
  isDemographicInformationClicked = false;
  isCampaignClicked = false;
  constructor(private dataStorageService: DataStorageService,private memberProfilerService: MemberProfilerService, private router: Router, private route: ActivatedRoute,private _location: Location) 
  {
    
  }

  ngOnInit() {
    this.memberId = +this.route.snapshot.params['id'];
    this.onFetchData(this.memberId);
  }

  onFetchData(memberId) {

    this.getMemberInfo(memberId);
  }

  // getMemberInfo(memberId): void {
  //   this.memberProfilerService.getMemberInfo(memberId)
  //     .subscribe(
  //     Results => {
  //       this.profilerResponse = Results;
  //       this.fullName= this.profilerResponse.fullName;
  //       this.profilerResponse.storeAddress = this.concatWithComma(this.profilerResponse.displayAddress1, this.profilerResponse.displayAddress2),
	// 			this.profilerResponse.storeCityState = this.concatWithComma(this.profilerResponse.storeCity, this.profilerResponse.storeState)
  //     }
  //     )
  // }

  getMemberInfo(memberId): void {
    this.dataStorageService.onFetchMemberInfoTest(memberId);

    this.subscription = this.memberProfilerService.memberInfoChanged
    .subscribe(
    (memberInfo: memberInfo) => {
      this.profilerResponse= memberInfo;
    
    }
    );
  const  memberInfo: memberInfo = this.memberProfilerService.getMemberInformation();
  this.profilerResponse=memberInfo;

  }
  


   concatWithComma(str1, str2) {
    let newString;
    if(str1 !== null && str2 !== null) {
      newString = str1 + ', ' + str2;
    } else if(str1 === null) {
      newString = str2;
    } else if(str2 === null) {
      newString = str1
    } else {
      newString = null;
    }
    return  newString
  }
  onGoBack()
  {
    this._location.back();
  }

  checkDataAvailability( headername ){
    
    if( headername == "PromotionActivity" && !this.isPromotionClicked ){
      this.isPromotionClicked = true;
    } else if( headername == "campaignSummary" && !this.isCampaignClicked){
      this.isCampaignClicked = true;
    } else if( headername == "demographicInformation" && !this.isDemographicInformationClicked){
      this.isDemographicInformationClicked = true;
    }
  }

  clickAccordion(headername)
  {
    this.checkDataAvailability( headername );
   
    if(headername==this.headerclick){
      this.headerclick=''
    }else{
      this.headerclick=headername;
    }
  }
  
}
