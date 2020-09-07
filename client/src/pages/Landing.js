import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SpringSlowFade from "../components/SpringSlowFade";
import SpringModal from "../components/SpringModal";
import LogoSlowFade from "../components/LogoSlowFade";

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
    backgroundColor: "invisible",
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

export default function Landing(props) {
  const classes = useStyles();
  // Grid works by 12 columns. Once you overflow just creates a new row, very interesting
  return (
    <div className={classes.root}>
      {/* Left */}
      <Grid container spacing={1} container direction="row" justify="center">
        <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} md={5}>
          <LogoSlowFade />
        </Grid>
        <Grid item xs={12} md={6}>
          <SpringSlowFade />
          <SpringModal></SpringModal>
          <Button
            className="m-1"
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/main");
            }}
          >
            Get Started,
          </Button>
          <Button
            className="m-1"
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/about");
            }}
          >
            About
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
