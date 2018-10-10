import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { first, map } from 'rxjs/operators'
import { Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GM';
  error = '';
  loading = false;
  constructor(private dataStorageService: DataStorageService,private authService: AuthService,private router: Router,) { }
  ngOnInit() {
    this.onFetchData();
  }
  onFetchData() {
   // this.authService.login("serveradmin","Password@1234");
    // alert( ' click registered');

    // this.authService.login("serveradmin","Password@1234")
    // .pipe(first()).subscribe(
    //   data => {this.router.navigate(["marketing/campaign"])},
    //   error => {this.error = error; this.loading = false;}
    // )
  }
}
