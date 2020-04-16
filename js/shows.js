let rows = document.querySelectorAll('tr')

window.onload = function() {
    
    for (let i=0; i<rows.length; i++) {
        if (i%2 === 0) {
            rows[i].classList = 'animated slideInLeft slower';
        } else {
            rows[i].classList ='animated slideInRight slower'
        }
    }
}