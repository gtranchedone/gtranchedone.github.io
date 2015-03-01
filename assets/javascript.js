String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

$(document).ready(function() {
	var n = '#nav', no = 'nav_list_open';
	var nb = '#nav_bar', nbo = 'nav_bar_open';
	var sc = '#social', sco = 'social_links_list_open';
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


  var group = [];
  $('.highlight').each(function() {
      group.push($(this));

      if(!$(this).next().hasClass('highlight')) {
        var container = $('<div class="highlight-group"></div>');
        container.insertBefore(group[0]);

        for (i in group) {
            group[i].appendTo(container);
        }

        group = [];
      }
  });

  $('.highlight-group').each(function() {
    var languages = [];
    $(this).find($("code")).each(function() {
      languages.push($(this).attr("data-lang"));
    });

    $(this).children(".highlight:not(:first-child)").hide();

    var span = $('<span class="language-toggle"></span>');
    for (i in languages) {
      var language = languages[i];
      var a = $('<a data-lang="' + language + '">' + language.capitalize(true) + '</a>');
      if (i == 0) {
        a.addClass('active');
      }
      span.append(a);
    }

    $(this).prepend(span);
  });

  $('a[data-lang]').on('click', function() {
    var lang = $(this).data('lang');
    $('a[data-lang=' + lang + ']').each( function() {
      $(this).siblings('a').removeClass('active');
      $(this).addClass('active');
      $(this).parent().siblings('.highlight').each(function() {
        if ($(this).find('code').data('lang') === lang) {
          $(this).show();
        } else {
          $(this).hide()
        }
      });
    });
  });
  
  $(document).ready(function() {
    $('.fb-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=650, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
  });
  
});