import React, { useEffect, useState, useContext } from "react";
import EmptyProjectTile from "./MockComponents/EmptyProjectTile";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function RenderUserProjects() {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  const [userProjects, setUserProjects] = useState([]);
  const [author, setAuthor] = useState("");

  // make call to get all projects by user
  // render each in an empty project tile
  // call to get author
  useEffect(() => {
    loadUserProjects(userId);
    getAuthor(userId);
  }, [isAuth]);

  const loadUserProjects = (id) => {
    API.getAllProjectsByUser(id).then((res) => {
      setUserProjects(res.data);
      console.log("all user projects from the RENDER USER PROJECTS", res);
    });
  };
  const getAuthor = (id) => {
    API.getUserbyId(id).then((res) => {
      console.log(
        "getAuthor response.data[0].firstName",
        res.data[0].firstName
      );
      setAuthor(res.data[0].firstName);
    });
  };
  return (
    <>
      {userProjects.map((project) => {
        return (
          <Grid item xs={6}>
            <EmptyProjectTile
              body={project.projectDescription}
              heading={project.projectName}
              author={`by ${author}`}
              id={project.id}

              // route to new page where issue collection loads.
              //   route={}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderUserProjects;
