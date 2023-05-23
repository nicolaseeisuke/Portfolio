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
const target = document.querySelectorAll('[data-anime');
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

function openModal() {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById("modal").style.display = "block"
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none"
    document.querySelector('body').style.overflow = 'auto'
  }
  

  function openModal1() {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById("modal1").style.display = "block"
    
  }
  
  function closeModal1() {
    document.querySelector('body').style.overflow = 'auto'
    document.getElementById("modal1").style.display = "none"
  }

  
  function openModal2() {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById("modal2").style.display = "block"
  }
  
  function closeModal2() {
    document.getElementById("modal2").style.display = "none"
    document.querySelector('body').style.overflow = 'auto'
  }
  

  function openModal3() {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById("modal3").style.display = "block"
  }
  
  function closeModal3() {
    document.getElementById("modal3").style.display = "none"
    document.querySelector('body').style.overflow = 'auto'
  }

  






  function openModal4() {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById("modal4").style.display = "block"
  }
  
  function closeModal4() {
    document.getElementById("modal4").style.display = "none"
    document.querySelector('body').style.overflow = 'auto'
  }