let circ=document.getElementById('circle');

function mouseOver(){
    let currWidth= circ.clientWidth;
    let currHeight= circ.clientHeight;
    circ.style.width=(currWidth-50) + "px";
    circ.style.height=(currHeight-50) + "px"
}

function mouseOut(){
    let currWidth= circ.clientWidth;
    let currHeight= circ.clientHeight;
    circ.style.width=(currWidth+50) + "px";
    circ.style.height=(currHeight+50) + "px"
}