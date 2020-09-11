import EmptyIssueTile from "../components/MockComponents/EmptyIssueTile";
import RenderIssues from "../components/RenderIssues";
import Grid from "@material-ui/core/Grid";
import EmptyComment from "../components/MockComponents/EmptyComment";
import React, { useContext } from "react";
import RenderCollection from "../components/RenderCollection";
import CollectionCard from "../components/MockComponents/CollectionCard";
import CreateNewCollection from "../components/CreateNewCollection";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ProjectsCrud from "../components/ProjectsCrud";
import NewProject from "../components/NewProject";
import UpdateProject from "../components/UpdateProject";
import ProjectTile from "../components/MockComponents/ProjectTile";
import RenderUserProjects from "../components/RenderUserProjects";
import RenderSeedProjects from "../components/RenderSeedProjects";
import RenderProjectsConditional from "../components/RenderProjectsConditional";
import ImageSpring from "../components/ImageSpring";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import NewProjectTile from "../components/MockComponents/NewProjectTile";
import NewIssueTile from "../components/MockComponents/NewIssueTile";
import NavTabCollection from "../components/NavTabCollection";
import DarkThemeButton from "../components/DarkThemeButton";

import { AuthProvider, AuthContext } from "../AuthContext";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewCollectionTile from "../components/MockComponents/NewCollectionTile";
// find a way to push project id on click so when this page renders it renders the related issue Collections

import {
  useDarkTheme,
  useDarkThemeUpdate,
} from "../components/ThemeContextProvider.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bigPaper: {
    width: "50rem",
    height: "50rem",
  },
}));

function CollectionView(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  // dark theme
  // f5f5f5 is white, use #333 as cards and tiles, use #1c1c1c as background
  const darkTheme = useDarkTheme();
  const darkStyle = {
    backgroundColor: darkTheme ? "#1c1c1c" : "#F5F5F5",
    color: darkTheme ? "#F5F5F5" : "#1c1c1c",
  };
  const darkIconStyle = {
    color: darkTheme ? "#F5F5F5" : "#1c1c1c",
  };
  const darkDividerStyle = {
    color: darkTheme ? "#1c1c1c" : "#F5F5F5",
  };

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // To effect these components, have to access outside the return
  // also need to add directly to icons!!!
  const drawer = (
    <div style={darkStyle}>
      <div className={classes.toolbar} />
      <Divider style={darkDividerStyle} />
      <List>
        <ListItem
          button
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/main");
          }}
        >
          <ListItemIcon>
            <HomeIcon style={darkIconStyle} />
          </ListItemIcon>
          Home
        </ListItem>
        <ListItem
          button
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/projects");
          }}
        >
          <ListItemIcon>
            <HomeIcon style={darkIconStyle} />
          </ListItemIcon>
          My Projects
        </ListItem>
        <ListItem
          button
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/groups");
          }}
        >
          <ListItemIcon>
            <HomeIcon style={darkIconStyle} />
          </ListItemIcon>
          Groups
        </ListItem>

        <ListItem
          button
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/settings");
          }}
        >
          <ListItemIcon>
            <HomeIcon style={darkIconStyle} />
          </ListItemIcon>
          Settings
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>Bottom List!</ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} style={darkStyle}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={4} display="flex"></Grid>
          <Grid item xs={4} display="flex">
            <NavTabCollection {...props} />
          </Grid>
          <Grid item xs={4} display="flex"></Grid>
          <Grid item xs={4} display="flex"></Grid>
          <Grid
            item
            xs={4}
            style={{ alignItems: "center", textAlign: "center" }}
          >
            <NewIssueTile {...props} />
          </Grid>
          <Grid item xs={4} display="flex"></Grid>
          <Grid item xs={12}></Grid>
          <RenderIssues {...props} />
        </Grid>
      </main>
    </div>
  );
}

export default CollectionView;
