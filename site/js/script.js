const nav = document.querySelector('.nav');
const right = document.querySelector('.rightone');
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0)
});

function myfunction() {
    var leftone = document.querySelector('.leftone');
    if (leftone.style.width === "169px") {
        leftone.style.width = "0px";
    }   else {
        leftone.style.width = "169px";
    }
};
function myfunction1() {
    var rightone = document.querySelector('.rightone');
    if (rightone.style.width === "120px") {
        rightone.style.width = "0px";
    }   else {
        rightone.style.width = "120px";
    }
};
const logo = document.querySelector('.logo');
const middle = document.querySelector('.middle');
const right1 = document.querySelector('.right');
const rest = document.querySelector('.restOfBG');
const hambText = document.querySelector('.hambText');

//const tl = new TimelineMax();
tl.fromTo(logo, 1.2, {
    x : "30%",
    opacity :  0
}, 
{
    x : "0%",
    opacity : 1
});
tl.fromTo(middle, 1.2, {
    x : "30%",
    opacity : 0
}, 
{
    x : "0%",
    opacity : 1
}, "-= 0.5");

tl.fromTo(right1, 1.2, {
    x : "30%",
    opacity : 0
}, 
{
    x : "0%",
    opacity : 1
}, "-= 0.8");

tl.fromTo(rest, 1.2, {
    y : "-50%",
    opacity : 0
}, 
{
    y : "0%",
    opacity : 1
});


function myFunction2() {
    var hambText = document.querySelector('.hambText');
    if (hambText.style.display === "none") {
        hambText.style.display = "block";
    }   else {
        hambText.style.display = "none";
    }
}