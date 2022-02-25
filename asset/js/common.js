let common = {
	init: function () {
		// pc메뉴  
		$(".pc_menu_item").hover(function (event) {
			$(event.target).find("ul").stop().slideDown(300);
			$(".background_mask").addClass("on");
		}, function () {
			$(".pc_menu_item").find("ul").stop().slideUp(0);
			$(".background_mask").removeClass("on");
			
			
		});


		//모바일 메
		$(".mobile_menu_item h5").on("click", function (event) {
			$("m_sub_list").show();
			$(event.target).next().slideToggle();
			$(".mobile_menu_item h5").not(event.target).next().slideUp();
			if ($(event.target).hasClass("active")) {
				$(".mobile_menu_item h5").removeClass("active");
			} else {
				$(".mobile_menu_item h5").removeClass("active");
				$(event.target).addClass("active");
			}
		});


		$("#mobile_menu_btn").on("click", function () {
			if ($("#mobile_menu_btn").hasClass("on")) {
				$("#ch-plugin").show();
				$("#topBtn").show();

				$("#mobile_menu_btn").removeClass("on");
				$(".moblie_nav").removeClass("on");
				$(".background_mask").removeClass("on");

				if ((".sub_title_navi")) {
					setTimeout(() => {
						$(".sub_title_navi").show();
					}, 300);

				}

			} else {
				$("#ch-plugin").hide();
				$("#topBtn").hide();
				$("#mobile_menu_btn").addClass("on");
				$(".moblie_nav").addClass("on");
				$(".background_mask").addClass("on");

				if ((".sub_title_navi")) {

					$(".sub_title_navi").css("display", "none");
				}

			}
		})


		//탑으로 
		$(window).scroll(function (event) {
			if (!$("#mobile_menu_btn").hasClass("on")) {
				if ($(event.target).scrollTop() > 250) {
					$('#topBtn').fadeIn();
				} else {
					$('#topBtn').fadeOut();
				}
			}

		});

		$("#topBtn").click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 400);
			return false;
		});



		//검
		$(".search_btn").click(function () {
			$(".search_layer").addClass("on");
			return false;
		});
		$(".search_cancle").click(function () {
			$(".search_layer").removeClass("on");
			return false;
		});

		$(".search_layer .search-submit").click(function () {
			
				document.top_goods_search_form.pageIndex.value = 1;
				document.top_goods_search_form.action = "/portal/community/everySearch/selectBoardList.do";
				document.top_goods_search_form.submit();
		});



		// $(".pc_menu_item").on("mouseover", function (e) {
		// 	if ($(e.target).children(".sub_depth").css("display") != "block") {
		// 		$(e.target).children(".sub_depth").css("display", "block");
		// 		$(e.target).children(".sub_depth").children(".menu-img").css("display", "block");
		// 	}
		// });


	},

}
common.init();





// 팝업레이어
function pop_klover(event, el) {
	var $el = $(el);        //레이어의 id를 $el 변수에 저장
	var isDim = $el.prev().hasClass('klover-dimBg');    //dimmed 레이어를 감지하기 위한 boolean 변수

	isDim ? $('.klover-dim-layer').fadeIn() : $el.fadeIn();

	var $elWidth = ~~($el.outerWidth()),
		$elHeight = ~~($el.outerHeight()),
		docWidth = $(document).width(),
		docHeight = $(document).height();

	// 화면의 중앙에 레이어를 띄운다.
	if ($elHeight < docHeight || $elWidth < docWidth) {
		$el.css({
			marginTop: -$elHeight / 2,
			marginLeft: -$elWidth / 2
		})
	} else {
		$el.css({ top: 0, left: 0 });
	}

	$el.find('a.btn-layerClose').click(function () {
		isDim ? $('.klover-dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
		return false;
	});

	$('.pop-klover .klover-dimBg').click(function () {
		$('.klover-dim-layer').fadeOut();
		return false;
	});

	return false;
}








