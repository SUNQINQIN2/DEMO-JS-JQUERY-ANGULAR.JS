/*parent()
parents()
parentUntil()*/
$(document).ready(function(){
	//$("a").parent().css({border:"3px solid #6A3131"});//可以指定参数,但只能为一级
	$("p").parents("#div2").css({border:"3px solid #6A3131"});//可以指定参数
	//$("p").parentsUntil("div").css({border:"3px solid #6A3131"});
})