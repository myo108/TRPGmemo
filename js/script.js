$(document).ready(function(){

    $(window).on('load',function(){
        $("#splash").delay(1300).fadeOut('slow');
        $("#splash_logo").delay(1200).fadeOut('slow');
      });

    $('#btnAll').click(function(){
        $(this).addClass('active');
        $('#btnCoC').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('#shachen').fadeIn();
        $('#kaimi').fadeIn();
        $('#nozomu').fadeIn();
        $('#aya').fadeIn();
        $('#suzuto').fadeIn();
        $('#hikaru').fadeIn();
    })
    $('#btnCoC').click(function(){
        $(this).addClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('#shachen').fadeIn();
        $('#kaimi').fadeIn();
        $('#nozomu').fadeIn();
        $('#aya').fadeIn();
        $('#suzuto').fadeIn();
        $('#hikaru').fadeOut();
    })
    $('#btnEmok').click(function(){
        $(this).addClass('active');
        $('#btnCoC').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnISN').removeClass('active');
        $('#shachen').fadeOut();
        $('#kaimi').fadeOut();
        $('#nozomu').fadeOut();
        $('#aya').fadeOut();
        $('#suzuto').fadeOut();
        $('#hikaru').fadeIn();
    })
    $('#shachen').click(function(){
        $('#kaimiIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();        
        $('#shachenIntro').slideToggle();
    })
    $('#hikaru').click(function(){
        $('#shachenIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hikaruIntro').slideToggle();
    })
    $('#kaimi').click(function(){
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#kaimiIntro').slideToggle();
    })
    $('#nozomu').click(function(){
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#nozomuIntro').slideToggle();
    })
    $('#aya').click(function(){
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#suzutoIntro').slideUp();  
        $('#ayaIntro').slideToggle();
    })
    $('#suzuto').click(function(){
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideToggle();
    })
})