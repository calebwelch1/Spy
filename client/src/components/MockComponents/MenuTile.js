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
import SpyLogo from "../../assets/BrightEyeBlack.png";
import SpyLogoW from "../../assets/BrightEyeWhite.png";
import { useDarkTheme, useDarkThemeUpdate } from "../ThemeContextProvider.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const redBG = "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)";
const greenBG = "linear-gradient(147deg, #39fe77 0%, #383bfd 74%)";
const yellowBG = "linear-gradient(140deg, #fd4c38 1%, #fddf38 74%)";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(191, 192, 222 0.2)",
    maxWidth: 500,
    overflow: "initial",
    color: "#fff",
    background: "#333",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    paddingTop: spacing(2),
    alignContent: "center",
    textAlign: "center",
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
    textAlign: "center",
    alignContent: "center",
  },
  invert: {
    filter: "invert(0)",
  },
  center: {
    textAlign: "center",
    alignContent: "center",
  },
}));

export const MenuTile = React.memo(function BlogCard(props) {
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
      <CardContent className={styles.center}>
        <Typography variant="h5" component="h2" className={styles.center}>
          <h1 className={styles.white}>{props.title}</h1>

          <p className={styles.white}>{props.body} </p>
        </Typography>
      </CardContent>
    </Card>
  );
});

export default MenuTile;
