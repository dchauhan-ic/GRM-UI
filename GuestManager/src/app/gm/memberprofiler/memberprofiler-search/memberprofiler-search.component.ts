import { Component, OnInit, ViewChild } from '@angular/core';
import {  searchMemberRequest } from 'src/app/gm/gm.model';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { memberProfiler, countMap,memberSearchList } from 'src/app/gm/memberprofiler/memberprofiler.model';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
@Component({
  selector: 'app-memberprofiler-search',
  templateUrl: './memberprofiler-search.component.html',
  styleUrls: ['./memberprofiler-search.component.scss']
})

export class MemberprofilerSearchComponent implements OnInit {


  smaScreenTitle = "Search Member Profile";
  selectedDashboard = "";
  memberProfiler: any;
  searchResults: any = [];
  searchResultsItem: any;
  countMap: countMap[];
  memberSearchList: memberSearchList[]
  totalMembers;
  obj: object;
  totalUsers;
  pageSize = 15;
  isTableLoading = false;
  isSearchStarted = false;
  isSearchComplete = false;
  pageChanging = false;
  isFromProfileCompleted;
  current: number = 1;
  subscription: Subscription;
  @ViewChild('f') searchForm: NgForm;

  constructor(private dataStorageService: DataStorageService,private memberProfilerService: MemberProfilerService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.dataStorageService.dataIsLoading.subscribe(
      (isLoading: boolean) => this.isSearchStarted = isLoading
    );

  }

  getPage(newPage: number) {
    this.current = newPage;
    const data: searchMemberRequest = {
      searchKey: this.searchForm.value.searchvalue,
      limit: this.pageSize,
      offset: (newPage - 1) * this.pageSize
    };
    this.getMember(data);
  }


  onSearchMember() {
    const data: searchMemberRequest = {
      searchKey: this.searchForm.value.searchvalue,
      limit: this.pageSize,
      offset: (this.current - 1) * this.pageSize
    };
    this.getMember(data);
  }


  // getMember(data: searchMemberRequest): void {
  //   this.memberProfilerService.getMemberDetail(data)
  //     .subscribe(
  //     Results => {
  //       const memberSearchList: memberSearchList[] = Results["memberSearchList"];
  //       const countMap: countMap[] = Results["countMap"];
  //       this.searchResults = memberSearchList;
  //       this.totalUsers = countMap["matchedMember"];
  //       this.totalMembers = countMap["totalMember"];
  //       this.isSearchStarted = false;
  //       this.isSearchComplete = true;
  //       this.isTableLoading = false;
  //       // if(!this.pageChanging && this.searchResults.length) {
  //       //   if(this.totalUsers > this.pageSize) {
  //       //     var pageNumber = 1;
  //       //     this.page = 1;
  //       //    this.isFromProfileCompleted = true;
  //       //     return;
  //       //   }
  //       // }

  //     }
  //     )
  // }

  getMember(data: searchMemberRequest): void {
    this.dataStorageService.onFetchMemberTest(data);
     
    this.subscription = this.memberProfilerService.memberProfilerChanged
    .subscribe(
    (memberProfiler: memberProfiler) => {
      
      const memberSearchList: memberSearchList[] = memberProfiler.memberSearchList;
      const countMap: countMap = memberProfiler.countMap;
      this.searchResults = memberSearchList;
      this.totalUsers = countMap.matchedMember;
      this.totalMembers = countMap.totalMember;
     // this.isSearchStarted = false;
      this.isSearchComplete = true;
      this.isTableLoading = false;

    }
    );
  const  memberProfiler:memberProfiler = this.memberProfilerService.getMemberProfiler();
  const memberSearchList: memberSearchList[] = memberProfiler.memberSearchList;
      const countMap: countMap = memberProfiler.countMap;
      this.searchResults = memberSearchList;
      this.totalUsers = countMap.matchedMember;
      this.totalMembers = countMap.totalMember;
      //this.isSearchStarted = false;
      this.isSearchComplete = true;
      this.isTableLoading = false;
      
      
  }

  onClickMemberItem(memberSearchList: memberSearchList) {

    //this.router.navigate(['memberprofiler/detail']);
    this.router.navigate(['/MemberProfiler', memberSearchList.memberId]);
  }


  limitChanged(e) {
    const data: searchMemberRequest = {
      searchKey: this.searchForm.value.searchvalue,
      limit: e.target.innerHTML,
      offset: (this.current - 1) * this.pageSize
    };
    this.pageSize = e.target.innerHTML;
    this.getMember(data);
    var elem = e.target;
    var elemSiblings = elem.parentElement.children;
    for (var i in elemSiblings) {
      var siblingElemClassList = elemSiblings[i].classList;
      if (siblingElemClassList) {
        siblingElemClassList.contains('active') ? siblingElemClassList.remove('active') : siblingElemClassList;
      }
    }
    var elemClassList = elem.classList;
    elemClassList.contains('active') ? elemClassList : (elemClassList.add('active'), this.pageSize = e.target.innerText);
  };


}
