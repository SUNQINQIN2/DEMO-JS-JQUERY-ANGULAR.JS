$(document).ready(function(){
	$(".main>a").click(function(){//css选择器
		//方法一：js
     var a=$(this).next("ul");//a标签同级的下一个
      /*if(a.css("display")=="none")
      	{a.css("display","block");}
      else{
      	a.css("display","none");}*/
      	//方法二：jQuery
     // a.toggle();
     changeIcon($(this));
     })
	//jQuery
	/*$(".main").hover(function(){
		$(this).children("ul").toggle();
	})*/
     $(".main").hover(function(){
		$(this).children("ul").slideDown();
       changeIcon($(this).children("a"));
	},function(){
     	$(this).children("ul").slideUp();
     	changeIcon($(this).children("a"));
     })
     function changeIcon(Icon){
         if(Icon){
         	if(Icon.css("background-image").indexOf.("ts.png")>=0)
         	Icon.css("background-image","url('ts2.png')");
         } else{
         	Icon.css("background-image","url('ts.png')");}
     }
})