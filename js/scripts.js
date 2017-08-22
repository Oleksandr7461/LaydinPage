$(function(){
	$('.collapse').on('show.bs.collapse', function(){
			$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle')
	});
	$('.collapse').on('hide.bs.collapse', function(){
			$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle')
	});
	$('#myForm').validator({
		feedback: {
			success: 'fa fa-check-circle',
			error: 'fa fa-times-circle'
		}
	});

	$('.form-sel').select2({
		minimumResultsForSearch: Infinity
	});

	new WOW({
		offset: 100
	}).init();

  
  
    /* modals
    =======================*/

    $(".js-show-modal").on("click", function(e){

      e.preventDefault();
      
      var currentModal = $(this).attr("href");
      
      $(currentModal+ ", #js-overlay").fadeIn(600);
      $("body").addClass("open-modal");

    });
  
    $("#js-overlay, .js-modal-close").on("click", function(e){
      
      e.preventDefault();
      $(".js-modal, #js-overlay").fadeOut(400);
      $("body").removeClass("open-modal");
    });

});


  