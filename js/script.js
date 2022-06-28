$(document).ready(function(){

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
    
})