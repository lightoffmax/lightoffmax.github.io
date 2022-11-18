const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        if(navLogo.classList.contains('_active')){
        document.body.classList.remove('_lock');
        navLogo.classList.remove('_active');
        navMenu.classList.remove('nav__active');
        };

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//Меню бургер

const navLogo = document.querySelector('.nav__logo');
const navMenu = document.querySelector('.nav')
if(navLogo) {
    navLogo.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        navLogo.classList.toggle('_active');
        navMenu.classList.toggle('nav__active');
    });
}

