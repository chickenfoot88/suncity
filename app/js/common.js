$(function() {

	//superfish menu
	jQuery('ul.sf-menu').superfish({
			cssArrows: false,
			delay: 500
	});


	//news preview slider
	var owl = $(".owl-carousel");

	owl.owlCarousel({
		items: 3,
		nav: false,
		slideBy: 3,
		dotsContainer: '.owl-dots',
		responsive:{
			992:{
				items:3
			},
			768:{
				items:2
			},
			320: {
				items:1
			}
		}
	});


	//news slider prev and next buttons
	var owlNav = $('.owl-pagination');

	var dotsCount = $('.owl-dot').length;

	owlNav.find('.prev').click(function() {
		owl.trigger('prev.owl.carousel');
	});

	owlNav.find('.next').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	});

	owlNav.find('.first').click(function() {
		owl.trigger('to.owl.carousel', 0);
	});

	owlNav.find('.last').click(function() {
		owl.trigger('to.owl.carousel', dotsCount - 1);
	});



	//slider numbers
	$(window).resize(function() {
		setOwlDotsNumber();
	});

	setOwlDotsNumber();

	function setOwlDotsNumber() {

		var dot = $('.owl-dot');

		dot.each(function() {
			var index = $(this).index();
			$(this).text(index + 1);

		});

		if (dot.length > 8) {

			$('.owl-dots').hide();

		} else {

		$('.owl-dots').show();

	}

	};

	//mobile menu
	$(".sf-menu").after('<div id="my-menu">');

	$(".sf-menu").clone().appendTo("#my-menu");

	$("#my-menu").find("*").attr("style", "");

	$("#my-menu").find("ul").removeClass("sf-menu");

	$("#my-menu").mmenu({

		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}

	});

	var api = $("#my-menu").data("mmenu");

	api.bind("closed", function () {

		$(".toggle-mnu").removeClass("on");

	});

	$(".mobile-mnu").click(function() {

		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		var triggerMnu = $(this).find(".toggle-mnu");
		triggerMnu.toggleClass("on");

		$(".main-mnu").slideToggle();

	  return false;

	});


	//work time
	var workMenu = $('.work-time-menu'),
			workLink = $('.work-time'),
			indexClick = 0;

	$ ( function() {

	workLink.click( function(event) {
		
			if (indexClick === 0) {

					workMenu.fadeIn(300);
					workLink.addClass('active');
					indexClick = 1;

				}	else {
					workMenu.fadeOut(300);
					indexClick = 0;
					workLink.removeClass('active');

				};

			event.stopPropagation();
			});
	});


	$(document).click(function(event) {

		if ($(event.target).closest(".work-time-menu").length) return;

			workMenu.fadeOut(300);

			workLink.removeClass('active');

			indexClick = 0;

			event.stopPropagation();

	});

});
