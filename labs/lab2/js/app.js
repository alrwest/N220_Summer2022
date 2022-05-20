//Ball Bounce App

let size = 30; //Setting the size of the ball
let xVelocity, yVelocity;

//Three variables are needed for width/height bounds for position, speed, and direction
let xPos = 0;
let yPos = 0;

let xSpeed = 1; //Starting speed on x-axis
let ySpeed = 4; //set a higher y-axis speed to 'increase gravity' by having higher speed of y

//setting a starting direction for the ball
let xDirection = 1;
let yDirection = 1;      

function setup () {
    createCanvas(800, 600); //Creating canvas 800px by 600px

    //Setting ball's starting at the same size of the ball 
    xPos = size; 
    yPos = size;
} 
//Setting up draw function to execute 
function draw () {
    background(52,134,235); //setting background color to light blue RGB(A)
    
    //Setting a seperate variable for speed of 5 px per frame
    xVelocity = xPos + 5;
    yVelocity = yPos + 5;


    xPos = xPos + (xSpeed * xDirection); //Updating the variable so position of the ball changes across x-axis
    yPos = yPos + (ySpeed * yDirection); //Updating the variable so position of the ball changes across y-axis

    if (xPos > (width - size) || xPos < size) { //Checking to see if ball is at or past x-bounds (width)
        xDirection *= -1;
    }

    if (yPos > (height - size) || yPos < size) { //Checking to see if ball is at or past y-bounds (height)
        yDirection *= -1;
    }
    // Creating a yellow ball with strokeweight starting at xPos, yPos
    fill(255, 218, 0);
    strokeWeight(5)
    stroke(255,255,224);
    circle(xPos, yPos, size);
}