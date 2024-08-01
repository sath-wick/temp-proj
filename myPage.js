let isDragging = false;
let clickLocation = 0;
const earth = document.getElementById('sphere');
let finalX = 0;

earth.addEventListener('mousedown', (e) => {
    clickLocation = e.clientX;
    isDragging = true;
});

earth.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let distanceMoved = e.clientX - clickLocation;
        earth.style.backgroundPosition = `${finalX + distanceMoved}px,0px`;
    }   
});

// Optional: To handle the case where the mouse is released outside the plane element
document.addEventListener('mouseup', () => {
    isDragging = false;
    let bgpos = earth.style.getPropertyValue('background-position');
    finalX = parseInt(bgpos.split('px')[0]);
    console.log(finalX);
    
});
