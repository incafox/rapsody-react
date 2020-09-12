import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Grid,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
  Slider,
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
      height: "11%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

type Props = {
  name: string;
  link: string;
  artist: string;
};

const Player = (props: Props) => {
  const classes = useStyles();
  const [play, setPlay] = useState<boolean>(true);
  const [duration, setDuration] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [playedPercent, setplayedPercent] = useState<string>("");

  const proccessSeconds = (e: any) => {
    // console.log(e);
    // console.log(
    //   Math.floor(Number(e.playedSeconds) / 60).toString() +
    //     " : " +
    //     Math.round(Number(e.playedSeconds) % 60).toString()
    // );
    setSeconds(
      Math.floor(Number(e.playedSeconds) / 60).toString() +
        ":" +
        Math.round(Number(e.playedSeconds) % 60).toString()
    );
    setplayedPercent((Number(e.played) * 100).toString());
  };
  // const [name, setName] = useState<Props.name>("")
  // const [link, setLink] = useState<props.link>("")
  // const [artist, setArtist] = useState<props.artist>("")
  return (
    <div className={classes.panel}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} sm={12}>
          <Slider
            style={{ color: "white" }}
            value={Number(playedPercent)}
            // onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sm={3}
          style={{
            display:"flex",
            alignItems:"center",
            alignContent:"center",
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
              onDuration={(e) => {
                var val = Math.round((Number(e) / 60) * 100).toString();
                var val = val.substring(0, 1) + ":" + val.substring(1);
                setDuration(val);
              }}
              onProgress={(e) => proccessSeconds(e)}
              playing={play}
              url={props.link}
            />
          </div>
        </Grid>
        <Grid
          xs={10}
          md={6}
          sm={6}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
            // textAlign: "center",
          }}
        >
          <div>
            <div style={{ textAlign: "left" }}>{props.name}</div>
            {/* <div style={{ textAlign: "right" }}> */}
            {/* {seconds} {duration} */}
            {/* </div> */}
          </div>
        </Grid>
        <Grid xs={1} md={3} sm={3} style={{ textAlign: "right" }}>
          {seconds} {duration}
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
