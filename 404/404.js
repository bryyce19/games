document.addEventListener('mousemove', (event) => {
    const dynamicGlow = document.querySelector('.dynamic-glow');
    const { clientX: x, clientY: y } = event;

    // Set the dimensions of the dynamic glow element
    const glowWidth = 150;
    const glowHeight = 150;

    // Adjust the position so the glow is centered on the mouse pointer
    dynamicGlow.style.transform = `translate(${x - glowWidth / 2}px, ${y - glowHeight / 2}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const staticGlow = document.createElement('div');
    staticGlow.classList.add('static-glow');
    container.appendChild(staticGlow);
});