$('.toadd-button').on('click', function () {
        var cart = $('.myBasket');
        var imgtodrag = $(this).parent('.item').find("img").eq(0);
        var buttontext = $(this).parent('.item').find("button").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '200px',
                    // 'width': '140px',
                    // 'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top +150,
                    'left': cart.offset().left +150,
                    'width': 75,
                    'height': 75,
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);
 
            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
            buttontext.text("Added");
        }
    });

$( '.email-button' ).click(function() {
  $('.email-button').text("Check your mail!");
});