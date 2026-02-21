import { Rectangle } from "./components/rectangle";

const SEGMENT_WIDTH = 20;
const SEGMENT_HEIGHT = 20;

const GRID_ROWS = 10;
const GRID_COLS = 10;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'main';
  document.body.appendChild(canvas);
  console.log("CREATING RECT");
  const rect = new Rectangle({
    transform: {
      position: {
        x: 0,
        y:0
      },
      size: {
        width: SEGMENT_WIDTH,
        height: SEGMENT_HEIGHT
      }
    },
    color: '#00FF00'
  });

  for(let i = 0; i < 100; i++) {
    rect.setPosition({
      x: (rect.transform.position.x + SEGMENT_WIDTH)
    });
  }
});
