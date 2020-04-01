$('.card-content').mouseover(function() {
    $(this).css({
        'boxShadow': '0px 0px 10px 15px #FA3232',
        'backgroundColor': '#FA3232'
    });
})
$('.card-content').mouseout(function() {
    $(this).css({
        'boxShadow': '',
        'backgroundColor': 'black'
    });
})