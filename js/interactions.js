
//  when doc is ready do this function



// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
// scrollTop returns the scroll position
    

//when window scrolls do this function
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>45) {
        $(".navbar-custom").css("background", "rgba(2, 50, 70, 0.85)");
        $(".navbar-nav a").css("color", "#F6F6F6");
    }
    else {
        $(".navbar-custom").css("background", "transparent");
        $(".navbar-nav a").css("color", "#023246");
    }
});


$(document).ready(function() {
    $('.navbar-nav a').click(function(e) {
  
      var targetHref = $(this).attr('href');
  
      $('html, body').animate({
        scrollTop: $(targetHref).offset().top
      }, 1000);
  
      e.preventDefault();
    });
  });

// Smooth JS Anchor Scroll for normal # (make sure to include id="" in your links and not just a name="")
//Anchor Animation
// jQuery('a').click(function(){
//     jQuery('html, body').animate({
//         scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// }); 

// Trying to change the logo to dark version on screen size <768px
// $(document).ready(function(){
//     if( $(window).width() <= 768 ){
//         // do your stuff
//         $("#logo").attr("src", "images/logo-dark.svg");
//         $(".heroImageBlock").css("padding-bottom", "30%");
//     } 
// });
// Jquery Smooth scroll
//Anchor Animation
// jQuery('.nav-link').click(function(){
//     jQuery('html, body').animate({
//         scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// }); 

// $(document).ready(function(){
//     if (screen.width < 980) {
//         $(".heroImageBlock").css("padding-bottom", "30%");
//     }
// }


// $(document).ready(function(){
//     $('.heroBlock').popover({
//     trigger: "hover",
//         delay: {show : 3000, hide : 0} });
// });



// smooth scroll to anchor, with option of hash appearing in url. 
// (e) is the event handler
// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
// 	    e.preventDefault();
// 	    var target = this.hash;
// 	    var $target = $(target);
// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 900, 'swing', function () {
// 	        // window.location.hash = target;
// 	    });
// 	});
// });


