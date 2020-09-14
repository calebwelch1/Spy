import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import HomeTile from "../components/MockComponents/MenuTile";
import InvisibleTile from "../components/MockComponents/InvisibleTile";
import RenderCalendar from "../components/MockComponents/ResponsiveCalendar";
import NewDate from "../components/MockComponents/NewDate";
import CountDown from "../components/CountDown";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";
import Paper from "@material-ui/core/Paper";
import ResponsiveWaffle from "../components/MockComponents/ResponsiveWaffle";
import RecentProject from "../components/MockComponents/RecentProject";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { makeStyles, withTheme } from "@material-ui/core/styles";

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
}));
function MainPage(props) {
  const classes = useStyles();

  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([
    { firstName: "You are not logged in" },
  ]);
  const [stats, setStats] = useState([]);
  const [issueStats, setIssueStats] = useState([]);
  const [commentStats, setCommentStats] = useState([]);
  useEffect(() => {
    loadUserInfo(userId);
    loadUserStats(userId);
    loadIssueStats(userId);
    loadCommentStats(userId);
  }, [props.history]);

  const loadUserStats = (id) => {
    API.getAllProjectsByUser(id).then((res) => {
      // console.log("stats", res);
      setStats(res.data);
    });
  };
  const loadIssueStats = (id) => {
    API.getAllIssuesByUser(id).then((res) => {
      // console.log("stats", res);
      setIssueStats(res.data);
    });
  };
  const loadCommentStats = (id) => {
    API.getAllCommentsByUser(id).then((res) => {
      // console.log("stats", res);
      setCommentStats(res.data);
    });
  };

  const loadUserInfo = (id) => {
    API.getUserbyId(id).then((user) => {
      // console.log("get User info", user.data[0]);
      setUserInfo(user.data[0]);
    });
  };
  // const countIssues = (id)=>{
  //   API.getIssuesByUserId
  // }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InvisibleTile body={"Welcome" + " " + userInfo.firstName} />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile title="Projects" body={stats.length}></HomeTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile title="Issues" body={issueStats.length}></HomeTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile title="Comments" body={commentStats.length}></HomeTile>
        </Grid>
        <Grid item xs={12} md={6} style={{ height: "500px", width: "100px" }}>
          {/* <HomeTile
            style={{ height: "100px", width: "100px" }}
            body={RenderCalendar} */}
          {/* <RenderCalendar /> */}
          <ResponsiveWaffle />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewDate />
          {/* <CountDown /> */}
          {/* <HomeTile body={NewDate} /> */}

          {/* <HomeTile body={CountDown} /> */}
        </Grid>
        <Grid item xs={12} md={6} style={{ height: "500px", width: "100px" }}>
          {/* <HomeTile body={return(<RecentProject/>)} />
           */}
          <RecentProject />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}>
          <InvisibleTile />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
