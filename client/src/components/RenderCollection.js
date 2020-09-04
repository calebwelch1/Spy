import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CollectionCard from "./MockComponents/CollectionCard";
import Grid from "@material-ui/core/Grid";

function RenderCollection(props) {
  useEffect(() => {
    loadCollections(currentProjectId);
  }, []);
  const [currentCollections, setCollections] = useState([]);
  // console.log("history.location.pathname", props.history.location.pathname);
  const currentProjectId = parseInt(
    props.history.location.pathname.slice(
      13,
      props.history.location.pathname.length
    )
  );
  // console.log("project Id is ", currentProjectId);
  // get collection projectLink from project id that is pushed to end of route then call api and get all collection for that project
  //API call
  const loadCollections = (id) => {
    API.getCollectionsByProjectId(id).then((res) => {
      setCollections(res.data);
    });
  };
  // now make an empty issue collection tile then render all into it
  return (
    <>
      {currentCollections.map((collection) => {
        return (
          <Grid item xs={6}>
            <CollectionCard
              {...props}
              subtitle={collection.collectionDescription}
              title={collection.collectionName}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default RenderCollection;
