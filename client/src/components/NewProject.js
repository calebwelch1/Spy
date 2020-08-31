import React from "react";
import { useInput } from "./hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";

export default function NewProject(props) {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Project ${projectName} ${projectDescription}`);
    sendProjectDB();
    resetProjectName();
    resetProjectDescription();
  };

  const sendProjectDB = () => {
    const newProject = {
      projectName: projectName,
      projectDescription: projectDescription,
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