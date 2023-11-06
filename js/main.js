

const services = document.querySelector('.bnt-services');
const menu = document.querySelector('.menu-deroulant');
const downarrow = document.querySelector('.down-arrow');
const bars =document.querySelector('.bars');

const span1 =document.querySelector('.span1');
const span2 =document.querySelector('.span2');
const span3 =document.querySelector('.span3');

const menures =document.querySelector('.menu-deroulant-res');
const bntres =document.querySelector('.bnt-services-res');

const navresponsive = document.querySelector('.navresponsive');
const downres = document.querySelector('.down-arrow-res');


services.addEventListener('click',()=>{
    menu.classList.toggle('block')
    menu.classList.toggle('none')
    
    })

    
services.addEventListener('click',()=>{
    downarrow.classList.toggle('rotate')
    
    })
bntres.addEventListener('click',()=>{
    downres.classList.toggle('rotate')
    
    })

bntres.addEventListener('click',()=>{
    menures.classList.toggle('block')
    menures.classList.toggle('none')
    
    })

    
bntres.addEventListener('click',()=>{
    downarrow.classList.toggle('rotate')
    
    })


bars.addEventListener('click',()=>{
    span1.classList.toggle('line1')
    span2.classList.toggle('line2')
    span3.classList.toggle('line3')
    
    })

bars.addEventListener('click',()=>{
    navresponsive.classList.toggle('none')
    navresponsive.classList.toggle('block')
    
    })


const btn = document.querySelector('.button-top');

btn.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior : "smooth"
    })
} )


AOS.init()