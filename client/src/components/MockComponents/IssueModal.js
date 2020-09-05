import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import Button from "@material-ui/core/Button";
import { blueGrey } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import MenuTile from "./MenuTile";
import API from "../../utils/API";
import RenderComments from "../RenderComments";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useButtonStyles = makeStyles(() => ({
  root: {
    fontFamily: "'Kanit', san-serif",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    "&:hover": {
      backgroundColor: blueGrey[50],
    },
  },
  contained: {
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: blueGrey[50],
    color: blueGrey[700],
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
  containedPrimary: {
    transition:
      "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#ffbd80",
    color: blueGrey[900],
    "&:hover": {
      backgroundColor: "#FF9A3E",
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: "white",
      backgroundColor: "rgba(5,5,5, 0.9)",
      boxShadow: "none",
      borderRadius: "5rem",
    },
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  // make call to API for issue, render issue and all comments below, allow ability to add new comment

  const btnStyles = useButtonStyles();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        classes={btnStyles}
        variant={"contained"}
        color={"primary"}
        fullWidth
        onClick={handleOpen}
      >
        View Issue
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <Paper className={classes.paper}>
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </Paper> */}
          <RenderComments {...props} />
        </Fade>
      </Modal>
    </div>
  );
}
