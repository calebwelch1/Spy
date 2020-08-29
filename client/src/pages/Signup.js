import React from "react";
import "../App.css";
import SignupForm from "../components/SignupForm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
function Signup(props) {
  return (
    <Container className="signup">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <SignupForm {...props} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;
