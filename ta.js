let pp = [
  { nam: "ali", age: 22 },
  { nam: "kv", age: 73 },
  { nam: "ks", age: 74 },
  { nam: "kr", age: 79 },
];
//-----------------------------
let namee = pp.map((item) => {
  return item.nam;
});
console.log(namee);

//-----------------------------

let age9 = pp.filter((e) => {
  return e.age > 22;
});
console.log(age9);
//-----------------------------
let jam = pp.reduce((sum, o) => {
  return sum + o.age;
}, 0);
console.log(jam);
//-----------------------------
let fiind = pp.find((ii) => {
  return ii.age > 70;
});

console.log(fiind);

//-----------------------------

let lll = pp.map((jj) => {
  return jj.nam.length;
});
console.log(lll);

//-----------------------------

let gf = pp.find((w) => {
  return w.nam.startsWith("a");
});
console.log(gf);

//-----------------------------
let idid = [];
pp.forEach((ooo) => {
  idid.push(ooo);
  idid.push(`${ooo.nam} & ${ooo.age}`);
});
console.log(idid);

//-----------------------------
let sss = [2, 4, 6, 8, 10];
let javab = sss.every((uu) => {
  return uu % 2 == 0;
});
console.log(javab);
