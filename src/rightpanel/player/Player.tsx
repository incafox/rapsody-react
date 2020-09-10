import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Grid,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "1.3rem",
      color: "white",
    },
    panel: {
      backgroundColor: "#111111",
      height: "10%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

type Props={
  name:string,
  link:string,
  artist:string
}

const Player =(props: Props) => {
  const classes = useStyles();
  const [play, setPlay] = useState<boolean>(true);
  // const [name, setName] = useState<Props.name>("")
  // const [link, setLink] = useState<props.link>("")
  // const [artist, setArtist] = useState<props.artist>("")
  return (
    <div className={classes.panel}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={3}
          sm={3}
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <IconButton>
            <SkipPreviousRoundedIcon className={classes.root} />
          </IconButton>
          <IconButton onClick={(e) => setPlay(true)}>
            <PlayArrowRoundedIcon
              className={classes.root}
              style={{ color: "white" }}
            />
          </IconButton>
          <IconButton onClick={(e) => setPlay(false)}>
            <PauseRoundedIcon
              className={classes.root}
              style={{ color: "white" }}
            />
          </IconButton>

          <IconButton>
            <SkipNextRoundedIcon className={classes.root} />
          </IconButton>

          <div hidden={true}>
            <ReactPlayer
              playing={play}
              url={props.link}
            />
          </div>
        </Grid>
        <Grid
          xs={10}
          md={6} sm={6} 
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
            // textAlign: "center",
          }}
        >
          <div>{props.name}</div>
        </Grid>
        <Grid xs={1} md={3} sm={3} style={{ textAlign: "right" }}>
          <IconButton>
            <ReplayRoundedIcon
              className={classes.root}
              style={{ color: "white" }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Player;
