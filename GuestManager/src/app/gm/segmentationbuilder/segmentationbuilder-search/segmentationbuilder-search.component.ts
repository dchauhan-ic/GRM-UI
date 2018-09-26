import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmentationbuilder-search',
  templateUrl: './segmentationbuilder-search.component.html',
  styleUrls: ['./segmentationbuilder-search.component.scss']
})
export class SegmentationbuilderSearchComponent implements OnInit {

  constructor() { }
  smaScreenTitle = "Segments";
	selectedDashboard = "";
	segmentName = undefined;
	showDialog = false;
	editSegmentId = undefined;
  ngOnInit() {
  }

}
