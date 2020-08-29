import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../AuthContext";
import Container from "@material-ui/core/Container";
import LoginForm from "../components/LoginForm";
import Grid from "@material-ui/core/Grid";
function Login(props) {
  const { isAuth } = useContext(AuthContext);

  console.log("login auth: ", isAuth);

  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <Container className="signup">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LoginForm {...props} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
