import classNames from "classnames/bind";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/Layout/components/Icon";

import styles from "./Sidebar.module.scss";
import Menu from "./Menu";
import config from "~/config";
import MenuItem from "./Menu/MenuItem";
import SuggestAccountitem from "~/components/SuggestAccountitem/SuggestAccountitem";
import InforBussiness from "./Menu/InforBussiness/InforBussiness";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.Routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.Routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.Routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestAccountitem label={"Suggest Account"} />
      <SuggestAccountitem label={"Account Follow"} />
      <InforBussiness />
    </aside>
  );
}

export default Sidebar;
