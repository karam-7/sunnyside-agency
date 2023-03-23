const openBtn = document.querySelector('#ham');
const barUl = document.querySelector('.bar-ul');
const barLinks = document.querySelectorAll('.bar-a');
let menuOpen = false;

openBtn.addEventListener('click', () => {
    if(!menuOpen) {
        barUl.style.display = 'block';
        barUl.style.animation = 'slide-in 0.5s forwards';
        menuOpen =true;
    } else {
        barUl.style.animation = 'slide-out 0.5s forwards';
        setTimeout( () => {
            barUl.style.display = 'none';
        }, 500);
        menuOpen = false;
    }
});

barLinks.forEach(link => {
    link.addEventListener('click', () => {
        barUl.style.animation = 'slide-out 2s forwards';
        setTimeout(() => {
            barUl.style.display = 'none';
        }, 500);
        menuOpen = false;
    });   
});