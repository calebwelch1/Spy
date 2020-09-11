import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import HomeTile from "../components/MockComponents/MenuTile";
import NewDate from "../components/MockComponents/NewDate";
import CountDown from "../components/CountDown";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";

function MainPage(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([
    { firstName: "You are not logged in" },
  ]);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    loadUserInfo(userId);
    loadUserStats(userId);
  }, []);

  const loadUserStats = (id) => {
    API.getAllProjectsByUser(id).then((res) => {
      // console.log("stats", res);
      setStats(res.data);
    });
  };
  const loadUserInfo = (id) => {
    API.getUserbyId(id).then((user) => {
      console.log("get User info", user.data[0]);
      setUserInfo(user.data[0]);
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HomeTile body={"Welcome" + " " + userInfo.firstName} />
          {/* How I'm getting the user id for the projects lmfao */}
        </Grid>
        <Grid item xs={6} md={6}>
          <HomeTile body="Calender" />
        </Grid>

        <Grid item xs={6} md={3}>
          <HomeTile body="Nav" />
        </Grid>
        <Grid item xs={6} md={3}>
          <NewDate />
          <HomeTile body={CountDown} />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile title="Projects" body={stats.length}></HomeTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile
            title="Issues"
            body={userInfo.issuesCompleteCount}
          ></HomeTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile title="Comments" body={userInfo.commentsCount}></HomeTile>
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeTile body="charts" />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeTile body="charts" />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
