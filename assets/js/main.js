
// NAVBAR SCROLL
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navigation-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    var $navl = $(".navigation__link");
    $navl.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  });
});


// HEADER SLIDE SHOW
$(document).ready(function(){ 
  $(function(){
      $('.slideshow h1:gt(0)').hide();
      setInterval(function(){
        $('.slideshow :first-child').fadeOut(1500)
           .next('h1').fadeIn(5000)
           .end().appendTo('.slideshow');}, 
        6000);
  });
});