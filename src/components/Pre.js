import React from "react";
function Pre(props) {
  return <div className={props.className} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
