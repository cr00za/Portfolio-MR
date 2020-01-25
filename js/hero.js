/*-------------------------------*/
/***** HERO ANIMATION        *****/
/*-------------------------------*/


// Change glasses color on hover of different elements
$(document).ready(function(){
    $(".glassesProcess").hover(function() {
    $( '.glasses' ).attr("src","images/Portfolio Portrait-sky.svg");
    });

    $(".toggle, .glassesPortfolio, .glassesHome, .glassesAbout").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
        
    });

    $(".heroBlock, .heroImageBlock").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-navy.svg");
    });

});

