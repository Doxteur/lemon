import React, { useEffect } from "react";

function Card({ span, children }) {

  return (
    <div
      className={"rounded-lg shadow-xs overflow-hidden  h-36"}
      style={{
        gridColumn: `span ${span} / span ${span}`,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
