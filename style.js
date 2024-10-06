

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//  ScrollReveal
ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration:2000,
    delay:100
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img,.pimg', { origin: 'left' });
ScrollReveal().reveal('.pimgs,.home-content p,.about-content', { origin: 'right' });



var typed =new Typed(".multiple-text",{
    strings:[ "Software Developer", "Programmer","Flutter Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})



var content = document.getElementsByTagName('body')[0];
    var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function(){
        darkMode.classList.toggle('active');
        content.classList.toggle('night');
    })
















