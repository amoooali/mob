let ranbo = [
  { nom: "amir", sen: 30 },
  { nom: "appi", sen: 10 },
  { nom: "lli", sen: 20 },
];

let newranbo = ranbo.find((q) => {
  return q.sen > 10;
});
console.log(newranbo.sen);

let numbers = [3, 5, 7, 8];
let somwee = numbers.some((r) => {
  return r % 2 == 0;
});

console.log(somwee);
let rr = numbers.every((t) => {
  return t % 2 == 0;
});
console.log(rr);

//----------------------------------------

let newr=[40,10,30,20];
 newr.sort((a,b)=>{ return a-b});
console.log(newr); 

/* newr.sort((a,b)=>{return b-a});
console.log(newr); */
//----------------------------------------

let yy=['samira','ali','hasan','davood','amir'];

yy.sort((a,b)=>{return a.localeCompare(b)});
console.log(yy);
//-----------------------------------------------

let slicee=[1,2,3,4,5,6];
let newslice=slicee.slice(1,3);//همون یک و دو {2و3}
console.log('slice :'+newslice);

slicee.splice(1,3,'amir','ali');//[1,amir,ali,5,6];
console.log(slicee)
//-----------------------------------------------
let ooo=[1,2,3,4,5,6];
let newoo=ooo.slice(3,4);
console.log(newoo);

ooo.splice(1,2,'22','23')
console.log(ooo);
//-----------------------------------------------

let joinn=['sara','reza','hasna','ali'];

let newjoin=joinn.join(' ');//تبدیل به رشته
console.log(newjoin);
//-----------------------------------------------
let tt='ali reza hasan davood';
let newtt=tt.split(" ");
console.log(newtt);//تبدیل به ارایه
console.log(tt);

let wet='amirali';
let newrt=wet.split("");
console.log(newrt);
//-----------------------------------------------
let bodaghi=[10,20,30,40];
let nerbod=bodaghi.filter((e)=>{return e>10}).map((w)=>{return w*2}).reduce((sabet,sum)=>{return sabet+sum},0)
console.log(nerbod);
//--------------------------------------------

let yyy='amirali bodaghi';
let newyyy=yyy.split(" ");
console.log(newyyy);
console.log(yyy);
//--------------------------------------------
/* let alii=[1,2,3,4,5]; */
let alii=['amiir','ali','hasan'];
let newalii=alii.join(' ');
console.log(newalii);
//-----------------------------------------------
let sslicee=[1,2,3,4,5,6];
let newslicee=sslicee.slice(1,3);
console.log(newslicee);

let newsplicee=[1,2,3,4,5,6];
newsplicee.splice(1,3,'ali','hasan');
console.log(newsplicee);
//-----------------------------------------------
let sortarr=[2,4,6,7,1,3];
let newsort=sortarr.sort((a,b)=>{return a-b});
console.log(newsort);

let nsoert=['ali','davood','jamshid','hasan'];
let iu=nsoert.sort((a,b)=>{return a.localeCompare(b)});
console.log(iu);

//-----------------------------------------------
let newnumber=[15,24,45,35,55,35];

let newrtt=newnumber.filter((e)=>{return e>10}).map((o)=>{return o*2}).reduce((stay,adad)=>{return stay+adad},0);
console.log(newrtt);
