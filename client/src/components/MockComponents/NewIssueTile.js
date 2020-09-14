import React, { useContext } from "react";
import cx from "clsx";
import { blueGrey } from "@material-ui/core/colors";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import IssueDialog from "./IssueDialog";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useInput } from "../hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import { AuthProvider, AuthContext } from "../../AuthContext";

const useButtonStyles = makeStyles(() => ({
  root: {
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue,Helvetica, Arial",
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

const useStyles = makeStyles(() => ({
  card: {
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 12,
    backgroundColor: "#333",
  },
  titleFont: {
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica",
    color: "#fff",
  },
  header: {
    margin: 0,
    textAlign: "center",
    fontSize: "1.25rem",
    letterSpacing: "1px",
  },
  ribbon: {
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    letterSpacing: 1,
  },
  white: {
    color: "#fff",
  },
}));

export const NewIssueTile = React.memo(function SysiCard(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const styles = useStyles();
  const btnStyles = useButtonStyles();

  const { value: issue, bind: bindIssue, reset: resetIssue } = useInput("");
  const { value: issueName, bind: bindName, reset: resetIssueName } = useInput(
    ""
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Issue ${issue}`);
    sendIssueDB();
    resetIssue();
    resetIssueName();
  };
  const currentCollectionId = parseInt(
    props.history.location.pathname.slice(
      12,
      props.history.location.pathname.length
    )
  );
  const sendIssueDB = () => {
    const newIssue = {
      issueName: issueName,
      issueDescription: issue,
      userLink: userId,
      issueComplete: false,
      collectionLink: currentCollectionId,
    };
    API.createIssue(newIssue)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NoSsr></NoSsr>
      <Grid container spacing={3}>
        <Form onSubmit={handleSubmit}>
          <Label className={styles.white} color="#fff">
            Name:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindName}
            />
          </Label>

          <Label className={styles.white}>
            Issue:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindIssue}
            />
          </Label>

          <Input
            className={buttonStyles}
            type="submit"
            value="Submit"
            fullWidth
            onClick={() => window.location.reload(false)}
          />
        </Form>

        <Button classes={btnStyles} variant={"contained"} fullWidth>
          Add Clear Here
        </Button>
      </Grid>
    </>
  );
});
export default NewIssueTile;
