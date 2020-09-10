import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useInput } from "../hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

import { AuthProvider, AuthContext } from "../../AuthContext";
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0px 14px 80px rgba(191, 192, 222 0.2)",
    color: "#fff",
    background: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
  },
  media: {
    borderRadius: 6,
  },
  white: {
    color: "#fff",
  },
}));
function NewComment(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const styles = useStyles();

  const {
    value: commentBody,
    bind: bindComment,
    reset: resetComment,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Comment ${commentBody}`);
    sendCommentDB();
    resetComment();
  };
  //   const currentCollectionId = parseInt(
  //     props.history.location.pathname.slice(
  //       12,
  //       props.history.location.pathname.length
  //     )
  //   );
  const sendCommentDB = () => {
    const newComment = {
      comment: commentBody,
      issueLink: props.issueId,
      userLink: userId,
    };
    API.createComment(newComment)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label className={styles.white}>
          Comment:
          <Input
            type="text"
            fullWidth="true"
            className={styles.white}
            {...bindComment}
          />
        </Label>
        <Input className={buttonStyles} type="submit" value="Submit" />
      </Form>
      {/* <Button
        className={buttonStyles}
        variant={"contained"}
        color="invisible"
        fullWidth
      >
        Send
      </Button> */}
    </div>
  );
}

export default NewComment;
