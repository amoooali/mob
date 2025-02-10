

/* document.addEventListener('DOMContentLoaded',()=>{

let changebtn=document.querySelector('.chrang');
let matn=document.querySelector('.colorname');
let color=['red','blue','green','yellow'];



changebtn.addEventListener('click',()=>{

let r=color[rang()];

document.body.style.backgroundColor=r;
matn.textContent=r;
    
})

function rang(){


return Math.floor(Math.random()*color.length);

}

}) */


document.addEventListener('DOMContentLoaded',()=>{

let changebtn=document.querySelector('.chrang');
let matn=document.querySelector('.colorname');
let color=['red','blue','green','yellow'];



changebtn.addEventListener('click',()=>{


let r=color[rang()];
document.body.style.backgroundColor=r;
matn.textContent=r;

})

function rang(){


return Math.floor(Math.random()*color.length);


}












})