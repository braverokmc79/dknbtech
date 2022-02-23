$(function(){
	$(".s_tab > ul > li").each(function(){
			var category = $(this).index();
			$(this).click(function(e){
					e.preventDefault();
					$("div.img > div").removeClass('on');
					$("div.img > div").eq(category).addClass('on');
			});
	});
	$(".s_tab > ul > li").click(function(){
			$(".s_tab > ul > li").removeClass('on');
			$(this).addClass('on');
	});


	if(1 > 0){
		$('.title_navi> li:eq(0) > a[href*=11]').css("color","#616161");
		$('.title_navi> li:eq(0) > a[href*=11]').css("font-weight","700");
	}


	$(".down_btn ").on("click" , function(){
		if($(this).hasClass("on")){
			$(".down_btn").removeClass("on");
			$('.extend1 > ul').stop().slideUp("fast");
			$(".down_btn3").find("img").attr("src", "../asset/img/common/tab_arr.png");
			//$('.extend1 > ul').stop().animate({height:"0px"},300);

		}else{
			$(".down_btn").addClass("on");
			$('.extend1 > ul').stop().slideDown("fast");

			$(".down_btn2").removeClass("on");
			$('.extend2 > ul').stop().slideUp("fast");
			$(".down_btn3").find("img").attr("src", "../asset/img/common/tab_arr2.png");
			//$('.extend > ul').stop().animate({height:"240px"},300);
		}
		$(".down_btn4").find("img").attr("src", "../asset/img/common/tab_arr.png");
	});

	$(".down_btn2 ").on("click" , function(){
		if($(this).hasClass("on")){
			
			$(".down_btn2").removeClass("on");
			$('.extend2 > ul').stop().slideUp("fast");
		
			$(".down_btn4").find("img").attr("src", "../asset/img/common/tab_arr.png");
			
		}else{
			$(".down_btn2").addClass("on");
			$('.extend2 > ul').stop().slideDown("fast");
			
			
			$(".down_btn").removeClass("on");
			$('.extend1 > ul').stop().slideUp("fast");
			$(".down_btn4").find("img").attr("src", "../asset/img/common/tab_arr2.png");
			//$('.extend1 > ul').stop().animate({height:"240px"},300);
			
		}


		$(".down_btn3").find("img").attr("src", "../asset/img/common/tab_arr.png");
	});

	$(".down_btn2,.down_btn").mouseleave(function(e){
		
		if($(".down_btn2").hasClass("on")){
			$(".down_btn2").removeClass("on");
			$('.extend2 > ul').stop().slideUp("fast");
			$(".down_btn3").find("img").attr("src", "../asset/img/common/tab_arr.png");
			$(".down_btn4").find("img").attr("src", "../asset/img/common/tab_arr.png");
			
			//$('.extend > ul').stop().animate({height:"0px"},300);
		}
		if($(".down_btn").hasClass("on")){
			$(".down_btn").removeClass("on");
			$('.extend1 > ul').stop().slideUp("fast");
			$(".down_btn3").find("img").attr("src", "../asset/img/common/tab_arr.png");
			$(".down_btn4").find("img").attr("src", "../asset/img/common/tab_arr.png");
			//$('.extend > ul').stop().animate({height:"0px"},300);
		}

	});

	$(".sub_title_navi, .navi_all , .navi_in").on("mouseover", function(e){
		$('#sub-menu-wrap').stop().animate({height:"294px"},300);
		
	});

	$(".sub_title_navi").on("mouseout", function(e){
		$('#sub-menu-wrap').stop().animate({height:"54px"},300);
	});



	$('.extend1 ul a h1').trigger('click mouseover', function(){
		$(this).css("color", "red");
	});

	$('.extend1 ul a h1').trigger('click mouseout', function(){
		$(this).css("color", "#777");
	});



	$(".extend2 .navi_title01").on("click", function(e){			
			$(".down_btn2 h2").html($(e.target).text());
	});




	$('span.ns_tab a').click(function(event){
		//console.log("서브 클릭");
		//$(".ns_tab").removeClass("on");		

			var hash = $(this).attr('href').split('#')[1];
			var sc_int =  $("#"+hash).offset().top -0;
			$('html, body').animate({
				scrollTop: sc_int
			}, 1000,'easeInOutExpo');


			return false;
	});

	






		$(window).scroll(function(event){
			const topMinus=300;
			//$(".ns_tab").removeClass('on');		

			var sc = $(window).scrollTop();
			var subTab = $(".new_tab").offset().top;
			if (sc >= subTab){
				$(".new_tab").addClass('on');
				$(".new_tab2").addClass('on');
			}
			if(sc <= 110){
				$(".new_tab").removeClass('on');				
				$(".new_tab2").removeClass('on');				
			}
			
			var s01 = $(".s11_01").offset().top- topMinus;
/* 			var s02 = $(".s11_02").offset().top - topMinus;
			var s03 = $(".s11_03").offset().top - topMinus;
			var s04 = $(".s11_04").offset().top - topMinus;
			var s05 = $(".s11_05").offset().top - topMinus;
			var s06 = $(".s11_06").offset().top - topMinus;
			 */
			//console.log(s01,s02,s03, s04,s05) ;
			//console.log("sc 값 : " +sc);

			// var dataId=$("#sub-menu-id").attr("data-class");
			// $("#sub_ns_tab ns_tab").removeClass("on");
			// $("#sub_ns_tab ."+dataId).addClass("on");
			//모바일
			if(sc >= 50){	
				$(".sub_title_navi").css("position", "fixed").css("top","95px").css("width", "100%").css("left","0px");
			}else{
				$(".sub_title_navi").css("position", "").css("top","").css("width", "").css("left","");
			}


			$(".new_tab").show();
			if($(".new_tab").hasClass("on")){
				$("span.ns_tab ").css("width","15.5%");
				$(".new_tab").css("width", "1400px");
			}else{
				$("span.ns_tab ").css("width","15.5%");
			}



		/* 	if(sc < s02){	
				$(".ns_tab:nth-child(1)").addClass('on');				
				return;
			}

			if(sc >= s02 && sc < s03){						
				$(".ns_tab:nth-child(2)").addClass('on');
				
				return;
			}

			if(sc >= s03 && sc < s04){
				$(".ns_tab:nth-child(3)").addClass('on');
				return;
			}

			if(sc >= s04 && sc < s05){
				$(".ns_tab:nth-child(4)").addClass('on');
				return;
			}

			if(sc >= s04 && sc < s06){
				$(".ns_tab:nth-child(5)").addClass('on');
				return;
			}
 */
				
		});	

		$(".gnb_nav").on("mouseover",function(event){
			if($(".new_tab").hasClass("on")){
				$(".new_tab").hide();
			}
		});

		$(".gnb_nav").on("mouseleave",function(event){
			if($(".new_tab").hasClass("on")){
				$(".new_tab").show();
			}
		});


		if(1 > 0){
			$('.new_navi> li:eq(0) > a[href*=11]').css("color","#000");
			$('.new_navi> li:eq(0) > a[href*=11]').css("font-weight","700");
			$('.new_navi> li:eq(0) > a[href*=11]').css("background","#eee");
			//$('.new_tab span:eq(0) a[href*=11]').css("border-bottom","2px solid #e7141a");
		}


	
});



