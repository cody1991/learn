$(function() {
    $('.demo-5').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
    });

    $('.demo-6').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    var demo7 = $('.demo-7').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });

    var demo7SlideIndex = 1;

    $('.demo-7-add').on('click', function() {
        demo7SlideIndex++;
        $('.demo-7').slick('slickAdd', '<div><h3>' + demo7SlideIndex + '</h3></div>')
    });

    $('.demo-7-remove').on('click', function() {
        $('.demo-7').slick('slickRemove', demo7SlideIndex - 1);
        if (demo7SlideIndex !== 0) {
            demo7SlideIndex--;
        }
    });

    $('.demo-8').slick({
        slidesToShow: 4,
        slidesToScroll: 4
    });

    var filtered = false;

    $('.demo-8-filter').on('click', function() {
        if (filtered === false) {
            $('.demo-8').slick('slickFilter', ':even');
            $(this).text('undilter slides');
            filtered = true;
        } else {
            $('.demo-8').slick('slickUnfilter');
            $(this).text('filter slides');
            filtered = false;
        }
    });

    $('.demo-9').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.demo-10'
    });

    $('.demo-10').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.demo-9'
    })
});
