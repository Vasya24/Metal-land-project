$('.styles').mouseover(function() {
    $('.styles-sign').removeClass('hidden blurOut').addClass('cssanimation blurIn');
    $(this).css({
        'width': '450px',
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center'
    });
    })
    $('.bands').mouseover(function() {
        $('.bands-sign').removeClass('hidden blurOut').addClass('cssanimation blurIn');
        $(this).css({
            'width': '450px',
            'backgroundSize': 'cover',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center'
        });
        })

        $('.styles').mouseout(function() {
            $('.styles-sign').removeClass('blurIn').addClass('blurOut');
            $(this).css({
                'width': '300px',
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat',
                'backgroundPosition': 'center'
            });
            })

            $('.bands').mouseout(function() {
                $('.bands-sign').removeClass('blurIn').addClass('blurOut');
                $(this).css({
                    'width': '300px',
                    'backgroundSize': 'cover',
                    'backgroundRepeat': 'no-repeat',
                    'backgroundPosition': 'center'
                });
                })