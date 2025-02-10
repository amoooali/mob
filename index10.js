document.addEventListener('DOMContentLoaded',()=>{
    let name='amirali';
    let age =18;
    let iStudent=true;
let skill=['htm','css','js','react','nodejs'];
    console.log(`name:${name} \t \n age:${age} \t \n  iStudent:${iStudent} \t \n skill:${skill}`);
})


//--------------------------------------------------------

let addad=prompt('enter number please');


if (addad==null || addad.trim()=="")
{
    console.log('enter valid number');
}
else if(addad%2==0)
{
    console.log('adad zoj');
}
else{console.log('adada fard')};

//--------------------------------------------------------

for(let i=0 ;i<=10;i++)
{
    console.log(i);
}
let i=0;

while(i<=10)
{
    i++;
    console.log(i);
  
}