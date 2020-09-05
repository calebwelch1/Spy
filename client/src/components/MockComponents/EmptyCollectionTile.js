import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

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

export const EmptyCollectionTile = React.memo(function MusicCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card
      className={cx(styles.root, shadowStyles.root)}
      onClick={(e) => {
        e.preventDefault();
        props.history.push(`/collection/${props.id}`);
      }}
    >
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
      />
      <CardContent>
        <TextInfoContent
          className={styles.root}
          classes={textCardContentStyles}
          //   overline={"Kesha"}
          heading={props.title}
          body={<p className={styles.white}>{props.body}</p>}
        />
      </CardContent>
    </Card>
  );
});
export default EmptyCollectionTile;
