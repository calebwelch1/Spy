import React, { useEffect, useState, useContext } from "react";
import EmptyProjectTile from "./MockComponents/EmptyProjectTile";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function RenderSeedProjects(props) {
  const [seedProjects, setSeedProjects] = useState([]);

  // make call to get all projects by user
  // render each in an empty project tile
  // call to get author
  useEffect(() => {
    loadSeedProjects(999);
  }, []);

  const loadSeedProjects = (id) => {
    API.getAllProjectsByUser(id).then((res) => {
      setSeedProjects(res.data);
    });
  };
  return (
    <>
      {seedProjects.map((project) => {
        return (
          <Grid item xs={6}>
            <EmptyProjectTile
              {...props}
              body={project.projectDescription}
              heading={project.projectName}
              author={`by Luke Cage`}
              // route to new page where issue collection loads.
            />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderSeedProjects;
