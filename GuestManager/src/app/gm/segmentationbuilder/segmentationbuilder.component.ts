
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GmService } from 'src/app/gm/gm.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-segmentationbuilder',
  templateUrl: './segmentationbuilder.component.html',
  styleUrls: ['./segmentationbuilder.component.scss']
})
export class SegmentationbuilderComponent implements OnInit {

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
    //logic to move to next page by making an API call

    this.router.navigate(['create'], {relativeTo: this.route});
  }

  displayDialog = function() {
		this.showDialog = true;
	}
  
  closeDialog = function(){
		this.showDialog = false;
  }
  
  createSegment = function(){
    // Create new segment function
    //alert('submit buton trigerred');
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  ngOnInit() {
  }

}
