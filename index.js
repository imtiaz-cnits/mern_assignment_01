let adult = document.getElementById('adult');
let child = document.getElementById('child');

function getAge() {
    let inputAge = document.getElementById('age_input').value;
    
    if(inputAge >= 18) {
        adult.style.display = 'block';
        child.style.display = 'none';
    }
    else {
        child.style.display = 'block';
        adult.style.display = 'none';
    }
}


// Navbar JavaScript Code
const openBtn = document.getElementById('navOpen');
const closeBtn = document.getElementById('navClose');
const navBox = document.querySelector('.nav-items');

openBtn.addEventListener('click', () => {
    navBox.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navBox.classList.remove('active');
});

