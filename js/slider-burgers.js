$(document).ready(function(){

	var coloringDots = function (index) {
		$('.content')
			.find('.slider__dot-item')
			.eq(index)
			.addClass('active')
			.siblings()
			.removeClass('active');
	}
	
	var moveSlide = function (container, slideNum) {
		var
			items = container.find('.slider__item'),
			activeItem = items.filter('.active-burger'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			list = container.find('.slider__list'),
			duration = 700;

		if (reqItem.length) {
			list.stop(true, true).animate({
				'left' : -reqIndex * 100 + '%'
			}, duration, function () {
				activeItem.removeClass('active-burger');
				reqItem.addClass('active-burger');
				coloringDots(slideNum);
			})
		}
	}

	var generateDots = function () {
		$('.slider__item').each(function () {
			var dot = $('<li>', {
				attr : {
					class : 'slider__dot-item'
				},
				html : '<div class="slider__dot-circle"></div>'
			});

			$('.slider__dots').append(dot);
		});
		coloringDots(0);
	};

	generateDots();
    
    
	$('.slider__btn').on('click', function(e){
	    e.preventDefault();

		var $this = $(this),
			container = $this.closest('.content'),
			items = container.find('.slider__item'),
			activeItem = items.filter('.active-burger'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('slider__btn-next')){ // листаем вперед
			if (nextItem.length) {
				moveSlide(container, nextItem.index());
			} else {
				moveSlide(container, 0);
			}
		} else { // листаем назад
			if (prevItem.length) {
				moveSlide(container, prevItem.index());
			} else {
				moveSlide(container, items.length - 1); // потому что length считает с 1, а eq считает с 0
			}
		}
	});

	$('body').on('click', '.slider__dot-item', function(e){
		var $this = $(this),
			container = $this.closest('.content'),
			index = $this.index();

		moveSlide(container, index);
		coloringDots(index);
	});
	
}); // -> ready_end;