//Auto/Hidden mobile menu
var btnMenu = document.getElementById('mobile-menu');
var headerNav = document.querySelector('#header .navDiv');

btnMenu.onclick = function(){
    var isOpen = headerNav.style.transform === 'translate(0%)';
    if (isOpen) {
        headerNav.style.transform = 'translateX(100%)';
    }
    else{
        headerNav.style.transform = 'translateX(0%)'
    }
}

var menuItems = document.querySelectorAll('#header ul li a');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(){
        headerNav.style.transform = 'translateX(100%)';
    }
}

//Display Text
var typed = new Typed(".text", {
    strings: ["Front end Developer."],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
