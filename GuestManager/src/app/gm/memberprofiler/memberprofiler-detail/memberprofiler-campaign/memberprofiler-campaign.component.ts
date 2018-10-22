import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { memberSmsDetail, memberSmsSummary, memberCampaignSummary } from 'src/app/gm/memberprofiler/memberprofiler.model';
@Component({
  selector: 'app-memberprofiler-campaign',
  templateUrl: './memberprofiler-campaign.component.html',
  styleUrls: ['./memberprofiler-campaign.component.scss']
})
export class MemberprofilerCampaignComponent implements OnInit {
  memberId;
  campaignSummary;
  campaignDetails;
  campaignSmsSummary;
  campaignSmsDetails;
  subscriptionStatus;
  subscription: Subscription;
  constructor(private dataStorageService: DataStorageService,private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {

  }

  ngOnInit() {
    this.memberId = +this.route.snapshot.params['id'];
    this.onFetchCampaignSummary(this.memberId);
  }

  onFetchCampaignSummary(memberId) {
    this.getCampaignSummary(memberId);
  }
  // onFetchCampaignDetail(memberId) {
  //   this.getCampaignDetails(memberId);
  // }
  onFetchSmsSummary(memberId) {
    this.getSmsDetails(memberId);
  }
  onFetchSmsDetail(memberId) {
    this.getSmsSummary(memberId);
  }

  // getCampaignSummary(memberId): void {
  //   this.memberProfilerService.getCampaignSummary(memberId)
  //     .subscribe(
  //       Results => {
  //         this.campaignSummary = Results;
  //         this.subscriptionStatus= this.campaignSummary.subscriptionStatus;
  //         this.onFetchCampaignDetail(this.memberId);
  //       }
  //     )
  // }

  getCampaignSummary(memberId): void {
    this.dataStorageService.onFetchCampaignSummaryTest(memberId);

    this.subscription = this.memberProfilerService.memberCampaignSummaryChanged
    .subscribe(
    (memberCampaignSummary: memberCampaignSummary) => {
      this.campaignSummary= memberCampaignSummary;
     
    
    }
    );
  const  memberCampaignSummary: memberCampaignSummary = this.memberProfilerService.getMemberCampaignSummary();
  this.campaignSummary=memberCampaignSummary;
  this.getCampaignDetails(this.memberId);
 
  }

  getCampaignDetails(memberId): void {
    this.memberProfilerService.getCampaignDetail(memberId)
      .subscribe(
        Results => {
          this.campaignDetails = Results;
         // this.subscriptionStatus= this.campaignResponse.subscriptionStatus;
        //  this.getSmsDetails(this.memberId);
        }
      )
      this.getSmsDetails(this.memberId);
  }
 
  // getSmsDetails(memberId): void {
  //   this.memberProfilerService.getSmsDetail(memberId)
  //     .subscribe(
  //       Results => {
  //         this.campaignSmsDetails = Results;
  //        // this.subscriptionStatus= this.campaignResponse.subscriptionStatus;
  //         this.onFetchSmsDetail(this.memberId);
  //       }
  //     )
  // }

  getSmsDetails(memberId): void {
    this.dataStorageService.OnFetchSmsDetailTest(memberId);

    this.subscription = this.memberProfilerService.memberSmsDetailChanged
    .subscribe(
    (memberSmsDetail: memberSmsDetail[]) => {
      this.campaignSmsDetails= memberSmsDetail;
     
    
    }
    );
  const  memberSmsDetail: memberSmsDetail[] = this.memberProfilerService.getMemberSmsDetail();
  this.campaignSmsDetails=memberSmsDetail;
  this.onFetchSmsDetail(this.memberId);

  }
  

  // getSmsSummary(memberId): void {
  //   this.memberProfilerService.getSmsSummary(memberId)
  //     .subscribe(
  //       Results => {
  //         this.campaignSmsDetails = Results;
  //        // this.subscriptionStatus= this.campaignResponse.subscriptionStatus;
  //       }
  //     )
  // }

  getSmsSummary(memberId): void {
    this.dataStorageService.OnFetchSmsSummaryTest(memberId);

    this.subscription = this.memberProfilerService.memberSmsSummaryChanged
    .subscribe(
    (memberSmsSummary: memberSmsSummary) => {
      this.campaignSmsSummary= memberSmsSummary;
    
    }
    );
  const memberSmsSummary:memberSmsSummary = this.memberProfilerService.getMemberSmsSummary();
  this.campaignSmsSummary=memberSmsSummary;
  }
}
