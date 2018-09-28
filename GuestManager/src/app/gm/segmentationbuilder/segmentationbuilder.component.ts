
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GmService } from 'src/app/gm/gm.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators'
@Component({
  selector: 'app-segmentationbuilder',
  templateUrl: './segmentationbuilder.component.html',
  styleUrls: ['./segmentationbuilder.component.scss']
})
export class SegmentationbuilderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,private GmService: GmService,private router: Router,private route: ActivatedRoute,private http: HttpClient) 
  {
   // this.onFetchData();
   //this.getRestItems();
  }
  smaScreenTitle = "Segments";
	selectedDashboard = "";
	segmentName = undefined;
	showDialog = false;
  editSegmentId = undefined;
  newSegment="New Segment";
  // segments: any;
  // restItemsUrl = 'GRM/segment/segmentInfo/list';//'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  //   // Read all REST Items
  //   getRestItems(): void {
  //     this.restItemsServiceGetRestItems()
  //       .subscribe(
  //         restItems => {
  //           this.segments = restItems;
          
  //         }
  //       )
  //   }

  //  // Rest Items Service: Read all REST Items
  //  restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl)
  //     .pipe(map(data => data));
  
  //  }

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

