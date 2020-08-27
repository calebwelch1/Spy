import React, { useEffect, useState } from "react";
import Axios from "axios";
import API from "../utils/API";

// simple component that I will use for testing routes.

function RenderProjects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);
  const loadProjects = () => {
    API.getProjects()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <list>
        {projects.map((project) => {
          return (
            <li key={project._id}>
              <strong>
                {project.projectName} + {project.projectDescription}
              </strong>
            </li>
          );
        })}
      </list>
    </div>
  );
}

export default RenderProjects;
