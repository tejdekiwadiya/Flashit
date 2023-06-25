const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links_menu");
const links = document.querySelectorAll(".nav_links_menu li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});