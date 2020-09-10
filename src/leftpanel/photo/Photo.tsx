import React from "react";

const Photo = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "2rem",
      }}
    >
      <img
        style={{
          bottom: "3rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        src="https://setlist.me/wp-content/uploads/2017/04/rhapsody-of-fire-4fa2860831073.jpg"
      />
    </div>
  );
};

export default Photo;
