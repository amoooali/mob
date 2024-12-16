// document.addEventListener('DOMContentLoaded',()=>{

//   let iooou = document.querySelector('.tagir');
//   let haminn=iooou?iooou.nextElementSibling:null;
// let po=true;
//   if(haminn){

//   haminn.addEventListener('click',()=>{

//   haminn.classList.toggle('o');

//   });

//   }

//   else{document.write('khattta');
//     ;
//   };

//   });

//----------------------------------------------------------
//   let number = [1, 2, 3, 4, 5];

//   let javab = number.map((item) => {
//     return item * 2;
//   });
//   console.log(javab);
//----------------------------------------------------------

//   let zoj = [1, 2, 3, 4, 5, 6, 7];
//   let adadzoj = zoj.filter((items) => {
//     return items % 2 == 0;
//   });
//   console.log(adadzoj);

//----------------------------------------------------------

//   let jam = [10, 10, 10, 10, 10];
//   let sum = jam.reduce((itemss, adad) => {
//     return itemss + adad;
//   }, 0);
//   console.log(sum);

//----------------------------------------------------------

//   let name=['ali','hasan','mohammad','reza'];
//   name.forEach((Iitem3)=>{

//     console.log(`name=>${Iitem3}`)
//   });
//----------------------------------------------------------

//       const person = {
//   name: "Ali",
//   age: 30,
//   job: "developer"
// };

// // دسترسی به خاصیت name با استفاده از کروشه
// console.log(person["name"]); // خروجی: Ali

// // دسترسی به خاصیت job با استفاده از کروشه
// console.log(person["job"]); // خروجی: developer

//----------------------------------------------------------

//       const fruits = ["apple", "banana", "cherry"];

// // دسترسی به اولین عنصر آرایه
// console.log(fruits[0]); // خروجی: apple

// // دسترسی به دومین عنصر آرایه
// console.log(fruits[1]); // خروجی: banana

//----------------------------------------------------------

//   const number=44.84747;
//   const result=Math.floor(number);//be paeen gerd mishe

//----------------------------------------------------------

//   const number=44.84747;
//   const result=Math.ceil(number);//be bala gerd mishe

//----------------------------------------------------------

//   const number=80;
//   const result=Math.sqrt(number);

//----------------------------------------------------------

//   const result=Math.min(1,2,3,5);
//   const result=Math.max(4,7,5,3);

//----------------------------------------------------------

//   const result=Math.ceil( Math.random()*10);
//   console.log(result);

//----------------------------------------------------------

//   let back='#'+Math.floor(Math.random()*16777215).toString(16);

//   document.body.style.backgroundColor=back;

//----------------------------------------------------------

// function rang(){
//       let back="#"+Math.floor(Math.random()*16777215).toString(16);
//       document.getElementById('a1').style.backgroundColor=back;
// };

//----------------------------------------------------------

// function rang() {
//   let color = ["#ff0000", "#0000ff"];
//   let back = color[Math.floor(Math.random() * color.length)];
//   document.getElementById("a1").style.background = back;
// }

//----------------------------------------------------------

// let mahha = [
//   "farvardin",
//   "ordibehesht",
//   "khordad",
//   "tir",
//   "mordad",
//   "shahrivar",
//   "mehr",
//   "aban",
//   "azar",
//   "dey",
//   "bahman",
//   "esfand",
// ];

// let date = new Date();
// let month = date.getMonth();
// console.log(month);
// console.log(mahha[month]);
// document.getElementById("a1").innerHTML = mahha[month];

// let week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let roz = date.getDay();
// console.log(roz);
// console.log(week[roz]);

//----------------------------------------------------------

// let visible = true;
// function rang() {
//   if (visible == true) {
//     console.log(
//       `${mahha[month]},${date.getDate()},${
//         week[roz]
//       },${date.getFullYear()}`
//     );
//     visible = false;
//   } else {
//     console.clear();
//     visible = true;
//   }
// }

//----------------------------------------------------------

//   let visible = true;
//   function rang() {
//     if (visible == true) {
//       console.log(
//  new Date('2,12,2007').getFullYear()
//       );
//       visible = false;
//     } else {
//       console.clear();
//       visible = true;
//     }
//   }

//----------------------------------------------------------

// document.getElementById('id').innerHTML="sallam";

//       let tags = document.getElementsByTagName('h3');
// for (let i = 0; i < tags.length; i++) {
// tags[i].innerHTML = 'hi';}

// let tag=document.getElementsByTagName('div');
// for(let i=0;i<=tag.length;i++){

//   tag[i].innerHTML='jadid';
//   console.log(i);
// }

// let elemnt = document.querySelectorAll(".div .p");
// elemnt.forEach((items) => {
//   items.innerHTML = "amirali";
// });

//----------------------------------------------------------

// document.body.style.backgroundColor = "gold";
// let btn = document.getElementById("bot");
// let show = btn.nodeName;
// let watch = btn.style;
// let kids = btn.children;
// console.log(show);
// console.log(watch);
// console.log(kids);
// console.dir(document);

//----------------------------------------------------------

// let p = document.getElementById("p");
// p.style.backgroundColor = "purple";
// p.style.color = "black";

//----------------------------------------------------------

// let show = document.getElementsByTagName('h2');
// show[2].style.backgroundColor='red';
// show[0].style.color='green';
// console.log(show);

//----------------------------------------------------------

// let give = document.getElementsByTagName("li");
// let func = [...give];
// give[2].style.color='red';
// func.forEach((item) => {
//   console.log(item);
// });
// console.log(give);
// console.log(func);

//----------------------------------------------------------

// let t = document.getElementsByClassName("oo");
// t[2].style.backgroundColor = "red";
// console.log(t);

//----------------------------------------------------------

// let t = document.getElementsByClassName("oo");
// t[2].style.backgroundColor = "red";
// console.log(t);

//----------------------------------------------------------

// let item = document.querySelector('.oo');
// console.log(item);

// let get=document.querySelector('#o1')
// console.log(get);

// let li=document.querySelector('li:last-child')
// console.log(li);

//----------------------------------------------------------

// const list=document.querySelectorAll('li');
// let result=list.forEach((item)=>{
//   console.log(item);
//   list[2].style.backgroundColor='blue';
// })

// const list=document.querySelectorAll('li');
//       console.log(list[2]);
//       console.log(list[3]);
//       list[3].style.backgroundColor='red';
//       list[2].style.backgroundColor='blue';

//----------------------------------------------------------

// const list = document.querySelectorAll("li");

// let b = [2, 4];

// b.forEach((items) => {
//   let it = list[items];
//   if (it) {
//     console.log(it);
//     it.style.backgroundColor = "red";
//   }
// });

//----------------------------------------------------------

// let ul=document.querySelectorAll('#ul li');
// console.log(ul);

// let u=document.querySelector('#ud');
// let li=u.children;
// console.log(li);

//----------------------------------------------------------

// let h1 = document.querySelector(".result");
// console.log(h1.parentElement.parentElement);
// let r = h1.parentElement;
// r.style.color = "red";

// let li=document.querySelector("#next");
// let e=li.nextSibling.nextSibling.style.color='red';
// console.log(e);

// let li=document.querySelector("#next");
// let e=li.nextElementSibling.style.color='red';
// console.log(e);

// let lastli=document.querySelector('#last');
// let f=lastli.previousSibling.previousSibling.style.color='green';
// console.log(f);

// let lastli=document.querySelector('#last');
// let f=lastli.previousElementSibling.style.color='green';
// console.log(f);

//----------------------------------------------------------

// let li=document.querySelector('#next');
// console.log(li.childNodes[0].nodeValue);
// console.log(li.children[2]);
// console.log(li.childNodes[8].nodeValue);
// console.log(li.childNodes[8].nodeValue);
// console.log(li.childNodes[8]);

//let li=document.querySelector('#next');
// let child=li.firstChild;
// console.log(child.textContent);

//       li.childNodes.forEach(node => {
//   if (node.nodeType === 3) { // 3: Text Node
//     console.log(node.nodeValue.trim());
//   }
// });

// let li = document.querySelector("#next");
// li.childNodes.forEach((item) => {
//   if (item.nodeType === 3) {
//     console.log(item.nodeValue.trim());
//   }
// });

//----------------------------------------------------------

//   let li = document.querySelector("#next");
//   li.childNodes.forEach((item) => {
//     if (item.nodeType === 1) {
//       console.log(item.textContent);
//     }
//   });
//----------------------------------------------------------

// let li = document.querySelector("#tool");

// console.log(li.childNodes);
// console.log(li.children);

// li.childNodes.forEach((item)=>{
//     if(item.nodeType===1){
//         console.log(item.textContent);

//     }
// })

// li.childNodes.forEach((item)=>{
//     if(item.nodeType===3){
//         console.log(item.nodeValue.trim());

//     }
// })
// let b=li.children[2];
// console.log(b);

// let show=li.children[2];
// console.log(show.textContent);

// if(li.childNodes[5]){
//     let show=li.childNodes[5];
//     console.log(show.textContent);
//     console.log(show.nodeType)

// }

// console.log(li.childNodes);
// li.childNodes.forEach((node)=>{
//     console.log(`node type:${node.nodeType}\t\t\t\t\t\t\t\tnode value:${node.textContent}\t\t\t\t\t\t\t\t `)
// })

// let c=li.children[2];
// let g=true;
// function changecolor(){
//     if(g===true){
//     c.style.backgroundColor = "red";g=false}
//     else{
//         c.style.backgroundColor='';
//         c.style.backgroundColor='transparent';
//         g=true;
//     }
// }

// let button=li.children[2];
// let f=true;

// function changecolor(){
//     if(f===true){
//         button.style.backgroundColor='red';f=false
//     }
//     else{
//         button.style.backgroundColor='';
//         f=true;
//     }
// }

// console.log(button.textContent);
// console.log(button.nodeType);

// li.childNodes.forEach((nodeT)=>{
//     if(nodeT.nodeType===1){
//         console.log(`node name:${nodeT.textContent} and  node tagname :${nodeT.tagName} and node type:${nodeT.nodeType}`)
//     }
// })

// let element=document.querySelector('#a');
// function ali() {
// element.innerHTML=`date: ${Date()}`;
// }
// setInterval(ali,1000);

// let clock=document.querySelector('#a');
// function ali(){
//     let zaman=new Date();
//     clock.innerHTML=`${zaman.getHours()}:${zaman.getMinutes()}:${zaman.getSeconds()}`;
// }
// setInterval(ali,1000);

// ali();

// let popm=document.querySelectorAll('h1');
// document.querySelector('#g').innerHTML=popm[1].textContent /*or innerhtml*/
// console.log(popm.length);

// popm.forEach((item)=>{

//     return item.style.color="red";
// })

// let lli=document.querySelectorAll('li');
// document.querySelector('#inner').innerHTML=lli[0].textContent;
// console.log(lli.length);

// lli.forEach((llii)=>{
//     // console.log(llii.textContent);
//      llii.style.backgroundColor='red';
// })

//-------------------------------------------------------------------------

// let first=document.querySelector('.first');

// let second=first.previousElementSibling;
// let second=first.nextElementSibling.style.color='red';
// console.log(second.textContent);

// let ul=document.querySelector('.hi');
// console.log(ul.childNodes.nodevalue);
// Array.from(ul.children).forEach
// ul.childNodes.forEach((item)=>{

//     if(item.nodeType===1){
// console.log(item.nodeValue.trim());
// console.log(item.textContent.trim());
//     }

// let easy=first.lastChild.textContent;
// console.log(easy);

//-------------------------------------------------------------------------

// let first = document.querySelector(".first");

// const classs = first.getAttribute('class');
// const iddd=first.getAttribute('id');
// console.log(classs);
// console.log(iddd);

// let linkk=document.querySelectorAll('class');
// console.log(linkk);

// const add=document.querySelector('a');
// const show =add.getAttribute('href');
// console.log(show);

// let addy=first.nextElementSibling;
// addy.setAttribute('id','com');
// addy.setAttribute('href',"./calomkd-html");
// addy.textContent='daaaaaaaaaaaaaaa';
// console.log(addy);
// let getti = document.querySelector('a');
// getti.setAttribute('class','kkka');
// console.log(getti.getAttribute('class'));

// let second = document.querySelector('#second');
// let third = document.querySelector('#third');
// let clname = fi.textContent;
// console.log(clname);

// let sla = document.querySelector('#sla');
// let y=sla.setAttribute("class","hsl");
// console.log(sla.getAttribute('id'));
// console.log(sla.id);
// console.log(sla.getAttribute('class'));

// let second=document.querySelector('#second');
// second.className='ali';
// console.log(second.className);
// console.log(second.id);

// let third = document.querySelector("#third");

// third.classList.add('bodaghi');
// let r=third.classList;
// console.log(third.nodeValue);
// third.childNodes.forEach((item)=>{
//     if(item.nodeType===3){
//         console.log(item.nodeValue.trim());
//     }
// })

// let show = third.classList.add("kk", "jj", "ff");
// third.classList.remove("jj");
// let tt = third.classList;
// console.log(tt);
// let result = third.classList.contains("kk");
// if (result == true) {
//   console.log("it is exist");
// } else {
//   console.log("it doesnt exist");
// }
//-------------------------------------------------------------------------

// let first = document.querySelector(".first");

// const classs = first.getAttribute("class");
// const iddd = first.getAttribute("id");
// console.log(iddd);
// console.log(classs);

// const link = document.querySelectorAll(".first");
// console.log(link);

// const ll=document.querySelector('a');
// const show =ll.getAttribute('href');
// console.log(show);

// let add = first.nextElementSibling;
// add.setAttribute("id", "amir");
// add.setAttribute("href", "./calc-po.html");
// add.textContent = "sallam";
// console.log(add);

// console.log(add.getAttribute("id"));

// let fisrt = document.querySelector("#first");
// let second = document.querySelector("#second");
// let third = document.querySelector("#third");
// let clname = fisrt.className;
// console.log(clname);

//----------------------------------------------------------

// let bodydiv=document.createElement('div');
// let divtext=document.createTextNode('sallam');

// bodydiv.appendChild(divtext);

// document.body.appendChild(bodydiv);
// bodydiv.setAttribute('class','jadid');
//----------------------------------------------------------

// let table=document.createElement('table');
// let tbody=document.createElement('tbody');
// let tr=document.createElement('tr');
// let td=document.createElement('td');

// table.style.border='1px solid red';
// td.style.border='1px solid  yellow';

// td.textContent='sallam';
// table.appendChild(tbody);
// tbody.appendChild(tr);
// tr.appendChild(td);
// document.body.appendChild(table);

//----------------------------------------------------------

// let table = document.createElement("table");
// let tbody = document.createElement("tbody");

// let row = 3;
// let coulmn = 4;

// for (let i = 0; i < row; i++) {
//   let tr = document.createElement("tr");
//   for (let j = 0; j < coulmn; j++) {
//     let td = document.createElement("td");
//     td.textContent = `row${i},col${j}`;
//     td.style.border = "1px solid red";
//     tr.appendChild(td);
//   }
//   tbody.appendChild(tr);
// }

// table.appendChild(tbody);
// table.style.border = "2px solied blue";
// table.style.padding = "20px";

// document.body.appendChild(table);
//----------------------------------------------------------
// let info = [
//   { id: 1, name: "ali", lastname: "bodaghi", age: 18, degree: "none" },
//   { id: 1, name: "hasan", lastname: "bodaghi", age: 18, degree: "none" },
//   { id: 1, name: "jorj", lastname: "bodaghi", age: 18, degree: "none" },
//   { id: 1, name: "shantiaa", lastname: "bodaghi", age: 18, degree: "none" },
//   { id: 1, name: "taham", lastname: "bodaghi", age: 18, degree: "none" },
// ];

// info.forEach((item)=>{

// let table = document.createElement("table");
// let tbody = document.createElement("tbody");

// let row = 3;
// let coulmn = 4;

// for (let i = 0; i < row; i++) {
//   let tr = document.createElement("tr");
//   for (let j = 0; j < coulmn; j++) {
//     let td = document.createElement("td");
//     td.textContent = `row${i},col${j}`;
//     td.style.border = "1px solid red";
//     tr.appendChild(td);
//   }
//   tbody.appendChild(tr);
// }
// table.appendChild(tbody);
// table.style.border = "2px solied blue";
// table.style.padding = "20px";

// document.body.appendChild(table);

// })
//----------------------------------------------------------

let info = [
  { id: 1, name: "ali", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 2, name: "hasan", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 3, name: "jorj", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 5, name: "shantiaa", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 6, name: "taham", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 7, name: "reza", lastname: "bodaghi", age: 18, degree: "none" },
  {
    id: 5,
    name: "shfrgfrgrtiaa",
    lastname: "bodaghi",
    age: 18,
    degree: "none",
  },
  { id: 6, name: "taham", lastname: "bodaghi", age: 18, degree: "none" },
  { id: 7, name: "reza", lastname: "bodaghi", age: 18, degree: "none" },
];
//------------------------------------------------------------
// let table=document.createElement('table');
// let tbody=document.createElement('tbody');

// let header=['id','name','lastname','age','degree'];
// let tr=document.createElement('tr');

// header.forEach((item)=>{
// let th=document.createElement('th');
// th.textContent=item;
// tr.appendChild(th);
// })
// tbody.appendChild(tr);

// info.forEach((elemnt)=>{

//   let tr=document.createElement('tr');
//   for(let key in elemnt){
//   let td=document.createElement('td');

//   td.textContent=elemnt[key];
//   tr.appendChild(td);
//   }
//   tbody.appendChild(tr);
// })
// table.appendChild(tbody);
// document.body.appendChild(table);

// table.classList.add('class','l');
//------------------------------------------------------------

// let table = document.createElement("table");
// let tbody = document.createElement("tbody");

// let header = ["id", "name", "lastname", "age", "degree"];

// let tr = document.createElement("tr");
// header.forEach((item) => {
//   let th = document.createElement("th");
//   th.textContent = item;
//   tr.appendChild(th);
// });
// tbody.appendChild(tr);

// info.forEach((elemnt) => {
//   let trr = document.createElement("tr");

//   for (let key in elemnt) {
//     let tdd = document.createElement("td");
//     tdd.textContent = elemnt[key];
//     trr.appendChild(tdd);
//   }
//   tbody.appendChild(trr);
// });

// table.appendChild(tbody);
// document.body.appendChild(table);

// table.classList.add("class", "l");
// // td.classList.add("class","l");
// let allcell = document.querySelectorAll("tdd");
// let a = true;
// function cli() {
//   // let allcell = document.querySelectorAll("tdd");
//   if (a === true) {
//     allcell.forEach((cell) => {
//       cell.classList.add("class", "kkk");
//     });
//     a = false;
//   } else {
//     allcell.forEach((uu) => {
//       uu.classList.remove("class", "kkk");
//     });
//     a = true;
//   }
// }

// function cli() {
//   // انتخاب تمام سلول‌های جدول
//   const allCells = document.querySelectorAll("td");

//   if (a === true) {
//     allCells.forEach((cell) => {
//       cell.classList.add("kkk"); // اضافه کردن کلاس
//     });
//     a = false;
//   } else {
//     allCells.forEach((cell) => {
//       cell.classList.remove("kkk"); // حذف کلاس
//     });
//     a = true;
//   }
// }

//----------------------------------------------------------

// let table = document.createElement("table");
// let tbody = document.createElement("tbody");

// let header = ["id", "name", "lastname", "age", "degree"];

// let tr = document.createElement("tr");
// header.forEach((items) => {
//   let th = document.createElement("th");
//   th.textContent = items;
//   th.style.border = "1px solid red";
//   th.style.padding = "20px";
//   tr.appendChild(th);
// });
// tbody.appendChild(tr);

// info.forEach((elemnt) => {
//   let trr = document.createElement("tr");
//   for (let key in elemnt) {
//     let tdd = document.createElement("td");
//     tdd.textContent = elemnt[key];

//     tdd.style.border = "1px solid red";
//     tdd.style.padding = "20px";

//     trr.appendChild(tdd);
//   }
//   tbody.appendChild(trr);
// });

// table.appendChild(tbody);

// table.style.border = "1px solid red";
// table.style.padding = "20px";

// document.body.appendChild(table);

// let a = true;
// function cli() {
//   if (a == true) {
//     table.classList.add("class", "l");
//     a = false;
//   } else {
//     table.classList.remove("claa", "l");
//     a = true;
//   }
// }
//-------------------------------------------------------------
// let bot=document.querySelector('button');
// bot.classList.add('boot');
// let hh=document.querySelector('h1');
// document.body.insertBefore(bot,hh);//avali mige chi ezafe beshe va dovomi mige ghabl chi ezafe beshe

// let parent=document.querySelector('.parent');
// let p=document.createElement('p');
// p.textContent='Hello world';
// let h2=document.querySelector('.po');
// // parent.insertBefore(p,null);
// document.body.insertBefore(p,hh);

// let div=document.createElement('div');
// let text=document.createTextNode('welcom to my youtube channel');
// // div.appendChild(text);
// document.body.appendChild(text);
// let show = document.body.replaceChild(div,bot);
// console.log(show);

// let neew=document.createElement('img');
// // neew.classList.add('src','./4168987.jpg')
// neew.src='./4168987.jpg';
// document.body.replaceChild(neew,p);
// let gg=document.createElement('h1');
// gg.innerHTML='salllam';
// // document.body.appendChild(gg);
// document.body.append(gg);
// gg.push
// document.body.insertBefore(gg,neew);

// let obj={
//   name:'ali',lastname:'bodaghi'
// };

// let r={
//   ...obj,
//   s:'ffj',
//   sf:"kfie",
//   name:obj.name
// }
// obj.shahr='tehran';
// console.log(obj);
// delete obj.name;
// console.log(obj);
// console.log(r);

// const ff=Object.values(r);
// console.log(ff);
// let rdc=document.querySelector('#sag');
// rdc.innerHTML='uddddddddddddddddddddddhwidu';
// // document.body.prepend(rdc);

// rdc.remove();

// let h11=document.querySelector('h1');
// console.log(h11);
// let parentt=document.querySelector('#result');
// console.log(parentt);
// let dakhel=parentt.querySelector('h1');
// console.log(dakhel);
// let space = parentt.removeChild(dakhel);
// // console.log(space);
// let h11=document.querySelector('h1');
// console.log(h11);
// let parentt=document.querySelector('#result');
// console.log('parentt');
// let dahkhel=parentt.querySelector('h1');
// console.log(dahkhel);
// // let space=parentt.removeChild('dahkhel');
// let acs=document.querySelector('img');
// let hdh=acs.getAttribute('src');
// console.log(hdh);
// let trt=acs.setAttribute('src','./4168987.jpg');

// let a=document.querySelector('h1');
// let b=document.querySelector('#result');
// let r=document.querySelector('.bot');

// document.body.insertBefore(b,a);
// let make=document.createElement("div");
// make.innerHTML="<a>saalllam</a>";

// document.body.replaceChild(make,r);

// let newee =document.createElement('h1');
// newee.innerHTML='porrrrrrrrrrrro';
// newee.style.backgroundColor='red';
// document.body.prepend(newee);

// let f=document.createAttribute('class');
// f.value='black';
// newee.setAttributeNode(f);
// document.body.prepend(newee);

// newee.classList.add('efefef');
// // newee.classList.remove("efefef");
// let uy=newee.classList.contains('efefe.f');
// console.log(uy);

// let d=document.createElement('div');
// d.textContent='shfhowfhowifofghwhe';
// d.classList.add('kkk');
// document.body.prepend(d);

// document.addEventListener("DOMContentLoaded", () => {

// let target=document.querySelector('.target');
// let tagir=document.querySelector('.tagir');

// target.addEventListener('mouseover',()=>{

//   tagir.style.color='green';
// });

// target.addEventListener('mouseout',()=>{
//   tagir.style.color='yellow';
// });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let target = document.querySelector(".target");
//   let tagir = document.querySelector(".tagir");

//   target.addEventListener("mouseover", () => {
//     tagir.style.color = "green";
//   });

//   target.addEventListener("mouseout", () => {
//     tagir.style.color = "yellow";
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let target = document.querySelector(".target");
//   let tagir = document.querySelector(".tagir");

//   target.addEventListener("click", () => {
//     // tagir.style.color = "red";
//     tagir.classList.add('kkk');
//   });
// });

// let ioou=document.querySelector('.tagir');
// let hamin=ioou.nextElementSibling;

// document.addEventListener('DOMContentLoaded',()=>{
// if(hamin){

// hamin.addEventListener('click',()=>{

// hamin.classList.add('o');

// });
// }
// else{document.write('khattta')};

// });
//---------------------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   let iooou = document.querySelector(".tagir");
//   let haminn = iooou ? iooou.nextElementSibling : null;
//   let po = true;
//   if (haminn) {
//     haminn.addEventListener("click", () => {
//       haminn.classList.toggle("o");
//     });
//   } else {
//     document.write("khattta");
//   }
// });

// function changing() {
//   console.log("dkfjefjewpof");
// }

// document.addEventListener("DOMContentLoaded", () => {
//   let rr = document.querySelector(".target");
//   rr.addEventListener("click", changing);
// });

// function has() {
//   let ui = document.querySelector(".bot");
//   let b = ui.classList.contains("target");

//   if (b) {
//     ui.classList.remove("target");
//   } else {
//     ui.classList.add("target");
//   }
// }

//---------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   let addp = document.querySelector(".bot");
//   if (addp) {
//     addp.addEventListener("click", has);
//   } else {
//     console.error("کلاس .bot پیدا نشد");
//   }
// });

//----------------------------------------

// let buttan=document.querySelector('.bot');

// buttan.addEventListener('click',()=>{
// console.log('click');
// })
// buttan.addEventListener('mouseenter',()=>{

//   buttan.classList.remove('o');
// });
// buttan.addEventListener('mouseup',()=>{

//   console.log('mouseup');
// });
// buttan.addEventListener('mousedown',()=>{

//   console.log('mousdown');
// });
// buttan.addEventListener('mouseout',()=>{

//   buttan.classList.add('o');

// });

// let buttan = document.querySelector(".bot");

// buttan.addEventListener("keypress",()=>{

//   console.log(buttan.childNodes);
// });

// buttan.addEventListener("keyup",()=>{

//   console.log(buttan.value);
// })

// buttan.addEventListener("keydown",()=>{

//   console.log(buttan.innerHTML);
// })

// let result = document.querySelector("#result");

// buttan.addEventListener("click", (e) => {
//   console.log(e.currentTarget);
// });
// result.addEventListener("click", (e) => {
//   e.currentTarget.classList.toggle("o");
//   console.log(e.type);
// });

// document.addEventListener('DOMContentLoaded',()=>{
//   let linkk=document.querySelector('#link');
// linkk.addEventListener('click',(e)=>{
// e.preventDefault();
//   console.log(e.currentTarget);
//   console.log(e.type);
//   console.log(this);
// ;});
// });
//----------------------------------------------
// document.addEventListener('DOMContentLoaded',() => {
//   let btn = document.querySelectorAll(".btn");

//   btn.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       console.log(e.currentTarget);
//       console.log(e.target)
//       // e.currentTarget.style.color = "red";
//       e.target.style.color='blue'
//     });
//   });
// });
// //-----------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   let linnk = document.querySelector("#link");
//   linnk.addEventListener("click", ali,);
//   function ali(event) {
//     event.preventDefault();// جلوگیری از هدایت لینک
//     window.scrollTo({ top: 90, behavior: "smooth" });

//   }
//   window.addEventListener('scroll',()=>{

//     if (linnk.ckiz){
//       setTimeout(()=>{
//       document.body.style.backgroundColor='red';},2000)
//     }

//   })
// });

//------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   let linnk = document.querySelector("#link");

//   linnk.addEventListener("click", (event) => {
//     event.preventDefault(); // جلوگیری از هدایت لینک

//     // اسکرول به پایین
//     window.scrollTo({ top: 90, behavior: "smooth" });

//     // نظارت بر پایان اسکرول
//     const handleScroll = () => {
//       if (Math.abs(window.scrollY - 90) <= 1) {
//         // اگر اسکرول به نقطه 90 رسیده باشد
//         document.body.style.backgroundColor = "red"; // تغییر رنگ
//         window.removeEventListener("scroll", handleScroll); // حذف شنونده
//       }
//     };

//     window.addEventListener("scroll", handleScroll); // بررسی اسکرول
//   });
// });

//-----------------------------------------------------------------

// function all(){
// document.addEventListener('DOMContentLoaded',()=>{
// function ali(e){
// e.preventDefault();

// }

// let link=document.querySelector('#link')
// link.addEventListener('click',ali())

// });
// };

// setInterval(all,1000);

//-----------------------------------------------------------------

// let a=true;
// document.addEventListener('scroll',()=>{

// if(a===true){  if(window.s>=2000){
//   alert('scrool');
// }
// a=false;
// }

// });

//-----------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   let alii = document.querySelector(".heading");
//   // alii.addEventListener("click", () => {
//   //   alii.classList.toggle("ha");
//   // });

//   function changecolor(event) {
//     if ( event.type=='keydown') {
//       alii.style.color = "red";
//       console.log(event.target);
//     } else {
//       alii.style.color = "black";
//     }
//   }
//   document.addEventListener("keydown", changecolor);
//   document.addEventListener('keyup',()=>{
//     alii.style.color='black';
//   })

//   alii.addEventListener('click',(e)=>{

//     // console.log(e.currentTarget);
//     console.log(e.currentTarget);
//     console.log(e.type);
//     e.currentTarget.style.color="blue";
//   })
//   let lik=document.querySelector('.aa');
//   lik.addEventListener('click',(u)=>{
//     u.preventDefault();
//   })
// });ّ
//-----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // event.target.style.color = "green";
      event.currentTarget.style.color = "green";
      console.log(event.target);
      console.log(event.currentTarget);
    });
  });
});
