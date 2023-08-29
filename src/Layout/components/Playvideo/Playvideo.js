import classNames from "classnames/bind";
import styles from "./Playvideo.module.scss";
import InforVideo from "./InforVideo";
import Videos from "./Videos";
import InteractIcon from "./InteractIcon/InteractIcon";

const cx = classNames.bind(styles);

function Playvideo({ video }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avtar-video")}>
        <a href="aa">
          <img
            className={cx("avatar")}
            src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/241418152_1217220758784217_8362403967180308444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T8qPluAIaO4AX8ilzPR&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAFjIDehCdrWi0Xe5STrk_uXoDwmAFVZ9qd8gTVkj0TSw&oe=64E4A0A3"
            alt="Le Hoang Anh"
          />
        </a>
      </div>
      <div className={cx("media-tiktok")}>
        <div className={cx("header-video")}>
          <InforVideo video={video} />
        </div>
        <div className={cx("video-tiktok")}>
          <div>
            <Videos video={video} />
          </div>
          <div className={cx("icon-interact")}>
            <InteractIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playvideo;
