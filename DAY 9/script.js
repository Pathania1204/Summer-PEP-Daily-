// board
let board;
const tileSize = 32;
const columnCount = 19;
const rowCount = 21
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

// sprites
let wall;
let blueGhost;
let redGhost;
let orangeGhost;
let pinkGhost;
let pacmanLeft;
let pacmanRight;
let pacmanUp;
let pacmanDown;

let tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "000X X       X X000",
    "XXXX X XXrXX X XXXX",
    "0       bpo       0",
    "XXXX X XXXXX X XXXX",
    "000X X       X X000",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "X XX X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX",
]

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;

const direction = ["U","L","D","R"];

// onload is a JS handler that fires only after the entire web page has fully loaded
window.onload = function(){
    board = document.querySelector('#board');
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext('2d');
    // getContext('2d') method that returns a built-in canvasRenderingContext2d Object. This provides the properties and methods that is needed to draw shapes, text, images, and other graphics on an HTML canvas.
    loadSprites();
    loadMap();
    // console.log(`Total Food Supply: ${foods.size}`);
    // console.log(`Total Ghosts: ${ghosts.size}`);
    // console.log(`Total walls: ${walls.size}`);
    update(); 
    this.document.addEventListener('keyup', movePlayer); 
    for(let ghost of ghosts.values()){
        const newDirection = direction[Math.floor(Math.random()*4)];
        ghost.changeDirection(newDirection);
    } 
}

function loadSprites(){
    // wall
    wall = new Image();
    wall.src = 'sprites/wall.png';

    // ghosts
    blueGhost = new Image();
    blueGhost.src = 'sprites/blueGhost.png';
    orangeGhost = new Image();
    orangeGhost.src = 'sprites/orangeGhost.png';
    redGhost = new Image();
    redGhost.src = 'sprites/redGhost.png';
    pinkGhost = new Image();
    pinkGhost.src = 'sprites/pinkGhost.png';

    // pacman
    pacmanRight = new Image();
    pacmanRight.src = 'sprites/pacmanRight.png'
    pacmanLeft = new Image();
    pacmanLeft.src = 'sprites/pacmanLeft.png'
    pacmanUp = new Image();
    pacmanUp.src = 'sprites/pacmanUp.png'
    pacmanDown = new Image();
    pacmanDown.src = 'sprites/pacmanDown.png'
}

function loadMap() {
    walls.clear()
    foods.clear()
    ghosts.clear()

    for (let row = 0; row < rowCount; row++) {
        for (let column = 0; column < columnCount; column++) {
            const rowData = tileMap[row];
            const tileMapChar = rowData[column];
            const x = column*tileSize;
            const y = row*tileSize;

            if (tileMapChar == 'X') {
                // block wall
                const wallImage = new Block(wall, x, y, tileSize, tileSize); 
                walls.add(wallImage);
            }
            if (tileMapChar == 'b') {
                // block blue ghost
                const blueGhostImage = new Block(blueGhost, x, y, tileSize, tileSize); 
                ghosts.add(blueGhostImage);
            }
            if (tileMapChar == 'r') {
                // block red ghost
                const redGhostImage = new Block(redGhost, x, y, tileSize, tileSize); 
                ghosts.add(redGhostImage);
            }
            if (tileMapChar == 'p') {
                // block pink ghost
                const pinkGhostImage = new Block(pinkGhost, x, y, tileSize, tileSize); 
                ghosts.add(pinkGhostImage);
            }
            if (tileMapChar == 'o') {
                // block orange ghost
                const orangeGhostImage = new Block(orangeGhost, x, y, tileSize, tileSize); 
                ghosts.add(orangeGhostImage);
            }
            if (tileMapChar == 'P') {
                // block Pac-Man
                pacman = new Block(pacmanRight, x, y, tileSize, tileSize); 
            }
            if (tileMapChar == ' ') {
                // block wall
                const foodImage = new Block(null, x+14, y+14, 4, 4); 
                foods.add(foodImage);
                // 32px - 4px = 28px/2 = 14
            }
        }
    }
}


function update(){
    move()
    draw()
    setTimeout(update, 50)
    // 20fps = 1000ms/20 = 50
}
function draw() {
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);
    for (const ghost of ghosts.values()) {
        context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
    }
    for (const wall of walls.values()) {
        context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
    }
    context.fillStyle = 'wheat';
    for (const food of foods.values()) {
        context.fillRect(food.x, food.y, food.width, food.height);
    }
}

function movePlayer(event) {
    if (event.code == 'ArrowUp' || event.code == 'KeyW') {
       pacman.changeDirection('U');     
    }
    else if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
       pacman.changeDirection('L');     
    }
    else if (event.code == 'ArrowDown' || event.code == 'KeyS') {
       pacman.changeDirection('D');     
    }
     else if (event.code == 'ArrowRight' || event.code == 'KeyD') {
       pacman.changeDirection('R');  
    }
}

function move() {
    // pacman movement velocity
    pacman.x += pacman.XVelocity;
    pacman.y += pacman.YVelocity;

    // activating collisions
    for (const wall of walls.values()) {
        if(collision(pacman, wall)){
            pacman.x -= pacman.XVelocity;
            pacman.y -= pacman.YVelocity;
            break;
        }
    }
    for (const ghost of ghosts.values()) {

    ghost.x += ghost.XVelocity;
    ghost.y += ghost.YVelocity;

    for (const wall of walls.values()) {
        if (collision(ghost, wall)) {

            ghost.x -= ghost.XVelocity;
            ghost.y -= ghost.YVelocity;

            const newDirection =
                direction[Math.floor(Math.random()*4)];

            ghost.changeDirection(newDirection);

            break;
        }
    }
}
}

function collision(obj1, obj2){
    return obj1.x < obj2.x + obj2.width && obj1.x + obj2.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
}

class Block{
    constructor(image, x, y, width, height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.XStart = x;
        this.yStart = y;

        this.direction = 'R';
        this.XVelocity = 0;
        this.YVelocity = 0;
    }
    changeDirection(direction) {

    const previousDirection = this.direction;
    const previousImage = this.image;

    this.direction = direction;
    this.changeVelocity();

    this.x += this.XVelocity;
    this.y += this.YVelocity;

    for (const wall of walls.values()) {
        if (collision(this, wall)) {
            this.x -= this.XVelocity;
            this.y -= this.YVelocity;

            this.direction = previousDirection;
            this.image = previousImage;   // Restore image also
            this.changeVelocity();
            return;
        }
    }

    // Change Pac-Man image only after a successful turn
    if (this === pacman) {
        switch (this.direction) {
            case "U":
                this.image = pacmanUp;
                break;
            case "D":
                this.image = pacmanDown;
                break;
            case "L":
                this.image = pacmanLeft;
                break;
            case "R":
                this.image = pacmanRight;
                break;
        }
    }
}
    changeVelocity(){
        if (this.direction == 'U') {
            this.XVelocity = 0;
            this.YVelocity = -tileSize/4;
        }
        else if (this.direction == 'L') {
            this.XVelocity = -tileSize/4;
            this.YVelocity = 0;
        }
        else if (this.direction == 'D') {
            this.XVelocity = 0;
            this.YVelocity = tileSize/4;
        }
        else if (this.direction == 'R') {
            this.XVelocity = tileSize/4;
            this.YVelocity = 0;
        }
    }
}
