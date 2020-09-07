import React from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import SpyLogo from "../assets/BrightEyeBlack.png";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0px 14px 80px rgba(191, 192, 222 0.2)",
    color: "#fff",
    background: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    backgroundImage: { SpyLogo },
  },
  media: {
    borderRadius: 6,
    image: "cover",
  },
  white: {
    color: "#fff",
  },
  centered: {
    alignItems: "center",
    textAlign: "center",
  },
}));
const LogoSlowFade = () => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      //   add config on delay and duration to slow down the fade in
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <img
            className={styles.centered}
            src={SpyLogo}
            height="400px"
            width="350px"
          />
        </div>
      )}
    </Spring>
  );
};
export default LogoSlowFade;
