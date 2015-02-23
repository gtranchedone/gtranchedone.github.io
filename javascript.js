$(document).ready(function() {
	var n = '#nav', no = 'nav_list_open', sc = '#social', sco = 'social_links_list_open', nb = '#nav_bar', nbo = 'nav_bar_open';
	$('#nav_menu').click(function() {
		if ($(n).hasClass(no)) {
			$(n).animate({height:0}, 300);
			$(sc).animate({height:0}, 300);
			setTimeout(function() {
				$(n).removeClass(no).removeAttr('style');
				$(sc).removeClass(sco).removeAttr('style');
				$(nb).removeClass(nbo);
			}, 320);
		}
		else {
			var newH = $(n).css('height','auto').height();
			$(n).height(0).animate({height: newH}, 300);
			var newH2 = $(sc).css('height','auto').height();
			$(sc).height(0).animate({height: newH2}, 300);
			$(nb).addClass(nbo);
			setTimeout(function() {
				$(n).addClass(no).removeAttr('style');
				$(sc).addClass(sco).removeAttr('style');
			}, 320);
		}
	});
	
	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 20
	    }, 500, 'swing', function () {
		    // do nothing
	    });
	});
});