const canvas = document.querySelector("#draw");

const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#crazy";
context.lineJoin = "round";
context.lineCap = "round";

// only allows input on mouseclick
let isDrawing = false;

// X/Y info
let lastX = 0;
let lastY = 0;

// function to draw
function draw(e) {
    // when mouse is not down, this stops the fn from running.
    if(!isDrawing) return; 
    
    console.log(e);
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
