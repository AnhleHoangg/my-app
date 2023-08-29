import classNames from "classnames/bind";
import styles from "./Inforitem.module.scss";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Inforitem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/241418152_1217220758784217_8362403967180308444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T8qPluAIaO4AX8ilzPR&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAFjIDehCdrWi0Xe5STrk_uXoDwmAFVZ9qd8gTVkj0TSw&oe=64E4A0A3"
          alt="LeHoangAnh"
        ></img>
        <Button primary> Following </Button>
      </div>
      <div>
        <p>
          <div className={cx("info")}>
            <p className={cx("nickname")}>
              <strong>LeHoangAnh</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Lê Hoàng Anh</p>
            <p className={cx("analytics")}>
              <strong className={cx("value")}>8.2M </strong>
              <span className={cx("label")}>Followers</span>
              <strong className={cx("value")}>8.2M </strong>
              <span className={cx("label")}>Likes</span>
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Inforitem;
