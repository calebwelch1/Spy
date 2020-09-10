import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DarkThemeButton from "../components/DarkThemeButton";
import {
  useDarkTheme,
  useDarkThemeUpdate,
} from "../components/ThemeContextProvider.js";
import Projects from "../pages/Projects";
import MainPage from "../pages/MainPage";
import ProjectView from "../pages/ProjectView";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(props) {
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={darkTheme}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/main" {...a11yProps(0)} />
          <LinkTab
            label="Projects"
            // onClick={(e) => {
            //   e.preventDefault();
            //   props.history.push("/projects");
            // }}
            // href="/projects"
            {...a11yProps(1)}
          />
          <LinkTab label="Settings" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MainPage {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects {...props} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectView />
      </TabPanel>
    </div>
  );
}
