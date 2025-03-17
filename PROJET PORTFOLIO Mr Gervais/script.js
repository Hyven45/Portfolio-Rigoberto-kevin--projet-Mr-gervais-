const customCursor = document.getElementById('custom-cursor');
let cursorX = 0;
let cursorY = 0;
const smoothness = 0.2;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function updateCursor() {
    const rect = customCursor.getBoundingClientRect();

    const deltaX = cursorX - (rect.left + rect.width / 2);
    const deltaY = cursorY - (rect.top + rect.height / 2);

    customCursor.style.left = (parseFloat(customCursor.style.left) || cursorX) + deltaX * smoothness + 'px';
    customCursor.style.top = (parseFloat(customCursor.style.top) || cursorY) + deltaY * smoothness + 'px';

    requestAnimationFrame(updateCursor);
}

updateCursor();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        customCursor.style.backgroundImage = "url('images/fleche\ blanche.png')";
        customCursor.style.width = "96px";
        customCursor.style.height = "96px";
        customCursor.style.backgroundColor = "transparent";
    });

    section.addEventListener('mouseleave', () => {
        customCursor.style.backgroundImage = "none";
        customCursor.style.width = "20px";
        customCursor.style.height = "20px";
        customCursor.style.backgroundColor = "white";
    });
});