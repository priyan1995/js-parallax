


let sun = document.getElementById('subShined');
let backMountain = document.getElementById('backMountain');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let bird1 = document.getElementById('bird');
let bird2 = document.getElementById('bird2');
let bird3 = document.getElementById('bird3');
let bird4 = document.getElementById('bird4');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 0.08 + '%';
    cloud1.style.top = value * 0.08 + '%';
    cloud2.style.top = value * 0.08 + '%';
    cloud3.style.top = value * 0.08 + '%';
    backMountain.style.top = value * 0.05 + '%';
    bird1.style.top = value * 0.08 + '%';
    bird2.style.top = value * 0.08 + '%';
    bird3.style.top = value * 0.08 + '%';
    bird4.style.top = value * 0.08 + '%';



})

window.onload = function(){
    document.querySelector(".pre-loader").style.display="none";
    document.querySelector(".main-section").style.display="block";
    document.querySelector(".content-sec").style.display="block";
}