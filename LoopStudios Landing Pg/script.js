const hamburger = document.getElementById('hamburger');
const closeHam = document.getElementById('close');
const menuBg = document.getElementById('menu-bg');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () =>{
   hamburger.classList.add('active');
   closeHam.classList.add('active');
   menuBg.classList.add('active');
   navMobile.classList.add('active');
})

closeHam.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    closeHam.classList.remove('active');
    menuBg.classList.remove('active');
   navMobile.classList.remove('active');
 })

 