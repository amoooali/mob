/* 

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button");
  let value = document.querySelector(".colorname");
  let div = document.querySelector(".col");
  let brnadd = document.querySelector(".input-btn");
  let savecolor = document.querySelector(".save");

  let inputam = document.querySelector("#input-color");
  let color = ["red", "green", "blue", "black", "orange"];
  let colorasli = [...color];
  btn.addEventListener("click", () => {
    let rangpage = color[start()];

    value.textContent = rangpage;
    div.style.backgroundColor = rangpage;
   
  });

    brnadd.addEventListener("click", () => {
    let newcolor = inputam.value.trim();

    if (newcolor) {
      alert(`new color:${newcolor} add`);

      color.push(newcolor);
      inputam.value = "";
    } else {
      alert("pleas enter true value");
    }
  }); */
//--------------------------
/*   brnadd.addEventListener("click", () => {
    let hamin = inputam.value.textContent.trim();
    if (hamin & !color.includes(hamin)) {
      alert("new color add to array");
      color.push(hamin);
      inputam.value = "";
    } else {
      alert("color already exist");
    }
  }); */
//--------------------------

/*  savecolor.addEventListener("click", () => {
    let current = value.textContent;

    if (current && !colorasli.includes(current)) {
      colorasli.push(current);
      alert("new color add to array");
    } else {
      alert("color already exsit");
    }
    localStorage.setItem('color',colorasli);
  });
  function start() {
    return Math.floor(Math.random() * color.length);
  }
});
 */

//-----------------------------------------------------

/*
document.addEventListener("DOMContentLoaded", () => {
  let changeColorBtn = document.querySelector("button");
  let colorNameDisplay = document.querySelector(".colorname");
  let colorBox = document.querySelector(".col");
  let addColorBtn = document.querySelector(".input-btn");
  let saveColorBtn = document.querySelector(".save");
  let colorInput = document.querySelector("#input-color");

  let colors = ["red", "green", "blue", "black", "orange"];

  let originalColors = [...colors];
  changeColorBtn.addEventListener("click", () => {
    let randomColor = colors[getRandomIndex()];
    colorNameDisplay.textContent = randomColor;
    colorBox.style.backgroundColor = randomColor;
  });

  addColorBtn.addEventListener("click", () => {
    let newColor = colorInput.value.trim().toLowerCase();
    if (newColor && !colors.includes(newColor)) {
      alert(`New color "${newColor}" added!`);
      colors.push(newColor);
      colorInput.value = "";
    } else if (colors.includes(newColor)) {
      alert(`Color "${newColor}" already exists.`);
    } else {
      alert("Please enter a valid color name.");
    }
  });

  saveColorBtn.addEventListener("click", () => {
    let currentColor = colorNameDisplay.textContent;
    if (currentColor && !originalColors.includes(currentColor)) {
      originalColors.push(currentColor);
      localStorage.setItem("color", JSON.stringify(originalColors));
      alert(`Color "${currentColor}" saved to the original array.`);
    } else if (originalColors.includes(currentColor)) {
      alert(`Color "${currentColor}" already exists in the original array.`);
    } else {
      alert("No color to save.");
    }
  });

  function getRandomIndex() {
    return Math.floor(Math.random() * colors.length);
  }
  console.log([...colors]);
  console.log(colors[3]);
}); */

//-----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let codvalue = document.querySelector(".colorname");
  let rndcolor = document.querySelector(".rndcolor");
  let safecod = document.querySelector(".col");
  let inputcod = document.querySelector("#input-color");
  let inputbtn = document.querySelector(".input-btn");
  let savecod = document.querySelector(".save");

/*   let arrcod = ["red", "blue", "green", "pink", "black"];
 */  let arrcod = JSON.parse(localStorage.getItem("colors")) || ["red", "blue", "green", "pink", "black"];
 
  rndcolor.addEventListener("click", () => {
    let thiscod = arrcod[randomcod()];
    safecod.style.backgroundColor = thiscod;

    codvalue.textContent = thiscod;
  });

  inputbtn.addEventListener("click", () => {
    let matn = inputcod.value.trim();

    if (arrcod.includes(matn)) {
      console.log("it was exist");
    } else {
      console.log("new color add");
      arrcod.push(matn);
      inputcod.value = "";
    }
  });

  function randomcod() {
    return Math.floor(Math.random() * arrcod.length);
  }
savecod.addEventListener('click',()=>{

localStorage.setItem('colors',JSON.stringify(arrcod));
console.log('color save to local');




})




});
