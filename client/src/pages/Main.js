import React, { useContext } from "react";
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
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// get user auth/ id!
import { AuthProvider, AuthContext } from "../AuthContext";

import HomeTile from "../components/MockComponents/MenuTile";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DarkThemeButton from "../components/DarkThemeButton";
// add custom dark theme
import {
  useDarkTheme,
  useDarkThemeUpdate,
} from "../components/ThemeContextProvider.js";
import NavTabs from "../components/NavTabs.js";
import MainPage from "./MainPage";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Members from "./Members";
import Landing from "./Landing";
import Projects from "./Projects";
import Settings from "./Settings";
import ProjectView from "./ProjectView";
import CollectionView from "./CollectionView";
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
  white: {
    color: "#fff",
  },
}));

function Main(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  // dark theme
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} style={darkStyle}>
      <CssBaseline />

      {/* <AppBar position="fixed" className={classes.appBar} style={darkStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Spy Issue Tracking
          </Typography>
          <DarkThemeButton />
        </Toolbar>
      </AppBar> */}

      <main className={classes.content}>
        <NavTabs {...props} />
      </main>
    </div>
  );
}

export default Main;
