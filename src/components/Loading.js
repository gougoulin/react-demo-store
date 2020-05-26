import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>loading room data ...</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
