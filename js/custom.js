$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
	});
});


jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
	input = spinner.find('input[type="number"]'),
	btnUp = spinner.find('.quantity-up'),
	btnDown = spinner.find('.quantity-down'),
	min = input.attr('min'),
	max = input.attr('max');

  btnUp.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue >= max) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue + 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue <= min) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue - 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });

});

/*
$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  infinite: true,
  dots: false,
  arrows: true,
  nextArrow: '<i class="ti-angle-right"></i>',
  prevArrow: '<i class="ti-angle-left"></i>',
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1139,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
	{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
		arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
		dots: true,
		arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});*/
	if($('.wow').length){

		var wow = new WOW(

		  {

			boxClass:     'wow',      // animated element css class (default is wow)

			animateClass: 'animated', // animation css class (default is animated)

			offset:       0,          // distance to the element when triggering the animation (default is 0)

			mobile:       true,       // trigger animations on mobile devices (default is true)

			live:         true       // act on asynchronously loaded content (default is true)

		  }

		);

		wow.init();

	}
