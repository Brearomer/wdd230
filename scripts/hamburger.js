const hamburgerElement = document.querySelector('button');
const navElement = document.querySelector('.menuLinks');

hambugerElement.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});