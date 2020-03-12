window.onload = () => {
    let crds = [document.getElementById('card_1'), document.getElementById('card_2'), document.getElementById('card_3'), document.getElementById('card_4'), document.getElementById('card_5')];
    for (let i = 0; i < crds.length; i++) {
        crds[i].onmouseover = () => {
            crds[i].style.boxShadow = '0 14px 28px rgb(246, 5, 5), 0 10px 10px rgb(246, 5, 5)';
            crds[i].style.cursor = 'pointer';
            crds[i].style.height = '250px';
            crds[i].querySelector('.card-img-top').style.filter = 'blur(3px) brightness(25%)';

        };
        crds[i].onmouseout = () => {
            crds[i].style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            crds[i].style.height = '177px';
            crds[i].querySelector('.card-img-top').style.filter = 'brightness(25%)';
        }
    }
}