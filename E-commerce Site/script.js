const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

var products=document.getElementsByClassName("pro");

  
   for(let product of products){
    product.addEventListener('click',()=>{
        window.location.href='sproduct.html';
       


    })
}