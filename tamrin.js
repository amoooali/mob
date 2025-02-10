document.addEventListener("DOMContentLoaded", () => {
  let people = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 30 },
    { name: "Reza", age: 18 },
    { name: "Mina", age: 25 },
  ];

  let names = people.map((item) => {
    return item.name;
  });
  console.log(names);
  //----------------------------------------------------------
  let ages = people.filter((items) => {
    return items.age >= 20;
  });
  console.log(ages);
  //----------------------------------------------------------
  let jam = people.reduce((sum, clon) => {
    return sum + clon.age;
  }, 0);
  console.log(jam);
  //----------------------------------------------------------
  let bala25 = people.find((persons) => {
    return persons.age > 25;
  });
  console.log(bala25);
  //----------------------------------------------------------
  let info = people.forEach((itemm) => {
    console.log(`${itemm.name} and ${itemm.age}`);
  });
  console.log(info);
  //----------------------------------------------------------
  let peoplelengh = people.map((o) => {
    return o.name.length;
  });
  console.log(peoplelengh);
  //----------------------------------------------------------
  let pir = people.filter((e) => {
    return e.age >= 25;
  });
  console.log(pir);
  //----------------------------------------------------------
  let miangin = people.reduce((summ, a) => {
    return summ + a.age;
  }, 0);
  let c = miangin / people.length;
  console.log(c);
  //----------------------------------------------------------
  let startbyR = people.find((g) => {
    return g.name[0] == "R";
  });
  console.log(startbyR);
  //----------------------------------------------------------
  /*   let startbyR=people.find((g)=>{return g.name.startsWith('R')});
  console.log(startbyR); */
  //----------------------------------------------------------
  people.forEach((w) => {
    if (w.age > 20) {
      console.log("sen ghanoni" + w.name);
    } else {
      console.log("your kid" + w.name);
    }
  });
  //----------------------------------------------------------
  let senkamtaraz20 = people
    .filter((t) => {
      return t.age < 29;
    })
    .map((t) => {
      return t.name;
    });
  console.log(senkamtaraz20);
  //----------------------------------------------------------
  let somee = people.some((q) => {
    return q.age > 20;
  });
  console.log(somee);
  //---------------------------------------------------------
  let everyy = people.every((k) => {
    return k.age > 20;
  });
  console.log(everyy);
});
//---------------------------------------------------------
let ari = [3, 4, 6, 7, 9, 10];
let javab = ari.some((i) => {
  return i % 2 == 0;
});
console.log(javab);
//---------------------------------------------------------
let name = "ali";
let age = 18;
let isStude = true;
let skill = ["math", "sience", "history"];

console.log(
  `name:${name} -- age:${age} -- isStudent:${isStude} -- skill:${skill}`
);

//---------------------------------------------------------

let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.addEventListener("click", () => {
  let meghdar = inp.value.trim();
  if (meghdar === "") {
    console.log("please enter sothing");
  } else {
    let val = Number(inp.value.trim());
    if (val % 2 == 0) {
      console.log("zoj");
    } else if (val % 2 !== 0) {
      console.log("fard");
    }
  }
});
//---------------------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let r = 0;
while (r < 10) {
  console.log(r);
  r++;
}
//---------------------------------------------------------

let inp1 = document.querySelector(".it");
let inp2 = document.querySelector(".i");
let inp3 = document.querySelector(".in");

let btn2 = document.querySelector(".bnt");

btn2.addEventListener("click", function sum() {
  let p = Number(inp1.value);
  let l = Number(inp2.value);

  let result = p + l;
  console.log(result);
});

//---------------------------------------------------------

/* 
 function alii(){
let ali=99;
}
console.log(ali); */

//---------------------------------------------------------
/* 
let k=0;
if (k==true){
  console.log('true');
}
else{console.log(false)}; */
//---------------------------------------------------------

/* let valll=10;
console.log(typeof valll);

let matn='hello';
console.log(typeof matn);
let uu='40';

let ff=Number(uu);
console.log(ff);
 */
//---------------------------------------------------------

// let forch = [90, 23, 12, 13, 33];

// forch.forEach((item) => {
//   console.log(item);
// });
//---------------------------------------------------------
// let numbs = [8, 87, 6, 98, 98];
// let neew = numbs.map((e) => {
//   return e * 2;
// });
// console.log(neew);
//---------------------------------------------------------
// let nnumbs = [8, 87, 6, 98, 98];
// let khneww = nnumbs.filter((ee) => {
//   return ee >= 87;
// });

// console.log(khneww);
//---------------------------------------------------------
// let nnuombs = [8, 87, 6, 98, 98];
// let kkkk = nnumbs.reduce((sabe, adda) => {
//   return sabe + adda;
// }, 0);
// console.log(kkkk);

//---------------------------------------------------------
let ranbo = [
  { nom: "amir", sen: 30 },
  { nom: "appi", sen: 10 },
  { nom: "lli", sen: 20 },
];

let newranbo=ranbo.find((q)=>{return q.sen>10});
console.log(`sen==${newranbo}`);