import React from "react";
import { Card } from "@material-ui/core";

const Description = () => {
  return (
    <div style={{  backgroundColor: "black", color: "white" }}>
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        DESCRIPTION
      </div>
      <div style={{ padding: "1rem"}}>
        <Card
          style={{ color: "white", backgroundColor: "black" }}
        >
          Rhapsody of Fire («Rapsodia del Fuego», en inglés), anteriormente
          Rhapsody, es una banda italiana de Power metal sinfónico formada en
          Trieste, por Luca Turilli (guitarrista) y Alex Staropoli (teclista) en
          1993. Su primer nombre fue Thundercross, con el que sacaron un EP.
          Posteriormente cambiaron su nombre a «Rhapsody», con el cual serían
          mundialmente conocidos, para finalmente en el 2006 y, debido a
          problemas legales, modificar su nombre a «Rhapsody of Fire».
        </Card>
      </div>
    </div>
  );
};

export default Description;
