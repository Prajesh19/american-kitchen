// showing navbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})
// close menu when click on mobile 
mobilelink.addEventListener("click", function(){
    const menuBars =document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
})
var step = 100;
var stepFilter = 60;
var scrolling = true;

// Move menu left when "back" is clicked
$(".back").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step
    }, 'slow');
});

// Move menu right when "next" is clicked
$(".next").bind("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step +"px"
    });
});

// Move filter menu left when "back-menus" is clicked
$(".back-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter +"px"
    });
});

// Move filter menu right when "next-menus" is clicked
$(".next-menus").bind("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter +"px"
    });
});



