const btnReplay=document.querySelector(".replay");
const animation=document.querySelector(".hello");

animation.addEventListener("animationend",function(){
    animation.classList.remove("transparance");
})
btnReplay.addEventListener("click",function(){
    animation.classList.add("transparance");  
})
