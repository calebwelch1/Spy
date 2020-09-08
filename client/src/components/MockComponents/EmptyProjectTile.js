import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
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

import SpyLogoW from "../../assets/BrightEyeWhite.png";
import { useDarkTheme, useDarkThemeUpdate } from "../ThemeContextProvider.js";

const redBG = "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)";
const greenBG = "linear-gradient(147deg, #39fe77 0%, #383bfd 74%)";
const yellowBG = "linear-gradient(140deg, #fd4c38 1%, #fddf38 74%)";

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
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(191, 192, 222 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    color: "#fff",
    background: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
      paddingRight: spacing(1),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "rgba(128,128,128,0.5)",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // change background colors here, otherwise logo will just be black or white
      // #fe8a39 orangeish, #fd3838 reddish
      //#39fe77 light teal green, #383bfd bright royal blue
      // filter: "invert(1)", add to invert!

      backgroundImage: greenBG,

      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
    color: "#fff",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  white: {
    color: "#fff",
  },
  invert: {
    filter: "invert(0)",
  },
}));

export const EmptyProjectTile = React.memo(function BlogCard(props) {
  const darkTheme = useDarkTheme();
  const darkStyle = {
    backgroundColor: darkTheme ? "#1c1c1c" : "#F5F5F5",
    color: darkTheme ? "#F5F5F5" : "#1c1c1c",
  };
  const darkIconStyle = {
    color: darkTheme ? "#F5F5F5" : "#1c1c1c",
  };
  const darkDividerStyle = {
    color: darkTheme ? "#1c1c1c" : "#F5F5F5",
  };

  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={backgroundArr[props.img]} />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={
            <p fullWidth="true" className={styles.white}>
              {props.author}
            </p>
          }
          heading={
            <p fullWidth="true" className={styles.white}>
              {" "}
              {props.heading}
            </p>
          }
          body={
            <p fullWidth="true" className={styles.white}>
              {props.body}
            </p>
          }
        />
        <Button
          className={buttonStyles}
          onClick={(e) => {
            e.preventDefault();
            props.history.push(`/projectview/${props.id}`);
          }}
        >
          Go To Project
        </Button>
      </CardContent>
    </Card>
  );
});

export default EmptyProjectTile;
