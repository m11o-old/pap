// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();

  function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#tf-menu').addClass('stick');
    } else {
        $('#tf-menu').removeClass('stick');
    }
  }

  $(document).ready(function(){
    $('.skillbar').skillBars({
      from: 0,
      speed: 4000, 
      interval: 100,
      decimals: 0,
    });
  });

  $("#tf-portfolio .portfolio-item.trim img").click(function() {
    var item_name = $(this).parent().data("item-name");

    var portfolio_desc = $(this).parents(".portfolios").next();

    var _target = portfolio_desc.find(".portfolio-desc-item." + item_name);
    portfolio_desc.slideUp("slow", function() {
      _target.siblings().hide();

      if (_target.css("display") == 'none') {
        portfolio_desc.slideDown("show");
        _target.show();
      } else {
        portfolio_desc.slideUp("slow");
        _target.hide();
      }
    });
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});