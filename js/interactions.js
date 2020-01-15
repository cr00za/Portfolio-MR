

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
  }, '500' );
	
  // Prevent the browser from showing the attribute name of the clicked link in the address bar
  e.preventDefault();
});
  
// Fading Text into focus
// $(document).ready(function(){
//   AOS.init({
//     duration: 1200,
//   })
// });

$('.navbar-collapse a').click(function (e) {
    $('.show').collapse('toggle');
  });


// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
// scrollTop returns the scroll position
//when window scrolls do this function
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>20) {
        $(".navbar-custom").css("background", "rgba(2, 50, 70, .95)");
        $(".navbar-nav a").css("color", "#FFF");
        $("nav").removeClass("navbar-light").addClass("navbar-dark");
        $("#logo").attr("src","images/Logo-light.svg");
        $("nav #navbarNavAltMarkup").removeClass("stroke").addClass("scroller");
    }
    else {
        $(".navbar-custom").css("background", "rgba(255, 255, 255, 1)");
        $(".navbar-nav a").css("color", "#023246");
        $("nav").removeClass("navbar-dark").addClass("navbar-light");   
        $("#logo").attr("src","images/Logo-dark.svg");
        $("nav #navbarNavAltMarkup").removeClass("scroller").addClass("stroke");
    }

});







// Trying to change the logo to dark version on screen size <768px
// $(document).ready(function(){
//     if( $(window).width() <= 768 ){
//         // do your stuff
//         $("#logo").attr("src", "images/logo-dark.svg");
//         $(".heroImageBlock").css("padding-bottom", "30%");
//     } 
// });



