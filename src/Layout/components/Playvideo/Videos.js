import classNames from "classnames";
import styles from "./Playvideo.module.scss";
import ReactPlayer from "react-player/youtube";
// import { useState } from "react";

const cx = classNames.bind(styles);

function Videos({ video }) {
  return (
    <div className={cx("format-video")}>
      <ReactPlayer width="306" height="" controls url={video.url} />
    </div>
  );
}

export default Videos;
