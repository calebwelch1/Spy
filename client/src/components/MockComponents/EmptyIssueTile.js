import React from "react";
import cx from "clsx";
import { blueGrey } from "@material-ui/core/colors";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import IssueModal from "./IssueModal";

const useButtonStyles = makeStyles(() => ({
  root: {
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue,Helvetica, Arial",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    "&:hover": {
      backgroundColor: blueGrey[50],
    },
  },
  contained: {
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: blueGrey[50],
    color: blueGrey[700],
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
  containedPrimary: {
    transition:
      "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#ffbd80",
    color: blueGrey[900],
    "&:hover": {
      backgroundColor: "#FF9A3E",
    },
  },
}));

const useStyles = makeStyles(() => ({
  card: {
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 12,
    backgroundColor: "#333",
  },
  titleFont: {
    fontFamily:
      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica",
    color: "#fff",
  },
  header: {
    margin: 0,
    textAlign: "center",
    fontSize: "1.25rem",
    letterSpacing: "1px",
  },
  ribbon: {
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    letterSpacing: 1,
  },
}));

export const EmptyIssueTile = React.memo(function SysiCard(props) {
  const styles = useStyles();
  const btnStyles = useButtonStyles();
  return (
    <>
      <NoSsr></NoSsr>
      <Box maxWidth={343}>
        <Column p={0} gap={3} className={styles.card}>
          <Item>
            <h2 className={cx(styles.titleFont, styles.header)}>
              {props.date}
            </h2>
          </Item>
          <Item
            py={1}
            bgcolor={"rgb(255, 189, 128)"}
            className={cx(styles.titleFont, styles.ribbon)}
          >
            {props.title}{" "}
          </Item>
          <Item>
            <Box px={1} mt={1} className={cx(styles.titleFont)}>
              {props.body}
            </Box>
          </Item>
          <Row wrap gap={1} px={2} pb={2}>
            <Item grow>
              <Button
                classes={btnStyles}
                variant={"contained"}
                color={"primary"}
                fullWidth
              >
                <IssueModal {...props} />
              </Button>
            </Item>
            <Item grow>
              <Button classes={btnStyles} variant={"contained"} fullWidth>
                อ่านรายละเอียด
              </Button>
            </Item>
          </Row>
        </Column>
      </Box>
    </>
  );
});
export default EmptyIssueTile;
