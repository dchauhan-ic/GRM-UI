import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'gm/app/core/memberprofiler/memberprofiler.service';
import { memberPromotionList } from 'gm/app/core/memberprofiler/memberprofiler.model';
import { DataStorageService } from 'gm/app/shared/data-storage.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-memberprofiler-promotion',
  templateUrl: './memberprofiler-promotion.component.html',
  styleUrls: ['./memberprofiler-promotion.component.scss']
})
export class MemberprofilerPromotionComponent implements OnInit {
  memberId;
  subscription: Subscription;
  promotionActivityData:memberPromotionList; 
  constructor(private dataStorageService: DataStorageService,private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {
   
  }

  ngOnInit() {
    this.memberId = +this.route.snapshot.params['id'];
    this.onFetchData(this.memberId);
  }

  onFetchData(memberId) {
    this.getPromotionActivityData(memberId);
  }

  // getPromotionActivityData(memberId): void {
  //   this.memberProfilerService.getPromotionActivityData(memberId)
  //     .subscribe(
  //       Results => {
  //         this.promotionActivityData = Results;
  //         this.promotionActivityData = Results;
  //         this.promotionActivityData = Results;
  //       }
  //     )
  // }


  getPromotionActivityData(memberId): void {
    this.dataStorageService.onFetchPromotionActivityDataTest(memberId);

    this.subscription = this.memberProfilerService.memberPromotionActivityChanged
    .subscribe(
    (memberPromotionList: memberPromotionList) => {
      this.promotionActivityData= memberPromotionList;
    
    }
    );
  const  memberPromotionList: memberPromotionList = this.memberProfilerService.getMemberPromotionActivity();
  this.promotionActivityData=memberPromotionList;
  }
}