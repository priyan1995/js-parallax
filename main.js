


let sun = document.getElementById('subShined');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 0.08 + '%';

})