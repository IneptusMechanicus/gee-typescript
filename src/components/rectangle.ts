import { Drawable } from "../types/base";
import { Point2D, Size2D, Transform, type TransformData } from "./transform";

export type RectangleData = {
  transform: TransformData;
  color?: string;
}

export class Rectangle implements Drawable {
  public readonly transform: Transform;
  private color: string;
  private context: CanvasRenderingContext2D;

  constructor(props: RectangleData) {
    this.transform = new Transform(props.transform);
    this.color = props.color ?? '#000000';
    const ctx = (document.getElementById('main') as HTMLCanvasElement).getContext('2d');

    if(!ctx)
      throw "2D Drawing Context not found";

    this.context = ctx;
    this.draw();
  }

  draw() {
    this.context.clearRect(
      this.transform.position.x,
      this.transform.position.y,
      this.transform.size.width,
      this.transform.size.height
    );

    // Move to square center, apply rotation and scale
    this.context.translate(this.transform.position.x, this.transform.position.y);
    this.context.rotate(this.transform.rotation * Math.PI / 180);
    this.context.scale(this.transform.scale.x, this.transform.scale.y);

    // Draw square centered at origin
    this.context.fillStyle = this.color;
    this.context.fillRect(
      this.transform.position.x,
      this.transform.position.y,
      this.transform.size.width,
      this.transform.size.height
    );

    // Restore context state
    // this.context.restore();
  }

  public setPosition(position: Partial<Point2D>) {
    this.transform.position.x = position.x ?? this.transform.position.x;
    this.transform.position.y = position.y ?? this.transform.position.y;
  }

  public setRotation(rotation: number) {
    this.transform.rotation = rotation;
  }

  public setScale(scale: Partial<Point2D>) {
    this.transform.scale.x = scale.x ?? this.transform.scale.x;
    this.transform.scale.y = scale.y ?? this.transform.scale.y;
  }

  public setSize(size: Partial<Size2D>) {
    this.transform.size.width = size.width ?? this.transform.size.width;
    this.transform.size.height = size.height ?? this.transform.size.height;
  }
}
