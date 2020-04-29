const navbar = document.querySelector(".navbar");
const tl = new TimelineMax();

tl.fromTo(
    nav, 
    1, 
    {height: "0%"}, 
    {height: '80%', ease: Power2.easeInOut}
).fromTo(
    nav, 
    1.2, 
    {width: "100%"}, 
    {width: "80%", ease: Power2.easeInOut}
)
.fromTo(navbar, 1.2, {x: "-100%"}, {x:'0%', ease: Power2.easeInOut})