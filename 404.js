document.addEventListener('mousemove', (event) => {
    const glow = document.querySelector('.glow');
    const { clientX: x, clientY: y } = event;

    // Set the dimensions of the glow element
    const glowWidth = 150;
    const glowHeight = 150;

    // Adjust the position so the glow is centered on the mouse pointer
    glow.style.transform = `translate(${x - glowWidth / 2}px, ${y - glowHeight / 2}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const glow = document.createElement('div');
    glow.classList.add('glow');
    container.appendChild(glow);
});