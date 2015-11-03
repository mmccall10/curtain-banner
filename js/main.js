var slideConfig = {
    left:{
        width: 589
    },
    right:{
        width: 425
    },
    middle:{
        width: 415
    }
};

function adjustHpBanner(){
    var difference = 1280 - $(window).width();
    var diffPercent = 0;
    if(difference > 0){
        diffPercent = (difference / 1280);
    }
    $('.banner-section-inner-content').each(function(i,el){
        $(el).hide();
    });
    if($(window).width() < 1280){

        $('.banner-container').css({
            width : $(window).width(),
            height : $(window).width() * 0.465625
        });

        $('.banner-section-content').each(function(i,el){
            $(el).css('width', (60 - (60 * diffPercent)));
        });
        $('.grow-with-image').css({
            width: (223 - (223 * diffPercent)),
            left: (1057 - (1057 * diffPercent))
        });

        $('.banner-section.left').css({
            left: (10 - (10 * diffPercent)),
            width: (61 - (61 * diffPercent))
        });
        $('.banner-section.right').css({
            right: (10 - (10 * diffPercent)),
            width: (60 - (60 * diffPercent))
        });
        $('.right-content').css({
            width: (60 - (60 * diffPercent)),
        });

        $('.banner-section.middle').css({
            left: (640 - (640 * diffPercent)),
            width: (60 - (60 * diffPercent))
        });
        $('.banner-deco-bar.green.middle').css({
            width: (55 - (55 * diffPercent)),
            left: (600 - (600 * diffPercent))
        });
        $('.banner-deco-bar.green.left').css({
            width: (10 - (10 * diffPercent)),
        });
        $('.banner-deco-bar.green.right').css({
            width: (10 - (10 * diffPercent)),
            left: (1270 - (1270 * diffPercent))
        });

        $('.banner-section-content > div > h3').css({
            'font-size': (45 - (45 * diffPercent))
        });

        $('.banner-section-content > div > p').css({
            'font-size': (20 - (20 * diffPercent))
        });

        $('.banner-section-inner-content > p > a').css({
            'font-size': (20 - (20 * diffPercent)),
            'padding-top': (12 - (12 * diffPercent)+'px'),
            'padding-bottom': (12 - (12 * diffPercent)+'px'),
            'padding-right': (30 - (30 * diffPercent)+'px'),
            'padding-left': (30 - (30 * diffPercent)+'px')
        });
        
    }else{
        $('.banner-container').css({
            width: 1280,
            height: 596
        });

        $('.banner-section-content').each(function(i,el){
            $(el).css('width', 60);
        });
        $('.grow-with-image').css({
            width: 223,
            left: 1057
        });

        $('.banner-section.left').css({
            left: 10,
            width: 61
        });
        $('.banner-section.right').css({
            width: 60,
            right: 10
        });
        $('.right-content').css({
            width: 60,
        });
        $('.banner-section.middle').css({
            left: 640,
            width: 60
        });
        $('.banner-deco-bar.green.middle').css({
            width: 55,
            left: 600
        });
        $('.banner-deco-bar.green.left').css({
            width: 10
        });
        $('.banner-deco-bar.green.right').css({
            width: 10,
            left: 1270
        });

        $('.banner-section-content > div > h3').css({
            'font-size': 45
        });

        $('.banner-section-content > div > p').css({
            'font-size': 20
        });

        $('.banner-section-inner-content > p > a').css({
            'font-size': 20,
            'padding-top': 12,
            'padding-bottom': 10,
            'padding-right': 30,
            'padding-left': 30
        });

    }
}
var doit;
function animateSlide(item){
    clearTimeout(doit);
    doit = setTimeout(function(){
        var difference = 1280 - $(window).width();
        var diffPercent = 0;
        if(difference > 0){
            diffPercent = (difference / 1280);
        }

        $('.banner-section').each(function(i,el){
            $(el).stop(true);
        });
        $('.grow-with-image').stop(true);
        var content = item.find('.banner-section-inner-content');
        var slide = item.find('.banner-section-content').show();
        var slidePos = item.data('pos');
        var slideArrow = item.find('.arrow-slide-image').hide();

            item.addClass('opened');
            $('.banner-section').not(slide).each(function(i,el){
                $(el).css('width',(60 - (60 * diffPercent)));
            });

            item.animate({
                width: (slideConfig[slidePos].width - (slideConfig[slidePos].width * diffPercent))
            },{
                start: function(){
                    $(slide).animate(
                        {
                            width: (slideConfig[slidePos].width - (slideConfig[slidePos].width * diffPercent)),
                        },
                        {
                            duration: 150,
                            start: function(){
                                $('.banner-section-content').not(slide).each(function(i,el){
                                    $(el).css('width',(60 - (60 * diffPercent)));
                                    $(el).find('.banner-section-inner-content').hide();
                                    $(el).find('.deco-bg-image').css({opacity: 0});
                                });
                                $('.banner-section-inner-content').not(content).each(function(i,el){
                                    $(el).hide();
                                });
                                $('.arrow-slide-image').not(slideArrow).each(function(i,el){
                                    $(el).show();
                                });

                                if(slidePos == 'right'){
                                    $('.grow-with-image').animate({
                                        width: (slideConfig[slidePos].width - (slideConfig[slidePos].width * diffPercent)) + (10 - (10 * diffPercent)),
                                        left: (844 - (844 * diffPercent))
                                    },450);
                                }else{
                                    $('.grow-with-image').css({
                                        width: (223 - (223 * diffPercent)),
                                        left: (1057 - (1057 * diffPercent))
                                    });
                                }

                            }
                        });
                },
                done: function(){
                    content.show();
                    $('.banner-section-content').not(slide).each(function(i,el){
                        $(el).css('width',(60 - (60 * diffPercent)));
                    });
                    slide.find('.deco-bg-image').css({opacity: 1});
                }
            });

            $('.banner-section').not(item).each(function(i, el){
                $(el).removeClass('opened');
            });
    }, 50);
}

$(function(){
    $('#banner-container').on('click', function(e){
        var width = $(this).width();
        var offset = $(this).offset();
        var mPos = e.pageX - offset.left;
        var rightWidth = 0.827;
        if($('[data-pos="right"]').hasClass('opened')){
            rightWidth = 0.66;
        }

        if(mPos/width < 0.47){
            //fire left slide
            var leftItem = $('[data-pos="left"]');
            if(!leftItem.hasClass('opened')){
                animateSlide(leftItem);
            }
        }

        if(mPos/width > 0.47 && mPos/width < rightWidth){
            //fire middle slide
            var middleItem = $('[data-pos="middle"]');
            if(!middleItem.hasClass('opened')){
                animateSlide(middleItem);
            }
        }

        if(mPos/width > rightWidth){
            //fire right slide
            var rightItem = $('[data-pos="right"]');
            if(!rightItem.hasClass('opened')){
                animateSlide(rightItem);
            }
        }
    });


    adjustHpBanner();
    $(window).resize(function(){
        $('.banner-section').each(function(i, el){
            $(el).removeClass('opened');
        });
        adjustHpBanner();
    });

    setTimeout(function(){
        var item = $('[data-pos="middle"]');
        animateSlide(item);
    }, 250);
});