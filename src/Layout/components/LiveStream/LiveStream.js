import classNames from "classnames/bind";
import styles from "./LiveStream.module.scss";
import ReactPlayer from "react-player";

const cx = classNames.bind(styles);

function LiveStream({ video }) {
  return (
    <div className={cx('pallet')}>
      <div className={cx("wrapper")}>
        <div className={cx("video-live")}>
          <ReactPlayer controls width="100%" url={video.sources[0]} />
        </div>
        <div className={cx("title-video")}>title video</div>
      </div>
    </div>
  );
}

export default LiveStream;
