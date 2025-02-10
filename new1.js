/* let divam=document.querySelector('.elemnt');

let newp=document.createElement('p')
let text=document.createTextNode('this is thierd');


newp.appendChild(text);
divam.appendChild(newp);

let p2=document.querySelector('.p1');

divam.insertBefore(newp,p2);
divam.replaceChild(newp,p2);
 */


let p=document.querySelectorAll('p');
document.querySelector('.iner').innerHTML=p[1].innerHTML;


document.querySelector('.size').innerHTML=screen.availWidth;
document.querySelector('.sizee').innerHTML=screen.availHeight;
document.querySelector('.location').innerHTML=window.location.href;
document.querySelector('.hostname').innerHTML=window.location.hostname;
document.querySelector('.pathname').innerHTML=window.location.pathname;
document.querySelector('.protcol').innerHTML=window.location.protocol;

function ali(){




    window.location.assign('https://toplearn.com');
}