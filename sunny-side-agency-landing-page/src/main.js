const mobileMenu = document.querySelector('.menu-items');
const mobileMenuButton = document.querySelector('.menu-button');

mobileMenuButton.addEventListener('click', handleMenuToggle);

function handleMenuToggle(e) {
  mobileMenu.classList.toggle('hidden');
  setTimeout(()=>{
    mobileMenu.classList.toggle('opacity-0');
    // if (mobileMenu.classList.contains())
    mobileMenu.classList.toggle('translate-x-1/2');
  }, 20)
}