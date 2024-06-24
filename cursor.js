document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const trail = [];
    const trailLength = 10;

    for (let i = 0; i < trailLength; i++) {
        const trailPart = document.createElement('div');
        trailPart.classList.add('trail');
        document.body.appendChild(trailPart);
        trail.push(trailPart);
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;

        for (let i = 0; i < trailLength; i++) {
            setTimeout(() => {
                trail[i].style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
            }, i * 20);
        }
    });
});