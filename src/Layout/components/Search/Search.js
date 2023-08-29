import { useEffect, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "~/Layout/components/Icon";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import styles from "./Search.Module.scss";
import AccountItem from "~/components/GlobalStyles/AccountItem";
import { useDebounce } from "~/hook";

const cx = classNames.bind(styles);
const linkref = { useRef };

function Search() {
  const [searchValue, setsearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([""]);
  const [showResulf, setshowResulf] = useState(true);
  const [loading, setLoading] = useState(false);

  const waitingResuft = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!waitingResuft.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    axios
      .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        params: {
          q: waitingResuft,
          type: "less",
        },
      })
      .then((res) => {
        setSearchResult(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [waitingResuft]);
  /// clear taskbar search
  const handleDelete = () => {
    linkref.current.focus();
    setsearchValue("");
    setSearchResult([]);
  };
  const handleClickOutside = () => {
    setshowResulf(false);
  };
  const handleInput = (e) => {
    const wordSearch = e.target.value;
    if (!wordSearch.startsWith(" ")) {
      setsearchValue(wordSearch);
    }
  };
  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResulf && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-tittle")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleClickOutside}
      >
        <div className={cx("search")}>
          <input
            ref={linkref}
            placeholder="Search videos and accounts"
            spellCheck={false}
            onChange={handleInput}
            value={searchValue}
            onFocus={() => {
              setshowResulf(true);
            }}
          />

          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleDelete}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button
            className={cx("search-btn")}
            // click no focus
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
