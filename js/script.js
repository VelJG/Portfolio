

const img = ['img/bg/blackshape.gif'];
let index = 0;
const background = document.querySelector('.background');

//function changeBackground() {

//    background.style.opacity = 0;


//    setTimeout(() => {
background.src = img[0];
//        index = (index + 1) % img.length;
//        background.style.opacity = 1;
//    }, 1000);
//}
//setInterval(changeBackground, 10000);
//changeBackground();

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
function toggleBox(event) {
    const pc = event.currentTarget;
    pc.classList.toggle('show');
}