


// let newpm=new Promise((resolve)=>{






//   setTimeout(()=>{

// resolve('bad az 2sanie');

//   },2000)
// })


// newpm.then((result)=>{


//   console.log(result);
// })



// .catch((error) => {
//   console.log("❌ خطا رخ داد:", error);
// });



// let nprom=new Promise((_, reject)=>{


// setTimeout(()=>{

// reject("shekast khord");

// },3000)

// })


// nprom.catch((ms)=>{

//   console.log(ms);
// })


//--------------------------------------------------------
// let randompromis=new Promise((resolve,reject)=>{

// let randomnumber=Math.random();

// setTimeout(()=>{
//   if (randomnumber>0.2)
//   {
//     resolve("dorosst");
//   }
//   else{reject('ghalat')}
// },3000)

// })

// randompromis.then((tr)=>{console.log(tr)}).catch((fr)=>{

//   console.log(fr);
// })
//---------------------------------------------------------

// let rpromis=new Promise((resolve,reject)=>{


//   let randomn=Math.floor(Math.random()*100);

//   setTimeout(()=>{

//     if (randomn>60)
//     {
//       resolve('true')
//     }
//     else{reject('false')}
//   },4000)
// })

// rpromis.then((resultt)=>{

//   console.log(resultt);
// }).catch((fa)=>{
//   console.log(fa)
// });

//--------------------------------------------------------
// let newpms=new Promise((resolve,reject)=>{
// setTimeout(()=>{



//   let rand=Math.floor(Math.random()*1000)
//   if (rand>70)
//   {
//     resolve('bozorg')
//   }
//   else{reject('kochak')}
// },3000)



// })

// newpms.then((rr)=>{
//   console.log(rr)
// }).catch((ii)=>{console.log(ii)});

//--------------------------------------------------------


// let uupromis=new Promise((resolve,reject)=>{

// let rndnumber=Math.floor(Math.random()*100);
// console.log("🔢 عدد تصادفی:", rndnumber);
// if(rndnumber>90){
// setTimeout(()=>{

//   resolve('adad bala 90');

// },1000)
// }
// else if(rndnumber<=90 && rndnumber>=50){

//   setTimeout(()=>{

// resolve('adada zire 90 v 50');
//   },3000)
// }
// else if(rndnumber<50){
// setTimeout(()=>{
// reject('adad zir 50')

// },5000)
// }



// })

// uupromis.then((rt)=>{console.log(rt)}).catch((tr)=>{console.log(tr)});
//-------------------------------------------------
// let uupromis=new Promise((resolve,reject)=>{

// let rndnumber=Math.floor(Math.random()*101);
// console.log("🔢 عدد تصادفی:", rndnumber);
// if(rndnumber>70){
// setTimeout(()=>{

//   resolve('adad bala 70');

// },2000)
// }
// else{

//   setTimeout(()=>{

// reject('adada zire 70');
//   },5000)
// }
// // else{reject('adad paeen 70');}



// })

// uupromis.then((rt)=>{console.log(rt)}).catch((tr)=>{console.log(tr)});
//--------------------------------------------------------
// let nnpromis=new Promise((resolve,reject)=>{

// let rndnumb=Math.floor(Math.random()*101);
// console.log(rndnumb);

// if (rndnumb>80)
// {setTimeout(()=>{

//   resolve('adad bala 80');
// },1000)
// }
// else if(rndnumb>40 && rndnumb<80)
// {
//   setTimeout(()=>{
//     resolve('between 40 and 80');
//   },2000)
// }
// else if (rndnumb<40){

//   setTimeout(()=>{
//    reject('kochak tar az 40')
//   },4000)
// }



// })

// nnpromis.then((truu)=>{console.log(truu)}).catch((fruu)=>{console.log(fruu)});
//--------------------------------------------------------
// let promii=new Promise((resolve,reject)=>{

//   let adadnumb=Math.floor(Math.random()*101);

//   if (adadnumb>70)
//   {
//     setTimeout(()=>{
//     resolve('<70')
//     },1000)
//   }
//   else if(adadnumb>30)
//   {
//     setTimeout(()=>{
//     resolve('<30')
//   },2000)
//   }
//   else if(adadnumb<30)
//   {
//     setTimeout(()=>{
//     reject('>30')
//   },3000)
//   }

// })
// promii.then((ii)=>{console.log(ii)}).catch((oo)=>{console.log(oo)});
//-------------------------------------------------------------
function ali(){
return new Promise((resolve)=>{
  setTimeout(()=>{

    resolve('after 2 sssecond');
  },2000)
})

}

async function hasan(){
  console.log('در حال دریافت داده')
  let result=await ali();
  console.log(result);
}
hasan();
//------------------------------------------------------

function f1(){
let nuj=Math.floor(Math.random()*101);
console.log(nuj);
  return new Promise((resolve,reject)=>{


if(nuj>50)
{
  setTimeout(()=>{
    resolve("success")
  },3000)
}
else {
  setTimeout(()=>{reject('fail')},2000)
}

  })
}

async function f2(){


  try{
    console.log('pleas wait');

let rd=await f1();
console.log(rd)

  }
  catch(eror){

console.log(rd);
  }
}
f2();


function lans(){

  return new Promise((resolve)=>{
let adas=Math.floor(Math.random()*5)+1;
  setTimeout(()=>{
  resolve(`adaad==${adas}`);
},adas*1000)
  
})}
async function gg(){

  let tu=await lans();
  console.log(tu);
}
gg();






//--------------------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 34, 43, 34, 7, 8, 9, 10, 11];

/* console.log(_.chunk(arr,3)); */
/* console.log(_.shuffle(arr)); */
console.log(_.uniq(arr));




const search = _.debounce(() => {
  console.log("dar ha jost v jo ......");
}, 1000);

search();
search();
search();

console.log(_.capitalize("hello world"));



let esmarr = ["fateme", "samira", "mobina", "octavia", "octavia", "octavia"];
console.log(_.uniq(esmarr));




document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector(".color");

  let color = ["red", "blue", "green", "yellow",'pink','brown'];

  btn.addEventListener("click", () => {
    let r = _.shuffle(color);
    document.body.style.backgroundColor = r[0];
  });
});



let btntext=document.querySelector('.text');
let h11=document.querySelector('.te');

btntext.addEventListener('click',()=>{


// h11.innerHTML="<h6>bodagh</h6>";
h11.innerText='bodaggi nistam';
})

document.addEventListener('DOMContentLoaded',()=>{

let inp=document.querySelector('.inp');
let pt=document.querySelector('.pt');

inp.value="";

inp.addEventListener('input',()=>{

pt.textContent=inp.value;


})
})


let btndiv=document.querySelector('.div');
let btndivv=document.querySelector('.divv');
let newdiv=document.createElement('div');
btndiv.addEventListener('click',()=>{

document.body.appendChild(newdiv);

})
btndivv.addEventListener('click',()=>{

document.body.removeChild(newdiv);

})


let btndark=document.querySelector('.dark');
btndark.addEventListener('click',()=>{
document.body.classList.toggle('dark')

})

setTimeout(()=>{

console.log('yek 3 sanie');

},3000)


let count=0;
let interval=setInterval(()=>{

count++;
console.log(`count:${count}`);

if(count==5){

    clearInterval(interval);
}

},1000)


let newpromiss=new Promise((resolve,reject)=>{
let a=true;

if(a){

    resolve("true ast")
}
else{reject('false')}



})
newpromiss
.then((result)=>{
    console.log(result)


})
.catch((error)=>{


    console.log(error);
})