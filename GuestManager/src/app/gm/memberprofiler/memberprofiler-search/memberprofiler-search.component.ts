import { Component, OnInit,ViewChild } from '@angular/core';
import { memberSearchList, countMap, searchMemberRequest } from 'src/app/gm/gm.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
@Component({
  selector: 'app-memberprofiler-search',
  templateUrl: './memberprofiler-search.component.html',
  styleUrls: ['./memberprofiler-search.component.scss']
})

export class MemberprofilerSearchComponent implements OnInit {

  
  smaScreenTitle= "Search Member Profile";
  selectedDashboard = "";
  memberProfiler:any;
  searchResults:any = [];
  countMap: countMap[];
  memberSearchList: memberSearchList[]
  totalMembers;
  obj:object;
	totalUsers;
	pageSize = 15;
	isTableLoading = false;
	isSearchStarted = false;
  isSearchComplete = false;
  isFromProfileCompleted;
  @ViewChild('f') searchForm: NgForm;
  
  constructor(private memberProfilerService: MemberProfilerService,private router: Router,private route: ActivatedRoute) 
  {}
  
  
  ngOnInit() {
  }

  onSearchMember() {
    const data: searchMemberRequest = {
    searchKey: this.searchForm.value.searchvalue,
    limit:15,
    offset:0
    };
    this.getMember(data);
  }

  getMember(data: searchMemberRequest): void {
    this.memberProfilerService.getMemberDetail(data)
      .subscribe(
        Results => {
          const memberSearchList: memberSearchList[] = Results["memberSearchList"];
          const countMap: countMap[] = Results["countMap"];
            this.searchResults = memberSearchList;
            this.totalUsers = countMap["matchedMember"];
            this.totalMembers = countMap["totalMember"];
            this.isSearchStarted = false;
            this.isSearchComplete = true;
            this.isTableLoading = false;
            if( this.searchResults.length) {
              if(this.totalUsers > this.pageSize) {
                var pageNumber = 1;
                this.isFromProfileCompleted = true;
                return;
              }
            }
          
        }
      )
  }

  viewProfile = function(){
     this.router.navigate(['memberprofiler/detail']);
   }

 
}
