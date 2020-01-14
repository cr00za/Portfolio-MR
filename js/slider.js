
/*
------------------------------------------------------------
Function to activate the contact form to open
------------------------------------------------------------
*/

$(document).ready(function(){
    $('.toggle').click(function(){
      $('.sidebar-contact').toggleClass('active');
      $('.toggle').toggleClass('active');
    })

  });


  $(document).ready(function(){
    $('.formSubmit').click(function(){
        $(".formResponse").show();
        $("#formView").hide();
    })
  });



  $(document).ready(function(){
    $('.formClose').click(function(){
        $('.sidebar-contact').toggleClass('active');
        $('.toggle').toggleClass('active');
        $(".formResponse").hide();
        $("#formView").show();

      })
  
    });
 
