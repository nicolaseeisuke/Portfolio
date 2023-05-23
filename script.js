// Menu
function abrir() {
    document.getElementById("menuOculto").style.width="250px"
    document.getElementById("principal").style.marginLeft="250px"

}
function fechar() {
    document.getElementById("menuOculto").style.width="0px"
    document.getElementById("principal").style.marginLeft="0px"
}

// ligth mode
const html = document.querySelector('html');
const ligth = document.getElementById('chk');
ligth.addEventListener('change', () => {
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
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

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

window.addEventListener('scroll', debounce(function() {
    animeScroll()
}, 200));


// Modal projeto Login
const openModalLogin = document.querySelector(".buttonAbrirLogin");
const closeModalLogin = document.querySelector(".buttonFecharLogin");
const modalLogin = document.querySelector(".modalLogin");
const fadeLogin = document.querySelector(".fadeLogin")

const togglemModalLogin = () => {
    modalLogin.classList.toggle("hide")
    fadeLogin.classList.toggle("hide")
}

[openModalLogin, closeModalLogin, fadeLogin].forEach((el) => {
    el.addEventListener("click",() => togglemModalLogin())
})


// Modal projeto cronometro
const openModalCronometro = document.querySelector(".buttonAbrirCronometro");
const closeModalCronometro = document.querySelector(".buttonFecharCronometro");
const modalCronometro = document.querySelector(".modalCronometro");
const fadeCronometro = document.querySelector(".fadeCronometro")

const togglemModalCronometro = () => {
    modalCronometro.classList.toggle("hide")
    fadeCronometro.classList.toggle("hide")
}

[openModalCronometro, closeModalCronometro, fadeCronometro].forEach((el) => {
    el.addEventListener("click",() => togglemModalCronometro())
})

// Modal projeto coldehal
const openModalCodehal = document.querySelector(".buttonAbrirCodehal");
const closeModalCodehal = document.querySelector(".buttonFecharCodehal");
const modalCodehal = document.querySelector(".modalCodehal");
const fadeCodehal = document.querySelector(".fadeCodehal")

const togglemModalCodehal = () => {
    modalCodehal.classList.toggle("hide")
    fadeCodehal.classList.toggle("hide")
}

[openModalCodehal, closeModalCodehal, fadeCodehal].forEach((el) => {
    el.addEventListener("click",() => togglemModalCodehal())
})