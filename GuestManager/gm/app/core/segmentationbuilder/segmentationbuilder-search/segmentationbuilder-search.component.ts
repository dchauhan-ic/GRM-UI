import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataStorageService } from 'gm/app/shared/data-storage.service';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators'
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { segmentMetaDataList } from 'gm/app/core/segmentationbuilder/segmentationbuilder.model';
import { SegmentBuilderService } from 'gm/app/core/segmentationbuilder/segmentationbuilder.service';
@Component({
  selector: 'app-segmentationbuilder-search',
  templateUrl: './segmentationbuilder-search.component.html',
  styleUrls: ['./segmentationbuilder-search.component.scss']
})
export class SegmentationbuilderSearchComponent implements OnInit {
  segmentDataList : segmentMetaDataList[];
  segments: segmentMetaDataList[];
  subscription: Subscription;
  smaScreenTitle = "Segments";
  selectedDashboard = "";
  segmentName = undefined;
  showDialog = false;
  editSegmentId = undefined;
  newSegment = "New Segment";

  //
  searchKey;
  isSearchStarted = false;;

  @ViewChild('f') segmentForm:NgForm;

  constructor(private segmentBuilderService: SegmentBuilderService, private router: Router, private route: ActivatedRoute) {
  }
 
  ngOnInit() {
    this.segmentBuilderService.dataIsLoading.subscribe(
      (isLoading: boolean) => this.isSearchStarted = isLoading
    );

    this.subscription = this.segmentBuilderService.segmentsChanged
      .subscribe(
      (segmentMetaDataList: segmentMetaDataList[]) => {
        this.segments = segmentMetaDataList;
      }
      );
    this.segments = this.segmentBuilderService.getSegmentList();
    this.segmentDataList = this.segments;
  }

  displayDialog() {
    this.showDialog = true;
    this.segmentBuilderService.setDialogFlag(true);

  }

  closeDialog (){
    this.showDialog = false;
    this.segmentBuilderService.setDialogFlag(false);
  }

  onEditSegment(segmentId,segmentMetaDataList) {
  
    this.segmentBuilderService.setSegment(segmentMetaDataList);
    this.segmentBuilderService.getSegmentDetails(segmentId);  
  }

  onCreateNewSegment(){
    this.segmentName=this.segmentForm.value.myInput;
    let segmentMetaData = new segmentMetaDataList(true,199,this.segmentName,"","",0); 
    this.segmentBuilderService.setSegment(segmentMetaData);
    this.segmentBuilderService.getCreateSegmentStaticData(); 
   // this.router.navigate(['SegmentationBuilder/buildSegment']);
  }

  searchQuery(searchText){
    this.segments = this.segmentBuilderService.getSerachResults(searchText);
  }
}