import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-segmentationbuilder-create',
  templateUrl: './segmentationbuilder-create.component.html',
  styleUrls: ['./segmentationbuilder-create.component.scss']
})

export class SegmentationbuilderCreateComponent implements OnInit {

  transform(value:any, args:string[]) : any {
    debugger;
    return // transform map to a list of keys and values
  }

  items = [];
  
  segmentName = "Test segment";
  noneSelected = true;
  editMode = false;

  registration = [{
      "key" : "email",
      "value" : "Email",                    
      "required" : true,
              
          "items" : [{
              "key" : "attribute",
              "default" : "Email",
              "type" : "textfield",
              "display" : true
          },{
              "key" : "operator",
              "type" : "dropdown",
              "options" : [
                  {
                      "key" : "Is",
                      "value" : "Is"
                  },{
                       "key" : "Contains",
                      "value" : "Contains"
                  },{
                       "key" : "Starts With",
                      "value" : "Starts With"
                  },{
                       "key" : "Ends With",
                      "value" : "Ends With"
                  }
              ],
              "display" : true
          },{
              "key" : "value",
              "type" : "textfield",
              "display" : true
          }]
  },/*{
    "key" : "email",
    "value" :"Email"
  },*/
  {
    "key" : "inputSource",
    "value" :"Input Source"
  },{
    "key" : "mobilePhone",
    "value" :"Phone Number"
  },{
    "key" : "joinDate",
    "value" :"Join Date"
  },{
    "key" : "birthDay",
    "value" : "Birthday"
  }
];

  segmentNavPills = [{
		"Profile": [{
			"Registration": [/*{
					"key" : "email",
					"value" : "Email",                    
                    "required" : true,
                    
                "options" : [{
                    "key" : "attribute",
                    "default" : "Email",
                    "type" : "textfield",
                    "display" : true
                },{
                    "key" : "operator",
                    "type" : "dropdown",
                    "options" : [
                        {
                            "key" : "Is",
                            "value" : "Is"
                        },{
                             "key" : "Contains",
                            "value" : "Contains"
                        },{
                             "key" : "Starts With",
                            "value" : "Starts With"
                        },{
                             "key" : "Ends With",
                            "value" : "Ends With"
                        }
                    ],
                    "display" : true
                },{
                    "key" : "value",
                    "type" : "textfield",
                    "display" : true
                }]
        },*/
        {
					"key" : "email",
					"value" :"Email"
				},
        {
					"key" : "inputSource",
					"value" :"Input Source"
				},{
					"key" : "mobilePhone",
					"value" :"Phone Number"
				},{
					"key" : "joinDate",
					"value" :"Join Date"
				},{
					"key" : "birthDay",
					"value" : "Birthday"
				}
			]
		}, {
			"Demography": [{
				"key" : "age",
				"value" : "Age Range"
			},{
				"key" : "maritalStatus",
				"value" : "Marital Status"
			},{
				"key" : "presenceOfKids",
				"value" : "[Has, Has No] Kids"
			},{
				"key" : "householdSize",
				"value" : "Household Size"
			},{
				"key" : "ethnicity",
				"value" : "Ethnicity"
			},{
				"key" : "gender",
				"value" : "Gender"
			},{
				"key" : "persona",
				"value" : "Persona"
			},{
				"key" : "liveIn",
				"value" : "Live In"
			}]
		},{
			"Geography": [{
				"key" : "favoriteLocation",
				"value" : "Favorite Location"
			}]
		}]
	},
	{
		"Actions": [{
			"Campaign": [{
				"key" : "targettted",
				"value" : "Was targeted in..."
			},{
				"key" : "open",
				"value" : "[Did, Did Not] open..."
			},{
				"key" : "click",
				"value" : "[Did, Did Not] click..."
			}]
		}]
  }];
  
  constructor() { }

  changeMode = function(){
    this.editMode = !this.editMode;
  }

  buttonclick = function( data ){
    this.noneSelected = false;
    debugger;
  }
  exportSegment = function(){

  }

  saveSegment = function(){

  }

  ngOnInit() {
  }

}
