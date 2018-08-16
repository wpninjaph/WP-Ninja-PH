jQuery(document).ready(function($) {

	$('#loader').hide('fade' , 500);

	$('body').css({
		overflow: 'auto',
	});;

	$(document).on('click', '.modal-nav', function(event) {
		event.preventDefault();
		
		if ( $('.modal-nav-container').is(':visible') ) {
			$('.modal-nav').removeClass('opened');
			$(".modal-nav-container").hide('slide' , { direction: 'right'} , 700);
			$('.modal-nav-content').css({
				right: '-100%',
				transition: '700ms ease-in-out',
			});
			
		}else{

			$(this).addClass('opened');
			$(".modal-nav-container").show('slide' , { direction: 'right'} , 700);
			$('.modal-nav-content').css({
				right: '0',
				transition: '700ms ease-in-out',
			});

		}
		
	});		

	$(document).on('click', '.header-top-expand a', function(event) {
		event.preventDefault();
		$('.header-top-drop').toggle('drop' , { direction: 'left'} , 500)
		
	});

	$(document).on('click', '.modal-nav-container', function(event) {
		event.preventDefault();

		if( event.target != this ) return;
		$('.modal-nav').removeClass('opened');
		$(".modal-nav-container").hide('slide' , { direction: 'right'} , 700);
		$('.modal-nav-content').css({
			right: '-100%',
			transition: '700ms ease-in-out',
		});
		
	});	

	siteContainerSet();
	headerSet();
	
 	$( window ).resize( function(){ 
 		siteContainerSet();
		headerSet();
    });

	function headerSet(){
    	$('#header').css({
	    	'width' : $('.site-container').width(),
	    });
    }

    function siteContainerSet(){
    	$('.site-container').css({
	    	'padding-top': $('#header').height(),
	    });
    }
 
});