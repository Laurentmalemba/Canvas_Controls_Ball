let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 40; // Start position
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    // Reverse direction if ball hits the canvas boundaries
    if (position + radius > canvas.width || position - radius < 0) {
        moveSpeed = -moveSpeed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    context.beginPath(); // Begin a new path
    context.fillStyle = "#6267f"; // Set ball color
    context.arc(position, 50, radius, 0, 2 * Math.PI); // Draw ball
    context.fill(); // Fill the ball
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate); // Request the next frame
}

// Start animation
animate();
