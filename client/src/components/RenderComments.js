import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmptyIssueTile from "./MockComponents/EmptyIssueTile";
import Grid from "@material-ui/core/Grid";
import MenuTile from "./MockComponents/MenuTile";
import MenuTileLight from "./MockComponents/MenuTileLight";

function RenderComments(props) {
  useEffect(() => {
    loadComments(currentIssueId);
  }, []);
  const [currentComments, setComments] = useState([]);
  // console.log("history.location.pathname", props.history.location.pathname);
  const currentIssueId = props.issueId;
  // console.log("project Id is ", currentProjectId);
  // get collection projectLink from project id that is pushed to end of route then call api and get all collection for that project
  //API call
  const loadComments = (id) => {
    API.getCommentsByIssueId(id).then((res) => {
      setComments(res.data);
      console.log("comments by issue id", res.data);
    });
  };
  // now make an empty issue collection tile then render all into it
  return (
    <>
      {currentComments.map((comments) => {
        return (
          <Grid item xs={12}>
            <MenuTile body={comments.comment} />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderComments;
