import { Component, OnInit } from '@angular/core';
import { GmService } from 'src/app/gm/gm.service';

@Component({
  selector: 'app-memberprofiler',
  templateUrl: './memberprofiler.component.html',
  styleUrls: ['./memberprofiler.component.scss']
})
export class MemberprofilerComponent implements OnInit {

  
  constructor() { }
  smaScreenTitle= "Search Member Profile";
  selectedDashboard = "Dj";
	searchResults = [];
	totalMembers;
	totalUsers;
	pageSize = 15;
	isTableLoading = false;
	isSearchStarted = false;
	isSearchComplete = false;
	isFromProfileCompleted;
  ngOnInit() {
  }

  	
	// searchQuery = function (searchQueryObject, pageChanging) {
  // !pageChanging ? (this.isSearchStarted = true, searchQueryObject.offset = 0) : null;
	
	// 	GmService.getMembers(searchQueryObject).then(function(response) {
	// 		//success call
	// 		if(response.status === 200 && response.data) {
	// 			this.searchResults = response.data.memberSearchList;
  //       this.totalUsers = response.data.countMap.matchedMember;
	// 			this.totalMembers = response.data.countMap.totalMember;
	// 			this.searchResults.length === 0 && response.config.data.searchKey !== "" ? $('.default-text').text('Did not find any results! Please try again.') : null;
	// 			this.isSearchStarted = false;
	// 			this.isSearchComplete = true;
	// 			this.isTableLoading = false;
	// 			if(!pageChanging && this.searchResults.length) {
	// 				if(this.totalUsers > this.pageSize) {
	// 					var pageNumber = 1;
	// 					this.pagination.current = 1;
  //           this.	isFromProfileCompleted = true;
	// 					return;
	// 				}
	// 			}
	// 		}
	// 	}).catch(function(response) {
			
	// 		this.searchResults=[];
	// 		this.isTableLoading = false;
	// 		this.isSearchStarted = false;
	// 		this.isSearchComplete = true;
	// 		this.isFromProfileCompleted = false;
  //   });
  // }
}
