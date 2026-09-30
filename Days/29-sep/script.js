// const bulb = document.querySelector(".light");
// const btn = document.querySelector("button");

// let flag = true;
// btn.addEventListener('click', function(){
//     if(flag){
//         bulb.style.backgroundColor = "yellow"
//         btn.textContent = "Off"
//         flag = false;
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         btn.textContent = "On"
//         flag = true;
//     }
// });

const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "Off"
    }else{
        btn.textContent = "On"
    }
})