let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    navbar.classList.toggle('active');
}
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove',function(e){
    cursor1.style.cssText = cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});