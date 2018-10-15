import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { searchMemberRequest } from 'src/app/gm/gm.model';

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

  onFetchMemberList() {
    const data: searchMemberRequest = {
      searchKey: "jon",
      limit: 15,
      offset: 0
    };
    this.dataStorageService.onFetchMemberTest(data);
 }
}
