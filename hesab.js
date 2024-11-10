function jam() {
  let a = Number(document.getElementById("b1").value);
  let b = Number(document.getElementById("b2").value);
  document.getElementById('f3').innerText=`jam:${a+b}`;

}
function menha() {
    let a = Number(document.getElementById("b1").value);
    let b = Number(document.getElementById("b2").value);
    document.getElementById('f3').innerText=`menha:${a-b}`;

  }
  function zarb() {
    let a = Number(document.getElementById("b1").value);
    let b = Number(document.getElementById("b2").value);
    document.getElementById('f3').innerText=`zarb:${a*b}`;

  }
  function taghsim() {
    let a = Number(document.getElementById("b1").value);
    let b = Number(document.getElementById("b2").value);
   
   document.getElementById('f3').innerText=`taghsim:${a/b}`;
  }
  
