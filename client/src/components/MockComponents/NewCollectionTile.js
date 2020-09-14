import React, { useContext } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import Grid from "@material-ui/core/Grid";

import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { AuthProvider, AuthContext } from "../../AuthContext";
import { useInput } from "../hooks/inputHook";
import SpyLogoW from "../../assets/BrightEyeWhite.png";
import SubmitSnackBar from "../SubmitSnackbar";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

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
  },
  media: {
    borderRadius: 6,
  },
  white: {
    color: "#fff",
  },
}));

export const NewCollectionTile = React.memo(function MusicCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const { isAuth, setIsAuth, userId, setUserId } = useContext(AuthContext);

  const {
    value: collectionName,
    bind: bindCollectionName,
    reset: resetCollectionName,
  } = useInput("");
  const {
    value: collectionDescription,
    bind: bindCollectionDescription,
    reset: resetCollectionDescription,
  } = useInput("");
  const {
    value: collectionImg,
    bind: bindCollectionImg,
    reset: resetCollectionImg,
  } = useInput("0");
  const currentProjectId = parseInt(
    props.history.location.pathname.slice(
      13,
      props.history.location.pathname.length
    )
  );
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Collection ${collectionName} ${collectionDescription}`);
    return <SubmitSnackBar />;
    sendCollectionDB();
    resetCollectionName();
    resetCollectionDescription();
    resetCollectionImg();
  };
  const projectId = 1;
  const sendCollectionDB = () => {
    const newCollection = {
      collectionName: collectionName,
      collectionDescription: collectionDescription,
      projectLink: currentProjectId,
      userLink: userId,
      img: parseInt(collectionImg),
    };
    API.createCollection(newCollection)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    // <Grid
    //   item
    //   xs
    //   component={Card}
    //   className={cx(styles.root, shadowStyles.root)}
    // >
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={SpyLogoW}
      />
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <Label className={styles.white}>
            Collection Name:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindCollectionName}
            />
          </Label>
          <Label className={styles.white}>
            Collection Description:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindCollectionDescription}
            />
          </Label>
          <Label className={styles.white}>
            Img:
            <Input
              type="number"
              fullWidth="true"
              className={styles.white}
              {...bindCollectionImg}
            />
          </Label>

          <Input
            className={buttonStyles}
            type="submit"
            value="Create Collection"
            onClick={() => window.location.reload(false)}
          />
        </Form>
      </CardContent>
    </Card>
  );
});
export default NewCollectionTile;
