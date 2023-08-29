import classNames from "classnames/bind";
import styles from "./UploadLayout.module.scss";
import { UploadIcon } from "../Icon";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function UploadLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("pallet-upload")}>
        <div className={cx("content")}>
          <div className={cx("frame-upload")}>
            <UploadIcon className={cx("icon-upload")} />
            <div className={cx("title")}>
              <span> Chọn video để tải lên </span>
            </div>
            <div className={cx("drag-drop")}>
              <span> Kéo và thả tập tin </span>
              <span>
                Có thể tách video dài thành nhiều phần để tăng khả năng hiển thị{" "}
              </span>
            </div>
            <div className={cx("format-video")}>
              <span> Hổ trợ định dạng video mp4, avi, webm và mov </span>
              <span> Tối đa 600 giây </span>
              <span> Nhỏ hơn 2GB </span>
              <span> Dưới 30 video </span>
            </div>
            {/* <input type="file"></input> */}
            <div className={cx("btn-upload")}>
              <Button primary> Chọn tập tin </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadLayout;
