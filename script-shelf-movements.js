function rollShelfDirection(){
    var mediaShelf = document.getElementById(getShelfId);
    var style = mediaShelf.currentStyle || window.getComputedStyle(mediaShelf);
    let result = "";
    let removePx = style.marginLeft.slice(0, (style.marginLeft.length-2));
    result = (Number(removePx) + leftDirection);
    resultPx = (Number(removePx) + leftDirection)+"px";
    let maxIndentation = mediaShelf.parentNode.offsetWidth - mediaShelf.offsetWidth;
    if(result < 0 && result > maxIndentation) {
        mediaShelf.style.marginLeft = resultPx;
    } else if (result > 0 && leftDirection == +1){
        mediaShelf.style.marginLeft = "0px";
    } else if (result < maxIndentation && leftDirection == -1 && maxIndentation < 0){
        mediaShelf.style.marginLeft = maxIndentation;
    }else{
        //mediaShelf.style.marginLeft = mediaShelf.style.marginLeft;
        return;
    }
}

var getShelfId;
var leftDirection;
var countingMoves;
const rollingSpeed = 8;

function moveShelfLeft(id){
    getShelfId = id;
    leftDirection = +1;
    countingMoves = setInterval(rollShelfDirection, rollingSpeed);
}

function moveShelfRight(id){
    getShelfId = id;
    leftDirection = -1;
    countingMoves = setInterval(rollShelfDirection, rollingSpeed);
}

function stopMoves(){
    clearInterval(countingMoves);
    //console.log("parar movimento");
}

// Make the DIV element draggable:
// Aparently only works if the element's style/CSS is set with position: absolute;
// Still doesn't work well when rollShelf-buttons (left or right) are activated;

function activeDrag(id){
    dragElement(document.getElementById("mediaShelf"+id));
    console.log(dragElement(document.getElementById("mediaShelf"+i)));
}

function dragElement(elmnt) {
    console.log(elmnt.id);
    var pos1 = 0, pos3 = 0;
    if (document.getElementById(elmnt.id)) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}