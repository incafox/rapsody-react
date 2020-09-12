import React, { useState } from "react";
import {
  List,
  ListItem,
  Divider,
  Theme,
  makeStyles,
  createStyles,
  Grid,
  IconButton,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { AntSwitch } from "./AntSwitch";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import data from "./final.json";
import Player from "../player/Player";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#111111",
      position: "relative",
      overflow: "auto",
      height: "83%",
      color: "white",
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);

const ListMusic = () => {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [link, setlink] = useState("");
  const [artist, setartist] = useState("");
  const handleSelection = (
    selectedTheme: string,
    selectedLink: string,
    selectedArtist: string
  ) => {
    console.log(selectedTheme);
    console.log(selectedLink);
    console.log(selectedArtist);
    setname(selectedTheme);
    setlink(selectedLink);
    setartist(selectedArtist);
    //pasa a poner a redux esta informacion
  };

  return (
    <div
      style={{
        height: "76vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Grid container style={{ padding: "1rem" }}>
        <Grid item xs={6} sm={6} style={{ textAlign: "left" }}>
          Queue
        </Grid>
        <Grid item xs={6} sm={6} style={{ textAlign: "right" }}>
          {/* <div style={{ paddingBottom: "2px" }}> */}
          <AntSwitch
            // checked={state.checkedC}
            // onChange={handleChange}
            name="checkedC"
          />
          {"   "}
          {/* </div> */}
          Autoplay
        </Grid>
      </Grid>
      <List className={classes.root} subheader={<li />}>
        {data[0].data.map((sectionId) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ListItem key={"list" + sectionId}>
              <IconButton
                onClick={(e) =>
                  handleSelection(
                    sectionId.name,
                    sectionId.link,
                    sectionId.artist
                  )
                }
              >
                <PlayArrowIcon style={{ color: "white" }} />
              </IconButton>{" "}
              <div style={{ width: "50%" }}>
                <div>{sectionId.name}</div>
                <div>{sectionId.artist}</div>
              </div>
              <div
                style={{
                  width: "50%",
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* 4:30 */}
                <br />
                <IconButton>
                  <FavoriteBorderRoundedIcon
                    style={{ color: "white", paddingLeft: "5px" }}
                  />
                </IconButton>
              </div>
            </ListItem>
            <Divider
              key={"div" + sectionId}
              style={{ backgroundColor: "#555" }}
            />
          </li>
        ))}
      </List>
      <Player name={name} link={link} artist={artist} />
    </div>
  );
};

export default ListMusic;
