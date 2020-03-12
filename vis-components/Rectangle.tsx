import { Graphics } from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";

interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: number;
  rotation: number;
}

export const Rectangle = PixiComponent<RectangleProps, Graphics>("Rectangle", {
  create: () => {
    return new Graphics();
  },
  applyProps: (instance, _, newProps) => {
    const { fill, x, y, width, height, rotation } = newProps;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
    instance.rotation = rotation;
  }
});
