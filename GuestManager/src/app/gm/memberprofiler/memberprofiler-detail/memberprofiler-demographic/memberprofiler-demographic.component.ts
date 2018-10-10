import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';

@Component({
  selector: 'app-memberprofiler-demographic',
  templateUrl: './memberprofiler-demographic.component.html',
  styleUrls: ['./memberprofiler-demographic.component.scss']
})
export class MemberprofilerDemographicComponent implements OnInit {

  memberId=27999637881;
  demographicInformation;
  constructor(private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {
    this.onFetchData(this.memberId);
  }

  ngOnInit() {
   
  }

  onFetchData(memberId) 
  {
   this.getDemographicInformation(memberId);
  }

  getDemographicInformation(memberId): void {
    this.memberProfilerService.getDemographicInformation(memberId)
      .subscribe(
        Results => {
          this.demographicInformation = Results;
        }
      )
  }
}
