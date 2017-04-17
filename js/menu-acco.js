$(document).ready (function() {
	$('.menu-acco__trigger').on('click', function(e) {
  	e.preventDefault();
    
    var $this = $(this),
    		container = $this.closest('.menu-acco__list'),
        otherContent = container.find('.menu-acco__content'),
        items = container.find('.menu-acco__trigger'),
        item = $this.closest('.menu-acco__item'),
        content = item.find('.menu-acco__content'),
        title = $this.find('.menu-acco__trigger-title'),
        otherTitles = items.find('.menu-acco__trigger-title');
        
        if (!title.hasClass('menu-acco__trigger-title_active')) {
        	otherTitles.removeClass('menu-acco__trigger-title_active');
          title.addClass('menu-acco__trigger-title_active');
          
          otherContent.css({
          	'width': 0
          })
          
          content.css({
          	'width': 550
          })
        } else {
        	 title.removeClass('menu-acco__trigger-title_active');
           content.css({
          	'width': 0
          })
        }
        
  })
})