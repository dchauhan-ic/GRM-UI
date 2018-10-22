import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { searchMemberRequest } from 'src/app/gm/gm.model';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { first, map } from 'rxjs/operators'
import { Subscription } from 'rxjs/Subscription';
import { MemberProfilerService } from 'src/app/gm/memberprofiler/memberprofiler.service';
import { menuList, ListObj } from 'src/app/shared/menu.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-gm-header',
  templateUrl: './gm-header.component.html',
  styleUrls: ['./gm-header.component.scss']
})
export class GmHeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private memberProfilerService: MemberProfilerService, private authService: AuthService, private router: Router, ) { }
  allmenu = {};
  objectKeys = Object.keys;
  AllMenuList = [];
  topMenuList = [];
  subMenuList = [];
  childSubMenuList = [];
  childSubMenuListArray = [];
  data: Object[];
  ListObj1 = {

  }
  ListObj2 = {}
  ListObj3 = {}
  showSearchBox1 = false;
  localDataFlage = false;
  thirdListFlage = true;
  atHome = false;
  subscription: Subscription;
  filteredStatus = '';
  currentUserFullName;

  ngOnInit() {
    this.onFetchData();
  }



  onFetchData() {
    this.authService.login("serveradmin", "Password@1234")
      .pipe(first()).subscribe(


      )
    this.getMenu();

  }


  //  onFetchMenu() {
  //   this.dataStorageService.onFetchMenuTest();
  // }




  getMenuLogic(menuList: menuList) {

    if (menuList) {
      this.AllMenuList = menuList.value;
      var AllMenuListLength = this.AllMenuList.length;

      for (var AllmenuVal = 0; AllmenuVal < AllMenuListLength; AllmenuVal++) {

        if (this.AllMenuList[AllmenuVal].ParentId == null) {
          var ListObj = new Object();
          ListObj = this.AllMenuList[AllmenuVal];
          this.topMenuList.push(ListObj)
        }


      }
      var parentlevelMenu = $.grep(this.AllMenuList, function (n, i) {
        return (n.Level === 1);
      });

      var ParentId = parentlevelMenu[0];



      if (this.atHome) {
        for (var allmenuvar = 0; allmenuvar < this.AllMenuList.length; allmenuvar++) {
          if (this.AllMenuList[allmenuvar].ParentId == ParentId) {
            this.atHome = true;
            return
          }
        }
      }
    }
  }

  topMenuMouseOver = function (menu1) {

    // $(".shadow").css("visibility", "visible")
  }

  clickTopMenu = function (menu) {
    var targetedTableClass = 'menu_id_' + menu.Id;
    {

      var itemCount = $('.' + targetedTableClass).find('td').length;

      if (menu.Label == 'Marketing' && itemCount == 3) {
        menu.CustomClass = 'Marketing_bottom_icon';
      }
      else if (menu.Label == 'Settings' && itemCount == 3) {
        menu.CustomClass = 'Settings_bottom_icon';
      }
    };

    this.menuCounter = 0;
    this.partialMenu = menu.Id;

    $("#lp").show();

    this.currentmenu1Flage = false;
    this.firstTimer = true;
    localStorage.setItem("partialMenu", menu.Id);

    var pId = menu.Id;
    this.subMenuList.length = 0
    var AllMenuListLength = this.AllMenuList.length;
    var menuCounterIndex = 1;
    for (var AllsubmenuVal = 0; AllsubmenuVal < AllMenuListLength; AllsubmenuVal++) {
      if (this.AllMenuList[AllsubmenuVal].ParentId == pId) {

        //  var ListObj1 = new Object();
        var ListObj1 = new ListObj();
        ListObj1 = this.AllMenuList[AllsubmenuVal];
        this.AllMenuList[AllsubmenuVal];
        ListObj1.childSubMenuListArray = new Array();
        ListObj1.preMenuIndex = menuCounterIndex;
        menuCounterIndex = 1;
        for (var AllsubsubmenuVal = 0; AllsubsubmenuVal < AllMenuListLength; AllsubsubmenuVal++) {
          if (this.AllMenuList[AllsubsubmenuVal].ParentId == ListObj1.Id) {
            menuCounterIndex++;
            // var ListObj2 = new Object();
            var ListObj2 = new ListObj();
            ListObj2 = this.AllMenuList[AllsubsubmenuVal];
            this.menuCounter++;

            ListObj1.childSubMenuListArray.push(ListObj2);
            ListObj2.childSubMenuListArray = new Array();
            for (var AllsubsubsubmenuVal = 0; AllsubsubsubmenuVal < AllMenuListLength; AllsubsubsubmenuVal++) {
              if (this.AllMenuList[AllsubsubsubmenuVal].ParentId == ListObj2.Id) {

                // var ListObj3 = new Object();
                var ListObj3 = new ListObj();
                ListObj3 = this.AllMenuList[AllsubsubsubmenuVal];

                ListObj2.childSubMenuListArray.push(ListObj3);

              }
            }
          }
        }
        this.menuCounter++
        ListObj1.menuIndex = menuCounterIndex;
        if ((ListObj1.preMenuIndex + ListObj1.menuIndex) > 9) {
          menuCounterIndex = 0;
          ListObj1.IsNewTD = true;
        }
        else
          ListObj1.IsNewTD = false;
        this.subMenuList.push(ListObj1)
      }
    }
    var localSubmenuList = [];
    this.localSubmenuLists = [];
    this.localSubmenuLists.push(localSubmenuList);
    var localSubmenuListsCount = 0
    for (var i = 0; i < this.subMenuList.length; i++) {
      var subMenuChildMenuCount = (this.subMenuList[i].childSubMenuListArray != null && this.subMenuList[i].childSubMenuListArray
        instanceof Array && this.subMenuList[i].childSubMenuListArray.length > 0) ? this.subMenuList[i].childSubMenuListArray.length : 0;
      if (localSubmenuListsCount + subMenuChildMenuCount + 1 > 12) {
        var localSubmenuList = [];
        localSubmenuList.push(this.subMenuList[i]);
        this.localSubmenuLists.push(localSubmenuList);
        localSubmenuListsCount = 0 + subMenuChildMenuCount + 1
      } else {
        localSubmenuList.push(this.subMenuList[i]);

        localSubmenuListsCount = localSubmenuListsCount + subMenuChildMenuCount + 1
      }

    }
    if (this.subMenuList && this.subMenuList.length > 0) {
      if (this.subMenuList[0].URLPath) {
        menu.URLPath = this.subMenuList[0].URLPath
      } else {
        if (this.subMenuList[0].childSubMenuListArray && this.subMenuList[0].childSubMenuListArray.length > 0) {
          menu.URLPath = this.subMenuList[0].childSubMenuListArray[0].URLPath;
        }

      }

    } else {
      menu.URLPath = this.defaultMenuUrl;
    }



  }

  clickTopMenu2 = function (menu2) {

    try {
      $('#' + this.currentmenu1).removeClass("active");
    } catch (e) {
      // TODO: handle exception
    }
    localStorage.setItem("currentmenu1", menu2.Id);
    //  $scope.currentmenu1 = localStorage.getItem("currentmenu1");

    //   $('#' + $scope.currentmenu).removeClass("active");
    // $scope.currentmenu = localStorage.getItem("partialMenu");
    //  $('#' + $scope.currentmenu).addClass("active");
    //  $('#' + $scope.currentmenu1).addClass("active");
    //  setCurrentMenu($rootScope.partialMenu);
    if (menu2.Name == "Cockpit") {
      // .$broadcast('analyticsCockpitClicked');
    }
    if (menu2.Name == "Item Detail") {
      // $rootScope.$broadcast('handleBroadcast', { item: menu2.Label, subItem: menu2.Label });
    }


  }

  topMenuMouseLeave = function (menu) {
    // alert("Dj");
  }

  topMenuClicked = function (menu) {
    //  alert("Dj"); 	  

  }
  clickSubMenu = function (menu) {

    this.subMenu = menu.URLPath;
    if (this.subMenu == "/MemberProfiler/") {
      // this.onFetchMemberList();
      this.router.navigate(['MemberProfiler/search']);
    }
    else if (this.subMenu == "/SegmentationBuilder/") {
      this.onFetchSegmentList();
      this.router.navigate(['/SegmentationBuilder']);
    }
    else {
      this.router.navigate(['']);
    }

  }
  clickTopMenu3 = function (menu3) {
    this.router.navigate(['']);
  }

  getUlr = function (URLPath) {
    var url = '';
    if (URLPath == '' || URLPath == null || URLPath == undefined) {
      //  url=  "#"+$location.url();
    } else if (URLPath == "/custom/report") {
      url = 'javascript:void(0);'
    } else {

      url = '#' + URLPath;

    }
    return url

  }

  onFetchSegmentList() {
    this.dataStorageService.getSegmentList();
    //  this.getMenu();
  }

  getMenu() {
    // this.dataStorageService.onFetchMenuTest();
    this.getMenuList();
  }


  getMenuList() {
    this.dataStorageService.onFetchMenuTest();

    this.subscription = this.memberProfilerService.menuChanges
      .subscribe(
      (menuList: menuList) => {
        //this.demographicInformation= memberDemographicList;
        const menuLists: menuList = menuList;

        this.getMenuLogic(menuLists);

      }
      );
    const menuList: menuList = this.memberProfilerService.getMenuList();
    console.log(menuList);
    this.getMenuLogic(menuList);
    //this.demographicInformation=memberDemographicList;

  }


  // onFetchMemberList() {
  //   const data: searchMemberRequest = {
  //     searchKey: "jon",
  //     limit: 15,
  //     offset: 0
  //   };
  //   this.dataStorageService.onFetchMemberTest(data);
  // }


  goFullscreen = function () {
    // alert("Dj");
  }

  logout = function () {
    // alert("Dj");
  }

  searchPopUp = function () {
    // alert("Dj");
  }

  profile = function () {
    // alert("Dj");
  }

}

