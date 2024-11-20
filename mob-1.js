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

      let li = document.querySelector("#next");
      li.childNodes.forEach((item) => {
        if (item.nodeType === 1) {
          console.log(item.textContent);
        }
      });
      //----------------------------------------------------------