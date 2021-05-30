


let sun = document.getElementById('subShined');
let backMountain = document.getElementById('backMountain');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 0.08 + '%';
    backMountain.style.top = value * 0.05 + '%';

})