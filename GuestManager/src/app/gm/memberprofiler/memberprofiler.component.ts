import { Component, OnInit } from '@angular/core';
import { GmService } from 'src/app/gm/gm.service';

@Component({
	selector: 'app-memberprofiler',
	templateUrl: './memberprofiler.component.html',
	styleUrls: ['./memberprofiler.component.scss']
})
export class MemberprofilerComponent implements OnInit {

	smaScreenTitle = "Search Member Profile";
	selectedDashboard = "Dj";
	searchResults = [];
	totalMembers;
	totalUsers;
	pageSize = 15;
	isTableLoading = false;
	isSearchStarted = false;
	isSearchComplete = false;
	isFromProfileCompleted;

	constructor() { }

	ngOnInit() {
	}

}
