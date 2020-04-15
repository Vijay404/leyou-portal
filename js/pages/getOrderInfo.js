$(function(){
	$(".addr-item .name").click(function(){
		 $(this).toggleClass("selected").siblings().removeClass("selected");
	});
	$(".payType li").click(function(){
		 $(this).toggleClass("selected").siblings().removeClass("selected");
	});
});

$(function(){
    $(".address").hover(function(){
        $(this).addClass("address-hover");
    },function(){
        $(this).removeClass("address-hover");
    });
});