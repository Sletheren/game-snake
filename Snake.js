class Snake {
	constructor (size, width) {
		this.body = [];
		this.body[0] = createVector(0, 0);
		this.X = 0;
		this.Y = 0;
		this.size = size
		this.width = width
	}

	update() {
		let head = this.body[this.body.length-1].copy();
		this.body.shift();
		head.x += this.X
		head.y += this.Y
		this.body.push(head)
	}

	move(x, y) {
		this.X = x*this.size;
		this.Y = y*this.size;
	}

	isDead() {
		if(
			this.body[this.body.length-1].x > this.width-1 ||
			this.body[this.body.length-1].y > this.width-1 ||
			this.body[this.body.length-1].x < 0 ||
			this.body[this.body.length-1].y < 0 ||
			this.isSuicide()
		) {
			return true;
		}
		return false;
	}

	isSuicide() {
		const {x, y} = this.body[this.body.length-1]
		for(let i=0; i<this.body.length-1; i++) {
			if (this.body[i].x == x && this.body[i].y == y) {
				return true;
			}
		}
		return false;
	}

	grow() {
		let head = this.body[this.body.length-1].copy();
		this.body.push(head)
	}

	eat(food) {
		const {x, y} = this.body[this.body.length-1]
		if(x === food.x && y === food.y) {
			this.grow()
			return true;
		}
		return false
	}

	show() {
		for(let i=0; i<this.body.length; i++) {
			fill(0)
			noStroke()
			rect(this.body[i].x, this.body[i].y, this.size, this.size);
		}
	}
}
