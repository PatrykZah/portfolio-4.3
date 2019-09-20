'use strict';

function range(percent,min=0,max=100) {return (percent * (max - min) / 100) + min}

	'use strict';
//key: AIzaSyCV5qFMiOUGRXAL67rB-D18TVEWPjYNGVI

	///////////////////
	// Google Map

	let office_loc = {lat: 51.0822209, lng: 16.966562}
	
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: office_loc});
	}
	
	///////////////////
	// Flickity
	
	let elem = document.querySelector('#carousel');
	if(elem){
		let flkty = new Flickity( elem, {
			contain: true,
			autoPlay: 1500,
			pauseAutoPlayOnHover: false,
			initialIndex: 1,
			prevNextButtons: false
		});
		
		flkty.options.autoPlay = 4000
		
		window.flkty = flkty
		
		let progressBar = document.querySelector('#carousel+.progress-bar')
		if(progressBar){
			let bar_scale = 100/flkty.cells.length
			flkty.on( 'scroll', function( progress ) {
				
				//progress = Math.max( 0, Math.min( 1, progress ) );
				//progressBar.style.width = progress * 100 + '%';
				
				//progressBar.style.width = Math.max(bar_scale,progress*(flkty.cells.length+1)+'%';
				progressBar.style.width = range(progress*100,bar_scale,100)+'%'
			});
		}
	}
/*
		// options
		setGallerySize: false
		cellAlign: 'left',
		contain: true,
		pageDots: false
	
*/

