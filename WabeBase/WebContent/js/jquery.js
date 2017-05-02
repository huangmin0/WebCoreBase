/**
 * jQuery
 */
function get_text() {
	var jq=$('txt');
	alert($('#txt').val());
	
}
//标签选择器
function divSelect() {
	$("div").css('border','1px solid red');
	alert($("div").css('border'));
}
//id选择器
function idSelect() {
	$("#to").html($("#form").html());
}

//class选择器
function classSelect() {
	$(".fruit").css('color','red');
}
//组合选择器
function mutiSelect() {
	$(".fruit,#tomato").css('color','red');
}
//祖孙后代选择器
function anceDescSelect() {
	$("div label").css('color','red');
}
//父子选择器
function anceDescSelect2() {
	$("p>label").css('color','red');
}
//隔壁选择器
function gebiSelect() {
	$("p+label").css('color','red');
}
//邻居选择器
function lingjuSelect() {
	$("p~label").css('color','red');
}
//过滤器first-last
function firstlastSelect() {
	$('li:first').css('color','red');
	$('li:last').css('color','blue');
	
}
//过滤器first-last-child
function firstlastchildSelect() {
	$('li:first-child').css('color','red');
	$('li:last-child').css('color','blue');
	
}
//指定下标过滤器
function indexSelect() {
	$('li:eq(2)').css('color','red');
}

