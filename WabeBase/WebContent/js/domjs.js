/**
 * 
 */
window.onload=initAll;
function initAll() {
	document.getElementsByTagName("form")[0].onsubmit=function(){
		return addNode();
		
	}
	
}


function addNode() {
	var inText=document.getElementById("textArea").value;
	var newText=document.createTextNode(inText);
	var newgraf=document.createElement("p");
	newgraf.appendChild(newText);
	var docBody=document.getElementsByTagName("body")[0];
	docBody.appendChild(newgraf);
	return false;
	
}