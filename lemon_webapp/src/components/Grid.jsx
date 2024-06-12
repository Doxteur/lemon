import React from "react";

function Grid({ customStyles, children }) {
  return <div className={`grid ${customStyles}`}>{children}</div>;
}

export default Grid;
