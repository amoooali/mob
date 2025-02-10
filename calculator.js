/* document.addEventListener("DOMContentLoaded", () => {
  let inpfirst = document.querySelector(".inp1");
  let inpecond = document.querySelector(".inp2");
  let btn = document.querySelectorAll(".btn");

  let val = document.querySelector("h1");

  btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let a = Number(inpfirst.value);
      let b = Number(inpecond.value);

      if (isNaN(a) || isNaN(b)) {
        val.textContent = "Please enter valid numbers";
        val.style.color = "red";
        return;
      }

      let allclass = e.target.classList;

      if (allclass.contains("jam")) {
        val.textContent = a + b;
      } else if (allclass.contains("menha")) {
        val.textContent = a - b;
      } else if (allclass.contains("taghsim")) {
        if (b == 0) {
          val.textContent = "cant devide by zero";
          val.style.color = "red";
          return;
        }
        val.textContent = a / b;
      } else if (allclass.contains("zarb")) {
        val.textContent = a * b;
      }

      let result = val.textContent;
      if (result > 0) {
        val.style.color = "green";
      } else if (result < 0) {
        val.style.color = "red";
      }
    });
  });
  val.addEventListener("click", () => {
    val.textContent = "";
  });
}); */

//------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let inpfirst = document.querySelector(".inp1");
  let inpecond = document.querySelector(".inp2");
  let btn = document.querySelectorAll(".btn");

  let val = document.querySelector("h1");

  btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let hame = e.target.classList;
      let a = Number(inpfirst.value);
      let b = Number(inpecond.value);

      if (isNaN(a) || isNaN(b)) {
        val.textContent = "please enter true number";
        return;
      }
      if (hame.contains("jam")) {
        val.textContent = a + b;
      } else if (hame.contains("menha")) {
        val.textContent = a - b;
      } else if (hame.contains("taghsim")) {
        val.textContent = a / b;
      } else if (hame.contains("zarb")) {
        val.textContent = a * b;
      }
      inpfirst.value="";
      inpecond.value="";
    });
  });
});

//------------------------------------------------------------

let ar = ["ali", "hasan", "hosien", "mohammad", "amin"];
let newar = ar.join(" ");
console.log(newar);

let jomle = "in the name of god";
let newjomle = jomle.split(" ");
console.log(newjomle);

let mob = ["a", "b", "c", "d"];
let newmob = mob.slice(2, 3);
console.log(newmob);

//------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let inputam = document.querySelector(".sadkz");
  let buttam = document.querySelector(".matnam");

  buttam.addEventListener("click", () => {
    let val = inputam.value;
    let r = val.split(" ");
    inputam.value = "";
    inputam.value = r.length;
  });
});

//-----------------------------------------------------

