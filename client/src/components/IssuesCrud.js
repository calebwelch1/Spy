import React, { useEffect, useState } from "react";
import Axios from "axios";
import API from "../utils/API";

// simple component that I will use for testing routes.

function ProjectsCrud(props) {
  // get all
  const [projects, setProjects] = useState([]);
  // get one
  const [oneProject, setOneProject] = useState([]);

  useEffect(() => {
    // get all
    loadProjects();
    //get one by id
    loadProjectById();
    deleteProjectById(1);
  }, []);

  const loadProjects = () => {
    API.getProjects()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  };

  const loadProjectById = () => {
    const id = 11;
    API.getProjectById(id)
      .then((res) => {
        setOneProject(res.data);
        console.log("projectIDRoute", res.data);
      })
      .catch((err) => console.log(err));
  };
  // delete working!
  const deleteProjectById = (id) => {
    API.deleteProjectById(id).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <list>
        <p>GET ALL</p>
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
      <p>GET ONE BY ID</p>
      {oneProject.map((project) => {
        return (
          <p>
            {project.projectName} + {project.projectDescription}
          </p>
        );
      })}
    </div>
  );
}

export default ProjectsCrud;
