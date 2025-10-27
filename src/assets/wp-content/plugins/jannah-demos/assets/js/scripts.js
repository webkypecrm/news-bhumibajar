var $doc  = jQuery(document),
    $html = jQuery('html'),
    $body = jQuery('body');

$doc.ready(function($){

	var $popup = jQuery('#tie-popup-demos'),
      $popupContent = $popup.find('.container-wrapper');

	$doc.on( 'click', '#demos-aside-open', function (event){
		event.preventDefault();
		$body.addClass('popup-demos-is-opend');
		$html.css({'overflow': 'hidden'});

		if( ! $popup.hasClass('lazyLoad-completed') ){
			$popup.addClass('lazyLoad-completed').find('.demo-lazy-img').each(function() {
				jQuery(this).attr("src", jQuery(this).attr("data-demosrc")).removeAttr("data-demosrc");
			});
		}

		$popup.fadeIn('fast');
	});

	// Close popup when clicking the esc keyboard button
	$doc.keyup(function(event){
		if ( event.which == '27' ){
			close_popup();
		}
	});

	// Close Popup when click on the background
	$popup.on('click', function(event){
		if( jQuery( event.target ).is('.popup-content')){
			event.preventDefault();
			close_popup();
		}
	});

	// Close Popup when click on the close button
	jQuery('.panel-btn-close').on( 'click', function (){
		close_popup();
		return false;
	});

	// Popup close function
	function close_popup(){
		$popup.fadeOut( 'fast', function() {
		// Animation complete.
			$html.removeAttr('style');
		 });
		$body.removeClass('popup-demos-is-opend');
	}
});
