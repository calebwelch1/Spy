import React from "react";
import EmptyIssueTile from "../components/MockComponents/EmptyIssueTile";
import RenderIssues from "../components/RenderIssues";
import Grid from "@material-ui/core/Grid";

function CollectionView(props) {
  return (
    <div>
      Collection view
      {/* <CreateNewIssue {...props} /> */}
      <Grid>
        <RenderIssues {...props} />
        <EmptyIssueTile {...props} />
      </Grid>
    </div>
  );
}

export default CollectionView;
