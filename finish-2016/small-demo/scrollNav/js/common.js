$(function() {
  var $container = $('.container'),
    $sections = $container.find('.bg'),
    $win = $(window),
    curSectionIndex = 0,
    $navContainer = $('.nav'),
    $navs = $navContainer.find('li'),
    isClickScrolling = false,
    isInit = true;

  var sectionScrollTop = [];

  $sections.each(function(i) {
    var $this = $(this);
    sectionScrollTop.push($this.offset().top);
  });

  calcNav();

  function calcNav() {
    var curWinScrollTop = $win.scrollTop();

    for (var i = 0; i < sectionScrollTop.length; i++) {

      if (i != sectionScrollTop.length - 1) {
        var curTop = sectionScrollTop[i];
        var nextTop = sectionScrollTop[i + 1];

        if (curWinScrollTop >= curTop && curWinScrollTop < nextTop) {
          if (curSectionIndex == i && !isInit) {
            return;
          }
          isInit = false;
          curSectionIndex = i;

          setNav(curSectionIndex);
          console.log('当前的页面是 ： ' + curSectionIndex);
          return;
        }
      } else {
        if (curSectionIndex == i && !isInit) {
          return;
        }
        isInit = false;
        curSectionIndex = sectionScrollTop.length - 1;

        setNav(curSectionIndex);
        console.log('当前的页面是 ： ' + curSectionIndex);
        return;
      }
    }
  }

  $win.on('scroll', function() {
    if (isClickScrolling) {
      return;
    }

    calcNav();
  });

  function setNav(index) {
    $navs.eq(index).addClass('active').siblings().removeClass('active');
  }

  $navs.on('click', function() {

    isClickScrolling = true;

    var $this = $(this),
      curIndex = $this.index();

    $navs.eq(curIndex).addClass('active').siblings().removeClass('active');

    var goTo = sectionScrollTop[curIndex];

    $('html,body').animate({
      scrollTop: goTo
    }, 300, function() {
      isClickScrolling = false;
    });

  });
});
