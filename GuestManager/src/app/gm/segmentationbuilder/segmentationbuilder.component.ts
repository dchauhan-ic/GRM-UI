import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmentationbuilder',
  templateUrl: './segmentationbuilder.component.html',
  styleUrls: ['./segmentationbuilder.component.scss']
})
export class SegmentationbuilderComponent implements OnInit {

  constructor() { }

  smaScreenTitle = "Segments";
	selectedDashboard = "";
	segmentName = undefined;
	showDialog = false;
	editSegmentId = undefined;
  ngOnInit() {
  }

}
