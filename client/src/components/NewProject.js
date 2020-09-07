import React, { useContext } from "react";
import { useInput } from "./hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";

export default function NewProject(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  const {
    value: projectName,
    bind: bindProjectName,
    reset: resetProjectName,
  } = useInput("");
  const {
    value: projectDescription,
    bind: bindProjectDescription,
    reset: resetProjectDescription,
  } = useInput("");
  const {
    value: projectImg,
    bind: bindProjectImg,
    reset: resetProjectImg,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Project ${projectName} ${projectDescription}`);
    sendProjectDB();
    resetProjectName();
    resetProjectDescription();
    resetProjectImg();
  };

  const sendProjectDB = () => {
    const newProject = {
      projectName: projectName,
      projectDescription: projectDescription,
      userLink: userId,
      img: projectImg,
    };
    API.createProject(newProject)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Project Name:
          <Input type="text" {...bindProjectName} />
        </Label>
        <Label>
          Project Description:
          <Input type="text" {...bindProjectDescription} />
        </Label>

        <Input type="submit" value="Submit" />
      </Form>
    </Paper>
  );
}
