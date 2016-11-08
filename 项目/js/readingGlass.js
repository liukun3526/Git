$(function(){
	
	/*放大镜的效果*/
	var count = 1;
	$(".wares_img_div2R").click(function(){
		
		$(this).closest(".wares_img_div2").find(".wares_img_move").find(".wares_img_move_ul").animate({left : -280 * count});
		$(this).css("display","none")
		$(this).closest(".wares_img_div2").find(".wares_img_div2L").css("display","block");
	})
	$(".wares_img_div2L").click(function(){
		
		$(this).closest(".wares_img_div2").find(".wares_img_move").find(".wares_img_move_ul").animate({left : 0});
		$(this).css("display","none")
		$(this).closest(".wares_img_div2").find(".wares_img_div2R").css("display","block");
	})
	$(".wares_img_move").find("ul").find("li").hover(function(){
		var _this = $(this).index();
		$(this).closest(".wares_img_div2").closest(".wares_img_div").find(".wares_img_div1").find("img").css("display","none");
		$(this).closest(".wares_img_div2").closest(".wares_img_div").find(".wares_img_div1").find("img").eq(_this).css("display","block");
		/*$(this).closest(".wares_img_div2").closest(".wares_img_div").find(".wares_img_div1").find("img").eq(_this).css("opacity",0);
		$(this).closest(".wares_img_div2").closest(".wares_img_div").find(".wares_img_div1").find("img").eq(_this).animate({opacity:1})*/
	})
	
	
	$(".shareImg").find("a").hover(function(){
		$(this).css("opacity",0.5)
	},function(){
		$(this).css("opacity",1)
	});
	
	/*吸顶菜单*/
	$(window).scroll(function(){
					if($(window).scrollTop() >= 716){
						$("#fix_tab").css({position:"fixed",width:"100%",top:"0"})
						$("#fix_tab").css("border","1px solid #dbdbdb")
					}else{
						$("#fix_tab").css({position:"relative",width:"1180px",borderLeft:0,borderRight:0});
					}
	})
	
	/*评论放大*/
	$(".shaitubtn_ul").find(".shaitubtn_li").click(function(){
		var _this1 = $(this).index();
		$(this).closest(".dianping_text").find(".shaitu_hide").css("display","block");
		$(this).closest(".dianping_text").find(".shaitu_hide").find(".shaitu_ul_hide").find(".shaitu_1a").eq(_this1).css("display","block");
	})
	$(".shaitu_hide").find(".shaitu_ul_hide").find(".shaitu_1a").click(function(){
		
		$(this).css("display","none")
		$(".shaitu_hide").css("display","none");
	})
})
