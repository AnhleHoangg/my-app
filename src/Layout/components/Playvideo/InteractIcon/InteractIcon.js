import classNames from "classnames/bind";
import styles from "./InteractIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faHeart,
  faMessage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function InteractIcon() {
  return (
    <div className={cx("wrapper")}>
      <button className={cx("button-click")}>
        <span>
          <FontAwesomeIcon className={cx("interacticon")} icon={faHeart} />
        </span>
      </button>
      <button className={cx("button-click")}>
        <span>
          <FontAwesomeIcon className={cx("interacticon")} icon={faMessage} />
        </span>
      </button>
      <button className={cx("button-click")}>
        <span>
          <FontAwesomeIcon className={cx("interacticon")} icon={faFlag} />
        </span>
      </button>
      <button className={cx("button-click")}>
        <span>
          <FontAwesomeIcon className={cx("interacticon")} icon={faShare} />
        </span>
      </button>
    </div>
  );
}
export default InteractIcon;
