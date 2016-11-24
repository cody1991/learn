(function() {
	var opt = {
		'type': 1,
		'pageShow': function() {},
		'pageHide': function() {},
		'useArrow': true,
		'useAnimation': false,
		'useMusic': {
			'autoPlay': true,
			'loopPlay': true,
			'src': 'http://mat1.gtimg.com/news/2015/love/FadeAway.mp3'
		}
	}
	window.fullpage = {
		'init': function(option) {
			$.extend(opt, option);
			initDom(opt);
			initEvent(opt);
		}
	}

	var dragThreshold = 0.15;
	var dragStart = null;
	var percentage = 0;
	var currentItem;

	var obj = {
		'1': {
			'upDrag': function(percentage, item) {
				var translateY = 1 - 0.7 * percentage;
				item.next().css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0');
			},
			'downDrag': function(percentage, item) {
				var translateY = -(0.7 * percentage);
				item.prev().css('-webkit-transform', 'translate3d(0,' + (translateY * 100 - 100) + '%,0');
				item.css('-webkit-transform', 'translate3d(0,' + translateY * 100 + '%,0');
			},
			'nextSlide': function(item) {
				item.css('-webkit-transform', 'translate3d(0,-100%,0)');
				item.next().css('-webkit-transform', 'translate3d(0,0,0)');
			},
			'prevSlide': function(item) {
				item.prev().css('-webkit-transform', 'scale(1)');
				item.css('-webkit-transform', 'translate3d(0,100%,0)');
			},
			'showSlide': function(item) {
				item.css('-webkit-transform', 'scale(1)');
				item.next().css('-webkit-transform', 'translate3d(0,100%,0)');
			}
		}
	}

	function initEvent(opt) {
		$('.music').on('tap', function() {
			$(this).toggleClass('play');
			var audio = document.getElementById('audio');
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause;
			}
		});

		$(document).on('touchmove', function(e) {
			e.preventDefault();
		});

		if (opt.type > 4) {
			opt.type = opt.type - 4;
			$('.item').on({
				'swipeUp': swipeUp,
				'swipeDown': swipeDown
			});
		} else {
			$('.item').on({
				'touchstart': touchstart,
				'touchmove': touchmove,
				'touchend': touchend,
				'touchcancel': touchend
			})
		}

		$('.item').on('tap', function() {
			$('.overlay').hide();
		});
		$('.overlay').on('tap', function() {
			$('.overlay').hide();
		});

		$('.item').on('transitionend webkitTransitionEnd', function(e) {
			$('.overlay').hide();
			if ($(e.target).attr('state') == 'next') {
				opt.pageShow(e.taregt);
			} else {
				opt.pageHide(e.target);
			}
		});
	}

	function touchstart(e) {
		console.log(dragStart);
		if (dragStart !== null) {
			return;
		}
		var item = $(e.target).closest('.item');
		if (!item.length) {
			$('.overlay').hide();
			return;
		}
		if (event.touches) {
			event = event.touches[0];
		}

		dragStart = event.clientY;

		item.addClass('no-animation');
		item.next().addClass('no-animation');
		item.prev().addClass('no-animation');
	}

	function touchmove(e) {
		e.preventDefault();
		if (dragStart === null) {
			return;
		}
		var item = $(e.target).closest('.item');
		if (!item.length) {
			$('.overlay').hide();
			return;
		}
		if (e.touches) {
			e = e.touches[0];
		}

		percentage = (dragStart - e.clientY) / window.screen.height;


		if (percentage > 0) {
			var scale = 1 - 0.5 * percentage;
			obj[opt.type].upDrag(percentage, item);
		} else if (item.prev()) {
			obj[opt.type].downDrag(percentage, item);
		}
	}

	function touchend(e) {
		$('.overlay').show();
		dragStart = null;
		var item = $(e.target).closest('.item');
		if (!item.length) {
			$('.overlay').hide();
			return;
		}

		item.removeClass('no-animation');
		item.next().removeClass('no-animation');
		item.prev().removeClass('no-animation');

		if (percentage >= dragThreshold) {
			nextSlide(item);
		} else if (Math.abs(percentage) >= dragThreshold) {
			prevSlide(item);
		} else {
			showSlide(item);
		}
		percentage = 0;
	}

	function nextSlide(item) {
		if (item.next().length) {
			item.attr('state', 'prev');
			item.siblings('.item').removeAttr('state');
			currentItem = item.next();
			currentItem.attr('state', 'next');

			orderPart(item.next());
			obj[opt.type].nextSlide(item);
		} else {
			obj[opt.type].showSlide(item);
		}
	}

	function prevSlide(item) {
		if (item.prev().length) {
			item.attr('state', 'prev');
			item.siblings('.item').removeAttr('state');
			currentItem = item.prev();
			currentItem.attr('state', 'next');
			obj[opt.type].prevSlide(item);
		} else {
			obj[opt.type].showSlide(item);
		}
	}

	function showSlide(item) {
		//$(event.target).removeClass('parallax-item');
		obj[opt.type].showSlide(item);
	}

	function initDom(opt) {
		$('body').addClass('fullpage');

		var items;
		currentItem = $('.item').first();
		currentItem.attr('state', 'next');

		if (opt.useAnimation) {
			items = $('.item');
			items.find('.part').addClass('hide');
			orderPart(items.first());
		}
		$('body').append('<div class="overlay"></div>');

		if (opt.useArrow) {
			$('.item').slice(0, $('.item').length - 1).append('<span class="arrow"></span>');
		}
		if (opt.useMusic) {
			var autoplay = opt.useMusic.autoPlay ? 'autoplay="autoplay"' : '';
			var loopPlay = opt.useMusic.loopPlay ? 'loop="loop"' : '';
			var src = opt.useMusic.src;
			$('body').append('<span class="music play"><audio id="audio" src=' + src + ' ' + autoplay + ' ' + loopPlay + '><audio></span>');
		}
	}

	function orderPart(dom) {
		var parts = $(dom).find('.part');
		parts.forEach(function(item) {
			var time = $(item).attr('data-delay') || 100;
			setTimeout(function() {
				$(item).removeClass('hide');
			}, time)
		});
	}
})();