


let sun = document.getElementById('subShined');
let backMountain = document.getElementById('backMountain');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 0.08 + '%';
    cloud1.style.top = value * 0.08 + '%';
    cloud2.style.top = value * 0.08 + '%';
    cloud3.style.top = value * 0.08 + '%';
    backMountain.style.top = value * 0.05 + '%';

})

