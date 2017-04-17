$(function () {

	var sections = $('.section'),
		display = $('.maincontent'),
		inScroll = false,
		screen = 0;

	var scrollToSection = function (sectionEq) {

		var position;

		position = (sections.eq(sectionEq).index() * -100) + '%';

		sections.eq(sectionEq).addClass('active')
			.siblings()
			.removeClass('active');

		display.css({
			'transform' : 'translate3d(0, ' + position + ', 0)'
		})

		setTimeout(function () {
			inScroll = false;

			$('.side_menu__item').eq(sectionEq)
				.addClass('activeOPS')
				.siblings()
				.removeClass('activeOPS');
		}, 1000)

	}

	document.querySelector('.wrapper')
		.addEventListener('wheel', function(e) {

			var activeSection = sections.filter('.active');

			if (!inScroll) {
				inScroll = true;

				if (e.deltaY > 0) {
					if (activeSection.next().length) {
						screen = activeSection.next().index();
					}
				}

				if (e.deltaY < 0) {
					if (activeSection.prev().length) {
						screen = activeSection.prev().index();
					}
				}

				scrollToSection(screen);
			}
		});

	$('.down-arrow').on('click', function(e) {
		e.preventDefault();

		scrollToSection(1);
	});

	$('.side_menu__link, .menu__link, .order-button').on('click', function(e) {
		e.preventDefault();

		var href = parseInt($(this).attr('href'));

		scrollToSection(href);
	});

	$(document).on('keydown', function(e) {

		var activeSection = sections.filter('.active');

		if ($(e.target).is('textarea')) return

		switch (e.keyCode) {
			case 38 :
				if (activeSection.prev().length) {
					screen = activeSection.prev().index();
				}
				break;

			case 40 :
				if (activeSection.next().length) {
					screen = activeSection.next().index();
				}
				break;
			default :
				screen = 6
		}

		scrollToSection(screen)
	});

});

