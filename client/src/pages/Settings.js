import React, { useState, useEffect, useContext } from "react";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import InvisibleTile from "../components/MockComponents/InvisibleTile";

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
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { AuthProvider, AuthContext } from "../AuthContext";
import API from "../utils/API";
import MenuTile from "../components/MockComponents/MenuTile";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DarkThemeButton from "../components/DarkThemeButton";
import RenderCalendar from "../components/MockComponents/ResponsiveCalendar";

// add custom dark theme
import {
  useDarkTheme,
  useDarkThemeUpdate,
} from "../components/ThemeContextProvider.js";
import SpyLogo1 from "../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo2 from "../assets/Backgrounds/BrightEyeWhiteGreenGradient.png";
import SpyLogo3 from "../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo4 from "../assets/Backgrounds/BrightEyeWhiteorangegradient.png";
import SpyLogo5 from "../assets/Backgrounds/BrightEyeWhitePinkBlue.png";
import SpyLogo6 from "../assets/Backgrounds/CrossEyeBlueGradient.png";
import SpyLogo7 from "../assets/Backgrounds/CrossEyeBlueonBlack.png";
import SpyLogo8 from "../assets/Backgrounds/CrossEyeBlueonWhite.png";
import SpyLogo9 from "../assets/Backgrounds/CrossEyeOrangegradient.png";
import SpyLogo10 from "../assets/Backgrounds/CrossEyeOrangeonblack.png";
import SpyLogo11 from "../assets/Backgrounds/CrossEyePinkonblack.png";
import SpyLogo12 from "../assets/Backgrounds/CrossEyeWhiteBlueGradient.png";
import SpyLogo13 from "../assets/Backgrounds/CrossEyeWhitegradientbluepink.png";
import SpyLogo14 from "../assets/Backgrounds/CrossEyeWhitegreengradient.png";
import SpyLogo15 from "../assets/Backgrounds/CrossEyeWhiteonBlack.png";
import SpyLogo16 from "../assets/Backgrounds/CrossEyeWhitepinkGradient.png";
import SpyLogo17 from "../assets/Backgrounds/TargetEyeGreenonBlack.png";
import SpyLogo18 from "../assets/Backgrounds/TargetEyePurpleonBlack.png";
const backgroundArr = [
  SpyLogo1,
  SpyLogo2,
  SpyLogo3,
  SpyLogo4,
  SpyLogo5,
  SpyLogo6,
  SpyLogo7,
  SpyLogo8,
  SpyLogo9,
  SpyLogo10,
  SpyLogo11,
  SpyLogo12,
  SpyLogo13,
  SpyLogo14,
  SpyLogo15,
  SpyLogo16,
  SpyLogo17,
  SpyLogo18,
];
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
}));

function Main(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadUserData(userId);
  }, []);

  const loadUserData = (id) => {
    API.getUserbyId(id).then((res) => {
      setUserData(res.data[0]);
      console.log("userdata", res.data);
    });
  };

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div
      className={classes.root}
      // style={darkStyle}
    >
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={4}>
            <Avatar src={backgroundArr[userData.profileImg]} />
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={12} sm={12}>
            <MenuTile></MenuTile>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Main;
