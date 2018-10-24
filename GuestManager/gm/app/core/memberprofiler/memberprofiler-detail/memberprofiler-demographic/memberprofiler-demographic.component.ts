import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'gm/app/core/memberprofiler/memberprofiler.service';
import { memberDemographicList } from 'gm/app/core/memberprofiler/memberprofiler.model';
import { DataStorageService } from 'gm/app/shared/data-storage.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-memberprofiler-demographic',
  templateUrl: './memberprofiler-demographic.component.html',
  styleUrls: ['./memberprofiler-demographic.component.scss']
})
export class MemberprofilerDemographicComponent implements OnInit {

  memberId;
  subscription: Subscription;
  demographicInformation:memberDemographicList;
  constructor(private dataStorageService: DataStorageService,private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {
    
  }

  ngOnInit() {
    this.memberId = +this.route.snapshot.params['id'];
    this.onFetchData(this.memberId);
  }

  onFetchData(memberId) 
  {
   this.getDemographicInformation(memberId);
  }

  // getDemographicInformation(memberId) {
  //   this.memberProfilerService.getDemographicInformation(memberId)
  //     .subscribe(
  //       Results => {
  //         this.demographicInformation= Results;
  //       //  this.memberId=this.demographicInformation.memberId;
  //       }
  //     )
  // }

  getDemographicInformation(memberId) {
    this.dataStorageService.onFetchDemographicInformationTest(memberId);

    this.subscription = this.memberProfilerService.memberDemographicInformationChanged
    .subscribe(
    (memberDemographicList: memberDemographicList) => {
      this.demographicInformation= memberDemographicList;
    
    }
    );
  const  memberDemographicList: memberDemographicList = this.memberProfilerService.getMemberDemographicInformation();
  this.demographicInformation=memberDemographicList;

  }
}
