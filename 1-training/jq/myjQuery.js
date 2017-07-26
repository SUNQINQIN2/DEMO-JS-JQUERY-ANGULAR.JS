$.myjq=function(){
	alert("hello!")
}
$.fn.myjq=function(){
	$(this).text("hello");
}