$(function () {
	// smooth scroll
	$('a[href^="#"]').click(function () {
	  var speed = 500;
	  var href = $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
	  $("html, body").animate({
		scrollTop: position
	  }, speed, "swing");
	  return false;
	});
  
	// hamburger menu
	$(".openbtn").click(function () {
	  $(this).toggleClass('active');
	  $("#sp-navi").toggleClass('panelactive');
	});
	
	$("#sp-navi a").click(function () {
	  $(".openbtn").removeClass('active');
	  $("#sp-navi").removeClass('panelactive');
	});
  
	// slick init
	$('.case-slider').slick({
	  centerMode: true,
	  centerPadding: '100px',
	  slidesToShow: 1,
	  variableWidth: true,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: true,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  infinite: true,
	  adaptiveHeight: false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 1,
			variableWidth: false
		  }
		}
	  ]
	});
  
	function adjustCaseItemHeight() {
	  var maxHeight = 0;
	  $('.case-slider .case-item').css('height', 'auto');
  
	  $('.case-slider .case-item').each(function(){
		var thisHeight = $(this).outerHeight();
		if (thisHeight > maxHeight) {
		  maxHeight = thisHeight;
		}
	  });
  
	  $('.case-slider .case-item').css('height', maxHeight + 'px');
	}
  
	adjustCaseItemHeight();
  
	$(window).on('resize', function(){
	  adjustCaseItemHeight();
	});

$('.openModal').click(function() {
	var imgSrc = $(this).attr('data-modal-img');
	$('.modal-img').attr('src', imgSrc);
	$('#modal').fadeIn();
  });
  
  $('.close').click(function() {
	$('#modal').fadeOut();
  });
  
  $('#modal').click(function(e) {
	if ($(e.target).is('#modal')) {
	  $(this).fadeOut();
	}
  });
    // IntersectionObserverで動画の自動再生
	const videoEl = document.getElementById('autoPlayVideo');

	if (videoEl) {
	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			videoEl.play();
		  } else {
			videoEl.pause();
		  }
		});
	  }, {
		threshold: 0.5
	  });
  
	  observer.observe(videoEl);
	}
  });
  // logos
$(function () {
	const $sliderWrap = $('.user-slider-wrap');
	const $slider = $('.user-slider ul');
  
	const $clone = $slider.clone();
	$('.user-slider').append($clone);
  
	let currentX = 0;
	const speed = .5; // スクロール速度（px/frame）
	const totalWidth = $slider.outerWidth();
  
	function animate() {
	  currentX -= speed;
	  if (Math.abs(currentX) >= totalWidth) {
		currentX = 0;
	  }
	  $('.user-slider').css('transform', `translateX(${currentX}px)`);
	  requestAnimationFrame(animate);
	}
  
	animate();
  });
  
  