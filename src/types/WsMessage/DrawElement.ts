export enum DrawType {
  Circle = 'Circle',
  Line = 'Line',
  Rectangle = 'Rectangle',
  Text = 'Text',
}

interface BaseElement {
  type: DrawType;
  dimensions: unknown;
  fill?: {
    color: string;
    opacity?: number;
  };
  opacity?: number;
  stroke?: {
    color: string;
    opacity?: number;
    width?: number;
  };
}

export interface CircleElement extends BaseElement {
  type: DrawType.Circle;
  dimensions: {
    x: number;
    y: number;
    radius: number;
  };
}

export interface LineElement extends BaseElement {
  type: DrawType.Line;
  dimensions: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

export interface RectangleElement extends BaseElement {
  type: DrawType.Rectangle;
  dimensions: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface TextElement extends BaseElement {
  type: DrawType.Text;
  content: string;
  dimensions: {
    x: number;
    y: number;
  };
  font?: {
    family?: string;
    size: number;
  };
}

export type DrawElement =
  | CircleElement
  | LineElement
  | RectangleElement
  | TextElement;
