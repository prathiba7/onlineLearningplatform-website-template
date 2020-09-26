
const navslide=()=>{
    const menu=document.querySelector('.menu');
    const nav=document.querySelector('.nav');
    const navlink=document.querySelector('.nav li');
    menu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

    navlink.forEach((link,index)=>{
        link.style.animation='navlinkfade 0.5s ease forwards ${index/7+1.5}s'
    });
}
navslide();
