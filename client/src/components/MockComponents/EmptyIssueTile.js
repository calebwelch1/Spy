import React, { useContext, useEffect, useState } from "react";
import cx from "clsx";
import { blueGrey } from "@material-ui/core/colors";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import IssueDialog from "./IssueDialog";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import API from "../../utils/API";
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
  completed: {
    opacity: "1",
  },
}));

export const EmptyIssueTile = React.memo(function SysiCard(props) {
  const [userIssues, setUserIssues] = useState("");
  useEffect(() => {
    callUser(userId);
  }, []);
  const {
    isAuth,
    setIsAuth,
    userId,
    setUserId,
    isUpdated,
    setIsUpdated,
  } = useContext(AuthContext);
  const completeStyle = {
    opacity: props.issueComplete ? ".3" : "1",
  };
  const deleteIssue = (id) => {
    API.deleteIssueById(id).then((res) => {
      console.log("issue deleted");
    });
  };
  const completeIssue = (id) => {
    API.updateIssueComplete(id).then((res) => {
      alert("issue updated");
    });
  };
  const updateCompleteCount = (id) => {
    count();
    const updatedIssue = { issuesCompleteCount: parseInt(userIssues) };
    API.updateIssuesComplete(id, updatedIssue).then((res) => {
      // alert("complete count updated");
      console.log("updted coutn");
    });
  };
  const callUser = (id) => {
    API.getUserbyId(id).then((res) => {
      setUserIssues(res.data.issuesCompleteCount);
    });
  };
  const count = () => {
    setUserIssues(userIssues + 1);
  };
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const styles = useStyles();
  const btnStyles = useButtonStyles();
  return (
    <>
      <NoSsr></NoSsr>
      <Box maxWidth={343} style={completeStyle}>
        <Column p={0} gap={3} className={styles.card}>
          <Item>
            <h2 className={cx(styles.titleFont, styles.header)}>
              {props.date}
            </h2>
          </Item>
          <Item py={1} bgcolor={"rgb(255, 189, 128)"} className={buttonStyles}>
            {props.title}{" "}
          </Item>
          <Item>
            <Box px={1} mt={1} className={cx(styles.titleFont)}>
              {props.body}
            </Box>
          </Item>
          <Row wrap gap={1} px={2} pb={2}>
            <Item grow>
              <Button
                className={buttonStyles}
                variant={"contained"}
                color="invisble"
                fullWidth
              >
                <IssueDialog
                  issueId={props.issueId}
                  body={props.body}
                  {...props}
                />
              </Button>
            </Item>
            <Item grow>
              <Button
                classes={btnStyles}
                variant={"contained"}
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  completeIssue(props.issueId);
                }}
              >
                Complete Issue
              </Button>
            </Item>
          </Row>
        </Column>
      </Box>
    </>
  );
});
export default EmptyIssueTile;
