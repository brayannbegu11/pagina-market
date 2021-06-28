const sections = document.querySelectorAll('section');
const navLiSticky = document.querySelectorAll('header.sticky .navigation li a');
const navLi = document.querySelectorAll('header .navigation li a');

window.addEventListener("scroll", () => {
let current = "";
sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
    current = section.getAttribute("id");
    } 
})

navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
    li.classList.add("active");
    }
});

navLiSticky.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
    li.classList.add("active");
    }
});
});





