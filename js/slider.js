
/*
------------------------------------------------------------
Function to activate the contact form to open
------------------------------------------------------------
*/

$(document).ready(function(){
    $('.toggle, .formClose').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle').toggleClass('active')
    })

  });



  $(document).ready(function(){
    $('.formSubmit').click(function(){
        $(".formResponse").show();
        $('.formBlanket').css("background-color", "#023246");
    })
});
//   if ($('.formSubmit').hasClass('active' {
//     display: "show";
// }