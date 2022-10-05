const openmenu = document.querySelector(".open-menu");
const closemenu = document.querySelector(".close-menu");
const navbar = document.querySelector('.navbar')


openmenu.addEventListener('click', function () {
    navbar.classList.toggle('active');
    openmenu.classList.toggle('is-active')
    closemenu.classList.toggle('is-active')
})

closemenu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    openmenu.classList.toggle("is-active");
    closemenu.classList.toggle("is-active");
});