import { Component, OnInit } from '@angular/core';
import { SegmentBuilderService } from 'gm/app/core/segmentationbuilder/segmentationbuilder.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-segmentationbuilder-dynamicview',
  templateUrl: './segmentationbuilder-dynamicview.component.html',
  styleUrls: ['./segmentationbuilder-dynamicview.component.scss']
})
export class SegmentationbuilderDynamicviewComponent implements OnInit {
  items = [];
  subscription: Subscription;
  constructor(private SegmentBuilderService: SegmentBuilderService) { }

  ngOnInit() {

    this.subscription = this.SegmentBuilderService.segmentNavPillsChanged
      .subscribe(
        (segmentNavPills:any[]) => {
          this.items = segmentNavPills;
        }
      );

    this.items=this.SegmentBuilderService.getsegmentNavPills();

  }

  
}
