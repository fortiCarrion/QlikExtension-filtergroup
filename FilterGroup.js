//var app;

//define(["jquery", "qlik", 'text!./template.html'], function($, qlik, template) {
define(["qlik", 'text!./template.html'], function( qlik, template) {
	'use strict';
	debugger;
	//app = qlik.currApp(this);
	//app.clearAll();
    
	return {
		
		//property panel
		definition: {
			type: "items",
			//component: "expandable-items",
			component: "accordion",
			items: {
				// #####################################
				// properties - header
				header: {
					type: "items",
					label: "Header",
					//ref: "qListObjectDef",
					items: {
						textArea1: {
							component: "textarea",
							defaultValue: "",
							rows: 3,
							maxlength: 50,
							ref: "header1",
							label: "Header",
							type: "string",
							expression: "optional"
						 },
						 label1: {
							type: "string",
							ref: "footer1",
							label: "Footer",
							expression: "optional",
							defaultValue: ""
						},
						switch1: {
							component: "switch",
							type: "boolean",
							defaultValue: true,
							options: [{
								value: true,
								label: "true"
							},{
								value: false,
								label: "false"}],
							ref: "switch1",
							label: "Show"
						}
					}
				},
				// #################################
				// properties - dropdown
				dropdown:{
					type: "items",
					label: "DropDown",
					items:{
						variable1: {
							type: "string",
							ref: "variable1",
							label: "Variable Name",
							expression: "optional",
							defaultValue: ""
						},
						field1: {
							type: "string",
							ref: "field1",
							label: "Dropdown Field",
							expression: "optional",
							defaultValue: ""
						},
						label2: {
							type: "string",
							ref: "label2",
							label: "Label",
							expression: "optional",
							defaultValue: ""
						},
						includeFrequency: { 
                            label: "Include Frequency",
                            ref: "includeFrequency",
                            type: "boolean", 
                            defaultValue: false
                        },
                        ReadOnly: { 
                            label: "Read Only",
                            ref: "readonly",
                            type: "boolean", 
                            defaultValue: false
                        },
						switch2: {
							component: "switch",
							type: "boolean",
							defaultValue: true,
							options: [{
								value: true,
								label: "true"
							},{
								value: false,
								label: "false"}],
							ref: "switch2",
							label: "Show"
						}
					}	
				},
			    settings: {
					uses: "settings"
				},  
                customProperties : {
                	component: "expandable-items",
				  //component: "accordion",
				  label: "Custom Properties",
				  type : "items",
                  items: { 			 
					VariableNamee : {
						ref: "Option_Text",
						label: "Label Text",
						type: "string",
						//expression: "optional",
						defaultValue: "Btn 1,Btn 2,Btn 3,Btn 4,Btn 5"							
					},
					VariableName:{
						ref: "output_variable_name",
						label: "Variable",
						desc:"fgsdghs",
						type: "string",								
						expression: "optional",
						defaultValue: ""
					},
					State:{
							ref: "selection_state",
							label:"Current Selection",
							component: "dropdown",
							show: false,
							defaultValue: "none",
							options: [
								{
									value: "none",
									label: "None"
								},
								{
									value: "1",
									label: "Select 1st Button"
								},{
									value: "2",
									label: "Select 2nd Button"
								}]
					}
                  }
                }
				
			}
		}

		,
		snapshot: {
			canTakeSnapshot: true
		},
		paint: function(){},
		resize: function(){},
		template: template,
		controller: ['$scope', '$element', function (scope, $element) {
			
			// open apps -- inserted here --
			var app = qlik.currApp();
			//console.log(scope.component);
       		//console.log(app.variable);
			//Get list of values
			var obj = {
					"qDef": {
						"qFieldDefs": [
							scope.layout.field1
						]
					},
					"qFrequencyMode": scope.layout.includeFrequency ? "EQ_NX_FREQUENCY_VALUE" : "NX_FREQUENCY_NONE",
					"qInitialDataFetch": [{
							qTop : 0,
							qLeft : 0,
							qHeight : 10000,
							qWidth : 1
					}]
				};
					
			function processData() {
			// scope -- insert here --
				//header
				scope.header1 = scope.layout.header1;
				//scope.header1 = scope.layout.header1;
				scope.footer1 = scope.layout.footer1;
				scope.switch1 = scope.layout.switch1;
				//dropdown
				scope.variable1 = scope.layout.variable1;
				scope.label2 = scope.layout.label2;
				scope.switch2 = scope.layout.switch2;
				//scope.selectedValue = 'Ingles';
				
				
				// debug -- insert here -- 

				//console.log(scope.qHyperCube);
				//console.log('app');
			}
			
			processData();
			
			scope.component.model.Validated.bind(function () {
            	processData();
        	});
			
			//Create the listbox as a session object which will persist over the sesion and then be deleted.
          app.createList(obj, function(listobject) {
				//console.log(".");
                //console.log(listobject)
                //Define dimension title
                //scope.dimension_title = listobject.qListObject.qDimensionInfo.qFallbackTitle

                //Define Dimension value
				//scope.dimension_values  
				var dimension_values = listobject.qListObject.qDataPages[0].qMatrix.map(function(row){
                    return {
                        title: row[0].qText,
                        element_id: row[0].qElemNumber,
                        selection_state: row[0].qState
                    }
                })
				//console.log('arr');
				var selectedValue = "";
				for(var i in dimension_values){
					if(dimension_values[i].selection_state == 'S'){
						selectedValue = dimension_values[i].title;
					} 
				}
				scope.selectedValue = selectedValue;
				scope.dimension_values = dimension_values;
				
				scope.$watch('selectedValue', function() {
                    if(typeof scope.selectedValue !== "undefined" && !scope.layout.readonly){
                        app.field(scope.layout.field1).select([parseInt(scope.selectedValue,0)])
                    }
                });  
				
            })	
			scope.$watch('selectedValue', function() {
                    if(typeof scope.selectedValue !== "undefined"){
                        app.field(scope.layout.field1).select([parseInt(scope.selectedValue,0)])
                    }
                });     
        }]
		// <-----------------------------
		
		// <-----------------------------
	};
} );
/*
define(['qlik', './properties', 'text!./template.html'],
    function(qlik, properties, template) { 
    return {
		snapshot: {
            canTakeSnapshot: false
        },
        definition: properties,
        paint: function(){},
        resize: function(){},
        template: template,
        controller: ['$scope', '$element', function (scope, $element) {
			var app = qlik.currApp();
            $element.html(template);
			
			var test = scope.Option_Text;
			
			console.log(test);
			console.log(app);
			
        }]
    };
});
*/