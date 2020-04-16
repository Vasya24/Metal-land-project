let cardContent = document.querySelectorAll('.card-content');

for (let cc=0; cc<cardContent.length; cc++) {
    cardContent[cc].addEventListener('mouseover', (e) => {
        cardContent[cc].style.boxShadow = '0px 0px 10px 15px #FA3232';
        cardContent[cc].style.backgroundColor = '#FA3232';
    })
    cardContent[cc].addEventListener('mouseout', (e) => {
        cardContent[cc].style.boxShadow = '';
        cardContent[cc].style.backgroundColor = 'black';
    })
}