function topnav(){
	$(".nav li").hover(function(){
		$(this).find(".sub-nav li").show();
		$(this).find(".sub-nav .sub-nav li").hide();
		$('.sub-nav').each(function(){
			var dropdown = $(this).parent();
			dropdown.children().show();
			dropdown.find('.sub-nav .sub-nav li').css({"left": '143px', "top": '0px', 'visibility' : 'visible'});
		}),function(){
		dropdown.children().hide();
		}		
	},function(){
		$(this).find("ul li").hide();
	});
}

// function slideshow(){
	// $('.slide.active').each(function(){
	// 	setInterval(function(){ $(".slide.active").fadeOut(); }, 3000);
	// })

// }


function more(profile_id){
	$("#" + profile_id + "-hidden").toggle();
	$("#" + profile_id).innerHTML("More").toggle();
}

var debug = 0;
		var currentSlideId = 1;
		function slideChange(){
			// the total number of elemnets in our slideshow
			var count = document.getElementById('slideshow').children.length; 
		
			if(debug == 1){console.log(count);}
			
			nextSlideId = currentSlideId + 1;	// create the next element count
			currentSlide = '#slide' + currentSlideId; 	// create the current slide id
			nextSlide = '#slide' + nextSlideId;		  	// create the next slide id

			/* 
			 * IF the current slide is greater than or equal to the total number elements in
			 * our slideshow then fadeOut the last element (currentSlide) and fadeIn the 
			 * first element.
			 * ELSE fadeOut the current element and fadeIn the next element.
			 */
			if (currentSlideId >= count) {
				$(currentSlide).fadeOut(5000); 	// fades Out in 5 seconds
				$("#slide1").fadeIn(6000); 		// fades in in 6 seconds
					if(debug == 1)
						{console.log("currentSlideId " + currentSlideId + " count: " + count);}	
				// reset to zero so that it can be incremented to 1 later in our function.
				currentSlideId = 0; 
			}else{
				$(currentSlide).fadeOut(5000); // fades out in 5 seconds
				$(nextSlide).fadeIn(6000); //fades in in 6 second
			}
			
			currentSlideId += 1; // increment our current slide id so we can loop
		}

		/*
		 * Once the slideshow div has fully loaded trigger the onload function.
		 */
		$(function(){
			$('ul[onload]').trigger('onload');
		});

		/*
		 * Once the page has loaded the slideshow() function will be called so 
		 * that we can start our slide show.  Slideshow will execute every 7 
		 * seconds to trigger the sideChange() function.
		 */
		function slideshow(){
			// call slideChange() function every 7 seconds
			setInterval("slideChange()", 7000); 
		}

		var peopleFilter = function(position){
			switch(position){
				case 'admin':
					$('.all').css('display', 'none');
					$('.admin').css('display', 'block');
					highlight("admin");
					// document.getElementById('staffDisplayed').innerHTML = 'Our Staff > Admin Staff';
					break;
				case 'executive':
					$('.all').css('display', 'none');
					$('.executive').css('display', 'block');
					highlight("executive");
					// document.getElementById('staffDisplayed').innerHTML = 'Our Staff > Execuitve';
					break;
				case 'contractor':
					$('.all').css('display', 'none');
					$('.contractor').css('display', 'block');
					highlight("contractor");
					// document.getElementById('staffDisplayed').innerHTML = 'Our Staff > Contractor';
					break;
				default:
					$('.all').css('display', 'block');
					highlight('all');
					// document.getElementById('staffDisplayed').innerHTML = 'Our Staff';
					break;
			}
		};


var highlight = function(idChange){
	$('.category a').removeClass("btn-danger");
	$('.category a').addClass("btn-primary");
	var id = "#" + idChange;
	$(id).addClass("btn-danger");
};
$( document ).ready(function(){
	$(".sub-nav li").hide();
	topnav();
	$(".more").hide();
	
});
// 