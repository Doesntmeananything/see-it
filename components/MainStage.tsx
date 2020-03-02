import { useState, useRef } from "react";
import { Stage, useTick, Container } from "@inlet/react-pixi";

import { Rectangle } from "./Rectangle";

const SpinningRectangle = () => {
  const [rotation, setRotation] = useState(0);

  const iter = useRef(0);

  useTick(delta => {
    const i = (iter.current += 0.05 * delta);

    setRotation(Math.sin(i) * Math.PI);
  });

  return (
    <Rectangle
      rotation={rotation}
      x={Math.sin(iter.current) * 100}
      y={Math.sin(iter.current / 1.5) * 100}
      width={50}
      height={30}
      fill={0xff8008}
    />
  );
};

export const MainStage = () => {
  return (
    <Stage options={{ antialias: true, transparent: true }}>
      <Container x={400} y={250}>
        <SpinningRectangle />
      </Container>
    </Stage>
  );
};
