import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-gm-header',
  templateUrl: './gm-header.component.html',
  styleUrls: ['./gm-header.component.scss']
})
export class GmHeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }
  
  onFetchSegmentList() {
     this.dataStorageService.getSegmentList();
  }

}
