	// JavaScript Document

	$(function () {

		$breakPoint = 769;

		function bodySwitch() {
			var $body = $('body');
			var windowWidth = parseInt($(window).width());
			if (windowWidth > $breakPoint) {
				$body.removeClass("sp").addClass("pc");
			} else if (windowWidth < $breakPoint) {
				$body.removeClass("pc").addClass("sp");
			}
		}

		$(function(){
			$width1 = $(window).width();
			bodySwitch();
			imgMaskSP();
			imgMaskPC();
			listsizeSP();
			tablist();
			catelist();
			url();
			spkv();
			popsize();
			loading();
		});

		$(window).resize(function () {
			bodySwitch();
			imgMaskSP();
			imgMaskPC();
			spkv();
			popsize();
			$width2 = $(window).width()
				// PCサイズからSPサイズ以下に変わるとき
			if (($width1 - $breakPoint > 0) && ($breakPoint - $width2 >= 0)) {}
			// SPサイズからPCサイズ以上に変わるとき
			if (($breakPoint - $width1 >= 0) && ($width2 - $breakPoint > 0)) {}
		});

		function loading() {
			setTimeout(function () {
			$("body").addClass("show_body");
			}, 200);
			setTimeout(function () {
			$(".load_img").fadeOut();
			}, 1830);
			setTimeout(function () {
			$(".loading_wrap").fadeOut();
			}, 2000);

			setTimeout(function () {
				$(".magazine_modal").addClass("show_modal");
			}, 2200);
		}

		function imgMaskPC() {
			$('.pc .pick_up_list li').css('height', "232px");
		}

		function spkv() {
			var kw = $(".sp .single .single_kv").width();
			$(".sp .single .single_kv").css("height" , kw);
		}

		function popsize() {
			var pw = $(".sp .padding03").width();
			$(".sp .padding03").css('height' , pw);
		}

		function imgMaskSP() {
			var w = $(window).width();
			var ph = $('.pick_up_list').width();
			var sh = $(".series_archive_list li").height();
			var bh = $("#top_kv li").height();

			$('.sp .pick_up_list li').css('height', ph / 2);
			$('.sp .series_archive_list li').css('height', sh + 1);
			$('.bx-viewport').css('height', bh);

		}

		function listsizeSP() {
			var Clh = $(".sp .category_content li ul > li").height();
			var Nlh = $(".sp .news_list > li").height();
			var Rlh = $(".sp .related_list > li").height();

			$(".sp .news_txt_wrap").css('height', Clh);
			$(".sp .news_txt_wrap").css('height', Nlh);
			$(".sp .news_txt_wrap").css('height', Rlh);
		}


		$('a[href^=#]').click(function () {
			var speed = 700;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({
				scrollTop: position
			}, speed, 'easieEaseInOutQuart');
			return false;
		});


		$('.menu-trigger').on('click', function () {
			if ($(this).hasClass('active')) {
				$(this).stop().removeClass('active');
				setTimeout(function () {
					$("#burger_nav").fadeOut();
					$(".burger_menu li ,.burger_sns,.link_logo").stop().animate({
						"opacity": "0"
					});
					$("#burger_nav").css({
						"overflow": "initial"
					});
					$(".category_name").fadeIn();
				}, 50);

			} else {
				$(this).stop().addClass('active');
				$("#burger_nav").fadeIn();
				$("#burger_nav").css({
					"overflow": "auto"
				});

				setTimeout(function () {
					$(".burger_menu li ,.burger_sns ,.link_logo").stop().animate({
						"opacity": "1"
					});
					$(".category_name").fadeOut();
				}, 180);
			}
		});

		$(".burger_menu li a").on('click', function () {
			$(".menu-trigger").removeClass('active');
			setTimeout(function () {
				$("#burger_nav").stop().animate({
					"right": "0"
				}, 400, $.easie(0.737, 0, 0.124, 1));
				$(".burger_menu li").stop().animate({
					"opacity": "0"
				});
				$("#burger_nav").css({
					"overflow": "initial"
				});

			}, 50);
		});


		function tablist() {
			$(".monthly").css("display", "none");
			$('.popular_tab li').click(function () {
				var index = $('.popular_tab li').index(this);
				$('.popular_content > li').css('display', 'none');
				$('.popular_content > li').eq(index).css('display', 'block');
				$('.popular_tab li').removeClass('select');
				$(this).addClass('select')
			});
		}

		function catelist() {
			$(".hide").css("display", "none");
			$('.category_list li').click(function () {
				var index = $('.category_list li').index(this);
				$('.category_content > li').css('display', 'none');
				$('.category_content > li').eq(index).css('display', 'block');
				$('.category_list li').removeClass('select');
				$(this).addClass('select');
				imgMaskSP();
			});
		}

		var header = $('header');
		//スクロールが100に達したらボタン表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 10) {
				header.addClass("header_bg");
			} else {
				header.removeClass("header_bg");
			}
		});


		$(".close ,.magazine_modal").click(function () {
			$(".magazine_modal").addClass("modal_hide");
			setTimeout(function(){
				$(".magazine_modal").fadeOut("1000")
			},200);
		});

		/*最終はwp関数で対応＊*/
		function url() {
			var url = location.href;
			if (url == "http://site-prev.com/jjbis/") {
				$('body').addClass('top');
			} else if (url == "http://site-prev.com/jjbis/index.php") {
				$('body').addClass('top');
			}
		}

		$(function () {
			$('.sp_hoverBg')
				.bind('touchstart', function () {
					$(this).addClass('sphover01');
				}).bind('touchend', function () {
					$(this).removeClass('sphover01');
				});
		});


		$(".serch_btn").on("click" , function(){
			if ($("#searchBox").hasClass('show_search')) {
				$("#searchBox").removeClass("show_search");
			} else {
				$("#searchBox").addClass("show_search");
			}
		});

		$("#btn-close").on("click" , function(){
			$("#searchBox").removeClass("show_search");
		});
	});
