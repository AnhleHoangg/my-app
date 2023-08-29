import classNames from "classnames/bind";
import styles from "./InforBussiness.module.scss";

const cx = classNames.bind(styles);

function Infor({ children, href }) {
  return (
    <div className={cx("infor")}>
      <a href={href}>{children}</a>
    </div>
  );
}

export default Infor;
