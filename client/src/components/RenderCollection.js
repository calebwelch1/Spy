import React, { useState, useEffect } from "react";
import API from "../utils/API";

function RenderCollection(props) {
  useEffect(() => {
    loadCollections(currentProjectId);
  }, []);
  const [collections, setCollections] = useState([]);
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
    API.getCollectionsByProjectId(id).then((collections) => {
      setCollections(collections);
      console.log("collections by project id", collections);
    });
  };
  // now make an empty issue collection tile then render all into it
  return <div></div>;
}

export default RenderCollection;
