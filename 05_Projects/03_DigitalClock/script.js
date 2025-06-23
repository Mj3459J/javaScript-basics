const clock=document.getElementById('clock');

// interval method is used to run function in every given time,
// here 1000 is given means 1s, we have to provide time in miliseconds
setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`;
},1000);