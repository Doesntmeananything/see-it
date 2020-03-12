import React from "react";

type LinkedListNodeProps = {
  value: number;
};

export const LinkedListNode = ({ value }: LinkedListNodeProps) => {
  return (
    <svg width="100" height="60">
      <g>
        <rect width="100" height="60" rx="25" fill="#303f9f" />
        <rect width="60" height="60" rx="25" fill="#3f51b5" />
        <text
          x="15"
          y="40"
          style={{ font: "bold 30px sans-serif" }}
          fill="#ffffff"
        >
          {value}
        </text>
      </g>
    </svg>
  );
};
