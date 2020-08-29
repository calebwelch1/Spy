import React from "react";
import { useInput } from "./hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";

export default function UpdateProject(props) {
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
    value: projectComplete,
    bind: bindProjectComplete,
    reset: resetProjectComplete,
  } = useInput("");

  const {
    value: projectPublic,
    bind: bindPublic,
    reset: resetPublic,
  } = useInput("");
  const { value: projectId, bind: bindId, reset: resetId } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Updating Project ${projectName}`);
    // send then reset all
    sendProjectDB();
    resetProjectName();
    resetProjectDescription();
    resetProjectComplete();
    resetPublic();
    resetId();
  };

  const sendProjectDB = () => {
    const id = projectId;
    const updatedProject = {
      projectName: projectName,
      projectDescription: projectDescription,
      projectComplete: JSON.parse(projectComplete),
      public: JSON.parse(projectPublic),
    };
    API.updateProject(id, updatedProject)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Project Id
          <Input type="number" {...bindId} />
        </Label>
        <Label>
          Update Project Name:
          <Input type="text" {...bindProjectName} />
        </Label>
        <Label>
          Update Project Description:
          <Input type="text" {...bindProjectDescription} />
        </Label>
        <Label>
          Update Project Complete:
          <Input type="boolean" {...bindProjectComplete} />
        </Label>
        <Label>
          Update Project Privacy:
          <Input type="boolean" {...bindPublic} />
        </Label>
        <Input type="submit" value="Submit" />
      </Form>
    </Paper>
  );
}
