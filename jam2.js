document.addEventListener("click", () => {
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");
  let btn = document.querySelectorAll("btn");
  let matn = document.querySelector("matn");

  let js1 = Number(inp1.value.trim());
  let js2 = Number(inp2.value.trim());

  let b;
  let c;
  let d
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      let hame = e.target.classList;

      if (hame.contains("jam")) {
       matn.textContent=js1+js2;
      } else if (hame.contains("menha")) {
        c = js1 - js2;
        matn.textContent = c;
      } else if (hame.contains("taghsim")) {
        d = js1 / js2;
        matn.textContent = d;
      }
    });
  });
});
