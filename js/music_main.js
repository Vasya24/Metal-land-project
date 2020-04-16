let styles = document.querySelectorAll('.styles');
let stylesSign = document.querySelectorAll('.styles-sign');
let bands = document.querySelectorAll('.bands');
let bandsSign = document.querySelectorAll('.bands-sign');

styles.onmouseover = function() {
    stylesSign.classList = 'cssanimation blurIn';
    stylesSign.style.width = '450px';
    stylesSign.style.backgroundSize= 'cover';
    stylesSign.style.backgroundRepeat = 'no-repeat';
    stylesSign.style.backgroundPosition = 'center';
}

styles.onmouseout = function() {
    stylesSign.classList = 'hidden blurOut';
    stylesSign.style.width = '300px';
    stylesSign.style.backgroundSize= 'cover';
    stylesSign.style.backgroundRepeat = 'no-repeat';
    stylesSign.style.backgroundPosition = 'center';
}
// $('.styles').mouseover(function() {
//     $('.styles-sign').removeClass('hidden blurOut').addClass('cssanimation blurIn');
//     $(this).css({
//         'width': '450px',
//         'backgroundSize': 'cover',
//         'backgroundRepeat': 'no-repeat',
//         'backgroundPosition': 'center'
//     });
//     })
//     $('.bands').mouseover(function() {
//         $('.bands-sign').removeClass('hidden blurOut').addClass('cssanimation blurIn');
//         $(this).css({
//             'width': '450px',
//             'backgroundSize': 'cover',
//             'backgroundRepeat': 'no-repeat',
//             'backgroundPosition': 'center'
//         });
//         })

//         $('.styles').mouseout(function() {
//             $('.styles-sign').removeClass('blurIn').addClass('blurOut');
//             $(this).css({
//                 'width': '300px',
//                 'backgroundSize': 'cover',
//                 'backgroundRepeat': 'no-repeat',
//                 'backgroundPosition': 'center'
//             });
//             })

//             $('.bands').mouseout(function() {
//                 $('.bands-sign').removeClass('blurIn').addClass('blurOut');
//                 $(this).css({
//                     'width': '300px',
//                     'backgroundSize': 'cover',
//                     'backgroundRepeat': 'no-repeat',
//                     'backgroundPosition': 'center'
//                 });
//                 })