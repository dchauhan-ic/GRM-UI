import { Component, OnInit } from '@angular/core';
import { SegmentBuilderService } from 'src/app/gm/segmentationbuilder/segmentationbuilder.service';

@Component({
  selector: 'app-segmentationbuilder-dialog',
  templateUrl: './segmentationbuilder-dialog.component.html',
  styleUrls: ['./segmentationbuilder-dialog.component.scss']
})
export class SegmentationbuilderDialogComponent implements OnInit {

  showDialog = false;
  constructor(private segmentBuilderService: SegmentBuilderService) { }

  ngOnInit() {
   this.showDialog =this.segmentBuilderService.getDialogFlag();
  }

}
