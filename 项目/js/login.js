$(function(){
	var yhmaff_b = false;
	var $regyhm1 = $('.yours_name');
    	$regyhm1.blur( function(){
    			phoneNum = $(this).val();
    			var reg = /^1(3|5|7|8)[0-9]{9}$/
    			var wran = "";
				var yhm = $('.yours_name').val();
				var yhmAff = $.cookie("username");
				if($.cookie("username")!=yhm && reg.test( phoneNum)){
					$(this).parent().find('.msg_warning').css("display","inline-block")
					alert("你还未注册,请先去注册");
	    	    }else{
	    	    	if( yhmAff != yhm ){
						$(this).parent().find( ".msg_warning" ).css('display','inline-block');
						$(this).parent().find( ".msg_warning" ).html( '输入的账号有误，请重新输入' );
					}else{
						yhmaff_b = true;
						$(this).parent().find( ".msg_warning" ).css('display','none');
					}
	    	    }
			
		} );
		var $regmima = $('.yours_password');
		$regmima.blur( function(){
			var mima = $(".yours_password").val();
			var mimaAff = $.cookie("password");
			if( mimaAff != mima ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '输入的密码有误，请重新输入' );
			}else{
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
	    });
		$(".login_submit").click(function(){
			var yhm = $('.yours_name').val();
			var mima= $(".yours_password").val();
			if($.cookie("username") == yhm && $.cookie("password")== mima){
				alert("您已登录成功");
	        }
			
		}
	)
})
