import { Component, OnInit, PipeTransform, Pipe, Input, ViewChild } from '@angular/core';
import { SegmentBuilderService } from 'src/app/gm/segmentationbuilder/segmentationbuilder.service';
import { Subscription } from 'rxjs/Subscription';
import { first, map } from 'rxjs/operators';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GmService } from 'src/app/gm/gm.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { segmentMetaDataList } from 'src/app/gm/segmentationbuilder/segmentationbuilder.model';
import { searchMemberRequest } from 'src/app/gm/gm.model';
@Component({
    selector: 'app-segmentationbuilder-create',
    templateUrl: './segmentationbuilder-create.component.html',
    styleUrls: ['./segmentationbuilder-create.component.scss']
})

export class SegmentationbuilderCreateComponent implements OnInit {
    items = [];
    answer = 'dj';
    segmentName = "Test segment";
    noneSelected = true;
    editMode = false;
    memberId = 1;
    editSegmentId=1;
    data: segmentMetaDataList;
    restItemsUrl = 'GRM/segment/segmentInfo/id/' + this.memberId;
    restSaveItemsUrl = 'GRM/segment/createorUpdate';
    restExportItemsUrl = '/GRM/segment/export';
    dropdownList = [];
    dropdownSettings = {};
    staticData = [{
        "key": "birthDay",
        "titleMap": [{
            "value": "01",
            "name": "January"
        }, {
            "value": "02",
            "name": "February"
        }, {
            "value": "03",
            "name": "March"
        }, {
            "value": "04",
            "name": "April"
        }, {
            "value": "05",
            "name": "May"
        }, {
            "value": "06",
            "name": "June"
        }, {
            "value": "07",
            "name": "July"
        }, {
            "value": "08",
            "name": "August"
        }, {
            "value": "09",
            "name": "September"
        }, {
            "value": "10",
            "name": "October"
        }, {
            "value": "11",
            "name": "November"
        }, {
            "value": "12",
            "name": "December"
        }]
    }, {
        "key": "persona",
        "titleMap": [{
            "value": "Solo Selfies",
            "name": "Solo Selfies"
        }, {
            "value": "Young Pairs",
            "name": "Young Pairs"
        }, {
            "value": "Transition To Min",
            "name": "Transition To Min"
        }, {
            "value": "Bursting Bunch",
            "name": "Bursting Bunch"
        }, {
            "value": "Middle Aged Solos",
            "name": "Middle Aged Solos"
        }, {
            "value": "Near Empty Nest",
            "name": "Near Empty Nest"
        }, {
            "value": "Bucket List",
            "name": "Bucket List"
        }]
    }, {
        "key": "ethnicity",
        "titleMap": [{
            "value": "African American",
            "name": "African American"
        }, {
            "value": "Caucasian",
            "name": "Caucasian"
        }, {
            "value": "Hispanic",
            "name": "Hispanic"
        }, {
            "value": "Middle Eastern",
            "name": "Middle Eastern"
        }, {
            "value": "Native American",
            "name": "Native American"
        }]
    }, {
        "key": "householdSize",
        "titleMap": [{
            "value": "1",
            "name": "1"
        }, {
            "value": "2",
            "name": "2"
        }, {
            "value": "3",
            "name": "3"
        }, {
            "value": "4",
            "name": "4"
        }, {
            "value": "5",
            "name": "5"
        }, {
            "value": "6",
            "name": "6"
        }, {
            "value": "6+",
            "name": "6+"
        }]
    }, {
        "key": "favoriteLocation",
        "titleMap": [{
            "value": "023",
            "name": "Boston"
        }, {
            "value": "134",
            "name": "Washington"
        }]
    }, {
        "key": "inputSource",
        "titleMap": [{
            "value": "w",
            "name": "web"
        }, {
            "value": "k",
            "name": "FISH"
        }]
    }, {
        "key": "click",
        "titleMap": [{
            "value": "1231435134",
            "name": "Pancake promotion"
        }, {
            "value": "4192381294",
            "name": "Happy Birthday!"
        }]
    }, {
        "key": "age",
        "titleMap": [{
            "value": "18 to 24 yo",
            "name": "18 to 24 yo"
        }, {
            "value": "25 to 34 yo",
            "name": "25 to 34 yo"
        }, {
            "value": "35 to 44 yo",
            "name": "35 to 44 yo"
        }, {
            "value": "45 to 54 yo",
            "name": "45 to 54 yo"
        }, {
            "value": "55 to 64 yo",
            "name": "55 to 64 yo"
        }, {
            "value": "65 to 74 yo",
            "name": "65 to 74 yo"
        }, {
            "value": "75+ yo",
            "name": "75+ yo"
        }]
    }, {
        "key": "open",
        "titleMap": [{
            "value": "1231435134",
            "name": "Pancake promotion"
        }, {
            "value": "4192381294",
            "name": "Happy Birthday!"
        }]
    }, {
        "key": "targettted",
        "titleMap": [{
            "value": "1231435134",
            "name": "Pancake promotion"
        }, {
            "value": "4192381294",
            "name": "Happy Birthday!"
        }]
    }];

    targetingChannels = [{
        "key" : "email",
        "value" : "Targeting Chanel Email"
    },{
      "key" : "sms",
      "value" : "Targeting Chanel SMS"
    }];
  
    @ViewChild('f') segmentForm = NgForm;
    targetingChannel: string = "email";

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
                "required": true,
                "disable" : true,
                "section" : "registration-section"
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
                "required": true 
            }, {
                "key": "value",
                "type": "textbox",
                "required": true ,
                "value" : ""
            }],
    
    "inputSource" : [{
        "key": "attribute",
        "value": "Input Source",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "registration-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
        "disable" : true
    }, {
        "key": "value",
        "type": "multiselect",
        "required": true 
    }],
    "mobilePhone" : [
        {
            "key": "attribute",
            "value": "Mobile Phone",
            "type": "textbox",
            "required": true ,
            "disable" : true,
            "section" : "registration-section"
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
            "required": true 
        }, {
            "key": "value",
            "type": "textbox",
            "required": true 
        }],
    "joinDate" :  [{
        "key": "attribute",
        "value": "Join Date",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "registration-section"
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
        "required": true 
    }, {
        "key": "startValue",
        "type": "datefield",
        "required": true ,
        startValue : true
    }, {
        "key": "endValue",
        "type": "datefield",
        "required": true ,
        startValue : false
    }],
    "birthDay" : [{
        "key": "attribute",
        "value": "Birthday",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "registration-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "In",
        "required": true ,
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
        "required": true 
    }],
    "age" :  [{
        "key": "attribute",
        "value": "Age Range",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "maritalStatus" : [{
        "key": "attribute",
        "value": "Marital Status",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
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
        "required": true 
    }],
    "presenceOfKids" : [
        {
            "key": "value",
            "type": "dropdown",
            "options": [
                {
                    "key": "Have",
                    "value": true
                }, {
                    "value": false,
                    "key": "Doesn't have"
                }
            ],
            "required": true ,
            "section" : "demography-section"
        },
        {
            "key": "attribute",
            "value": "Kids",
            "type": "textbox",
            "required": true ,
            "disable" : true
        },
        {
            "key": "operator",
            "value": "Is",
            "type": "textbox",
            "required": false ,
            "hide" : true
        }

    ],
    "householdSize" : [{
        "key": "attribute",
        "value": "Household Size",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "ethnicity" : [{
        "key": "attribute",
        "value": "Ethnicity",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "gender" : [{
        "key": "attribute",
        "value": "Gender",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "persona" : [{
        "key": "attribute",
        "value": "Persona",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "liveIn" :  [{
        "key": "attribute",
        "value": "liveIn",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "demography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
        "disable" : true
    }, {
        "key": "value",
        "type": "textbox",
        "required": true 
    }],
    "favoriteLocation" : [{
        "key": "attribute",
        "value": "Favorite Location",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "geography-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "Is",
        "required": true ,
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
        "required": true 
    }],
    "targettted" : [{
        "key": "attribute",
        "value": "Was targeted",
        "type": "textbox",
        "required": true ,
        "disable" : true,
        "section" : "campaign-section"
    }, {
        "key": "operator",
        "type": "textbox",
        "value": "In",
        "required": true ,
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
        "required": true 
    }],
    "open" : [
        {
            "key": "attribute",
            "value": "Open",
            "type": "textbox",
            "required": true ,
            "disable" : true,
            "section" : "campaign-section"
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
            "required": true 
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
            "required": true 
        }],
    "click" : [
        {
            "key": "attribute",
            "value": "Click",
            "type": "textbox",
            "required": true ,
            "disable" : true,
            "section" : "campaign-section"
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
            "required": true 
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
            "required": true 
        }],
    "promotion" : [
        {
            "key": "attribute",
            "value": "Promotion",
            "type": "textbox",
            "required": true ,
            "disable" : true,
            "section" : "promotion-section"
        }, {
            "key": "operator",
            "type": "dropdown",
            "options": [
                {
                    "key": "Has",
                    "value": "Has"
                }, {
                    "key": "Does Not Have",
                    "value": "Does Not Have"
                }
            ],
            "required": true 
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
            "required": true 
        }],

    "redeem" : [
        {
            "key": "attribute",
            "value": "Redeem",
            "type": "textbox",
            "required": true ,
            "disable" : true,
            "section" : "promotion-section"
        }, {
            "key": "operator",
            "type": "dropdown",
            "options": [
                {
                    "key": "Has",
                    "value": "Has"
                }, {
                    "key": "Does Not Have",
                    "value": "Does Not Have"
                }
            ],
            "required": true 
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
            "required": true 
        }]

} ;

segmentNavPills = [{
    "Profile": [{
        "Registration": [
            {
                "key": "email",
                "value": "Email"
            },
             {
                "key": "inputSource",
                "value": "Input Source"
                    
            },
             {
                "key": "mobilePhone",
                "value": "Phone Number"
                    

            },
             {
                "key": "joinDate",
                "value": "Join Date"
                    
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
        },{
            "key": "gender",
            "value": "Gender"                
        },{
            "key": "persona",
            "value": "Persona"                
        },{
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
            }],
         "Promotion" :[
            {
                "key" : "promotion",
                "value" : "[Has, Does Not Have] a promotion..."                    
            },
            {
                "key" : "redeem",
                "value" : "[Did, Did Not] redeem..."
            }
         ] 
    }]
}];

segmentData = {   
  "segments":[{
      "email":{
          "attribute": "Email",
          "operator": "Contains",
          "value": "Tapaswini"
      },
      "inputSource":{
          "attribute": "Input Source",
          "operator": "Is",
         "value" : [{value: "w", name: "web"}, {value: "k", name: "FISH"}]
         
      },
      "joinDate" : {
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
        this.segmentName = "Test segment"; //this.data.segmentName;

        for(let i=0, dataLen = this.staticData.length;i<dataLen;i++){
            this.getItemTitleMap(this.staticData[i]);
        }
        
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'value',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true
          };
    }

    getItemTitleMap = function(response){

		if(this.segmentItems[response.key]){
			this.segmentItems[response.key].filter(obj => {
					if(obj.type === "multiselect"){
						obj.options =response.titleMap;
					}
			});
		}
	}


    retriveUi()
    {
        let keys = Object.keys(this.segmentData.segments[0]);
        if(keys){
            this.noneSelected = false;
        }
        var j:any;
        var k:any;
        for(j in keys) {
            let key = keys[j];
            if( key == "targetingChanel"){
                this.targetingChannel = this.segmentData.segments[0]["targetingChanel"]["value"];
            }
            else{
                var items = this.segmentItems[key];
                for(k in items) {
                    var keyObj = items[k];
                    var modelValue = this.segmentData.segments[0][key][keyObj.key];
                    items[k].value = modelValue;
                }
                this.items[key] = items;
            }
        }
    }


    changeMode = function(){
        this.editMode = !this.editMode;
      }

    buttonclick = function (data) {
        this.noneSelected = false;
        var items = this.segmentItems[data.key];
        this.items[data.key] = items;
    }

    
    exportSegment(){
        var data = {};
        var segmentModel = [];
        segmentModel.push(this.segmentForm["value"]);
        data["model"] ={ "segments" :  segmentModel};
      }

    segmentClose = function (key) {
        delete this.items[key];
    }

    onSubmit() {

        console.log(this.segmentForm);
    }

    checkStatusValid(){

        var keys = Object.keys(this.items);
        var j:any;
        var k:any;
        var formData = this.segmentForm["form"].getRawValue();
        for(j in keys) {
            let key = keys[j];
            var items = this.items[key];
            for(k in items) {
                var keyData = formData[key];
                var fieldData = items[k];
                if( fieldData.required == true && ( keyData[fieldData.key] === undefined || 
                  (typeof(keyData[fieldData.key]) == "string" && keyData[fieldData.key].trim() == "") ||
                  (typeof(keyData[fieldData.key]) == "object" && keyData[fieldData.key].length == 0 )
              ) ){
                  return false;
                }
                
            }
           
        }
      return true;
    }

    saveSegment (){
        if(!this.segmentName || this.segmentName == ""){
            alert('Please enter the segment name');
            return;
        }

        if(this.items && Object.keys(this.items).length ==0){
            alert('Please add atleast one segment');
            return;
        }
        var status = this.checkStatusValid();
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
            segmentModel.push(this.segmentForm["form"].getRawValue());
            segmentModel[0]["targetingChanel"] = {"value" : this.targetingChannel};
            data["model"] ={ "segments" :  segmentModel};
            data["SegmentName"] = this.segmentName;
            data["SegmentId"] = this.editSegmentId;
           // this.onStoreSegment(data);
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
