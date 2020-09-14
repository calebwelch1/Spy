import React from "react";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function SubmitSnackBar() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("You are not logged in", { variant });
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClick}>Show snackbar</Button> */}
      <Button onClick={handleClickVariant("success")}>Submitted</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SubmitSnackBar />
    </SnackbarProvider>
  );
}
