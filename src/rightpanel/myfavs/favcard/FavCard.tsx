import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "../MyFavs.css";
import { Button } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: "13vh",
      height: "13vh",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

type Link = {
  link: string;
};

export default function FavCard(props: Link) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Button>
        <Card className={classes.root}>
          <div className={classes.details}></div>
          <CardMedia
            className={classes.cover}
            image={props.link}
            title="Live from space album cover"
          />
        </Card>
      </Button>
    </div>
  );
}
