import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { Wrapper as PopperWrapper } from "..";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import HeaderMenu from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaulFn = () => {};
function Menu({ children, items = [], onChange = defaulFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParen = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParen) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    // fix tippy
    <div>
      <Tippy
        interactive
        delay={[0, 500]}
        animation={false}
        placement="top-end"
        hideOnClick="false"
        offset={[12, 12]}
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length > 1 && (
                <HeaderMenu
                  title={current.title}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              <div className={cx("menu-listlangue")}>{renderItem()}</div>
            </PopperWrapper>
          </div>
        )}
        onHide={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
