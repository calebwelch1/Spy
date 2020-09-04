import React, { useContext } from "react";
import { useInput } from "./hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";

export default function CreateNewCollection(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  // NOTE THIS MEANS PROJECT ID WILL ONLY WORK ON PAGES WHERE ID IS IN URL
  const currentProjectId = parseInt(
    props.history.location.pathname.slice(
      13,
      props.history.location.pathname.length
    )
  );
  const {
    value: collectionName,
    bind: bindCollectionName,
    reset: resetCollectionName,
  } = useInput("");
  const {
    value: collectionDescription,
    bind: bindCollectionDescription,
    reset: resetCollectionDescription,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Project ${collectionName} ${collectionDescription}`);
    sendCollectionDB();
    resetCollectionName();
    resetCollectionDescription();
  };

  const sendCollectionDB = () => {
    const newCollection = {
      collectionName: collectionName,
      collectionDescription: collectionDescription,
      projectLink: currentProjectId,
    };
    API.createCollection(newCollection)
      .then((res) => {
        console.log(newCollection);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Collection Name:
          <Input type="text" {...bindCollectionName} />
        </Label>
        <Label>
          Collection Description:
          <Input type="text" {...bindCollectionDescription} />
        </Label>
        <Input type="submit" value="Submit" />
      </Form>
    </Paper>
  );
}
