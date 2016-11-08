$(function(){
			/*轮播图*/
			$.ajax({
				url: "json/Datebanner.json",
				type: "GET",
				success: function(data){
					var html = "";									
					for(var i = 0; i < data.length; i++){
						html += "<li><a href=''> <img class = 'banner_img' src = '"+ data[i].img +"'><a/></li>"
						 $("#banner ul").html(html);
					}
				}
			});
			$().extend("size", function(){
				return this.elements.length;
				})
				var oBtn = $(".bannerbg").find("ol").find("li");
				var oUl = $(".bannerbg").find("#banner").find("ul");
				var aLi = oUl.find("li");
				var timer = 0;
				var iNow = 0;	
				oBtn.click(function(){
					iNow = $(this).index();
					tab();
				})
				timer = setInterval(timerInner,3000);
				function timerInner(){
					iNow ++;
					tab();
				}
				$(".bannerbg").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(timerInner,3000);
				})
	
				function tab(){
					oBtn.css("background","url(img/index/index_banner_btn.png)  left top");
					oBtn.eq(iNow).css("background","url(img/index/index_banner_btn.png) right top");
					if(iNow == aLi.size() - 1){
						
						oBtn.eq(0).css("background","url(img/index/index_banner_btn.png) right top");
					}
					oUl.animate({left: -1263 * iNow}, function(){
	
						if(iNow == aLi.size() - 1){
							iNow = 0;
							oUl.css("left",0);
						}
					})
				}
				
				/*挑选戒指*/	         
						var c = 0;
						var d = 0;		
						var pickRing= null;
				        pickRing = setInterval(ringtimer,1000);
						
						function ringtimer(){
							c ++;
							ring();
						} 
						function ring(){
							d = c - 1;
							$(".pickRingDiv").css("display","none");
							if( d == 0){
								$("#pickRing_carousel_1").css("display","block")
							}
							if( d == 1){
								$("#pickRing_carousel_2").css("display","block")
							}if( d == 2){
								$("#pickRing_carousel_3").css("display","block")
								c = 0;
							}		
						}
						
				$("#pickRing_right").hover(function(){
					$(this).animate({opacity:0.5}, "swing").delay(50).animate({opacity:1});
					
				},function(){
					$(this).finish();      /*立即完成上述运动，取消缓冲*/
				})
				
				/*seriesProduct   系列产品*/
				$.ajax({
					type:"GET",
					url:"json/index_product.json",
					success : function(arr1){
						var html = "";
						var html1 = "";
						for (var i = 0; i < arr1.length; i++){						
							html += '<em><a href="">' + arr1[i].title + '</a></em>'						
						}
						$("#seriesProduct_list").html(html);
						
						for(var j = 0; j < arr1.length; j++){
							
							html1 += '<div class="seriesProduct_div"><div class="seriesProduct_divL"><div class="seriesProduct_div1"><a class = "seriesMove" href=""><img src=" ' + 
							arr1[j].img1 + ' "/></a></div><div class="seriesProduct_div2"><a class = "seriesMove" href=""><img src = " ' + arr1[j].img2 + 
							' "/></a></div></div><div class="seriesProduct_div3"><a class = "seriesMove" href=""><img src = "' + arr1[j].img3 + ' "/></a></div></div>'
							
						}
						$("#seriesProduct").append(html1);
						
						/*$("#seriesProduct_list").closest("#seriesProduct").find(".seriesProduct_div").eq(0).css("display", "block");*/
						var a = 0;
						var b = 0;
						var Stimer = null;
				        Stimer = setInterval(serisetimer,1000);
						
						function serisetimer(){
							b ++;
							serise();
						}
						$("#seriesProduct_list").closest("#seriesProduct").hover(function(){
							clearInterval(Stimer);
						},function(){
							Stimer = setInterval(serisetimer,1000); 
						})
						function serise(){
							a = b - 1;
							$("#seriesProduct_list").find("em").eq(a).closest("#seriesProduct").find(".seriesProduct_div").css("display", "none");
							$("#seriesProduct_list").find("em").eq(a).closest("#seriesProduct").find(".seriesProduct_div").eq(a).css("display", "block");
							if (a == 4){
								b = 0;			
							}						
						}	
						/*var _this1 = $(this).index();用于储存em 的下标！！！！*/
						$("#seriesProduct_list").find("em").hover(function(){
									var _this1 = $(this).index();
									$(this).closest("#seriesProduct").find(".seriesProduct_div").css("display", "none");
									$(this).closest("#seriesProduct").find(".seriesProduct_div").eq(_this1).css("display", "block")
							        
						},function(){})
						
						
						$(".seriesMove").hover(function(){
							$(this).animate({opacity:0.5}, "swing").delay(50).animate({opacity:1});
							
						},function(){
							$(this).finish();      /*立即完成上述运动，取消缓冲*/
						})
					}					
				});
					
							
				/*ringShow   钻石展示*/
				$("#ringShow_1").find("ul").find("li").mouseover(function(){
					$(this).stop().animate({ 'margin-top': '-12px' }, 400);});
				$("#ringShow_1").find("ul").find("li").mouseout(function(){
					$(this).stop().animate({ 'margin-top': '0' }, 400);});
				 
				var  count= 0;
				$("#ringShow_3").click(function(){
					Count = count ++;
					$("#ringShow_1").find("ul").animate({left : -274 * Count})
					if( count > $("#ringShow_1").find("ul").find("li").size() - 5){
						Count = 0;
						$("#ringShow_3").off();
					}		
				});			
				$("#ringShow_2").click(function(){
							$("#ringShow_1").find("ul").animate({left : -274 *Count + 274})
							
				})
				
				/*Brand story  品牌故事*/
				$(".brandStory_move").hover(function(){
					$(this).animate({opacity:0.5}, "swing").delay(50).animate({opacity:1});
					
				},function(){
					$(this).finish();      /*立即完成上述运动，取消缓冲*/
				})
				
				/*tasteCenter      服务中心*/
				
				$("#city_input").focus(function(){
					$("#city_input").val("");
					$("#city_input").blur(function(){
						$("#city_input").val("免费发送到手机");
					})
				});
				$("#city_button").hover(function(){
					$(this).css("background", "#f7918b")
				},function(){
					$(this).css("background", "#f6827a")
				});
				
				$.ajax({
					url: "json/tasteCenter.json",
					type: "GET",
					success: function(arr2){
						var html = "";									
						for(var i = 0; i < arr2.length; i++){
							html += '<a href="" class="citybg"><span class="city_title"><span class="city_1">' + arr2[i].fame + 
							'</span><i>——————————</i></span><span class="city_text">' 
							for(var j = 0; j < arr2[i].writing.length; j++){
								html += '<em>' + arr2[i].writing[j] +'</em>'
							}
							html += '</span></a>'
							 $("#city_border").html(html);
						}			
					}		
				});
				
				
				/*储存a的下标！！！！*/
				$("#tasteCenter_list").find("a").hover(function(){
							var _this = $(this).index();
							$(this).css("color","#ff8a81")
					        $(this).closest("#tasteCenter").find("#tasteCenter_detail").find("#city").find("#city_border").find(".citybg").find(".city_title").css("display","none");
					        $(this).closest("#tasteCenter").find("#tasteCenter_detail").find("#city").find("#city_border").find(".citybg").find(".city_text").css("display","none");					
							$(this).closest("#tasteCenter").find("#tasteCenter_detail").find("#city").find("#city_border").find(".citybg").find(".city_title").eq(_this).css("display","block");					
							$(this).closest("#tasteCenter").find("#tasteCenter_detail").find("#city").find("#city_border").find(".citybg").find(".city_text").eq(_this).css("display","block");
				},function(){
					$(this).css("color","#000")
				})
				
				/*dynamic   动态资讯*/
				$.ajax({
					type : "GET",
					url : "json/dynamic.json",
					success : function(arr3){
						var html = ''
						
							html += '<dt><a href = "">' + arr3[0].title + '</a></dt>' 
							for(var j = 0; j < arr3[0].child.length; j++){
								html += '<dd><a href="">' + arr3[0].child[j] + '</a></dd>'							
							}
						$("#dynamic1").find("dl").html(html);
					}	
				})
				$.ajax({
					type : "GET",
					url : "json/dynamic.json",
					success : function(arr3){
						var html = '';			
							html += '<dt><a href = "">' + arr3[1].title + '</a></dt>' 
							for(var i = 0; i < arr3[1].child.length; i++){
								html += '<dd><a href="">' + arr3[1].child[i] + '</a></dd>'							
							}
						$("#dynamic2").find("dl").html(html);
					}		
				})
				
				var iNow1 = 0;
				var iNow2 = 0
				var timer1 = null;
				var oUl1 = $("#dynamicDiv").find("ul");
				var aLi1 = oUl1.find("li");
				var iNum1 = $(this).index();
				var aBtn1 = $("#dynamicDiv").find("p").find("span");
				timer1 = setInterval(timer1Inner,2000);
				function timer1Inner(){
					iNow1 ++;
					tab1();
				}
				oUl1.hover(function(){
					clearInterval(timer1);
				},function(){
					timer1 = setInterval(timer1Inner,2000);
				})
				aBtn1.eq(0).click(function(){
					$(this).finish();
					aBtn1.css("background","url(img/index/index_banner_btn.png)  left top");
						aBtn1.eq(0).css("background","url(img/index/index_banner_btn.png) right top");
						oUl1.animate({left : 0});			
				})
				aBtn1.eq(1).click(function(){
					$(this).finish();
						aBtn1.css("background","url(img/index/index_banner_btn.png)  left top");
						aBtn1.eq(iNow1).css("background","url(img/index/index_banner_btn.png) right top");
						oUl1.animate({left:-480});				
				})
				function tab1(){
					
					if( iNow1 == 1){
						aBtn1.css("background","url(img/index/index_banner_btn.png)  left top");
						aBtn1.eq(iNow1).css("background","url(img/index/index_banner_btn.png) right top");
						oUl1.animate({left:-480});
					}
					if( iNow1 == 2){
						aBtn1.css("background","url(img/index/index_banner_btn.png)  left top");
						aBtn1.eq(0).css("background","url(img/index/index_banner_btn.png) right top");
						oUl1.animate({left : 0});
						iNow1 = 0;
					}						
				}
})
