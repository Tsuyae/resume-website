window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.subtitle');
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.1 
    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
});


window.addEventListener('scroll', function(e) {

    const target = document.querySelector('header');
    var scrolled = window.pageYOffset;
    var rate = (scrolled**2) * -0.005
    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
});

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('#html');
    var scrolled = window.pageYOffset;
    var rate = (scrolled) * 0.04
    target.style.transform = 'translate3d('+rate+'px, '+rate+'px, '+rate+'px)';
});

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('#pdn');
    var scrolled = window.pageYOffset;
    var rate = (scrolled) * -0.04
    target.style.transform = 'translate3d('+rate+'px, '+-rate+'px, '+rate+'px)';
});

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('#css');
    var scrolled = window.pageYOffset;
    var rate = (scrolled) * 0.02
    target.style.transform = 'translate3d('+rate+'px, '+0.5*rate+'px, '+rate+'px)';
});

window.addEventListener('scroll', function(e) {

    const target = document.querySelector('#python');
    var scrolled = window.pageYOffset;
    var rate = (scrolled) * -0.02
    target.style.transform = 'translate3d('+rate+'px, '+-0.5*rate+'px, '+rate+'px)';
});







// test function

// window.addEventListener('scroll', function(e) {

//     const target = document.querySelector('#more');
//     var scrolled = window.pageYOffset;
//     var rate = (scrolled) * 0.01;
//     target.style.transform = 'translate3d('+rate**2+'px, 0px, 0px)';
//     if (scrolled <= 2400 && scrolled >= 1200) {
//         target.style.opacity = (scrolled % 1200)/100
//     }
//     else if (scrolled > 2400) {
//         target.style.opacity = 1
//     }

//     else {
//         target.style.opacity = 0
//     }
//     console.log(document.documentElement.clientHeight)




// });



