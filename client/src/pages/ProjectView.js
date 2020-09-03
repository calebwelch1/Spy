import React from "react";
import RenderCollection from "../components/RenderCollection";
import CollectionCard from "../components/MockComponents/CollectionCard";
// find a way to push project id on click so when this page renders it renders the related issue Collections
function ProjectView(props) {
  return (
    <div>
      Woot woot the project view
      <RenderCollection {...props} />
      <CollectionCard {...props} />
    </div>
  );
}

export default ProjectView;
