/* document.addEventListener("DOMContentLoaded", () => {
  let stop = document.querySelector(".stop");
  let start = document.querySelector(".start");
  let meghdar = document.querySelector(".timer");
  let input = document.querySelector("input");
let interval;
  let tr;
  start.addEventListener("click", () => {
    tr = Number(input.value);
  });

 interval=setInterval(()=>{
    tr--;
    meghdar.textContent = tr;
    if (tr <= 0) {
      clearInterval(newst);
      meghdar.textContent = "payan";
    }
},1000);
 


  stop.addEventListener("click", () => {
    clearInterval(interval);
    meghdar.textContent = "stop";
  });
});

 */
/* 
document.addEventListener("DOMContentLoaded", () => {
  let stopbtn = document.querySelector(".stop");
  let startbtn = document.querySelector(".start");
  let val = document.querySelector(".val");
  let input = document.querySelector(".input");

  let interval;
  let count;

  startbtn.addEventListener("click", () => {
    count = Number(input.value);

    if (isNaN(count) || count == 0) {
      alert( "pleas fill blank");
      return;
    }
  });

  stopbtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  clearInterval(interval);

  val.textContent = count;

  interval = setInterval(() => {
    count--;

    val.textContent = count;
    if (count <= 0) {
      clearInterval(interval);
      val.textContent = "0";
    }
  }, 1000);
});
 */

//---------------------------------------------
/* document.addEventListener("DOMContentLoaded", () => {
    let stopbtn = document.querySelector(".stop");
    let startbtn = document.querySelector(".start");
    let val = document.querySelector(".val");
    let input = document.querySelector(".input");
  
    let interval; // ذخیره شناسه setInterval
    let count; // شمارشگر تایمر
  
    startbtn.addEventListener("click", () => {
      // گرفتن مقدار ورودی و تبدیل به عدد
      count = Number(input.value.trim());
  
      // بررسی ورودی
      if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number!");
        return;
      }
  
      // پاک کردن تایمر قبلی در صورت وجود
      clearInterval(interval);
  
      // تنظیم مقدار اولیه در صفحه
      val.textContent = count;
  
      // شروع تایمر
      interval = setInterval(() => {
        count--;
  
        val.textContent = count;
        if (count <= 0) {
          clearInterval(interval);
          val.textContent = "0";
        }
      }, 1000);
    });
  
    stopbtn.addEventListener("click", () => {
      // متوقف کردن تایمر
      clearInterval(interval);
    });
  });
   */

document.addEventListener("DOMContentLoaded", () => {
  let stopbtn = document.querySelector(".stop");
  let startbtn = document.querySelector(".start");

  let val = document.querySelector(".val");
  let inputt = document.querySelector(".input");

  let interval;
  let count;

  startbtn.addEventListener("click", () => {
    count = Number(inputt.value.trim());

    if (isNaN(count) || count <= 0) {
      alert("please enter valid number");
      return;
    }

    clearInterval(interval);

    val.textContent = count;

    interval = setInterval(() => {
      count--;
      val.textContent = count;
      if (count <= 0) {
        clearInterval(interval);
        val.textContent = "0";
      }
    }, 1000);
  });

  stopbtn.addEventListener("click", () => {
    clearInterval(interval);
  });
});
