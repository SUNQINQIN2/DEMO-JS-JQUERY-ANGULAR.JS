$(document).ready(function(){
	//$("div p").first().css("background-color","red");//寻找同样元素中的第一个
	//$("div p").last().css("background-color","red");
	//$("div p").eq(2).css("background-color","red");
   // $("div p").filter("p").css("background-color","red");
   $("div p").not("#s").css("background-color","red");
})