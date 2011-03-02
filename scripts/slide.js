$(document).ready(function(){
	
	var h1_footer = $('#h1_footer').html();
	$('#h1_footer').remove();

	$('#left').prepend(h1_footer);
	
	var retour = true;var tempsTransition = 500;var currentPosition = 0;var slideWidth = 926;var slides = $('.slide');var numberOfSlides = slides.length;var interval;
	$('#slide_contenu').css('overflow', 'hidden');
	slides
		.wrapAll('<div id="slide_inf"></div>')
		.css({
			'float' : 'left',
			'width' : slideWidth
		});
	$('#slide_inf').css('width', slideWidth * numberOfSlides);
	$('#projet_slide')
		.prepend('<span class="control" id="gauche_ctrl"></span>')
		.append('<span class="control" id="droite_ctrl"></span>');
	manageControls(currentPosition);
	$('.control').bind('click', function(){
		currentPosition = ($(this).attr('id')=='droite_ctrl') ? currentPosition+1 : currentPosition-1;
		manageControls(currentPosition);
		$('#slide_inf').animate({'marginLeft' : slideWidth*(-currentPosition)},tempsTransition);
	});
function manageControls(position){
	$('#gauche_ctrl').show();
	$('#droite_ctrl').show();
	if(position == numberOfSlides && retour == true) currentPosition = 0;
	if(position == -1 && retour == true) currentPosition = numberOfSlides-1;
}
});