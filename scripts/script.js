$(document).ready(function(){
  
  $('img').offset({top: 200, left: 400})
  $('#win').hide()
  
  $('#reset').on('click', function(){
    //move my doge back to the start 
     $("img").offset({ top: 200, left: 400})
     $('#win').hide()
   })
  
  $("img").draggable( 
  {
      stop: function() {
       // alert('dragged'); 
        
        if ($("img").position().left > 1200)
          {
            //they won
            $('#win').show()
          }
        // alert( $("img").position().left ); 
        
 
      }
  });  
 
  //TODO: if position is on the far rihgt side, tell user they won 
  
  
 
  
  
  
});