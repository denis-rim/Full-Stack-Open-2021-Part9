import React from "react";
import { PartsProps } from "../types";

const Total = ({ parts }: { parts: PartsProps[] }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};

export default Total;
