const toogleBtn = document.querySelector('.navbar_toogle');
const menu = document.querySelector('.navbar_menu');
const image = document.querySelector('.navbar_image');

toogleBtn.addEventListener('click', () =>{
  menu.classList.toggle('active');
  image.classList.toggle('active');

});
