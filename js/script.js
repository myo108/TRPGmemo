$(document).ready(function(){

    var screenWidth, screenHeight, dialogWidth, dialogHeight;

    screenHeight=$(window).height();
    screenWidth=$(document).width();

    if ( screenWidth < 480 ) {
        dialogWidth = screenWidth * .9;
        dialogHeight = 650;
    } else {
        dialogWidth = screenWidth *.7
        dialogHeight = screenHeight *.7;
        isDesktop = true;
    }

    $(window).on('load',function(){
        $("#splash-logo").delay(1200).fadeOut('slow');        
        $("#splash").delay(1500).fadeOut('slow',function(){
        $('body').addClass('appear');
        });
    });
//Back to top
      function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 300){
            $('#backToTop').removeClass('DownMove');
            $('#backToTop').addClass('UpMove');
        }else{
            if($('#backToTop').hasClass('UpMove')){
                $('#backToTop').removeClass('UpMove');
                $('#backToTop').addClass('DownMove');
            }
        }
    }
    
    $(window).scroll(function () {
        PageTopAnime();
    });
    
    $(window).on('load', function () {
        PageTopAnime();
    });
    
    $('#backToTop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    $('#btnAll').click(function(){
        $(this).addClass('active');
        $('#btnCoC1').removeClass('active');
        $('#btnCoC2').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC1').fadeIn();
        $('.CoC2').fadeIn();
        $('.Emok').fadeIn();
        $('.ISN').fadeIn();

    })

//filter
    $('#btnCoC1').click(function(){
        $(this).addClass('active');
        $('#btnCoC2').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC1').fadeIn();
        $('.CoC2').fadeOut();
        $('.Emok').fadeOut();
        $('.ISN').fadeOut();
        
    })
    $('#btnCoC2').click(function(){
        $(this).addClass('active');
        $('#btnCoC1').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC1').fadeOut();
        $('.CoC2').fadeIn();
        $('.Emok').fadeOut();
        $('.ISN').fadeOut();
        
    })
    $('#btnEmok').click(function(){
        $(this).addClass('active');
        $('#btnCoC1').removeClass('active');
        $('#btnCoC2').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC1').fadeOut();
        $('.CoC2').fadeOut();
        $('.Emok').fadeIn();
        $('.ISN').fadeOut();
    })
    $('#btnISN').click(function(){
        $(this).addClass('active');
        $('#btnCoC1').removeClass('active');
        $('#btnCoC2').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('.CoC1').fadeOut();
        $('.CoC2').fadeOut();
        $('.Emok').fadeOut();
        $('.ISN').fadeIn();
    })

//charainfo

    $('#shachen').click(function(){
        $('#shachenIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })

    $('#hikaru').click(function(){
        $('#hikaruIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#grim').click(function(){
        $('#grimIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#kaimi').click(function(){
        $('#kaimiIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })

    $('#nozomu').click(function(){
        $('#nozomuIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })

    $('#aya').click(function(){
        $('#ayaIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })

    $('#suzuto').click(function(){
        $('#suzutoIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#gen').click(function(){
        $('#genIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#alex').click(function(){
        $('#alexIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#ryou').click(function(){
        $('#ryouIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#megumi').click(function(){
        $('#megumiIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#yuito').click(function(){
        $('#yuitoIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#tomori').click(function(){
        $('#tomoriIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#oto').click(function(){
        $('#otoIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
    $('#honoka').click(function(){
        $('#honokaIntro').dialog({
            width:dialogWidth,
            height:dialogHeight,
            modal: true,
        });
    })
})