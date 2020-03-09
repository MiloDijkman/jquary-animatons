$('#barack p').slideToggle(300);


$(document).ready(function(){
  $("#barack img").click(function(){
    $("#barack p").slideToggle("slow");
  });
});

$('#marther p').slideToggle(300);


$('#marther').click(function(){
    $('#marther h3').slideToggle(300);
    $('#marther p').slideToggle(300);
  });


  $(document).ready(function(){
    $("#ironman img").click(function(){
      $("#ironman p").fadeToggle(3000);
        $("#ironman h3").fadeToggle(3000);
    });
  });

  $(document).ready(function(){
    $("#bighero6 img").click(function(){
      $("#bighero6 img").fadeTo("slow", 0).fadeTo("slow", 1).delay(5000);
    });
  });
