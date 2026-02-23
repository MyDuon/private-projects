import "./ProjectDescription.css";
//import { Link } from "react-router";
/* eslint-disable react/prop-types */
function ProjectDescription({ description, goal, todo }) {
  return (
    <>
      <ul>
        <li>{description}</li>
        <li>{goal}</li>
        <li>{todo}</li>
      </ul>
    </>
  );
}

export default ProjectDescription;
