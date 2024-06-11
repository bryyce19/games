document.addEventListener('mousemove', (event) => {
    const glow = document.querySelector('.glow');
    const { clientX: x, clientY: y } = event;

    glow.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const glow = document.createElement('div');
    glow.classList.add('glow');
    container.appendChild(glow);
});