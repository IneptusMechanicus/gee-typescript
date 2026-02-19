const SEGMENT_WIDTH = 20;
const SEGMENT_HEIGHT = 20;

const GRID_ROWS = 10;
const GRID_COLS = 10;

class Square {
	context;
	x;
	y;
	width;
	height;
	rotation;
	scaleX;
	scaleY;
	color;

	constructor(props) {
		
		this.x = props.x;
		this.y = props.y;
		this.width = props.width;
		this.height = props.height;
		this.rotation = 0;
		this.scaleX = 1;
		this.scaleY = 2;
	}

	draw() {
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.context.save();
		
		// Move to square center, apply rotation and scale
		this.context.translate(square.x, square.y);
		this.context.rotate(square.rotation * Math.PI / 180);
		this.context.scale(square.scale, square.scale);
		
		// Draw square centered at origin
		this.context.fillStyle = square.color;
		this.context.fillRect(-square.width/2, -square.height/2, square.width, square.height);

		// Restore context state
		ctx.restore();

	}
}

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	ctx = canvas.getContext('2d');
});
