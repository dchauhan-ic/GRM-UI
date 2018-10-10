import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
@Component({
  selector: 'app-memberprofiler-detail',
  templateUrl: './memberprofiler-detail.component.html',
  styleUrls: ['./memberprofiler-detail.component.scss']
})
export class MemberprofilerDetailComponent implements OnInit {

  smaScreenTitle = "Member Profile";
  selectedDashboard = "";
  memberId = 27999637881;
  demographicInformation;
  profilerResponse;
 
  constructor(private memberProfilerService: MemberProfilerService, private router: Router, private route: ActivatedRoute) 
  {
    this.onFetchData(this.memberId);
  }

  ngOnInit() {
  }

  onFetchData(memberId) {

    this.getMemberInfo(memberId);
  }

  getMemberInfo(memberId): void {
    this.memberProfilerService.getMemberInfo(memberId)
      .subscribe(
      Results => {
        this.profilerResponse = Results;
      }
      )
  }

}
