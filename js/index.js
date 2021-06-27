const menu_btn =document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle ('is-active');
})

function toggleMenu() {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
}

ScrollReveal().reveal(".content", { delay: 250 });
ScrollReveal().reveal(".titleText", { delay: 250 });
ScrollReveal().reveal(".services", { delay: 250 });
ScrollReveal().reveal(".services-img", { delay: 250 });
ScrollReveal().reveal(".site", { delay: 300 });
ScrollReveal().reveal(".left", { delay: 250 });
ScrollReveal().reveal(".right", { delay: 250 });
/* ScrollReveal().reveal(".copyrightText", { delay: 250 }); */