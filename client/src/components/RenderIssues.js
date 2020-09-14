import React, { useState, useEffect } from "react";
import API from "../utils/API";
import EmptyIssueTile from "./MockComponents/EmptyIssueTile";
import Grid from "@material-ui/core/Grid";

function RenderIssues(props) {
  useEffect(() => {
    loadIssues(currentCollectionId);
  }, []);
  const [currentIssues, setIssues] = useState([]);
  // console.log("history.location.pathname", props.history.location.pathname);
  const currentCollectionId = parseInt(
    props.history.location.pathname.slice(
      12,
      props.history.location.pathname.length
    )
  );
  // console.log("project Id is ", currentProjectId);
  // get collection projectLink from project id that is pushed to end of route then call api and get all collection for that project
  //API call
  const loadIssues = (id) => {
    API.getIssuesByCollectionId(id).then((res) => {
      setIssues(res.data);
      console.log("from render issues", res.data);
    });
  };
  // now make an empty issue collection tile then render all into it
  return (
    <>
      {currentIssues.map((issues) => {
        return (
          <Grid item xs={6} md={3} style={{ display: "fixed" }}>
            <EmptyIssueTile
              {...props}
              date={issues.createdAt}
              title={issues.issueName}
              body={issues.issueDescription}
              collectionLink={currentCollectionId}
              issueId={issues.id}
              issueComplete={issues.issueComplete}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderIssues;
