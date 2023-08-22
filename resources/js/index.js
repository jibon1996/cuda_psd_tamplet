// mixitup js 
$(document).ready(function(){

 
  //sticky menu wapoint js
  $('.js--services-section').waypoint(function(direction){
     if(direction == "down"){
       $("nav").addClass("sticky");
     }else{
      $("nav").removeClass("sticky");
     }
  });

  //mixitup js(fortfolio sectione)
   var mixer = mixitup('.box-list');

   // matchheigt all div / col
   var heights = [];
   $('.branding').each(function(){
    heights.push($(this).height());
   });
   var maxHight = Math.max.apply(null,heights);
   $('.branding').height(maxHight);



});

    

 // button-group on button active and remove 
 $('.button-group').on( 'click', 'button', function() {
   $(this).siblings('.active').removeClass('active');
   $(this).addClass('active'); 

  });

       // Waypoint use for doing menu bar positon fixed 

$('.menu_bar').waypoint(function(direction) {
  if (direction == 'down') {
   $('.freeze_column').css({'position':'fixed'});
   }
 if (direction == 'up') {
   $('.freeze_column').css({'position':'absolute'});

 }
}); 
 
  // js for mobile menu 
 function open_nav(){
  document.querySelector("#overlay").style.width="100%";


 }

 function close_nav(){
  document.querySelector("#overlay").style.width="0%";
 }
 