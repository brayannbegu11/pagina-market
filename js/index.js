window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

ScrollReveal().reveal(".content", { delay: 250 });
ScrollReveal().reveal(".titleText", { delay: 250 });
ScrollReveal().reveal(".services", { delay: 250 });
ScrollReveal().reveal(".services-img", { delay: 250 });
ScrollReveal().reveal(".site", { delay: 400 });
ScrollReveal().reveal(".left", { delay: 250 });
ScrollReveal().reveal(".right", { delay: 250 });
ScrollReveal().reveal(".copyrightText", { delay: 250 });