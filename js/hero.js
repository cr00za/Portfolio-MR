/*-------------------------------*/
/***** HERO ANIMATION        *****/
/*-------------------------------*/


// Change glasses color on hover of different elements
$(document).ready(function(){
    

    $(".glassesPortfolio, .portfolioButton").hover(function() {
    $( '.glasses' ).attr("src","images/Portfolio Portrait-sky.svg");
    });

    $(".glassesAbout, .glassesProcess, .heroBlock").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-navy.svg");
    });

    $(".glassesHome, .glasses, .heroImageBlock, .contactButton, .jumbotron").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
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