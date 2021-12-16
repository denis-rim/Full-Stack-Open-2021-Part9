import React from "react";
import { CoursePart } from "../types";
import { assertNever } from "../utils";

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>project exercises: {part.groupProjectCount}</p>
        </div>
      );
    case "submission":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
          <p>submit to: {part.exerciseSubmissionLink}</p>
        </div>
      );
    case "special":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
          <p>
            required skills:{" "}
            {part.requirements.map((req, i) => {
              if (i === part.requirements.length - 1) {
                return req;
              } else {
                return req + ", ";
              }
            })}
          </p>
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
