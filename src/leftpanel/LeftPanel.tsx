import React from "react";
import Photo from "./photo/Photo";
import Description from "./description/Description";

const LeftPanel = () => {
  return (
    <div
      style={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Photo></Photo>
    </div>
  );
};

export default LeftPanel;
