import { Component, OnInit, PipeTransform, Pipe, Input, ViewChild } from '@angular/core';
import { SegmentBuilderService } from 'src/app/gm/segmentationbuilder/segmentationbuilder.service';
import { Subscription } from 'rxjs/Subscription';
import { first, map } from 'rxjs/operators'
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GmService } from 'src/app/gm/gm.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { segmentMetaDataList } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';
import { searchMemberRequest } from 'src/app/gm/gm.model';

@Component({
    selector: 'app-segmentationbuilder-edit',
    templateUrl: './segmentationbuilder-edit.component.html',
    styleUrls: ['./segmentationbuilder-edit.component.scss']
})
export class SegmentationbuilderEditComponent implements OnInit {
    items = [];
    answer = 'dj';
    segmentName = "Test segment";
    noneSelected = true;
    editMode = false;
    memberId = 1;
    editSegmentId;
    data: segmentMetaDataList;
    restItemsUrl = 'GRM/segment/segmentInfo/id/' + this.memberId;
    restSaveItemsUrl = 'GRM/segment/createorUpdate';
    restExportItemsUrl = '/GRM/segment/export';
    dropdownList = [];
    dropdownSettings = {};

    @ViewChild('f') segmentForm = NgForm;

    model = {
        "segments": [{
            "inputSource":
                { "attribute": "Input Source", "operator": "Is", "value": ["w"] }
        }]
    };

    segmentItems = 
    {
        "email" : [
          {
              "key": "attribute",
              "value": "Email",
              "type": "textbox",
              "display": true,
              "required": true,
              "disable" : true
          }, {
              "key": "operator",
              "type": "dropdown",
              "options": [
                  {
                      "key": "Is",
                      "value": "Is"
                  }, {
                      "key": "Contains",
                      "value": "Contains"
                  }, {
                      "key": "Starts With",
                      "value": "Starts With"
                  }, {
                      "key": "Ends With",
                      "value": "Ends With"
                  }
              ],
              "display": true
          }, {
              "key": "value",
              "type": "textbox",
              "display": true,
              "value" : ""
          }],
  
  "inputSource" : [{
      "key": "attribute",
      "value": "Input Source",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "Web",
              "value": "Web"
          }, {
              "key": "Fish",
              "value": "Fish"
          }
      ],
      "display": true
  }],
  "mobilePhone" : [
      {
          "key": "attribute",
          "value": "Mobile Phone",
          "type": "textbox",
          "display": true,
          "required": true,
          "disable" : true
      }, {
          "key": "operator",
          "type": "dropdown",
          "options": [
              {
                  "key": "Is",
                  "value": "Is"
              }, {
                  "key": "Contains",
                  "value": "Contains"
              }, {
                  "key": "Starts With",
                  "value": "Starts With"
              }, {
                  "key": "Ends With",
                  "value": "Ends With"
              }
          ],
          "display": true
      }, {
          "key": "value",
          "type": "textbox",
          "display": true
      }],
  "joinDate" :  [{
      "key": "attribute",
      "value": "Join Date",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "dropdown",
      "options": [
          {
              "key": "Is",
              "value": "Is"
          }, {
              "key": "Before",
              "value": "Before"
          }, {
              "key": "After",
              "value": "After"
          }, {
              "key": "Between",
              "value": "Between"
          }
      ],
      "display": true
  }, {
      "key": "startValue",
      "type": "datefield",
      "display": true,
      startValue : true
  }, {
      "key": "endValue",
      "type": "datefield",
      "display": true,
      startValue : false
  }],
  "birthDay" : [{
      "key": "attribute",
      "value": "Birthday",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "In",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "January",
              "value": "January"
          }, {
              "key": "February",
              "value": "February"
          }
          , {
              "key": "March",
              "value": "March"
          }
          , {
              "key": "April",
              "value": "April"
          }
          , {
              "key": "May",
              "value": "May"
          }
          , {
              "key": "June",
              "value": "June"
          }
          , {
              "key": "July",
              "value": "July"
          }
          , {
              "key": "August",
              "value": "August"
          }
          , {
              "key": "September",
              "value": "September"
          }
          , {
              "key": "October",
              "value": "October"
          }, {
              "key": "November",
              "value": "November"
          }, {
              "key": "December",
              "value": "December"
          }
      ],
      "display": true
  }],
  "age" :  [{
      "key": "attribute",
      "value": "Age Range",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "18 to 24 yo",
              "value": "18 to 24 yo"
          }, {
              "key": "25 to 34 yo",
              "value": "25 to 34 yo"
          }
          , {
              "key": "35 to 44 yo",
              "value": "35 to 44 yo"
          }
          , {
              "key": "45 to 54 yo",
              "value": "45 to 54 yo"
          }
          , {
              "key": "55 to 64 yo",
              "value": "55 to 64 yo"
          }
          , {
              "key": "65 to 74 yo",
              "value": "65 to 74 yo"
          }
          , {
              "key": "75+ yo",
              "value": "75+ yo"
          }
      ],
      "display": true
  }],
  "maritalStatus" : [{
      "key": "attribute",
      "value": "Marital Status",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "dropdown",
      "options": [
          {
              "key": "Single",
              "value": "Single"
          }, {
              "key": "Married",
              "value": "Married"
          }
      ],
      "display": true
  }],
  "presenceOfKids" : [
      {
          "key": "operator",
          "type": "dropdown",
          "options": [
              {
                  "key": "Have",
                  "value": "Have"
              }, {
                  "key": "Doesn't have",
                  "value": "Doesn't have"
              }
          ],
          "display": true
      },
      {
          "key": "attribute",
          "value": "Kids",
          "type": "textbox",
          "display": true,
          "required": true,
          "disable" : true
      }

  ],
  "householdSize" : [{
      "key": "attribute",
      "value": "Household Size",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "1",
              "value": "1"
          }, {
              "key": "2",
              "value": "2"
          }
          , {
              "key": "3",
              "value": "3"
          }
          , {
              "key": "4",
              "value": "4"
          }
          , {
              "key": "5",
              "value": "5"
          }
          , {
              "key": "6",
              "value": "6"
          }
          , {
              "key": "6+",
              "value": "6+"
          }

      ],
      "display": true
  }],
  "ethnicity" : [{
      "key": "attribute",
      "value": "Ethnicity",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "African American",
              "value": "African American"
          }, {
              "key": "Caucasian",
              "value": "Caucasian"
          }
          , {
              "key": "Hispanic",
              "value": "Hispanic"
          }
          , {
              "key": "Middle Eastern",
              "value": "Middle Eastern"
          }
          , {
              "key": "Native American",
              "value": "Native American"
          }

      ],
      "display": true
  }],
  "gender" : [{
      "key": "attribute",
      "value": "Gender",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "dropdown",
      "options": [
          {
              "key": "Male",
              "value": "Male"
          }, {
              "key": "Female",
              "value": "Female"
          }
      ],
      "display": true
  }],
  "persona" : [{
      "key": "attribute",
      "value": "Persona",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "Solo Selfies",
              "value": "Solo Selfies"
          }, {
              "key": "Young Pairs",
              "value": "Young Pairs"
          }
          , {
              "key": "Transtion To Min",
              "value": "Transtion To Min"
          }
          , {
              "key": "Bursting Bunch",
              "value": "Bursting Bunch"
          }
          , {
              "key": "Middle Aged Solos",
              "value": "Middle Aged Solos"
          }
          , {
              "key": "Near Empty Nest",
              "value": "Near Empty Nest"
          }
          , {
              "key": "Bucket List",
              "value": "Bucket List"
          }
      ],
      "display": true
  }],
  "liveIn" :  [{
      "key": "attribute",
      "value": "liveIn",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "textbox",
      "display": true
  }],
  "favoriteLocation" : [{
      "key": "attribute",
      "value": "Favorite Location",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "Is",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "Boston",
              "value": "Boston"
          }, {
              "key": "Washington",
              "value": "Washington"
          }
      ],
      "display": true
  }],
  "targettted" : [{
      "key": "attribute",
      "value": "Was targeted",
      "type": "textbox",
      "display": true,
      "required": true,
      "disable" : true
  }, {
      "key": "operator",
      "type": "textbox",
      "value": "In",
      "display": true,
      "disable" : true
  }, {
      "key": "value",
      "type": "multiselect",
      "options": [
          {
              "key": "Pancake Promotion",
              "value": "Pancake Promotion"
          }, {
              "key": "Happy Birthday!",
              "value": "Happy Birthday!"
          }
      ],
      "display": true
  }],
  "open" : [
      {
          "key": "attribute",
          "value": "Open",
          "type": "textbox",
          "display": true,
          "required": true,
          "disable" : true
      }, {
          "key": "operator",
          "type": "dropdown",
          "options": [
              {
                  "key": "In",
                  "value": "In"
              }, {
                  "key": "Not in",
                  "value": "Not in"
              }
          ],
          "display": true
      }, {
          "key": "value",
          "type": "multiselect",
          "options": [
              {
                  "key": "Pancake Promotion",
                  "value": "Pancake Promotion"
              }, {
                  "key": "Happy Birthday!",
                  "value": "Happy Birthday!"
              }
          ],
          "display": true
      }],
  "click" : [
      {
          "key": "attribute",
          "value": "Click",
          "type": "textbox",
          "display": true,
          "required": true,
          "disable" : true
      }, {
          "key": "operator",
          "type": "dropdown",
          "options": [
              {
                  "key": "In",
                  "value": "In"
              }, {
                  "key": "Not in",
                  "value": "Not in"
              }
          ],
          "display": true
      }, {
          "key": "value",
          "type": "multiselect",
          "options": [
              {
                  "key": "Pancake Promotion",
                  "value": "Pancake Promotion"
              }, {
                  "key": "Happy Birthday!",
                  "value": "Happy Birthday!"
              }
          ],
          "display": true
      }]

} ;

 segmentNavPills = [{
  "Profile": [{
      "Registration": [
          {
              "key": "email",
              "value": "Email",
              "required": true
          },
           {
              "key": "inputSource",
              "value": "Input Source"
          },
           {
              "key": "mobilePhone",
              "value": "Phone Number",
              "required": true

          },
           {
              "key": "joinDate",
              "value": "Join Date",
              "required": true
          },
          {
              "key": "birthDay",
              "value": "Birthday"
          }
      ]
  }, {
      "Demography": [{
          "key": "age",
          "value": "Age Range"
      },

      {
          "key": "maritalStatus",
          "value": "Marital Status"
      }, {
          "key": "presenceOfKids",
          "value": "[Has, Has No] Kids"
      }, {
          "key": "householdSize",
          "value": "Household Size" 
      }, {
          "key": "ethnicity",
          "value": "Ethnicity"
      },

      {
          "key": "gender",
          "value": "Gender"
      },

      {
          "key": "persona",
          "value": "Persona"
      },
      {
          "key": "liveIn",
          "value": "Live In"
      }]
  }, {
      "Geography": [{
          "key": "favoriteLocation",
          "value": "Favorite Location"
      }]
  }]
},
{
  "Actions": [{
      "Campaign": [
          {
              "key": "targettted",
              "value": "Was targeted in..."
          },
          {
              "key": "open",
              "value": "[Did, Did Not] open..."
          }, {
              "key": "click",
              "value": "[Did, Did Not] click..."
          }]
  }]
}];



    segmentData = {
        "segments": [{
            "email": {
                "attribute": "Email",
                "operator": "Contains",
                "value": "Tapaswini"
            },
            "inputSource": {
                "attribute": "Input Source",
                "operator": "Is",
                "value": ["web", "Fish"]
            },
            "joinDate": {
                "attribute": "Join Date",
                "endValue": "2018-11-01",
                "operator": "Between",
                "startValue": "2018-10-25"
            }
        }]
    };

    constructor(private segmentbuilderService: SegmentBuilderService, private http: HttpClient, private router: Router, private route:
        ActivatedRoute) {
    }


    ngOnInit() {

        this.data = this.segmentbuilderService.getSegment();
        this.segmentData = this.segmentbuilderService.getSegmentDetail();
        this.segmentName = this.data.segmentName;
        this.editSegmentId = +this.route.snapshot.params['id'];
        this.exportSegment();
        this.retriveUi();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'key',
            textField: 'value',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true
        };

    }


    retriveUi() {
        let keys = Object.keys(this.segmentData.segments[0]);
        if (keys) {
            this.noneSelected = false;
        }
        var j: any;
        var k: any;
        for (j in keys) {
            let key = keys[j];
            var items = this.segmentItems[key];
            for (k in items) {
                var keyObj = items[k];
                var modelValue = this.segmentData.segments[0][key][keyObj.key];
                items[k].value = modelValue;
            }
            this.items[key] = items;
        }
    }

    changeMode = function () {
        this.editMode = !this.editMode;
    }

    buttonclick = function (data) {
        this.noneSelected = false;
        var items = this.segmentItems[data.key];
        this.items[data.key] = items;
    }

    exportSegment = function () {
        var data = {};
        var segmentModel = [];
        segmentModel.push(this.segmentForm["value"]);
        data["model"] = { "segments": segmentModel };
    }

   segmentClose = function (key) {
        delete this.items[key];
    }


    onSubmit() {

        console.log(this.segmentForm);
        var data = {};
        data["model"] = this.segmentForm["value"];
        data["SegmentName"] = this.segmentName;
        data["SegmentId"] = this.editSegmentId;
        console.log(this.segmentForm);
    }


    saveSegment (){
        if(!this.segmentName || this.segmentName == ""){
            alert('Please enter the segment name');
            return;
        }
        var status = true;
        if(status === undefined){
            return;
        }
    
        if(!status){
            alert('Please enter all the fields');
            return;
        } 
        else{
           var data = {};
            var segmentModel = [];
            segmentModel.push(this.segmentForm["value"]);
            data["model"] ={ "segments" :  segmentModel};
            data["SegmentName"] = this.segmentName;
            data["SegmentId"] = this.editSegmentId;
            this.onStoreSegment(data);
        }
    }

    
    onStoreSegment(data): void {
        this.onSaveSegment(data)
            .subscribe(
            Results => {
                console.log(Results);
                alert('Segment Save Succesfully'+Results);
            }
            )
    }

    onSaveSegment(data) {
        return this.http
            .post(this.restSaveItemsUrl, data, )
            .pipe(map(Results => Results));

    }
    
    
   

    onFetchExportData() {

        this.getExportSegment(this.model);
    }

    getExportSegment(data: any): void {
        this.onFetchExportSegment(data)
            .subscribe(
            Results => {
                }
            )
    }

    onFetchExportSegment(data: searchMemberRequest) {
        let today: any = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '-' + dd + '-' + yyyy;

        var exportFileName = today + " " + "-" + "segmentation List";
        var params = ""
        return this.http
            .post(this.restExportItemsUrl, data, )
            .pipe(map(Results => Results));

    }

}
