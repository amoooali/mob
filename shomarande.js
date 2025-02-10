/* document.addEventListener("DOMContentLoaded", () => {
  let val = document.querySelector(".meghdar");
  let btn = document.querySelectorAll(".btn");
  let count = 0;

  btn.forEach((button) => {
      button.addEventListener("click", (e) => {
          try {
              let hame = e.target.classList;
              if (hame.contains("plus")) {
                  count++;
                  val.textContent = count;
              } else if (hame.contains("mines")) {
                  count--;
                  val.textContent = count;
              } else if (hame.contains("zero")) {
                  count = 0;
                  val.textContent = count;
              }

              if (count > 0) {
                  val.style.color = "green";
              } else if (count < 0) {
                  val.style.color = "red";
              } else if (count == 0) {
                  val.style.color = "green";
              }
          }
          catch { console.log('error'); }

      });
  });
});
 *///---------------------------------
document.addEventListener('DOMContentLoaded', () => {
    let val = document.querySelector('.meghdar');
    let btn = document.querySelectorAll('.btn');
    let count = 0;

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            try {
                let hame = e.target.classList;

                if (hame.contains('plus')) {
                    count++;
                } else if (hame.contains('mines')) {
                    count--;
                } else if (hame.contains('zero')) {
                    count = 0;
                }

                val.textContent = count;

                if (count > 0) {
                    val.style.color = 'green';
                } else if (count < 0) {
                    val.style.color = 'red';
                } else if (count === 0) {
                    val.style.color = 'yellow';
                }
            } catch (error) {
                console.log('Please check the code');
            }
        });
    });
});

let ari=[3,4,6,7,9,10];
let javab=ari.some((i)=>{return i%2==0});
console.log(javab);
