//dropdown menu
let navIcon = document.querySelector('#nav-icon');
let navbar = document.querySelector('.navbar');

navIcon.onclick = () => {
    navIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//set active class to nav links when scroll to section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    navIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact ', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

//typed.js
var typed = new Typed('#home-span', {
    strings: ['a Junior Software developer.', 'an aspiring full stack engineer.', 'a problem solver.', 'a team player.', 'a fast learner.', 'a coffee lover.'],
    typeSpeed: 75,
    loop: true,
    backDelay: 1000,
  });