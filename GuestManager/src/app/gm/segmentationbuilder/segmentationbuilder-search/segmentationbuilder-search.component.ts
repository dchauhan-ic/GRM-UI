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
  segments = [{
    "count": 5,
    "created": "09/08/2018",
    "segmentId": 1,
    "segmentName": "DJJSegment",
    "successFlag": true,
    "updated": "09/18/2018"
  },{
    "count": 7,
    "created": "09/17/2018",
    "segmentId": 2,
    "segmentName": "TestSegment",
    "successFlag": true,
    "updated": "09/20/2018"
  },{
    "count": 11,
    "created": "09/20/2018",
    "segmentId": 3,
    "segmentName": "test1234",
    "successFlag": true,
    "updated": "09/23/2018"
  }];
  ngOnInit() {
  }

}
