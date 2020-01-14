$(document).ready(function(){
    $(".toggle, sidebar-contact").hover(function() {
    $( '.glasses' ).attr("src","images/Portfolio Portrait-sky.svg");
    });

    $(".glassesPortfolio").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-navy.svg");
        
    });

    $(".jumbotron, .heroBlock, .heroImageBlock").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
    });

    $(".glassesHome").hover(function() {
        $( '.glasses' ).attr("src","images/Portfolio Portrait-blue.svg");
    });

});

