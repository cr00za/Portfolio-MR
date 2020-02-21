

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
  
// Fading Text into focus
// $(document).ready(function(){
//   AOS.init({
//     duration: 1200,
//   })
// });

$('.navbar-collapse a').click(function (e) {
    $('.show').collapse('toggle');
  });

  $(".navbar-custom").css("background", "rgba(255, 255, 255, 0)");
// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
// scrollTop returns the scroll position
//when window scrolls do this function
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    
   

    if(scroll>20) {
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



// $(document).ready(function () {
//   $(document).on("scroll", onScroll);
  
//   //smoothscroll
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
      
//       $('a').each(function () {
//           $(this).removeClass('active');
//       })
//       $(this).addClass('active');
    
//       var target = this.hash,
//           menu = target;
//       $target = $(target);
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top+2
//       }, 500, 'swing', function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//       });
//   });
// });

// function onScroll(event){
//   var scrollPos = $(document).scrollTop();
//   $('#menu-center a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('#menu-center ul li a').removeClass("active");
//           currLink.addClass("active");
//       }
//       else{
//           currLink.removeClass("active");
//       }
//   });
// }


// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });





// Trying to change the logo to dark version on screen size <768px
// $(document).ready(function(){
//     if( $(window).width() <= 768 ){
//         // do your stuff
//         $("#logo").attr("src", "images/logo-dark.svg");
//         $(".heroImageBlock").css("padding-bottom", "30%");
//     } 
// });



