import { Drawable } from "../types/base";
import { Transform, type TransformData } from "./transform";

export type RectangleData = {
  transform: TransformData;
  color?: string;
  stroke?: string;
}

export class Rectangle implements Drawable {
  public readonly transform: Transform;
  private color: string;
  private stroke: string;
  private context: CanvasRenderingContext2D;

  constructor(props: RectangleData) {
    this.transform = new Transform(props.transform);
    this.color = props.color ?? '#000000';
    this.stroke = props.stroke ?? '#000000';
    const ctx = (document.getElementById('main') as HTMLCanvasElement).getContext('2d');

    if(!ctx)
      throw "2D Drawing Context not found";

    this.context = ctx;
    // this.draw();
  }

  draw() {
    this.context.save();
    this.context.translate(this.transform.position.x, this.transform.position.y);
    this.context.rotate(this.transform.rotation);
    this.context.scale(this.transform.scale.x, this.transform.scale.y);

    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.stroke;
    this.context.strokeRect(
      this.transform.position.x,
      this.transform.position.y,
      this.transform.size.width,
      this.transform.size.height
    );
    this.context.fillRect(
      this.transform.position.x,
      this.transform.position.y,
      this.transform.size.width,
      this.transform.size.height
    );
    this.context.restore();
  }
}
