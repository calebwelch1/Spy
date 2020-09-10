import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
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
import Button from "@material-ui/core/Button";
import CollectionPopover from "./CollectionPopover";
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
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    Width: 343,
    Height: "100%",
    maxHeight: 450,
    maxWidth: 343,
    margin: "auto",
    borderRadius: 16,
    padding: 12,
    boxShadow: "0px 14px 80px rgba(191, 192, 222 0.2)",
    color: "#fff",
    background: "#333",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    objectFit: "cover",
    justifyContent: "space-between",
  },
  media: {
    borderRadius: 6,
  },
  white: {
    color: "#fff",
    overflow: "hidden",
  },
  hideOverflow: {
    overflow: "hidden",
  },
}));

export const EmptyCollectionTile = React.memo(function MusicCard(props) {
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={backgroundArr[props.img]}
      />
      <CardContent className={styles.hideOverflow}>
        <TextInfoContent
          className={styles.root}
          classes={textCardContentStyles}
          heading={props.title}
          body={
            <CollectionPopover collectionPopoverBody={props.body} {...props} />
          }
        />
        <p></p>
        {/* <p className={styles.white}>{props.body}</p> */}
        <Button
          className={buttonStyles}
          onClick={(e) => {
            e.preventDefault();
            props.history.push(`/collection/${props.id}`);
          }}
        >
          Go to Collection
        </Button>
      </CardContent>
    </Card>
  );
});
export default EmptyCollectionTile;
