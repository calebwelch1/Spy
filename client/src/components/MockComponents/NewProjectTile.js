import React, { useContext } from "react";
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
import { useInput } from "../hooks/inputHook";
import Form from "react-bootstrap/Form";
import Label from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import API from "../../utils/API";
import { AuthProvider, AuthContext } from "../../AuthContext";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

      backgroundImage: "",

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
  formControl: {
    margin: 1,
    minWidth: 120,
  },
}));

export const NewProjectTile = React.memo(function BlogCard(props) {
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
  const {
    isAuth,
    setIsAuth,
    userId,
    setUserId,
    isUpdated,
    setIsUpdated,
  } = useContext(AuthContext);
  const update = () => {
    setIsUpdated(true);
  };
  const unUpdate = () => {
    setIsUpdated(false);
  };

  const {
    value: projectName,
    bind: bindProjectName,
    reset: resetProjectName,
  } = useInput("");
  const {
    value: projectDescription,
    bind: bindProjectDescription,
    reset: resetProjectDescription,
  } = useInput("");
  const {
    value: projectImg,
    bind: bindProjectImg,
    reset: resetProjectImg,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Project ${projectName} ${projectDescription}`);
    sendProjectDB();
    resetProjectName();
    resetProjectDescription();
    resetProjectImg();
  };

  const sendProjectDB = () => {
    const newProject = {
      projectName: projectName,
      projectDescription: projectDescription,
      userLink: userId,
      img: parseInt(projectImg),
    };
    API.createProject(newProject)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={SpyLogoW}></CardMedia>
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <Label className={styles.white}>
            Project Name:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindProjectName}
            />
          </Label>
          <Label className={styles.white}>
            Project Description:
            <Input
              type="text"
              fullWidth="true"
              className={styles.white}
              {...bindProjectDescription}
            />
          </Label>
          <Label className={styles.white}>
            Img:
            <Input
              type="number"
              fullWidth="true"
              className={styles.white}
              {...bindProjectImg}
            />
          </Label>

          <Input
            className={buttonStyles}
            type="submit"
            value="Submit"
            onClick={(e) => {
              window.location.reload(false);
            }}
          />
        </Form>
      </CardContent>
    </Card>
  );
});

export default NewProjectTile;
