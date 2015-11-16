var final_price;
var price_old;
var price;
var new_price_after_coma;
var new_price_before_coma;

$('.nav-list-item').on('click',function(e){
    if($(e.target).hasClass('active')){
    }else{
    var previous = $(".nav-nav_list .nav").children(".active");
    previous.removeClass('active');
    $(e.target).parent().addClass('active');
    }
});

//PHP CURL POST AND GET REST API

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
  if($(window).width() < 540 ){
  autoSizeText();
}else{
  $('.banner-text>span').css('font-size', '13.5px');
}
  if($(window).width() > 740 && ($('#header__button').hasClass('hamburger--open') || $('.mobile-look').hasClass('look--open'))){
    $('#header__button').removeClass('hamburger--open');
     $('.mobile-look').removeClass('look--open');
    $( ".mobile-nav" ).slideUp( "fast", function() { });
    $( ".mobile-look" ).slideUp( "fast", function() { });
  }
});

$(document).ready(function() {
  if($(document).width() < 540 ){
  autoSizeText();
}else{
  $('.banner-text>span').css('font-size', '13.5px');
}
    $("i.fa.fa-shopping-cart.mobile").attr('data-shoping-cart-items','0');
    $(".number-items").attr('data-shoping-cart-items','0');
    $(".number-price").attr('data-shoping-cart-price','00,00');
});

var autoSizeText;

autoSizeText = function() {
  var el, elements, i, len, results;
  elements = $('.banner-text>span');
  if (elements.length < 0) {
    return;
  }
  results = [];
  for (i = 0, len = elements.length; i < len; i++) {
    el = elements[i];
    results.push((function(el) {
      var resizeText, results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        results1.push(resizeText());
      }
      return results1;
    })(el));
  }
  return results;
};

$(".item_shop>.add-to-cart").click(function() {
    $("span.number-items").attr('data-shoping-cart-items',parseInt($("span.number-items").attr('data-shoping-cart-items')) + 1);
    price_old = $("span.number-price").attr('data-shoping-cart-price').split(",");
    price = $(this).parent().children(".price").attr('price-tag').split(",");
    new_price_before_coma = parseInt(price_old[0])+ parseInt(price[0]);
    new_price_after_coma = parseInt(price_old[1]) + parseInt(price[1]);
    if(new_price_after_coma>=100){
      new_price_before_coma = new_price_before_coma+1;
      new_price_after_coma = new_price_after_coma-100;
    }
    if(new_price_after_coma < 10){
      new_price_after_coma = "0"+ String(new_price_after_coma);
    }
    if(new_price_before_coma < 10){
      new_price_before_coma = "0"+ String(new_price_before_coma);
    }
    $("span.number-price").attr('data-shoping-cart-price',new_price_before_coma + "," + new_price_after_coma);
    //$("span.number-price").attr('data-shoping-cart-price',new_price_before_coma + "," + new_price_after_coma); //edit to mobile field
    $("i.fa.fa-shopping-cart.mobile").attr('data-shoping-cart-items',parseInt($("i.fa.fa-shopping-cart.mobile").attr('data-shoping-cart-items')) + 1);
  });
