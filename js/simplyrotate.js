var clickPosition = { x: -1, y: -1 };
var elementPosition = { x: -1, y: -1 }; //top-left corner
export function makeRotatable(rotatable) {
    //on mouse down call rotate function
    rotatable.onmousedown = (e) => {
        //get mouse click position within the element
        var { midX, midY } = getMidPoints(rotatable);
        //get degress of click position
        //radian
        var radians = Math.atan2(midX - clickPosition.x, midY - clickPosition.y);
        //degrees
        var degreesOfInitialClick = Math.round((radians * (180 / Math.PI)));
        rotatable.onmousemove = (e) => rotateByDegree(e, rotatable, degreesOfInitialClick);
    };
    rotatable.onmouseup = (e) => endRotate(e, rotatable);
}
function getMidPoints(rotatable) {
    // //get position of element within containing element
    var rect = rotatable.getBoundingClientRect();
    elementPosition.x = rect.x;
    elementPosition.y = rect.y;
    //radius
    var radius = rect.width / 2;
    //midX and mixY
    var midX = rect.x + rect.width / 2;
    var midY = rect.y + rect.height / 2;
    return { midX, midY, radius };
}
/**
 *
 * @param e
 * @param rotatable HTML element to rotate
 * @param angle angle in degrees
 */
function rotateByDegree(e, rotatable, initialClickAngle) {
    var { midX, midY } = getMidPoints(rotatable);
    //get degress of click position
    //radian
    var radians = Math.atan2(midX - e.clientX, midY - e.clientY);
    //degrees
    var degreesOfMouseMove = Math.round((radians * (180 / Math.PI))) * -1;
    var angle = degreesOfMouseMove - initialClickAngle;
    console.log(`angle:${angle}`);
    rotatable.style.rotate = angle + 'deg';
}
function endRotate(e, rotatable) {
    rotatable.onmousemove = null;
}
