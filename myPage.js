let isDragging = false;
let clickLocation = 0;
const earth = document.getElementById('sphere');
let finalX = 0;

function startMove(event){
    clickLocation = event.clientX;
    isDragging = true;
}

function moveEarth(event){
    if (isDragging) {
        let distanceMoved = event.clientX - clickLocation;
        earth.style.backgroundPosition = `${finalX + distanceMoved}px,0px`;
    } 
}

function endMove(){
    isDragging = false;
    let current_background_position = earth.style.getPropertyValue('background-position');
    finalX = parseInt(current_background_position.split('px')[0]);
    
}


earth.addEventListener('mousedown', startMove);
earth.addEventListener('touchstart', startMove);
earth.addEventListener('touchmove', moveEarth);
earth.addEventListener('mousemove', moveEarth);

// Optional: To handle the case where the mouse is released outside the plane element
document.addEventListener('mouseup',endMove);
document.addEventListener('touchend',endMove);
