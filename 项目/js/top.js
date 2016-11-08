$(function(){
	    /*top的动画*/
		$("#top").find("i").hover(function(){
			$("#top").find("i").find("strong").css({background: '#fff', border:'1px solid #f8a89c',borderBottom:'1px solid #fff',zIndex:3});
			$("#top").find("i").find("div").css({display:'block', left: 0, top: 29,zIndex:2})
		},function(){
			$("#top").find("i").find("strong").css({background: '#fff0ed', border:'1px solid #fff0ed',borderBottom: 'none' });
			$("#top").find("i").find("div").css("display", "none");
		});
		$("#top").find("h5").hover(function(){
			$("#top").find("h5").find("em").css({background: '#fff', border:'1px solid #f8a89c',borderBottom:'1px solid #fff',});
			$("#top").find("h5").find("div").css({display:'block',borderTop:'none', left: 0, top: 29,zIndex:2})
		},function(){
			$("#top").find("h5").find("em").css({background: '#fff0ed', border:'1px solid #fff0ed',borderBottom: 'none' });
			$("#top").find("h5").find("div").css("display", "none");
		});
		$("#top").find("h4").hover(function(){
			$("#top").find("h4").find("b").css({background: '#fff', border:'1px solid #f8a89c',borderBottom:'1px solid #fff',zIndex:999});
			$("#top").find("h4").find("div").css({display:'block', left: -174, top: 29,zIndex:100})
		},function(){
			$("#top").find("h4").find("b").css({background: '#fff0ed', border:'1px solid #fff0ed',borderBottom: 'none' });
			$("#top").find("h4").find("div").css("display", "none");
		});
		/*logo 的动画效果*/
		$("#logo_input_text").focus(function(){
			$("#logo_input_text").val("");
			$("#logo_input_text").blur(function(){
				$("#logo_input_text").val("戒托");
			})
		});
		$("#logo_order").hover(function(){
			$("#logo_order").css("background-position", "right")
		},function(){
			$("#logo_order").css("background-position", "left")
		});
		
		/*导航的效果*/
		$.ajax({
			type : "GET",
			url : "json/nav.json",
			success : function(arr){
				var html = '<li class="nav_li"><a href = "index.html">首页</a></li>'
				for (var i = 0; i < arr.length; i++){
					html += '<li class="nav_li"><a href = "">' + arr[i].title + '</a><div class="nav1"><div class="nav1_divL"><h2><a href = "">' 
					+ arr[i].child1[0].title + '</a></h2><h3><a href = "">' + arr[i].child1[0].detail + '</a></h3><ul class = "nav_ul1">'
					for(var j = 0; j < arr[i].child1[0].breed.length; j++ ){
						html += '<li><a href = "">' + arr[i].child1[0].breed[j] + '</a></li>'
					}   html += '</ul><ul class="nav_ul2">'
					for(var m = 0; m < arr[i].child1[1].breed.length; m++){
						html += '<li><a href = "">' + arr[i].child1[1].breed[m] + '</a></li>'
					}   html += '</ul></div><div class="nav1_divR"><ul class="nav_ul3">'
					for(var n = 0; n < arr[i].child2[0].breed.length; n++){
						html += '<li><a href = "">' + arr[i].child2[0].breed[n] + '</a></li>'
					}   html += '</ul><ul class="nav_ul4"><img src=" '
					+ arr[i].child2[1].breed + ' "/></ul></div></div></li>'
					
				}
				$("#nav_left").html(html);
				
				$("#nav_left").find(".nav_li").hover(function(){
					$(this).css("background", "url(img/top/nav_bg.png) repeat-x 0 0");
					$(this).find(".nav1").css("display", "block")
					for( var s = 0; s < arr.length; s++){
						$("#nav_left").find(".nav_li").find(".nav1").eq(s).css("left",arr[s].left)     //eq(s)  找到子节点
					}
				},function(){
					$(this).css("background", "#f6827a");
					$(this).find(".nav1").css("display", "none")
					})
				
			}
		})
})

