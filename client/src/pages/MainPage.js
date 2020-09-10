import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import HomeTile from "../components/MockComponents/MenuTile";
import NewDate from "../components/MockComponents/NewDate";
import CountDown from "../components/CountDown";
import API from "../utils/API";
import { AuthProvider, AuthContext } from "../AuthContext";

function MainPage(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    loadUserInfo(userId);
  }, []);

  const loadUserInfo = (id) => {
    API.getUserbyId(id).then((user) => {
      console.log("get User info", user);
      setUserInfo(user);
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HomeTile body={"PLEASE RENDER"} />
          {/* How I'm getting the user id for the projects lmfao */}
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeTile body={CountDown} />
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeTile body="Nav"></HomeTile>
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeTile body="Nav" />
        </Grid>
        <Grid item xs={6} md={3}>
          <NewDate />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile body={CountDown} />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile body="Stats"></HomeTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTile body="Stats" />
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
