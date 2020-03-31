    $('.show-row').mouseover(function() {
        $(this).css({
            backgroundColor: '#da0000',
            opacity: '1',
            cursor: 'pointer'
        });
    });
    $('.show-row').mouseout(function() {
        $(this).css({
            backgroundColor: '',
            opacity: '0.65',
            cursor: 'default'
        });
    });

    $('.report-row').mouseover(function() {
        $(this).css({
            backgroundColor: '#13ce04',
            opacity: '1',
            cursor: 'pointer'
        });
    });
    $('.report-row').mouseout(function() {
        $(this).css({
            backgroundColor: '',
            opacity: '0.65',
            cursor: 'default'
        });
    });