import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';

@Component({
  selector: 'app-memberprofiler-campaign',
  templateUrl: './memberprofiler-campaign.component.html',
  styleUrls: ['./memberprofiler-campaign.component.scss']
})
export class MemberprofilerCampaignComponent implements OnInit {
  memberId=27999637881;
  campaignResponse;
  constructor(private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {
    this.onFetchData(this.memberId); 
  }

  ngOnInit() {
  }

  onFetchData(memberId) {
    this.getCampaignDetails(memberId);
  }

  getCampaignDetails(memberId): void {
    this.memberProfilerService.getCampaignDetail(memberId)
      .subscribe(
        Results => {
          this.campaignResponse = Results;
        }
      )
  }
 
}
