import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GmService } from 'src/app/gm/gm.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-segmentationbuilder-search',
  templateUrl: './segmentationbuilder-search.component.html',
  styleUrls: ['./segmentationbuilder-search.component.scss']
})
export class SegmentationbuilderSearchComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,private GmService: GmService,private router: Router,private route: ActivatedRoute) 
  {
   // this.onFetchData();
  }
  smaScreenTitle = "Segments";
	selectedDashboard = "";
	segmentName = undefined;
	showDialog = false;
  editSegmentId = undefined;
  newSegment="New Segment";
  
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

 

  editSegment = function(segmentId){
   // alert(segmentId+ ' click registered');

    this.router.navigate(['segmentationbuilder/create'], {relativeTo: this.route});
    //logic to move to next page by making an API call
  }

  displayDialog = function() {
		this.showDialog = true;
	}
  
  closeDialog = function(){
		this.showDialog = false;
  }
  
  createSegment = function(){
    // Create new segment function
    alert('submit buton trigerred');
  }

  ngOnInit() {
  }

}
