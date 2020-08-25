import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SpringSlowFade from "../components/SpringSlowFade";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  invisiblepaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    boxShadow: "none",
    fontSize: "40px",
  },
  centered: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: "white",
    height: "100%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(1),
    color: "white",
    height: "100%",
    fontWeight: "strong",
    textShadow: "2px 2px #000",
  },
  typist: {
    textAlign: "top",
    padding: theme.spacing(1),
    color: "white",
    height: "100%",
    fontWeight: "strong",
    textShadow: "2px 2px #000",
    position: "top",
  },
}));

export class springslowfade extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          //   add config on delay and duration to slow down the fade in
          config={{ delay: 1000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div style={Title}>SPY</div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
const Title = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
  textAlign: "center",
  fontSize: "200px",
  fontFamily:
    "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica",
  fontWeight: 300,
};
export default springslowfade;
