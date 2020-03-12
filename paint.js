// JavaScript
paint: function ( $element, layout ) {
			var self = this, html = '<div>';
            debugger;		
					
			
			var nameList=layout.Option_Text;
			var names = nameList.split(',');
			var footer = layout.footer1;
			console.log(footer);
			
			var search_term="";
			for (var i=names.length-1; i>=0; i--) {
				if (names[i] === search_term) {
					names.splice(i, 1);
				}
			}
			
			//alert(nameList+"  "+names.length);
			
			var id1=layout.qInfo.qId+"-AeSMultiBtnid1";
			var id2=layout.qInfo.qId+"-AeSMultiBtnid2";
			var id3=layout.qInfo.qId+"-AeSMultiBtnid3";
			var id4=layout.qInfo.qId+"-AeSMultiBtnid4";
			var id5=layout.qInfo.qId+"-AeSMultiBtnid5";
			
			var id1_value="1";
			var id2_value="2";
			var id3_value="3";
			var id4_value="4";
			var id5_value="5";
			
			
			var id1_name=names[0];
			var id2_name=names[1];
			var id3_name=names[2];
			var id4_name=names[3];
			var id5_name=names[4];
			
			
			
		
								
			var style_mid="style='border:none;"+
								"color: white;"+
								"padding: 5px 10px;"+
								"text-align: center;"+
								"text-decoration: none;"+
								"display: inline-block;"+
								"font-size: 16px;"+	
								"border-radius: 0.15em;"+
								"cursor: pointer;'";
			
			
			
			html += "<span >";
				html += "<input type='button' "+style_mid+" value='"+id1_name+"' name='MyButtonAeS1'  id='"+id1+"'  />" ; 				
				html += "<input type='button' "+style_mid+" value='"+id2_name+"' name='MyButtonAeS2' id='"+id2+"'  />" ; 
				html += "<input type='button' "+style_mid+" value='"+id3_name+"' name='MyButtonAeS2' id='"+id3+"'  />" ; 
				html += "<input type='button' "+style_mid+" value='"+id4_name+"' name='MyButtonAeS2' id='"+id4+"'  />" ; 
				html += "<input type='button' "+style_mid+" value='"+id5_name+"' name='MyButtonAeS2' id='"+id5+"'  />" ; 							
			html +=	"</span>";
			
			
		html += '</div>';
			
		$element.html( html );			
		
		if(names.length==0)
		{
			document.getElementById(id1).style.visibility = 'hidden';
			document.getElementById(id2).style.visibility = 'hidden';
			document.getElementById(id3).style.visibility = 'hidden';
			document.getElementById(id4).style.visibility = 'hidden';
			document.getElementById(id5).style.visibility = 'hidden';
		}
		if(names.length==1)
		{
			document.getElementById(id2).style.visibility = 'hidden';
			document.getElementById(id3).style.visibility = 'hidden';
			document.getElementById(id4).style.visibility = 'hidden';
			document.getElementById(id5).style.visibility = 'hidden';
		}
		if(names.length==2)
		{
			document.getElementById(id3).style.visibility = 'hidden';
			document.getElementById(id4).style.visibility = 'hidden';
			document.getElementById(id5).style.visibility = 'hidden';
		}
		if(names.length==3)
		{
			document.getElementById(id4).style.visibility = 'hidden';
			document.getElementById(id5).style.visibility = 'hidden';
		}
		if(names.length==4)
		{
			document.getElementById(id5).style.visibility = 'hidden';
		}
		
		
		
		if (app.variable.getByName) 
		{
			app.variable.getByName(layout.output_variable_name).then(function () {
			
			}, function () {
			
			app.variable.create(layout.output_variable_name);
			
			app.variable.setContent(layout.output_variable_name,'0');
			});
		} 
		else {
			//create variable - ignore errors
			app.variable.create(layout.output_variable_name);
		}
		
		var color1="#01DF01",color2="gray";
		
				
		if(layout.selection_state=="1")
		{
			document.getElementById(id1).style.backgroundColor = color1;
			document.getElementById(id2).style.backgroundColor = color2;
			document.getElementById(id3).style.backgroundColor = color2;
			document.getElementById(id4).style.backgroundColor = color2;
			document.getElementById(id5).style.backgroundColor = color2;
			
			app.variable.setContent(layout.output_variable_name,id1_value);
		}
		if(layout.selection_state=="2")
		{
			document.getElementById(id1).style.backgroundColor = color2;
			document.getElementById(id2).style.backgroundColor = color1;
			document.getElementById(id3).style.backgroundColor = color2;
			document.getElementById(id4).style.backgroundColor = color2;
			document.getElementById(id5).style.backgroundColor = color2;
			
			app.variable.setContent(layout.output_variable_name,id2_value);
		}	
		if(layout.selection_state=="3")
		{
			document.getElementById(id1).style.backgroundColor = color2;
			document.getElementById(id2).style.backgroundColor = color2;
			document.getElementById(id3).style.backgroundColor = color1;
			document.getElementById(id4).style.backgroundColor = color2;
			document.getElementById(id5).style.backgroundColor = color2;
			
			app.variable.setContent(layout.output_variable_name,id3_value);
		}	
		if(layout.selection_state=="4")
		{
			document.getElementById(id1).style.backgroundColor = color2;
			document.getElementById(id2).style.backgroundColor = color2;
			document.getElementById(id3).style.backgroundColor = color2;
			document.getElementById(id4).style.backgroundColor = color1;
			document.getElementById(id5).style.backgroundColor = color2;
			
			app.variable.setContent(layout.output_variable_name,id4_value);
		}	
		if(layout.selection_state=="5")
		{
			document.getElementById(id1).style.backgroundColor = color2;
			document.getElementById(id2).style.backgroundColor = color2;
			document.getElementById(id3).style.backgroundColor = color2;
			document.getElementById(id4).style.backgroundColor = color2;
			document.getElementById(id5).style.backgroundColor = color1;
			
			app.variable.setContent(layout.output_variable_name,id5_value);
		}	
		if(layout.selection_state=="none")
		{
			app.variable.setContent(layout.output_variable_name,"nill");
		}			
			
		
		var me=this;	
			
		/////////////////////////////////////////
		$("#"+id1).click(
				function(event){
					document.getElementById(id1).style.backgroundColor = color1;
					document.getElementById(id2).style.backgroundColor = color2;
					document.getElementById(id3).style.backgroundColor = color2;
					document.getElementById(id4).style.backgroundColor = color2;
					document.getElementById(id5).style.backgroundColor = color2;
					
					app.variable.setContent(layout.output_variable_name,id1_value);
					
					me.backendApi.getProperties().then(function(reply)
					{	
							reply.selection_state= "1"; 
							me.backendApi.setProperties(reply);							
					});
				}				
			);
		
		$("#"+id2).click(
				function(event){
					document.getElementById(id1).style.backgroundColor = color2;
					document.getElementById(id2).style.backgroundColor = color1;
					document.getElementById(id3).style.backgroundColor = color2;
					document.getElementById(id4).style.backgroundColor = color2;
					document.getElementById(id5).style.backgroundColor = color2;
					
					app.variable.setContent(layout.output_variable_name,id2_value);
					
					me.backendApi.getProperties().then(function(reply)
					{	
							reply.selection_state= "2"; 
							me.backendApi.setProperties(reply);							
					});
				}
			);
			$("#"+id3).click(
				function(event){
					document.getElementById(id1).style.backgroundColor = color2;
					document.getElementById(id2).style.backgroundColor = color2;
					document.getElementById(id3).style.backgroundColor = color1;
					document.getElementById(id4).style.backgroundColor = color2;
					document.getElementById(id5).style.backgroundColor = color2;
					
					app.variable.setContent(layout.output_variable_name,id3_value);
					
					me.backendApi.getProperties().then(function(reply)
					{	
							reply.selection_state= "3"; 
							me.backendApi.setProperties(reply);							
					});
				}
			);
			$("#"+id4).click(
				function(event){
					
					document.getElementById(id1).style.backgroundColor = color2;
					document.getElementById(id2).style.backgroundColor = color2;
					document.getElementById(id3).style.backgroundColor = color2;
					document.getElementById(id4).style.backgroundColor = color1;
					document.getElementById(id5).style.backgroundColor = color2;
					
					app.variable.setContent(layout.output_variable_name,id4_value);
					me.backendApi.getProperties().then(function(reply)
					{	
							reply.selection_state= "4"; 
							me.backendApi.setProperties(reply);							
					});
				}
			);
			$("#"+id5).click(
				function(event){
					
					document.getElementById(id1).style.backgroundColor = color2;
					document.getElementById(id2).style.backgroundColor = color2;
					document.getElementById(id3).style.backgroundColor = color2;
					document.getElementById(id4).style.backgroundColor = color2;
					document.getElementById(id5).style.backgroundColor = color1;
					
					app.variable.setContent(layout.output_variable_name,id5_value);
					me.backendApi.getProperties().then(function(reply)
					{	
							reply.selection_state= "5"; 
							me.backendApi.setProperties(reply);							
					});
				}
			);
		
		}