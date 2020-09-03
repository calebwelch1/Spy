import React, { useContext } from "react";
import RenderUserProjects from "../components/RenderUserProjects";
import RenderSeedProjects from "../components/RenderSeedProjects";
import { AuthProvider, AuthContext } from "../AuthContext";

function RenderProjectsConditional(props) {
  const { isAuth } = useContext(AuthContext);

  if (isAuth == true) {
    return <RenderUserProjects {...props} />;
  } else {
    return <RenderSeedProjects {...props} />;
  }
}

export default RenderProjectsConditional;
