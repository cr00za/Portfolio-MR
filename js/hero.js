/*-------------------------------*/
/***** HERO ANIMATION        *****/
/*-------------------------------*/


// Change glasses color on hover of different elements
$(document).ready(function(){
    $(".glassesProcess").hover(function() {
    $( '.glasses' ).attr("src","images/Portfolio Portrait-sky.svg");
    });

    $(".toggle, sidebar-contact, .glassesPortfolio, .glassesHome, glassesAbout").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
        
    });

    $(".jumbotron, .heroBlock, .heroImageBlock").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-navy.svg");
    });

});

