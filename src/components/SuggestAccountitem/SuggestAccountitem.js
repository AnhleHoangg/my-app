import classNames from "classnames/bind";
import styles from "./stylesuggestacount.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestAccountitem({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx("more-btn")}>See All</p>
    </div>
  );
}

export default SuggestAccountitem;
