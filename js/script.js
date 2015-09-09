$(document).ready(function() {

	// mobile view nav button
	var $nav = $('nav'),
		$button = $('header a');

	$button.click(function() {
		$nav.toggleClass('expanded');
	});


	//scroll down to the section
	$(function() {
		$('a').click(function() {
			console.log(11111);
			if(this.hash) {
				var hash = this.hash.substr(1);
				var $toElement = $('#' + hash );
				var toPosition = $toElement.offset().top;
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


//main websites fly in
	$(window).scroll(function() {
		var y = $(window).scrollTop();
		if (y >= 800) {
			$('main #mySkills ul').addClass('animate');
		}
		if (y >= 1100) {
			$('main #travelSydney .col1').addClass('animate');
			$('main #travelSydney .col2').addClass('animate');
		}
		if (y >1700) {
			$('main #bc .col1').addClass('animate');
			$('main #bc .col2').addClass('animate');
		}
		if (y >2300) {
			$('main #tafeSydney .col1').addClass('animate');
			$('main #tafeSydney .col2').addClass('animate');
		}
		if (y >2900) {
			$('main #bcShopping .col1').addClass('animate');
			$('main #bcShopping .col2').addClass('animate');
		}
		if (y >3400) {
			$('main #cms .col1').addClass('animate');
			$('main #cms .col2').addClass('animate');
		}
	});








});