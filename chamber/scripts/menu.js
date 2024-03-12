const hamburgerElement = document.querySelector('#Button');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click',() =>{
      navElement.classList.toggle('open');
      hamburgerElement.classList.toggle('open');
});