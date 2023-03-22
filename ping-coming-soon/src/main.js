mobileNav = document.querySelector('.mobile-nav > div');
console.log("mobileNav is", mobileNav)
menuOpenButton = document.querySelector('.menu');
menuCloseButton = document.querySelector('.menu-close');

menuOpenButton.addEventListener('click', handleMenuOpen);
menuCloseButton.addEventListener('click', handleMenuClose);

function handleMenuOpen(e){
  mobileNav.classList.remove('hidden');
}

function handleMenuClose(e){
  mobileNav.classList.add('hidden');
}