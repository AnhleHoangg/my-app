import classNames from "classnames/bind";
import styles from "./stylesuggestacount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as Popperwrapper } from "~/Layout/components/Popper";
import Inforitem from "./Infor/Inforitem";

const cx = classNames.bind(styles);
const renderPreview = (props) => {
  return (
    <div tabIndex="-1" {...props}>
      <Popperwrapper>
        <Inforitem />
      </Popperwrapper>
    </div>
  );
};

function AccountItem({Inforitem}) {
  return (
    <div>
      <Tippy
        // visible
        interactive
        delay={[800, 0]}
        // offset={[-30, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/241418152_1217220758784217_8362403967180308444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T8qPluAIaO4AX8ilzPR&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAFjIDehCdrWi0Xe5STrk_uXoDwmAFVZ9qd8gTVkj0TSw&oe=64E4A0A3"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>LeHoangAnh</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Lê Hoàng Anh</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
