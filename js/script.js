$('.nav-nav_list li').on('click',function(e){
    if($(e.target).hasClass('active')){
    }else{
    var previous = $(".nav-nav_list .nav").children(".active");
    previous.removeClass('active');
    $(e.target).addClass('active');
    }
});
$("#header__button").click(function() {
  $(this).toggleClass("hamburger--open");
  $( ".mobile-nav" ).slideToggle( "fast", function() { });
  $( ".mobile-look" ).slideUp( "fast", function() { });
   $('.mobile-look').removeClass('look--open');
});

$(".look").click(function() {
  $( ".mobile-look" ).slideToggle( "fast", function() { });
  $( ".mobile-nav" ).slideUp( "fast", function() { });
  $('.mobile-look').toggleClass('look--open');
  $('#header__button').removeClass('hamburger--open');
});

$(".main").click(function() {
  $( ".mobile-look" ).slideUp( "fast", function() { });
  $( ".mobile-nav" ).slideUp( "fast", function() { });
  $('#header__button').removeClass('hamburger--open');
   $('.mobile-look').removeClass('look--open');
});

$(window).resize(function() {
  if($(window).width() > 740 && ($('#header__button').hasClass('hamburger--open') || $('.mobile-look').hasClass('look--open'))){
    $('#header__button').removeClass('hamburger--open');
     $('.mobile-look').removeClass('look--open');
    $( ".mobile-nav" ).slideUp( "fast", function() { });
    $( ".mobile-look" ).slideUp( "fast", function() { });
  }
});
