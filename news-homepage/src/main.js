const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const menu = document.querySelector('#menu');

const handleMenuOpen = () => {
  console.log('menu open')
  menu.classList.remove('hidden');
  setTimeout(()=>{
    menu.classList.remove('opacity-0');
    menu.classList.remove('translate-x-80');
  }, 300)
  
}

const handleMenuClose = () => {
  menu.classList.add('translate-x-80');
  menu.classList.add('opacity-0');
  setTimeout(() => {
    menu.classList.add('hidden');
  },300)
}

menuOpenButton.addEventListener('click', handleMenuOpen);

menuCloseButton.addEventListener('click', handleMenuClose);