












//var width = 900;
//var height = 500;

// var color = d3.scale.category10();
function initial(str){
 var strNew =   str.replace( /[^A-Z]/g, '' );
    return strNew;
}
function stripSpaces(str, classType){
			var cssClassName = str.replace(/\s+/g, '');
			var cssClass = cssClassName.concat(classType);
			return cssClass;
	
}


