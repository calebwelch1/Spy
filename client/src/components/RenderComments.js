import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import EmptyIssueTile from "./MockComponents/EmptyIssueTile";
import Grid from "@material-ui/core/Grid";
import MenuTile from "./MockComponents/MenuTile";
import MenuTileLight from "./MockComponents/MenuTileLight";
import EmptyComment from "./MockComponents/EmptyComment";
import { AuthProvider, AuthContext } from "../AuthContext";

function RenderComments(props) {
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  useEffect(() => {
    loadComments(currentIssueId);
    loadUserData(userId);
  }, []);
  const [currentComments, setComments] = useState([]);
  const [userData, setUserData] = useState([
    { firstName: "unknown", lastName: "unknown", img: 1 },
  ]);
  // console.log("history.location.pathname", props.history.location.pathname);
  const currentIssueId = props.issueId;
  // console.log("project Id is ", currentProjectId);
  // get collection projectLink from project id that is pushed to end of route then call api and get all collection for that project
  //API call
  const loadComments = (id) => {
    API.getCommentsByIssueId(id).then((res) => {
      setComments(res.data);
      // console.log("comments by issue id", res.data);
    });
  };
  const loadUserData = (id) => {
    API.getUserbyId(id).then((res) => {
      setUserData(res.data[0]);
      // console.log("userdata", res.data);
    });
  };

  // now make an empty issue collection tile then render all into it
  return (
    <>
      {currentComments.map((comments) => {
        return (
          <Grid item xs={12}>
            <EmptyComment
              comment={comments.comment}
              time={comments.createdAt}
              firstName={userData.firstName || "unknown"}
              lastName={userData.lastName || "unknown"}
              img={userData.profileImg || 1}
              {...props}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderComments;
