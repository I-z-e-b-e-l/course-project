console.log("I'm alive!!")

const hamburgerMenu = document.querySelector("#hamburger");
const menuItems = document.querySelector('.link-menu');
const toggleMenu = function () {
    menuItems.classList.toggle('open');
}
hamburgerMenu.addEventListener('click', toggleMenu);


