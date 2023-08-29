import classNames from "classnames/bind";

import styles from "./Playvideo.module.scss";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function InforVideo({ video }) {
  return (
    <div className={cx("infor-video")}>
      <div className={cx("infor-header")}>
        <a className={cx("name-account")} href="@/lehoanganh">
          Lê Hoàng Anh
        </a>
        <p className={cx("status")}>{video.title}</p>
        <div>
          <FontAwesomeIcon className={cx("icon-music")} icon={faMusic} />
          <a className={cx("tag-music")} href="@/Thenhac">
            Thẻ nhạc
          </a>
        </div>
      </div>
      <div className={cx("follow-btn")}>
        <Button outline>Follow</Button>
      </div>
    </div>
  );
}

export default InforVideo;
