let closeIcon=document.querySelector(".close__icon");
let menuIcon=document.querySelector(".menu__icon");

let menuItems=document.querySelector(".nav-items");
menuIcon.onclick=()=>{
    menuItems.style.display="flex";
}
closeIcon.onclick=()=>{
    menuItems.style.display="none";
}