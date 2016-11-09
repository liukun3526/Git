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
		
		$('.wares_img_div1').find('img').hide();
		$('.large_all').find('img').hide();
		$('.wares_img_div1').find('img').eq(_this).show();
		$(".gd_large").find('img').eq(_this).show();
		$('.large_all').find('img').eq(_this).show();
	})
	
	var  S_wid = Math.ceil($(".img_hide_small").outerWidth(true));
	var  S_hei = Math.ceil($(".img_hide_small").outerHeight(true));
	var Padwid = Math.floor($(".wares_img_div1").width());
	var Padhei = Math.floor($(".wares_img_div1").height());
	var  Lwid = parseInt($(".gd_large").width());
	var  Lhei = parseInt($(".gd_large").height());
	var Awid = parseInt($(".large_all").width());
	var Ahei = parseInt($(".large_all").height());
	$(".img_hide_small").mousemove(function(e){
			var offwid = $(".wares_img_div1").offset().left;
			var offtop = $(".wares_img_div1").offset().top;
			var x = e.pageX - offwid - S_wid/2;
			var y = e.pageY - offtop - S_hei/2;
			if( x < 0 ){
				x = 0;
			}else if( x > Padwid - S_wid ){
				x = Padwid - S_wid;
			}
			if( y < 0 ){
				y = 0;
			}else if( y > (Padhei - S_hei)  ){
				y = (Padhei - S_hei);
			}
			$(".img_hide_small").css({left:x,top:y});
			var proportionX = x/(Lwid - S_wid);
			var proportionY = y/(Lhei - S_hei);
			var fx = -proportionX*(Awid-Lwid);
			var fy = -proportionY*(Ahei-Lhei);
			$('.large_all').css({left:fx,top:fy});
	})
	$(".wares_img_div1").hover(function(e){
		var offwid = $(".wares_img_div1").offset().left;
		var offtop = $(".wares_img_div1").offset().top;
		var x = e.pageX - offwid - S_wid/2;
		var y = e.pageY - offtop - S_hei/2;
		if( x < 0 ){
			x = 0;
		}else if( x > Padwid - S_wid ){
			x = Padwid - S_wid;
		}
		if( y < 0 ){
			y = 0;
		}else if( y > (Padhei - S_hei)  ){
			y = (Padhei - S_hei);
		}
		$(".img_hide_small").css({left:x,top:y});
		$(".img_hide_small").show();
		$('.gd_large').show();
		$('.gd_large').css("display","block");
	},function(){
		$(".img_hide_small").hide();
		$('.gd_large').hide();
		$('.gd_large').css("display","none");
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
