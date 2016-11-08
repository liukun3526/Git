$(function(){
		
		/*左侧导航栏     开关*/
		$(".left_category_open").eq(0).click(function(){
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").eq(0).css("display","none");
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").closest(".left_category").find(".left_category_detail").eq(0).css("display","block");			
		})
		$(".left_category_close").eq(0).click(function(){
			$(this).closest(".left_category_li").closest(".left_category_detail").css("display","none");
			$(this).closest(".left_category_li").closest(".left_category_detail").closest(".left_category").find(".left_category_title").eq(0).css("display","block")
		})
		$(".left_category_open").eq(1).click(function(){
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").eq(1).css("display","none");
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").closest(".left_category").find(".left_category_detail").eq(1).css("display","block");			
		})
		$(".left_category_close").eq(1).click(function(){
			$(this).closest(".left_category_li").closest(".left_category_detail").css("display","none");
			$(this).closest(".left_category_li").closest(".left_category_detail").closest(".left_category").find(".left_category_title").eq(1).css("display","block")
		})
		$(".left_category_open").eq(2).click(function(){
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").eq(2).css("display","none");
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").closest(".left_category").find(".left_category_detail").eq(2).css("display","block");			
		})
		$(".left_category_close").eq(2).click(function(){
			$(this).closest(".left_category_li").closest(".left_category_detail").css("display","none");
			$(this).closest(".left_category_li").closest(".left_category_detail").closest(".left_category").find(".left_category_title").eq(2).css("display","block")
		})
		$(".left_category_open").eq(3).click(function(){
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").eq(3).css("display","none");
			$(".left_category_open").closest(".left_category_li").closest(".left_category_title").closest(".left_category").find(".left_category_detail").eq(3).css("display","block");			
		})
		$(".left_category_close").eq(3).click(function(){
			$(this).closest(".left_category_li").closest(".left_category_detail").css("display","none");
			$(this).closest(".left_category_li").closest(".left_category_detail").closest(".left_category").find(".left_category_title").eq(3).css("display","block")
		})
		
		/*右侧列表高级搜索的展开与关闭*/
		$(".right_ul_button").find("div").hover(function(){
			$(this).css("color","#f87d74")
		},function(){
			$(this).css("color", "#333333")
		})
		$(".button_border1").click(function(){
			$(this).css("display","none");
			$(this).closest(".right_ul_button").find(".button_border2").css("display","block");
			$(this).closest(".right_ul_button").closest(".right_ul").find(".right_ul_li_hide").css("display","block")
		})
		$(".button_border2").click(function(){
			$(this).css("display","none");
			$(this).closest(".right_ul_button").find(".button_border1").css("display","block");
			$(this).closest(".right_ul_button").closest(".right_ul").find(".right_ul_li_hide").css("display","none")
		})
		
		/*商品 ajax导入及动画效果*/
		$.ajax({
				url: "json/goods.json",
				type: "GET",
				success: function(arr5){
					var html = "";									
					for(var i = 0; i < arr5.length; i++){
						html += '<div class="goods_bg"><a  title=" ' + arr5[i].title + ' " href="" class="page_img_bg"></a> <a class="page_img_bg_p"></a> <a href=" "class="page_text_1"><span class="page_text_1_span">' +
						arr5[i].txt1 + ' </span> </a><div class="page_text_2"><span>￥</span><span>' +
						arr5[i].txt2 + ' </span></div><div class="page_text_3">售出<span>' +
						arr5[i].txt3 + '</span></div><a href=" "><div class="page_text_3" style="left:150px;">评论<span>' +
						arr5[i].txt4 + '</span></div></a><div class="page_img"><div class="page_img_1"><a href=""><img src="' +
						arr5[i].img1 + ' " ></a></div><div class="page_img_2"><a href=""><img src="' +
						arr5[i].img2 + '"></a></div></div></div>'
					}
					$(".goods_list").html(html);
					$(".goods_list").find(".goods_bg").hover(function(){
						$(this).css("background","url(img/subpage/goods_bg.jpg) no-repeat right bottom")
						$(this).find(".page_img").find(".page_img_1").stop().animate({opacity : 0},500,function(){
							$(this).css("display","none");
						});
						$(this).find(".page_img").find(".page_img_2").css("display","block");
						$(this).find(".page_img").find(".page_img_2").stop().animate({opacity : 1},500)
					},function(){
						
						$(this).find(".page_img").find(".page_img_2").stop().animate({opacity : 0},500,function(){
							$(this).css("display","none");
						});
						$(this).find(".page_img").find(".page_img_1").css("display","block");
						$(this).find(".page_img").find(".page_img_1").stop().animate({opacity : 1},500)
						$(this).css("background","#fff")
					});
				}
		});
		
		/*information    信息ajax导入*/
		$.ajax({
				url: "json/informa.json",
				type: "GET",
				success: function(arr2){
					var html = "";									
					for(var i = 0; i < arr2.length; i++){
						html += '<span><a href = " " >' + arr2[i] + '</a></span>'
					}
					$(".information_div1").html(html);
				}
		});
		$.ajax({
				url: "json/information1.json",
				type: "GET",
				success: function(arr3){
					var html = "";									
					for(var i = 0; i < arr3.length; i++){
						html += '<a href = " " >' + arr3[i] + '</a>'
					}
					$(".information_div2").html(html);
				}
		});
})