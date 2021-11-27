$(document).ready(function(){

//Loading
    $(window).on('load',function(){
        $("#splash").delay(1300).fadeOut('slow');
        $("#splash_logo").delay(1200).fadeOut('slow');
      });

      $(document).tooltip({
        position:{
            my:0,at:'top-20px',
        }
    })

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
        $('#btnCoC').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC').fadeIn();
        $('.Emok').fadeIn();
        $('.ISN').fadeIn();

    })

//filter
    $('#btnCoC').click(function(){
        $(this).addClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC').fadeIn();
        $('.Emok').fadeOut();
        $('.ISN').fadeOut();
        
    })
    $('#btnEmok').click(function(){
        $(this).addClass('active');
        $('#btnCoC').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnISN').removeClass('active');
        $('.CoC').fadeOut();
        $('.Emok').fadeIn();
        $('.ISN').fadeOut();
    })
    $('#btnISN').click(function(){
        $(this).addClass('active');
        $('#btnCoC').removeClass('active');
        $('#btnAll').removeClass('active');
        $('#btnEmok').removeClass('active');
        $('.CoC').fadeOut();
        $('.Emok').fadeOut();
        $('.ISN').fadeIn();
    })

//charainfo
    $('#theo').click(function(){
        $('#shachenIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();
        $('#genIntro').slideUp();        
        $('#theoIntro').slideToggle();
    })
    $('#shachen').click(function(){
        $('#theoIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();  
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();    
        $('#genIntro').slideUp();        
        $('#shachenIntro').slideToggle();
    })
    $('#hikaru').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();
        $('#genIntro').slideUp();      
        $('#hikaruIntro').slideToggle();
    })
    $('#grim').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#genIntro').slideUp();    
        $('#grimIntro').slideToggle();
    })
    $('#kaimi').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp(); 
        $('#genIntro').slideUp();     
        $('#kaimiIntro').slideToggle();
    })
    $('#hibiki').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#grimIntro').slideUp();
        $('#genIntro').slideUp();    
        $('#hibikiIntro').slideToggle();
    })
    $('#nozomu').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#suzutoIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp(); 
        $('#genIntro').slideUp();     
        $('#nozomuIntro').slideToggle();
    })
    $('#aya').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#suzutoIntro').slideUp(); 
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();   
        $('#genIntro').slideUp();    
        $('#ayaIntro').slideToggle();
    })
    $('#suzuto').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();  
        $('#genIntro').slideUp();    
        $('#suzutoIntro').slideToggle();
    })
    $('#gen').click(function(){
        $('#theoIntro').slideUp();
        $('#shachenIntro').slideUp();
        $('#hikaruIntro').slideUp();
        $('#kaimiIntro').slideUp();
        $('#nozomuIntro').slideUp();
        $('#ayaIntro').slideUp();
        $('#hibikiIntro').slideUp();
        $('#grimIntro').slideUp();    
        $('#suzutoIntro').slideUp();
        $('#genIntro').slideToggle();  
    })
})