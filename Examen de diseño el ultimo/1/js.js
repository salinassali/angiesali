const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close_menu");

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

$(document).ready(function(){
    $('informacion li a:first').addClass('active');
    $('article').hide();
    $('article:first').show();

    $('informacion li a').click(function(){

    });
});