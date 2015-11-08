$('.nav-nav_list li').on('click',function(e){
    if($(e.target).hasClass('active')){
    }else{
    var previous = $(".nav-nav_list .nav").children(".active");
    previous.removeClass('active');
    $(e.target).addClass('active');
    }
});
$('.hamburger').on('click', function() {
  $(this).toggleClass('open');
  var openclose = $(this).hasClass('open') ? 'Close' : 'Open';
  $(this).attr("title", openclose + ' Menu');
  $( ".mobile-nav" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});

$(window).resize(function() {
  if($(window).width() > 740 && $('.hamburger').hasClass('open')){
    $('.hamburger').toggleClass('open');
    var openclose = $('.hamburger').hasClass('open') ? 'Close' : 'Open';
    $('.hamburger').attr("title", openclose + ' Menu');
    $( ".mobile-nav" ).slideUp( "fast", function() {
      // Animation complete.
    });
  }
});
