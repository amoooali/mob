
document.addEventListener('DOMContentLoaded',()=>{

let startbtn=document.querySelector('.start');
let stopbtn=document.querySelector('.stop');
let text=document.querySelector('.VAL');



let count=0;

startbtn.addEventListener('click',function seni(){

count++;

text.textContent=count;



});
setInterval(seni(),1000);

});