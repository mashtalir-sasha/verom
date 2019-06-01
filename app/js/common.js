$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-106 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.mob-mnu__link').click(function() {
		$('.mob-mnu').toggleClass('show');
	});
	$('.mob-mnu-list__item, .mob-mnu__close').click(function() {
		$('.mob-mnu').removeClass('show');
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('.clients-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	$('.gallery-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 3,
		arrows: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	$('.gallery-slider__arrow-prev').click(function () {
		$('.gallery-slider').slick('slickPrev');
	});
	$('.gallery-slider__arrow-next').click(function () {
		$('.gallery-slider').slick('slickNext');
	});

	$('.jbi-slider, .park-slider, .catalog-slider_xs').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	if (window.innerWidth >= 768 ) {
		$('.catalog-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1
		});
	};

	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-50;
			} else {
				var top = block.offset().top+50;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});
	});


});
