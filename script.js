// event pada saat link
$('.page-scroll').on('click', function(event) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutCirc' );
    event.preventDefault();
});



// parallax
// about

// $(window).on('load', function() {
//     $('.pKiri').addClass('pMuncul');
//     $('.pKanan').addClass('pMuncul');
// });


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbtron 

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/3.5 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    // portfolio

    if ( wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });

        
    }
    if ( wScroll > $('.pKiri').offset().top - 200) {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
    };


});

















