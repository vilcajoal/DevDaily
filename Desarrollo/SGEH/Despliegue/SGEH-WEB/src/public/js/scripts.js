let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.nav-container');
var activador = true;
btnMenu.addEventListener('click', (event) => {

    //Icon X
    barIconX.classList.toggle('fa-times');
  
     if(activador){
       menu.style.left = '0%'; 
       menu.style.transition = '0.5s';
    
       activador = false;
     }
     else{
      activador = false;
      menu.style.left = '-150%';
  
      activador = true;
     }
  
  });