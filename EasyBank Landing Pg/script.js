const openNav = document.querySelector('.ham-open');
const closeNav = document.querySelector('.ham-close');
const hamburgerNav = document.querySelector('.hamburger-nav'); 


openNav.addEventListener('click', () =>{
  closeNav.classList.add('active');
  openNav.classList.add('active');
  hamburgerNav.classList.add('active'); 
});

closeNav.addEventListener('click', () =>{
  closeNav.classList.remove('active');
  openNav.classList.remove('active');
  hamburgerNav.classList.remove('active'); 
});