// board
let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardheight = rowCount * tileSize;
let context;

//sprites
let blueGhost;
let orangeGhost;
let pinkGhost;
let redGhost;
let pacmanLeft;
let pacmanRight;
let pacmanUp;
let pacmanDown;
let wall;

const walls = new Set();
const ghosts = new Set();
const foods = new Set();
let pacman;

// ghost directions
const direction = ["U", "L", "D", "R"];

//scores
let score = 0;
let lives = 3;
let gameOver = false;

const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX",
]
window.onload = function () {
    board = document.querySelector('#board');
    board.height = boardWidth;
    board.width = boardWidth;
    // getContext('2d') - method returns a built-in CanvasRenderingContext2D Object. This provides the properties and methods needed to draw shapes, text, images, other graphics on an HTML canvas.
    context = board.getContext('2d');
    loadImage();
    loadMap();
    update();
    this.document.addEventListener('keyup', movePlayer);
    // console.log(`Total Walls: ${walls.size}`);
    // console.log(`Total Foods: ${foods.size}`);
    // console.log(`Total Ghosts: ${ghosts.size}`);
    for (const ghost of ghosts.values()) {
        const newDirection = direction[Math.floor(Math.random() * 4)];
        ghost.changeDirection(newDirection);
    }

}


function loadImage() {
    // Wall Image
    wall = new Image();
    wall.src = 'sprites/wall.png';

    // Ghost Images
    blueGhost = new Image();
    blueGhost.src = 'sprites/blueGhost.png';
    orangeGhost = new Image();
    orangeGhost.src = 'sprites/orangeGhost.png';
    pinkGhost = new Image();
    pinkGhost.src = 'sprites/pinkGhost.png';
    redGhost = new Image();
    redGhost.src = 'sprites/redGhost.png';

    // Pac-Man Images
    pacmanUp = new Image();
    pacmanUp.src = 'sprites/pacmanUp.png';
    pacmanDown = new Image();
    pacmanDown.src = 'sprites/pacmanDown.png';
    pacmanLeft = new Image();
    pacmanLeft.src = 'sprites/pacmanLeft.png';
    pacmanRight = new Image();
    pacmanRight.src = 'sprites/pacmanRight.png';
}

function update() {
    if (gameOver) {
        return;
    }
    move();
    draw();
    setTimeout(() => {
        update();
    }, 50);
    // 20fps -> 1000ms/20 = 50ms
}

function move() {

    // change velocity for pac-man
    pacman.x += pacman.XVelocity;
    pacman.y += pacman.YVelocity;

    // check for wall collision
    for (const wall of walls.values()) {
        if (collision(pacman, wall)) {
            pacman.x -= pacman.XVelocity;
            pacman.y -= pacman.YVelocity;
            break;
        }
    }

    // check for food collision and provide scores
    let foodConsumed = null;

    for (let food of foods.values()) {
        if (collision(pacman, food)) {
            foodConsumed = food;
            score += 10;
            break;
        }
    }
    foods.delete(foodConsumed);

    // load next level
    if (foods.size == 0) {
        loadMap();
        resetPosition();
    }

    // change velocity for ghost
    for (const ghost of ghosts.values()) {
        // collision between ghosts and pacman
        if (collision(ghost, pacman)) {
            lives -= 1;
            if (lives == 0) {
                gameOver = true;
                return;
            }
            resetPosition();
        }


        if (ghost.y == tileSize * 9 && ghost.direction != 'U' && ghost.direction != 'D') {
            ghost.changeDirection('U');
        }

        ghost.x += ghost.XVelocity;
        ghost.y += ghost.YVelocity;
        for (const wall of walls.values()) {
            if (collision(ghost, wall) || ghost.x <= 0 || ghost.x + ghost.width >= boardWidth) {
                ghost.x -= ghost.XVelocity;
                ghost.y -= ghost.YVelocity;
                const newDirection = direction[Math.floor(Math.random() * 4)];
                ghost.changeDirection(newDirection);
            }
        }
    }
}

function draw() {
    context.clearRect(0, 0, board.width, board.height);// clear previous output
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);
    for (const ghost of ghosts) {
        context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
    }
    for (const wall of walls.values()) {
        context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
    }
    context.fillStyle = 'wheat';
    for (const food of foods.values()) {
        context.fillRect(food.x, food.y, food.width, food.height);

    }
    // display score
    context.fillStyle = "white";
    context.font = '20px Trebuchet MS';
    if (gameOver) {
        context.fillStyle = "white";
        context.font = '40px Trebuchet MS';
        context.fillText('Game Over!!!\t\t\t\Score: ' + String(score), boardWidth / 10, boardheight / 4);
        context.fillText("Press Movement Keys to Restart!", boardWidth / 30, boardheight / 3);
    }
    else {
        context.fillText("Lives: " + String(lives) + "\t\t\t\t\t\t\t" + "Score: " + String(score), tileSize / 2, tileSize / 2);
    }
}

function movePlayer(event) {
    if (gameOver) {
        loadMap();
        resetPosition();
        score = 0;
        lives = 3;
        gameOver = false;
        update();
        return;
    }
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

    // change Pac-Man images

    if (pacman.direction === 'U') {
        pacman.image = pacmanUp;
    }
    else if (pacman.direction === 'L') {
        pacman.image = pacmanLeft;
    }
    else if (pacman.direction === 'D') {
        pacman.image = pacmanDown;
    }
    else if (pacman.direction === 'R') {
        pacman.image = pacmanRight;
    }
}

function collision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y;
}

class Block {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        this.XStart = x;
        this.YStart = y;

        //direction
        this.direction = 'R';
        this.XVelocity = 0;
        this.YVelocity = 0;
    }

    changeDirection(direction) {
        const previousDirection = this.direction;
        this.direction = direction;
        this.changeVelocity();
        this.x += this.XVelocity;
        this.y += this.YVelocity;
        for (const wall of walls.values()) {
            if (collision(this, wall)) {
                this.x -= this.XVelocity;
                this.y -= this.YVelocity;
                this.direction = previousDirection;
                this.changeVelocity();
                return;
            }
        }
    }

    changeVelocity() {
        if (this.direction == 'U') {
            this.XVelocity = 0;
            this.YVelocity = -tileSize / 4;
        }
        else if (this.direction == 'L') {
            this.XVelocity = -tileSize / 4;
            this.YVelocity = 0;
        }
        else if (this.direction == 'D') {
            this.XVelocity = 0;
            this.YVelocity = tileSize / 4;
        }
        else if (this.direction == 'R') {
            this.XVelocity = tileSize / 4;
            this.YVelocity = 0;
        }
    }
    reset() {
        this.x = this.XStart;
        this.y = this.YStart;
    }
}

function resetPosition() {
    pacman.reset();
    pacman.XVelocity = 0;
    pacman.YVelocity = 0;
    for (const ghost of ghosts) {
        ghost.reset();
        const newDirection = direction[Math.floor(Math.random() * 4)]
        ghost.changeDirection(newDirection);
    }
}

function loadMap() {
    walls.clear();
    foods.clear();
    ghosts.clear();

    for (let row = 0; row < rowCount; row++) {
        for (let column = 0; column < columnCount; column++) {
            const rowData = tileMap[row];

            const tileMapChar = rowData[column];
            const x = column * tileSize;
            const y = row * tileSize;
            if (tileMapChar == 'X') {
                // wall
                const wallImage = new Block(wall, x, y, tileSize, tileSize);
                walls.add(wallImage);
            }
            else if (tileMapChar == 'r') {
                // Red Ghost
                const red = new Block(redGhost, x, y, tileSize, tileSize);
                ghosts.add(red);
            }
            else if (tileMapChar == 'b') {
                // Blue Ghost
                const blue = new Block(blueGhost, x, y, tileSize, tileSize);
                ghosts.add(blue);
            }
            else if (tileMapChar == 'o') {
                // Orange Ghost
                const orange = new Block(orangeGhost, x, y, tileSize, tileSize);
                ghosts.add(orange);
            }
            else if (tileMapChar == 'p') {
                // Pink Ghost
                const pink = new Block(pinkGhost, x, y, tileSize, tileSize);
                ghosts.add(pink);
            }
            else if (tileMapChar == 'P') {
                // Pac-man
                pacman = new Block(pacmanRight, x, y, tileSize, tileSize);
            }
            else if (tileMapChar == ' ') {
                // empty is for food
                const food = new Block(null, x + 14, y + 14, 4, 4);
                foods.add(food);
                // 32-4 = 28/2 = 14
            }

        }
    }
}