window.addEventListener('scroll' , ()=> { 
   let PosBut = document.documentElement.getBoundingClientRect().bottom
   let fix = document.querySelector(`header`); 
   if (PosBut <  1.8 * document.documentElement.clientHeight) { 
      fix.style.display = `block`; 
   }

if (PosBut > 1.95 * document.documentElement.clientHeight){ 
   fix.style.display = 'none'; 
}

})
