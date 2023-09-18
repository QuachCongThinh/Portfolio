//Auto/Hidden mobile menu
var openMenu = document.getElementById('mobile-menu');
var menu = document.querySelector('#header .navDiv');
var closeMenu = document.querySelector('#header .navDiv label');



openMenu.onclick = function(){
    menu.style.width = '60%';
};

closeMenu.onclick = function(){
    menu.style.width = '0';
};


var menuItems = document.querySelectorAll('#header ul li a');
var body = document.querySelector('body');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(){
        if(body.clientWidth <= 768){
            menu.style.width = '0';
        }
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
