// document.addEventListener("DOMContentLoaded", () => {
//   // console.log(input.TEXT_NODE);

//   let input = document.querySelector(".input");
// let button = document.querySelector(".bot");
// let h1=document.querySelector('h1');
//   button.addEventListener("click", () => {
//     // console.log('shjdjshd');
//     let meghdar = input.Value;
// h1.textContent=meghdar;
//     // if (meghdar != null) {
//     //   let ul = document.createElement("ul");
//     //   let li = document.createElement("li");

//     //   li.textContent = meghdar;
//     //   ul.appendChild(li);
//     //   li.appendChild(meghdar)
//     // } else {
//     //   console.log("khatta");
//     // }
//   });
// });

//----------------------------------
let bot = document.querySelector(".bot");

document.addEventListener("DOMContentLoaded", () => {
  let ul = document.createElement("ul");

  bot.addEventListener("click", () => {
    let put = document.querySelector(".input").value;
    // if(put!==""){

        if(put==false){
            alert('write somthing')
            return;
        }
    console.log(put);
    let li = document.createElement("li");

    // li.innerHTML = meg;//ravesh aval
    let textNode = document.createTextNode(put); //ravesh dovom
    li.appendChild(textNode);

    let delit = document.createElement("button");
    delit.textContent = "delet";
    delit.style.backgroundColor = "red";
    delit.addEventListener("click", () => {
      ul.removeChild(li);
      if (true) {
        let a = document.createElement("h1");
        a.textContent = "delet shod";
        document.body.appendChild(a);
        setTimeout(() => {
          a.textContent = "";
        }, 2000);
      }
    });
    li.appendChild(delit);
    ul.appendChild(li);
    document.querySelector(".input").value = "";
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    
      // li.style.textDecoration= li.style.textDecoration==="line-through" ? "none" : "line-through";//ravesh digar baray shart
    });
let bot = document.querySelector(".bot");

document.addEventListener("DOMContentLoaded", () => {
  let ul = document.createElement("ul");

  bot.addEventListener("click", () => {
    let put = document.querySelector(".input").value;

    console.log(put);
    let li = document.createElement("li");

    // li.innerHTML = meg;//ravesh aval
    let textNode = document.createTextNode(put); //ravesh dovom
    li.appendChild(textNode);

    let delit = document.createElement("button");
    delit.textContent = "delet";
    delit.style.backgroundColor = "red";
    delit.addEventListener("click", () => {
      ul.removeChild(li);
      if (true) {
        let a = document.createElement("h1");
        a.textContent = "delet shod";
        document.body.appendChild(a);
        setTimeout(() => {
          a.textContent = "";
        }, 2000);
      }
    });
    li.appendChild(delit);
    ul.appendChild(li);
    document.querySelector(".input").value = "";
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
      // li.style.textDecoration= li.style.textDecoration==="line-through" ? "none" : "line-through";//ravesh digar baray shart
    });
  });
  document.body.appendChild(ul);
});
// }
// else{console.log('eshtebah');}
  });
  document.body.appendChild(ul);
});

// let hh1 = document.querySelector("h1");
// console.log(put.nodeType);
// console.log(put.firstChild);
// console.log(meg.firstChild);
