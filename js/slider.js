
/*
------------------------------------------------------------
Function to activate the contact form to open
------------------------------------------------------------
*/

$(document).ready(function(){
    $('.toggle').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle').toggleClass('active')
    })
  })