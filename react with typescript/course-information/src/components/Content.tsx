import React from "react";
import { PartsProps } from "../types";

const Content = ({ parts }: { parts: PartsProps[] }) => {
  if (!parts) {
    return <p>No parts</p>;
  }

  return (
    <div>
      {parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
