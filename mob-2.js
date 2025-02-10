document.addEventListener("DOMContentLoaded", () => {
  let h2 = document.querySelector("h2");
  let li = document.querySelectorAll("li");

  console.log(h2);
  console.log(li);
  //--------------------------------------------
  let div = document.createElement("div");

  div.textContent = "sallam";

  document.body.appendChild(div);

  //--------------------------------------------

  let btn = document.createElement("button");
  btn.textContent = "click me";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    if (h2.textContent == "Hello") h2.textContent = "goodbye";
    else {
      h2.textContent = "Hello";
    }
  });
});

//--------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let iin = document.querySelector(".iin");
  let p = document.createElement("p");
  document.body.appendChild(p);
  iin.addEventListener("input", (eb) => {
    p.textContent = eb.target.value;
  });
});
//--------------------------------------------

let number = [1, 2, 3, 4, 5];
number.forEach((num) => {
  let p = document.createElement("p");

  p.textContent = num;
  p.style.color = num % 2 == 0 ? "blue" : "red";
  document.body.appendChild(p);
});

// let inpu = document.createElement("input");
// document.body.appendChild(inpu);

// inpu.addEventListener('input',(kk)=>{

//     let j=kk.target.value;
//     if (j.length > 5) {
//     //   inpu.style.color = "red";
//       kk.target.style.color = "red";
//     } else {
//       inpu.style.color = "black";
//     }
//     console.log(kk.target);
// })
//------------------------------------------------------
/* document.addEventListener("DOMContentLoaded", () => {
  let ja1 = document.createElement("input");
  document.body.appendChild(ja1);

  ja1.addEventListener("input", (item) => {
    let jk = item.target.value;

    if (jk.length > 5) {
      item.target.style.color = "red";
    } else {
      item.target.style.color = "blue";
    }
    // console.log(inpu.target);
  });
});
 */
//------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".container");
//   const listitems = document.querySelector(".listname");

//   function ali(e) {
//     // console.log(`target:`, e.target);
//     console.log(`currenttarget:`, e.currentTarget);
//     // if (e.target.classList.contains("link")) {
//       //   console.log("it is link");
//       // }
//     }

// function stopProgation(eb){
//   eb.preventDefault();
// };

//   listitems.addEventListener("click", ali,{capture:true});
//   // listitems.addEventListener("click", stopProgation);
//   container.addEventListener("click", ali,{capture:true});
// });

// listitem.addEventListener("click", function ali(e) {
//   console.log(`target:`, e.target);
//   console.log(`currenttarget:`, e.currentTarget);
// });

//------------------------------------------------------

/* document.addEventListener("DOMContentLoaded", () => {
  let a = document.querySelector(".container");
  let b = document.querySelector(".listname"); */

// b.addEventListener("click", function prop(e) {
//   // e.stopPropagation();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
// a.addEventListener(
//   "click",
//   function prop(e) {
//     e.stopPropagation();
//     console.log(e.currentTarget);
//     console.log(e.target);
//   },
//   true
// );
/*  b.addEventListener("click", (item) => {
    if (item.target.tagName === "A") {
      console.log(item.target.textContent);
    }
  });
}); */

//---------------------------------------------------------------

/* let con = document.querySelector(".con");
let tx = document.querySelector(".tx");
let dc = document.querySelector(".dc");

document.addEventListener("DOMContentLoaded", () => {
  // tx.addEventListener("click", () => {
  //   console.log(tx);
  // });

  function ali(){

    console.log(tx);
  };
  tx.addEventListener('click',ali);

});

 */
/* 
document.addEventListener("DOMContentLoaded", () => {
  let cont = document.querySelector(".con");
  let text = document.querySelector(".tx");
  let bote = document.querySelector(".dc");

  bote.addEventListener("click", () => {
    const elemnt = document.createElement("h1");
    elemnt.classList.add("aaa");
    elemnt.textContent = "amirali bodaghi";
    cont.appendChild(elemnt);
  });
  cont.addEventListener("click", (e) => {
    if (e.target.classList.contains("aaa")) {
      console.log("i have aaa class");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const david = document.querySelector(".ad");
  const h2 = document.querySelector(".ll");

  function fff(e) {
    console.log(e.target);
    console.log(e.currentTarget);
  }

  david.addEventListener("click", fff, { capture: true });
});
 */
/* document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#form");
  let tex = document.querySelector(".tex");
  let pas = document.querySelector(".pas");
  form.addEventListener("submit", (e) => {
    console.log("form submitshod");
    e.preventDefault();
    console.log(tex.value);
    console.log(pas.value);
  });
}); */

/* localStorage.setItem("name", "ali");
/* sessionStorage.setItem('friend','bodagh');
 */ /* localStorage.setItem("friend", "bodagh");

const showw = localStorage.getItem("friend");
console.log(showw);
 */
/* localStorage.removeItem('name'); */
/* localStorage.clear();
 */
/* let fruit = ["apple", "bennana", "carot"];

localStorage.setItem("fruit", JSON.stringify(fruit));
const x = JSON.parse(localStorage.getItem("fruit"));

console.log(x[1]);

let dost;

if(localStorage.getItem('dost')){

  dost=JSON.parse(localStorage.getItem('dost'));
}
else{
  dost=[];
}
dost.push('kkk');

dost.push('ggfh');
dost.push('eifjef');
console.log(dost); */

//------------------------------------------------------
/* 
let poch;
if(localStorage.getItem('poch',JSON.stringify(poch))){

  poch=JSON.parse(localStorage.getItem('poch'));
}
else{
  poch=[];
}
poch.push('efjewif');
poch.push('ssarmy');
console.log(poch);
 */

//------------------------------------------------------

/* localStorage.setItem('dd',JSON.stringify(dost));
let yy=JSON.parse(localStorage.getItem('dd'))
console.log(yy[0]);
console.log(dost);



let st=['ali','hasan'];
st.push('var');
localStorage.setItem('st',JSON.stringify(st));
let b=JSON.parse(localStorage.getItem('st'));

console.log(b[1]);
console.log(b);
console.log(b[2]); */

//------------------------------------------------------

/* let b=setTimeout(()=>{
  alert("show this message after 2 second");
},2000);
clearTimeout(b);

let a=setInterval(()=>{
  alert('sallam');
},4000);
clearInterval(a); */

setTimeout(() => {
  console.log("این پیام فقط یک بار اجرا شد!");
}, 3000);

// اجرای پیام به صورت تکراری
let id = setInterval(() => {
  console.log("این پیام هر 2 ثانیه اجرا می‌شود!");
}, 2000);

// توقف اجرای تکراری بعد از 10 ثانیه
setTimeout(() => {
  clearInterval(id);
  console.log("پیام تکراری متوقف شد!");
}, 6000);

localStorage.setItem("username", "ali");
console.log("user saved");
localStorage.removeItem("username");
console.log("delet shod");
localStorage.clear();
console.log("all data delet shode");
let user = {
  name: "ali",
  lastname: "bodaghi",
  age: "18",
  city: "tehran",
};
localStorage.setItem("userinfo", JSON.stringify(user));
let geti = localStorage.getItem("userinfo");
let tabdil = JSON.parse(geti);
console.log("user info save shode");
console.log(tabdil.age);

function timeau(name, age) {
  console.log(`my name is ${name} and i am ${age} years old`);
}
setTimeout(timeau, 2000, "bodagh", 18);

//------------------------------------------------------------

function zarb(jj) {
  return function (hh) {
    return jj * hh;
  };
}
let a = zarb(2);
let b = a(3);
console.log(b);

//------------------------------------------------------------

/* function hi(item){


  console.log(`hi my name is ${item}`);
}

let fi=setInterval(hi,1000,'ali');
let ji=setInterval(hi,1000,'hasan');
clearInterval(fi); */

/* let butt = document.querySelector(".btt");
let boxi = document.querySelector(".box");
butt.addEventListener("click", () => {
  const value = boxi.getBoundingClientRect();
  console.log(value);
  console.log(value.innerWidth);
  console.log(value.innerHeight);
});
window.addEventListener('resize',()=>{

  console.log(window.innerWidth);
});
 */
document.addEventListener("DOMContentLoaded", () => {
  let btt = document.querySelector(".btt");
  let boxi = document.querySelector(".box");
  btt.addEventListener("click", () => {
    let bar = boxi.getBoundingClientRect();
    console.log(bar);
    console.log(boxi.offsetWidth);
    console.log(boxi.clientWidth);
  });
});
window.addEventListener("load", () => {
  console.log("صفحه کاملاً بارگذاری شد!");
});
const inputField = document.createElement("input");
document.body.appendChild(inputField);

inputField.addEventListener("input", (event) => {
  console.log("مقدار ورودی: ", event.target.value);
});
/* const input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener("focus", () => {
  console.log("فوکوس روی ورودی!");
});

input.addEventListener("blur", () => {
  console.log("فوکوس از ورودی خارج شد!");
});
 */

//--------------------------------------------------

/* const form = document.createElement("form");
const inputoo = document.createElement("input");
const submit = document.createElement("button");

submit.textContent = "ارسال";
form.appendChild(input);
form.appendChild(submit);
document.body.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
  console.log("فرم ارسال شد: ", inputoo.value);
});

 */

//--------------------------------------------------

const form = document.createElement("form");
const inputt = document.createElement("input");
const bot = document.createElement("button");

bot.textContent = "ارسال";
form.appendChild(inputt);
form.appendChild(bot);
document.body.appendChild(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form sent", inputt.value);
});

//--------------------------------------------------

function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

//--------------------------------------------------
