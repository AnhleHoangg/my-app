import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faSignOut,
  faCoins,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Search from "../Search/Search";
import image from "~/assets/image";
import Menu from "../Popper/Menu/Menu";
import Button from "~/components/Button/Button";
import Image from "../Image/Image";
import { InboxIcon, MessageIcon } from "~/Layout/components/Icon";
import { Link } from "react-router-dom";
import Routes from "~/config/route";
import config from "~/config";
import BtnModalSignIn from "~/components/BtnModalSignIn/BtnModalSignIn";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          key: "lang",
          code: "en",
          title: "English",
        },
        {
          key: "lang",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
// Menu-signin
const MenuSignin = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coin",
    to: "/coin",
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Sign Out",
    to: "/feedback",
    separate: true,
  },
];
// Handle ffc

const handleOnChangeMenu = (menuItem) => {
  switch (menuItem) {
    case "lang":
      // handle onchange
      break;
    default:
  }
};

function Header() {
  // Currunt User
  const currentUser = false;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={Routes.home} className={cx("logo")}>
          <img src={image.logo} alt="TikTok"></img>
        </Link>
        {/* Search comp */}
        <Search />
        <div className={cx("action")}>
          <Button text to={config.Routes.upload}>
            Up Load
          </Button>
          {currentUser ? (
            <>
              <Tippy
                className={cx("tippy-btn")}
                content="Notification"
                placement="bottom"
                delay={[0, 0]}
              >
                <button className={cx("current-icon")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy
                className={cx("tippy-btn")}
                content="Message"
                placement="bottom"
                delay={[0, 0]}
              >
                <button className={cx("current-icon")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <BtnModalSignIn />
          )}
          <Menu
            items={currentUser ? MenuSignin : MENU_ITEM}
            onChange={handleOnChangeMenu}
          >
            {currentUser ? (
              <Image
                className={cx("avatar-user")}
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/241418152_1217220758784217_8362403967180308444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=RuHQIReKsJQAX8g5DN6&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBLcjGbfin4OVbneF2XN2C3GB8ENIYCSl4nheLB6ObGQg&oe=64DCB7A3"
                alt="Le Hoang Anh"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
