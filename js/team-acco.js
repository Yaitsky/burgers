$(document).ready (function() {
	$('.team__trigger').on('click', function(e) {
  	e.preventDefault();
    
    var $this = $(this),
    		container = $this.closest('.team__list'),
        otherContent = container.find('.team__block'),
        items = container.find('.team__trigger'),
        item = $this.closest('.team__item'),
        content = item.find('.team__block'),
        reqHeight = item.find('.team__block-container').outerHeight(),
        triangle = $this.find('.team__triangle'),
        triangles = items.find('.team__triangle');
        
        if (!triangle.hasClass('team__triangle_active')) {
        	triangles.removeClass('team__triangle_active');
          triangle.addClass('team__triangle_active');
          
          otherContent.css({
          	'height': 0
          })
          
          content.css({
          	'height': reqHeight
          })
        } else {
        	 triangle.removeClass('team__triangle_active');
           content.css({
          	'height': 0
          })
        }
        
  })
})