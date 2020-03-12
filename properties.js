//properties.js
define([], 
    function(){ 
        return {
            type: "items", 
            component: "accordion", 
            items: { 
				// ###############################################
				// HEADER
                header: { 
                    type: "items",
					label: "Header",
					ref: "header",
					items: {
						textArea: {
							component: "textarea",
							defaultValue: "",
							rows: 3,
							maxlength: 50,
							order: 0,
							ref: "Option_Text",
							label: "Header",
							type: "string"
						 },
						label: {
							type: "string",
							ref: "footer1",
							label: "Footer",
							expression: "optional",
							defaultValue: ""
						},
						switch: {
							component: "switch",
							type: "boolean",
							defaultValue: true,
							options: [{
								value: true,
								label: "true"
							},{
								value: false,
								label: "false"}],
							ref: "headerSwitch",
							label: "Show"
						}
					}
                },
				// ###############################################
				// DROPDOWN
				dropdown: {
					type: "items",
					label: "DropDown",
					ref: "dropdown",
					items: {
						textArea: {
							component: "textarea",
							defaultValue: "",
							rows: 3,
							maxlength: 50,
							order: 0,
							parent: "header2",
							ref: "header2",
							label: "Header",
							type: "string"
						}
					}
				},
				// ###############################################
				// SETTINGS
                settings: { 
                    uses: "settings" 
                } 
        }
    };
});