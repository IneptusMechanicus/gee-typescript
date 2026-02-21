export type Point2D = {
  x: number;
  y: number;
}

export type Size2D = {
  width: number;
  height: number;
}

export type TransformData = {
  position: Point2D;
  rotation?: number;
  scale?: Point2D;
  size: Size2D;
}

export class Transform {
  public position: Point2D;
  public rotation: number;
  public scale: Point2D;
  public size: Size2D;

  constructor(props: TransformData) {
    this.position = props.position;
    this.rotation = props.rotation ?? 0;
    this.scale = props.scale ?? { x: 1, y: 1 };
    this.size = props.size;
  }

  public setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  public setScale(x: number, y: number) {
    this.scale.x = x;
    this.scale.y = y;
  }

  public setSize(width: number, height: number) {
    this.size.width = width;
    this.size.height = height;
  }
}
