
$(document).ready(function(){

    /* Open an item */
	$('.item-portfolio').click(function(){
      if($(this).parent().parent().parent().hasClass('active')){

      }else{
        $(this).parent().parent().parent().addClass('active');
    };
      return false;
	});

    /* close opened item */
	$('.close').click(function(){$(this).parent().parent().removeClass('active');
      return false;
	});

});
