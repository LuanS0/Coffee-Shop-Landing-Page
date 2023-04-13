const $toggleMenu = document.querySelector('.icon-toggle');
const $navBar = document.querySelector('.nav-bar');

$toggleMenu.addEventListener('click', ()=>{
    $navBar.classList.contains('nav-bar') 
    ? $navBar.className = 'nav-bar-toggle'
    : $navBar.className = 'nav-bar';
});