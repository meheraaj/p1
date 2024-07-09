import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="nf__top">
        <span className="textTop">404</span>
      </div>
      <div className="nf__bottom">
        <span className="textBottom">Not Found</span>
      </div>
    </div>
  );
};

export default NotFound;
