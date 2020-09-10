import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

import InfoIcon from "@material-ui/icons/Info";
import SpyLogo1 from "../../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo2 from "../../assets/Backgrounds/BrightEyeWhiteGreenGradient.png";
import SpyLogo3 from "../../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo4 from "../../assets/Backgrounds/BrightEyeWhiteorangegradient.png";
import SpyLogo5 from "../../assets/Backgrounds/BrightEyeWhitePinkBlue.png";
import SpyLogo6 from "../../assets/Backgrounds/CrossEyeBlueGradient.png";
import SpyLogo7 from "../../assets/Backgrounds/CrossEyeBlueonBlack.png";
import SpyLogo8 from "../../assets/Backgrounds/CrossEyeBlueonWhite.png";
import SpyLogo9 from "../../assets/Backgrounds/CrossEyeOrangegradient.png";
import SpyLogo10 from "../../assets/Backgrounds/CrossEyeOrangeonblack.png";
import SpyLogo11 from "../../assets/Backgrounds/CrossEyePinkonblack.png";
import SpyLogo12 from "../../assets/Backgrounds/CrossEyeWhiteBlueGradient.png";
import SpyLogo13 from "../../assets/Backgrounds/CrossEyeWhitegradientbluepink.png";
import SpyLogo14 from "../../assets/Backgrounds/CrossEyeWhitegreengradient.png";
import SpyLogo15 from "../../assets/Backgrounds/CrossEyeWhiteonBlack.png";
import SpyLogo16 from "../../assets/Backgrounds/CrossEyeWhitepinkGradient.png";
import SpyLogo17 from "../../assets/Backgrounds/TargetEyeGreenonBlack.png";
import SpyLogo18 from "../../assets/Backgrounds/TargetEyePurpleonBlack.png";
// import tileData from "./tileData";
const backgroundArr = [
  SpyLogo1,
  SpyLogo2,
  SpyLogo3,
  SpyLogo4,
  SpyLogo5,
  SpyLogo6,
  SpyLogo7,
  SpyLogo8,
  SpyLogo9,
  SpyLogo10,
  SpyLogo11,
  SpyLogo12,
  SpyLogo13,
  SpyLogo14,
  SpyLogo15,
  SpyLogo16,
  SpyLogo17,
  SpyLogo18,
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function GridListComponent(props) {
  const classes = useStyles();
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
      console.log(res.data);
    });
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          row={2}
          style={{ height: "auto" }}
        ></GridListTile>
        {currentCollections.map((collection) => (
          <GridListTile key={collection.img} component={<Card />}>
            <img
              src={backgroundArr[parseInt(collection.img)]}
              alt={collection.collectionName}
            />
            <GridListTileBar
              title={collection.collectionName}
              subtitle={collection.collectionDescription}
              actionIcon={
                <IconButton
                  aria-label={`info about ${collection.collectionName}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
