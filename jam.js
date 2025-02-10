/* let num1 = prompt("pleas enter number");
let num2 = prompt("pleas enter number");

let sum =Math.floor( parseFloat(num1) + parseFloat(num2));
console.log(sum);

 */
//----------------------------------------------------

/* let num1 = prompt("pleas enter number");
let num2 = prompt("pleas enter number");

if (!isNaN(num1) && !isNaN(num2)) {
  let sum = parseInt(num1) + parseFloat(num2);
  console.log(sum);
} else {
  console.log("pleas enter valid number");
}
//----------------------------------------------------
 */
/* 
let numb = parseInt(prompt("enter number"));
if (numb % 2 == 0) {
  console.log("add shoma zoj");
} else {
  console.log("adad shoma fard");
}
 */

//----------------------------
// ------------------------
/* 
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector(".btn");
  let color = ["red", "blue", "green", "pink"];

  btn.addEventListener("click", () => {
    let randomcolor = color[start()];

    document.body.style.backgroundColor = randomcolor;
  });

  function start() {
    return Math.floor(Math.random() * color.length);
  }
});
 */
// ------------------------

/* document.addEventListener("DOMContentLoaded", () => {
  let btn = document.createElement("button");

  document.body.appendChild(btn);
  let rang = ["red", "blue", "pink"];
  btn.addEventListener("click", () => {
    let rangi = rang[rrr()];

    document.body.style.backgroundColor = rangi;
  });
  function rrr() {
    return Math.floor(Math.random() * rang.length);
  }
}); */

// ------------------------
/* 
let val = document.querySelector(".value");
let btn = document.querySelectorAll(".btn");

let count = 0;

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let hame = e.target.classList;
    if (hame.contains("plus")) {
      count++;
    } else if (hame.contains("mines")) {
      count--;
    } else if (hame.contains("zero")) {
      count = 0;
    }
    val.textContent = count;
  });
});

// ------------------------
*/ /* 

let first=document.querySelector(".value");
let btn=document.querySelectorAll('.btn');


let count=0;
btn.forEach((item)=>{

item.addEventListener('click',(e)=>{



let tohi=e.target.classList;

if (tohi.contains('plus'))
{
    count++;
}
else if(tohi.contains('mines'))
{
    count--;
}
else if(tohi.contains('zero'))
{
    count=0;
}

first.textContent=count;

})

}) */

//----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let first = document.querySelector(".value");
  let btn = document.querySelectorAll(".btn");

  let count = 0;
  btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let tohi = e.target.classList;

      if (tohi.contains("plus")) {
        count++;
      } else if (tohi.contains("mines")) {
        count--;
      } else if (tohi.contains("zero")) {
        count = 0;
      }
      first.textContent = count;
    });
  });
});
