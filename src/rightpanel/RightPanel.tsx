import React from "react";
import ListMusic from "./listmusic/ListMusic";
import MyFavs from "./myfavs/MyFavs";

const RightPanel = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MyFavs />
      <ListMusic></ListMusic>
    </div>
  );
};

export default RightPanel;
