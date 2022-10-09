// CHAT STUFF

function showChats() {
  $(".onload").removeClass("onload");
}

window.onload = showChats;

$("a.page-link[href='#']").click(function(e) {
    e.preventDefault();
});

$(document).ready(function(){
	$(".share-this").click(function(){
		$('#modal-share').modal('show');
	});
  $(".answer-button").click(function() {
      $('html, body').animate({
          scrollTop: $(this).parent().parent().parent().offset().top
      }, 900);
      $(this).parent().parent().children().children().removeClass("active");
      $(this).addClass('active');
  });
});
