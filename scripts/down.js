//INIT MOOTOOLS
window.addEvent('domready', function() {
	var btns = [$('roll_A'), $('roll_B')]; //The buttons to trigger the slides;
	var slides = [$('realisations'), $('contact')]; //The elements to be slides;
	var mySlide = [];
	var openSlide = -1; //Create a flag variable to be checked and test if any slide is opened;
 
	slides.each(function(slide, idx) { //For each element in slides do...
		mySlide[idx] = new Fx.Slide(slide, {duration: 400}).hide(); //Create an array with the Fx.Slide for each element in slides and hides it;
		btns[idx].addEvent('click', function(e) { //Add a click event for each element in btns;
			e = new Event(e);
			if ( openSlide == -1 ) { //Check if a slide has been opened before;
				openSlide = idx;
				mySlide[idx].slideIn(); //Slide In the slide;
				SwitchStyle(btns[idx]); // Style ouvert
			} else {
				mySlide[openSlide].slideOut(); //Slide Out the previous openened slide;
				SwitchStyle(btns[openSlide]); //exchange style before;				
				mySlide[idx].slideIn(); //Slide In the slide;
				if ( openSlide != idx ) {openSlide = idx; SwitchStyle(btns[idx]);} //openSlide will now be the current open slide;
				else openSlide = -1; //If closing the open item, will reset openSlide to it's initial state;							
			}
			e.stop();
		});
	});
});
function SwitchStyle(target){
	if(target.className == 'A'){target.className = 'B';}
	else{target.className = 'A';}}