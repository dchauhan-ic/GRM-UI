import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-segmentationbuilder-create',
  templateUrl: './segmentationbuilder-create.component.html',
  styleUrls: ['./segmentationbuilder-create.component.scss']
})

export class SegmentationbuilderCreateComponent implements OnInit {
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
              "type" : "textbox",
              "display" : true,
              "required": true
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
              "type" : "textbox",
              "display" : true
          }]
  },
  {
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
			"Registration": [{
                "key" : "email",
                "value" : "Email",                    
                "required" : true,
                        
                    "items" : [{
                        "key" : "attribute",
                        "default" : "Email",
                        "type" : "textbox",
                        "display" : true,
                        "required": true
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
                        "type" : "textbox",
                        "display" : true
                    }]},
                    {
                        "key" : "inputSource",
                        "value" :"Input Source",
                        "items" : [{
                            "key" : "attribute",
                            "default" : "Input Source",
                            "type" : "textbox",
                            "display" : true,
                            "required": true
                        },{
                            "key" : "operator",
                            "type" : "textbox",
                            "default" : "Is",
                            "display" : true
                        },{
                            "key" : "value",
                            "type" : "dropdown",
                            "options" : [
                                {
                                    "key" : "Web",
                                    "value" : "Web"
                                },{
                                     "key" : "Fish",
                                    "value" : "Fish"
                                }
                            ],
                            "display" : true
                        }]
                      },
                {
					"key" : "mobilePhone",
					"value" :"Phone Number"
				},{
                    "key" : "joinDate",
                    "value" : "Join Date",                    
                    "required" : true,
                            
                        "items" : [{
                            "key" : "attribute",
                            "default" : "Join Date",
                            "type" : "textbox",
                            "display" : true,
                            "required": true
                        },{
                            "key" : "operator",
                            "type" : "dropdown",
                            "options" : [
                                {
                                    "key" : "Is",
                                    "value" : "Is"
                                },{
                                     "key" : "Before",
                                    "value" : "Before"
                                },{
                                     "key" : "After",
                                    "value" : "After"
                                },{
                                     "key" : "Between",
                                    "value" : "Between"
                                }
                            ],
                            "display" : true
                        },{
                            "key" : "startValue",
                            "type" : "datefield",
                            "display" : true
                        },{
                            "key" : "endValue",
                            "type" : "datefield",
                            "display" : true
                        }]
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
    this.items.push(data.items);
    }
  exportSegment = function(){

  }

  saveSegment = function(){
debugger;
  }
  onSubmit = function( data ){
      alert('clcik');
  }

  ngOnInit() {
  }

}
