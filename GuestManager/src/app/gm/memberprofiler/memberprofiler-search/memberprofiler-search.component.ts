import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { searchQueryObject } from 'src/app/gm/gm.model';
import { GmService } from 'src/app/gm/gm.service';

@Component({
  selector: 'app-memberprofiler-search',
  templateUrl: './memberprofiler-search.component.html',
  styleUrls: ['./memberprofiler-search.component.scss']
})

export class MemberprofilerSearchComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,private GmService: GmService) {this.onFetchData(); }
  smaScreenTitle= "Search Member Profile";
  selectedDashboard = "";
	searchResults = [];
  totalMembers;
  obj:object;
	totalUsers;
	pageSize = 15;
	isTableLoading = false;
	isSearchStarted = false;
	isSearchComplete = false;
	isFromProfileCompleted;
  ngOnInit() {
  }

  onFetchData() {
    const data: searchQueryObject = {
    searchKey: "jon",
    limit:15,
    offset:0
    };
   this.obj=this.dataStorageService.getMemberProfilerListtest(data);
  }
}
