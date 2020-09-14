import React, { useContext } from "react";
import RenderUserProjects from "./RenderUserProjects";
import RenderSeedProjects from "./RenderSeedProjects";
import { AuthProvider, AuthContext } from "../AuthContext";
import LoginSnackBar from "./LoginSnackBar";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { makeStyles, withTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#fff",
  },
}));

function GetStartedConditional(props) {
  const { isAuth } = useContext(AuthContext);
  const classes = useStyles();

  if (isAuth == true) {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          props.history.push("/main");
        }}
      >
        <div className={classes.white}>Get Started</div>
      </Button>
    );
  } else {
    // return alert("you are not logged in!");
    return <LoginSnackBar />;
  }
}
const white = {
  color: "#fff",
};
export default GetStartedConditional;
