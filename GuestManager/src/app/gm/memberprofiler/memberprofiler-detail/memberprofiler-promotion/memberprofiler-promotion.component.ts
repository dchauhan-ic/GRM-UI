import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';


@Component({
  selector: 'app-memberprofiler-promotion',
  templateUrl: './memberprofiler-promotion.component.html',
  styleUrls: ['./memberprofiler-promotion.component.scss']
})
export class MemberprofilerPromotionComponent implements OnInit {
  memberId=27999701694;
  promotionActivityData; 
  constructor(private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {
    this.onFetchData(this.memberId); 
  }

  ngOnInit() {
  }

  onFetchData(memberId) {
    this.getPromotionActivityData(memberId);
  }

  getPromotionActivityData(memberId): void {
    this.memberProfilerService.getPromotionActivityData(memberId)
      .subscribe(
        Results => {
          this.promotionActivityData = Results;
        }
      )
  }

}