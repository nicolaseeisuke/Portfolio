// Menu
function abrir() {
  document.getElementById("menuOculto").style.width="250px"
  document.getElementById("btnAbrir").style.marginLeft="250px"

}
function fechar() {
  document.getElementById("menuOculto").style.width="0px"
  document.getElementById("btnAbrir").style.marginLeft="0px"
}

// ligth mode
const html = document.querySelector('html');
const ligth = document.getElementById('chk');
ligth.addEventListener('click', () => {
        html.classList.toggle('ligth')
});

// Texto interativo
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animation", {
     speed: 200,
     loop:false,
     cursor:true,
    }).type('Programador Front-end',{delay:950}).delete(22).type('Estudante', {delay:900}).go()
})


// Efeito scrool
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + (window.innerHeight * 3)/4;
  target.forEach(function(element){

    if((windowTop) > element.offsetTop){
        element.classList.add(animationClass)
    }else{
        element.classList.remove(animationClass)
    }
    
    
  })
}

window.addEventListener('scroll', function() {
    animeScroll()
});

function openModalJobFinder() {
  document.getElementById("modalJobFinder").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}
  
function closeModalJobFinder() {
  document.getElementById("modalJobFinder").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}


function openModalLoginInterativo() {
  document.getElementById("modalLoginInterativo").style.display = "block"
    document.querySelector('body').style.overflow = 'hidden'
  }
  
function closeModalLoginInterativo() {
  document.getElementById("modalLoginInterativo").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
  }

function openModalCronometro() {
  document.getElementById("modalCronometro").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}
  
function closeModalCronometro() {
  document.getElementById("modalCronometro").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}

function openModalLoginCodehal() {
  document.getElementById("modalLoginCodehal").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}
  
function closeModalLoginCodehal() {
  document.getElementById("modalLoginCodehal").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}
    
function openModalJogoDaVelha() {
  document.getElementById("modalJogoDaVelha").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}
  
function closeModalJogoDaVelha() {
  document.getElementById("modalJogoDaVelha").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}

function openModalCalculadora() {
  document.getElementById("modalCalculadora").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}
  
function closeModalCalculadora() {
  document.getElementById("modalCalculadora").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}

function openModalClima(){
  document.getElementById("modalClima").style.display = "block"
  document.querySelector('body').style.overflow = 'hidden'
}

function closeModalClima() {
  document.getElementById("modalClima").style.display = "none"
  document.querySelector('body').style.overflow = 'auto'
}
