/**
 * Demo file
 */
function testRef() {
	alert("this is test");
}
function forIn() {
	var args=forIn.arguments.length;
	console.info("args:"+args);
	
	var array=["AA",33,false,"BB","CC",22.5];
	for (tmp in array){//tmp是索引，不是元素值;
		console.info(tmp+"---"+array[tmp]);
		
	}
}