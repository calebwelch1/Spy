import React from "react";
import RenderCollection from "../components/RenderCollection";
import CollectionCard from "../components/MockComponents/CollectionCard";
import CreateNewCollection from "../components/CreateNewCollection";
import Grid from "@material-ui/core/Grid";
// find a way to push project id on click so when this page renders it renders the related issue Collections

// find a way to reload collections once a new one is added or updated or deleted
function ProjectView(props) {
  return (
    <div>
      <CreateNewCollection {...props} />
      <Grid>
        <RenderCollection {...props} />
      </Grid>
    </div>
  );
}

export default ProjectView;
