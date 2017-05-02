/**
 * 
 */
function attrDom() {
	console.log($('#my_form').attr('action'));
	$('#my_form').attr('action','bar.php');
	console.log($('#my_form').attr('action'));
	
}
function deleteProp() {
	$("img").removeAttr("src");
	console.log(document.getElementsByTagName("img")[0]);
}
function htmlText() {
	console.log($('p').html());
	$('p').html('<i>World</i>');
	console.log($('p').html());

}
function htmlText1() {
	console.log($('p').html());
	$('p').text('<i>World</i>');
	console.log($('p').html());
	
}
function styleDemo() {
	//$('p')[0].style.color="red";
	$('p').css('color',"red");
	console.log($('p').css('color',"red"));
}
function addClassDemo() {
	console.log(document.getElementById("p01"));
	$('#p01').addClass("test");
	console.log(document.getElementById("p01"));
}
function appendDemo() {
	$('#p02').append('World');
	$('#p02').prepend('World');
	
}
function afterDemo() {
	$('#p02').after('<p>World</p>');
}
function beforeDemo() {
	$('#p02').before('<p>i love</p>');
}
function cloneDemo() {
	var b=$('#p02').clone();
	$('#p02').after(b);
}
function replaceWithDemo() {
	$('#p02').replaceWith('<b>World</b>');
}
function wrapDemo() {
	$('#p02').wrap('<h1></h1>');
}
function wrapInnerDemo() {
	$('#p02').wrapInner('<b></b>');
}
function removeDemo() {
	$('li').remove();
}
function emptyDemo() {
	$('body').empty();
}
