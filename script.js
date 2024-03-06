<<<<<<< HEAD
let menu = document.querySelector('#menu-bars');
let topnav = document.querySelector('.topnav');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .topnav a');

window.onscroll = () =>{

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .topnav a[href*='+id+']').classList.add('active');
      });
    };

  });

}
=======
let menu = document.querySelector('#menu-bars');
let topnav = document.querySelector('.topnav');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .topnav a');

window.onscroll = () =>{

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .topnav a[href*='+id+']').classList.add('active');
      });
    };

  });

}
>>>>>>> WeShop/main
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>