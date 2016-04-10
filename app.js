
$(document).ready(function(){

//------------------------------------------
//			DOCUMENT READY
//------------------------------------------


	$('.js-like').on('click', function(event){  //Like ANCHOR
		event.preventDefault();

		$(this).text('Liked!').closest('.news-item').addClass('is-liked');

	});

	$('.js-add-link').on('click', function(event){  //ADD LINK ANCHor
		event.preventDefault();

		$('.js-form').toggleClass('is-visible');
	});

	$('.js-show-modal').on('click', function(e){      ///SHOW MODAL
		e.preventDefault();  

		$('.modal').addClass('is-visible');
		$('.js-modal-overlay').addClass('is-visible');
	});

	$('.js-modal-overlay').on('click', function(e){    ///HIDE MODAL
		e.preventDefault();

		$('.modal').removeClass('is-visible');
		$('.js-modal-overlay').removeClass('is-visible');
	});


});