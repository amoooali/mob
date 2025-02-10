



let tagp = document.querySelector("p");

tagp.textContent = "khodahafez";
//-------------------------------------------
let btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
//---------------------------------------------
let p1 = document.querySelector(".p-1");
let adclas = document.querySelector(".adclass");

/* adclas.addEventListener('click',()=>{
p1.classList.toggle('highlite')


}); */

adclas.addEventListener("click", () => {
  p1.classList.add("highlite");
});
adclas.addEventListener("dblclick", () => {
  p1.classList.remove("highlite");
});
//----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let inp1 = document.querySelector(".inp1");
  let btn2 = document.querySelector(".btn-2");
  let p2 = document.querySelector(".p-2");

  btn2.addEventListener("click", () => {
    p2.textContent = inp1.value;
  });
});
//-----------------------------------------------------

/* document.addEventListener("click", () => { */
/*   let btn3 = document.querySelector(".btn-3");
  let a = true;
  let elemnt;
  btn3.addEventListener("click", () => {
    event.stopPropagation();
    if (a == true) {
     elemnt = document.createElement("p");

      document.body.appendChild(elemnt);
      elemnt.textContent = "sallllllllllam";
      a = false;
    } else {
      document.body.removeChild(elemnt);
      a = true;
    }
  });
});
 */

document.addEventListener('DOMContentLoaded',()=>{

let btn3=document.querySelector('.btn-3');
let a=true;
let elemnt;

btn3.addEventListener('click',()=>{

if(a==true){
  elemnt=document.createElement('p');
  document.body.appendChild(elemnt);
  elemnt.textContent='ali';
  a=false;
}
else{document.body.removeChild(elemnt);
  a=true;
}


})



})


const numbers = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, (n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
