$("a.non-default[href='#']").click(function(e) {
    e.preventDefault();
});

$(document).ready(function(){
    /* Scroll all right */
	$('.arrow-all-right').click(function(){
        $('.carousel').carousel('next');
    });

    $('.pause-all').click(function(){
        if($('.pause-all').hasClass('pause')){
            $('.pause-all').removeClass('pause');
            $('.pause-all').addClass('play');
            $('.carousel').carousel('pause');
        }
        else{
            $('.pause-all').addClass('pause');
            $('.pause-all').removeClass('play');
            $('.carousel').carousel('cycle');
          $('.carousel').carousel('next');
        }
    });

    $('.arrow-all-left').click(function(){
        $('.carousel').carousel('prev');
    });
});


$(document).ready(function(){
	$(".share-this").click(function(){
		$('#modal-share').modal('show');
	});
});
