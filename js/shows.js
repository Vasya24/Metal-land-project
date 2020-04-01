let rows = [];
$('tr').each(function() {
    rows.push(this);
})

$(window).ready(function() {
    for(let i=0; i<rows.length; i++) {
        if ((i%2)===0) {
    $(rows[i]).removeClass('hidden').addClass('animated slideInLeft slower')
        } else {
            $(rows[i]).removeClass('hidden').addClass('animated slideInRight slower')
        }
    }
})