import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  console.log(`${progress.toFixed(2) > Number(99)}  `);
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f11f1",
            fontWeight: 800,
            marginTop: 40,
          }}
          className={`${
            progress.toFixed(2) > Number(99) ? "hidden" : "float"
          }  `}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
