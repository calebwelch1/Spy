import React, { useContext } from "react";
import RenderUserProjects from "./RenderUserProjects";
import RenderSeedProjects from "./RenderSeedProjects";
import { AuthProvider, AuthContext } from "../AuthContext";

function GetStartedConditional(props) {
  const { isAuth } = useContext(AuthContext);

  if (isAuth == true) {
    return props.history.push("/main");
  } else {
    return alert("you are not logged in!");
  }
}

export default GetStartedConditional;
