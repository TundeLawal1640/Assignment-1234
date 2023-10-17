const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');

toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('lightMode')
    
    
})


hamburger.addEventListener('click', ()=>{
    document.body.classList.add('hamburgerLinks');
    
})
