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
document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  let a = document.querySelector(".container");
  let b = document.querySelector(".listname");

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
  b.addEventListener("click", (item) => {
    if (item.target.tagName === "A") {
      console.log(item.target.textContent);
    }
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#form");
  let tex = document.querySelector(".tex");
  let pas = document.querySelector(".pas");
  form.addEventListener("submit", (e) => {
    console.log("form submitshod");
    e.preventDefault();
    console.log(tex.value);
    console.log(pas.value);
  });
});

localStorage.setItem("name", "ali");
/* sessionStorage.setItem('friend','bodagh');
 */ localStorage.setItem("friend", "bodagh");

const showw = localStorage.getItem("friend");
console.log(showw);

/* localStorage.removeItem('name'); */
/* localStorage.clear();
 */
let fruit = ["apple", "bennana", "carot"];

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
console.log(dost);

//------------------------------------------------------

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



