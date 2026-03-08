import { Point2D, Size2D } from "../types/base";

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

  public setPosition(position: Partial<Point2D>) {
    this.position.x = position.x ?? this.position.x;
    this.position.y = position.y ?? this.position.y;
  }

  public setRotation(rotation: number) {
    this.rotation = rotation;
  }

  public setScale(scale: Partial<Point2D>) {
    this.scale.x = scale.x ?? this.scale.x;
    this.scale.y = scale.y ?? this.scale.y;
  }

  public setSize(size: Partial<Size2D>) {
    this.size.width = size.width ?? this.size.width;
    this.size.height = size.height ?? this.size.height;
  }
}
