$(document).ready(function(){
   $('.sidebar a.collapsed').click( function(e) {
        $('.fa-chevron-left').addClass('fa-rotate-45');
        $('.collapse').collapse('hide').delay(1000).queue(function(next){
           $('.collapse.show').collapse('show');
           next();
       });
    });
    $("#btn-sidebar").click(function(){
      if ($(".sidebar").hasClass('close')) {
         $(".sidebar").removeClass("close w-0").addClass("overflow-hidden");
         $("#main").removeClass('main-lg').delay(1000).queue(function(next){
            $('.sidebar').removeClass("overflow-hidden");
            next();
        });
      } else if ($(".sidebar").hasClass('open')) {
          $(".sidebar").addClass('w-0 overflow-hidden').delay(1000).queue(
            function(next) {
              $(".sidebar").removeClass("open overflow-hidden").addClass('close');
              $(".sub-menu.show").collapse('hide');
              $('#main').removeClass("main-sm").addClass('main-lg');
             next();
         });
       } else {
           $("#main").addClass('main-sm');
           $('.sidebar').addClass("open overflow-hidden").delay(1000).queue(
             function(next) {
              $('.sidebar').removeClass("overflow-hidden");
              next();
          });
       }
    });
});
