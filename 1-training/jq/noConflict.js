$.noConflict();
jQuery(document).ready(function(){
	jQuery("#btn").on("click",function(){
		jQuery("div").text("new hello!")
	})
})