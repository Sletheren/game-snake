const width = 400;
const squareSize = 20;

let food;
let snake;

function setup() {
	createCanvas(400, 400)
	foodLocation()
	snake = new Snake(squareSize, width)
	
}

function foodLocation() {
	const dim = width/squareSize;
	food = createVector(
		Math.floor(random(dim))*squareSize,
		Math.floor(random(dim))*squareSize
	)
}

function keyPressed() {
	switch(keyCode) {
		case LEFT_ARROW:
			snake.move(-1, 0);
			break;
		case RIGHT_ARROW:
			snake.move(1, 0);
			break;
		case UP_ARROW:
			snake.move(0, -1);
			break;
		case DOWN_ARROW:
			snake.move(0, 1);
			break;
		default:
			console.log('Only arrows!')
	}
}

function draw(){
	frameRate(10)
	background(220)
	
	if(snake.isDead()) {
		snake = new Snake(squareSize, width)
	}
	if(snake.eat(food)) {
		foodLocation()
	}

	fill(240, 0, 0)
	noStroke()
	rect(food.x, food.y, squareSize, squareSize)

	snake.update()
	snake.show()
}
