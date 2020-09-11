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
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SpringSlowFade from "../components/SpringSlowFade";
import SpringModal from "../components/SpringModal";
import LogoSlowFade from "../components/LogoSlowFade";
import LandingCarousel from "../components/LandingCarousel";
import LoginForm from "../components/LoginForm";
import Popover from "@material-ui/core/Popover";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const id = open ? "simple-popover" : undefined;
  const id2 = open ? "simple-popover" : undefined;

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
        {/* <Grid item xs={12}>
          <Paper className={classes.invisiblepaper}>SPACE</Paper>
        </Grid> */}
        <Grid item xs={12} md={12}>
          {/* <LogoSlowFade />
           */}
          {/* <LandingCarousel /> */}
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={12} md={4}>
          <SpringSlowFade />
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
          <Button aria-describedby={id} onClick={handleClick}>
            Login
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              {/* The content of the Popover. */}
              <LoginForm />
            </Typography>
          </Popover>
          <Button onClick={handleClick}>Signup</Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              {/* The content of the Popover. */}
              <LoginForm />
            </Typography>
          </Popover>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4} />

        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={4} />
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
