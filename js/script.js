$(document).ready(function() {

	// mobile view nav button
	var $nav = $('nav'),
		$button = $('header a');

	$button.click(function() {
		$nav.toggleClass('expanded');
	});



//main websites fly in
	$(window).scroll(function() {
		var y = $(window).scrollTop();
		if (y >= 400) {
			$('main #mySkills ul').addClass('animate');
		}
		if (y >= 800) {
			$('main #travelSydney .col1').addClass('animate');
			$('main #travelSydney .col2').addClass('animate');
		}
		if (y >1500) {
			$('main #bc .col1').addClass('animate');
			$('main #bc .col2').addClass('animate');
		}
		if (y >2000) {
			$('main #tafeSydney .col1').addClass('animate');
			$('main #tafeSydney .col2').addClass('animate');
		}
		if (y >2500) {
			$('main #bcShopping .col1').addClass('animate');
			$('main #bcShopping .col2').addClass('animate');
		}
		if (y >3000) {
			$('main #cms .col1').addClass('animate');
			$('main #cms .col2').addClass('animate');
		}
	});



	//scroll down to the section
	$(function() {
		$('a').click(function() {
			if(this.hash) {
				var hash = this.hash.substr(1);
				var $toElement = $('#' + hash );
				console.log($toElement);
				var toPosition = $toElement.position().top;
				$('body, html').animate({
					scrollTop : toPosition
				}, 2000, 'easeOutExpo');

				return false;
			}
		});
		if(location.hash) {
			var hash = location.hash;
			window.scroll(0,0);
			$('a[href=' + hash + ']').click();
		}
	});

	//



});