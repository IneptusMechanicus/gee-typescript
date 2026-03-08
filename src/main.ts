import { Rectangle } from "./components/rectangle";

const SEGMENT_WIDTH = 20;
const SEGMENT_HEIGHT = 20;

const GRID_ROWS = 10;
const GRID_COLS = 10;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'main';
  canvas.style.backgroundColor = '#121122';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);
  document.body.style.margin = '0px';

  const ctx = canvas.getContext('2d');
  const rect = new Rectangle({
    transform: {
      position: { x: 0, y:0 },
      size: { width: SEGMENT_WIDTH, height: SEGMENT_HEIGHT }
    },
    color: '#00FF00',
    stroke: '#ff0000',
  });

  const renderLoop = () => {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    // rect.transform.setPosition({
    //   x: (rect.transform.position.x + 1)
    // });
    rect.transform.setRotation(rect.transform.rotation + 0.1);
    rect.draw();
    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
});
