/*siblings()
next()
nextAll()
nextUntil()
prev()
preAll()
preUntil()*/
$(document).ready(function(){
	//$("p").nextUntil("h3").css({border:"3px solid #4FC477"});
	//$("p").next().css({border:"3px solid #4FC477"});
	$("h4").preAll().css({border:"3px solid blue"});
})