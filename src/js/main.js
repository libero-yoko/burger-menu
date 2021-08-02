import '../css/main.css';

console.log('🍔 main.js');

window.addEventListener('DOMContentLoaded', (event)=>{
  document.getElementById('drop-menu-open').onclick = openMenu;
  document.getElementById('drop-menu-close').onclick = closeMenu;
})


const openMenu = () => {
  document.getElementById('drop-nav').classList.remove('-top-full')
  document.getElementById('drop-nav').classList.add('transition-y-full')
}

const closeMenu = () => {
  document.getElementById('drop-nav').classList.remove('transition-y-full')
  document.getElementById('drop-nav').classList.add('-top-full')
}