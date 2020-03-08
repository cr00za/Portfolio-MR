
// Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});
// Bootstrap Carousel 
 

/*-------------------------------*/
/***** SMOOTH SCROLL         *****/
/*-------------------------------*/
// Smooth Scroll
// Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.links a' ).on( 'click', function(e){
	
  // Define variable of the clicked »a« element (»this«) and get its href value.
  var href = $(this).attr( 'href' );

  // Run a scroll animation to the position of the element which has the same id like the href value.
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top
  }, '800' );
  // Prevent the browser from showing the attribute name of the clicked link in the address bar
  e.preventDefault();
});
  

$('.navbar-collapse a').click(function (e) {
    $('.show').collapse('toggle');
  });

  $(".navbar-custom").css("background", "rgba(255, 255, 255, 0)");
// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
// scrollTop returns the scroll position
//when window scrolls do this function
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    
   

    if(scroll>2) {
        $(".navbar-custom").css("background", "rgba(246, 246, 246, 1)");
        $(".navbar-light .navbar-nav .nav-link.active").css("color", "#023246");
        $(".navbar-nav a").css("color", "#023246");
        // $("nav").removeClass("navbar-light").addClass("navbar-dark");
        $("#logo").attr("src","images/Logo-dark.svg");
        $("nav #navbarNavAltMarkup").removeClass("stroke").addClass("scroller");

    }
    else {
        $(".navbar-custom").css("background", "rgba(246, 246, 246, 0)");
        $(".navbar-light .navbar-nav .nav-link.active").css("color", "#023246");
        $(".navbar-nav a").css("color", "#023246");
        $("nav").removeClass("navbar-dark").addClass("navbar-light");   
        $("#logo").attr("src","images/Logo-light.svg");
        $("nav #navbarNavAltMarkup").removeClass("scroller").addClass("stroke");
    }


});

/*-------------------------------*/
/***** HERO ANIMATION        *****/
/*-------------------------------*/


// Change glasses color on hover of different elements
$(document).ready(function(){
    

  $(".glassesPortfolio, .portfolioButton").hover(function() {
  $( '.glasses' ).attr("src","images/Portfolio Portrait-sky.svg");
  });

  $(".glassesAbout, .glassesProcess").hover(function() {
      $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
  });

  $(".glassesHome, .glasses, myright-side .heroImageBlock, .contactButton, .jumbotron").hover(function() {
      $( '.glasses' ).attr("src","images/Portfolio Portrait-navy.svg");
  });
});



  // switching active class when clicking on a navigation item
  $('a.js-anchor-link').click(function(){
      $('a.js-anchor-link').removeClass('active');
      $(this).addClass('active');
  });

// $(".qa-faq-title").click( function(){
//     $(".qa-faq-title.active").removeClass("active");

//     $(this).addClass("active");
// });