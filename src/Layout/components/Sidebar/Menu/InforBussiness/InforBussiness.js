import classNames from "classnames/bind";
import styles from "./InforBussiness.module.scss";

import Button from "~/components/Button/Button";
import Infor from "./Infor";
import config from "~/config";

const cx = classNames.bind(styles);

function InforBussiness() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("button-cr-action")}>
        <Button primary>Tạo hiệu ứng</Button>
      </div>
      <div className={cx("infor-bussiness")}>
        <nav className={cx("infor-contact")}>
          <Infor href={config.Routes.home}>Giới thiệu</Infor>
          <Infor href={config.Routes.home}>Bản tin</Infor>
          <Infor href={config.Routes.home}>Liên hệ</Infor>
          <Infor href={config.Routes.home}>Sự nghiệp của doanh nghiệp</Infor>
        </nav>
      </div>
      <div className={cx("infor-bussiness")}>
        <nav className={cx("infor-contact")}>
          <Infor href={config.Routes.home}>Giới thiệu</Infor>
          <Infor href={config.Routes.home}>Bản tin</Infor>
          <Infor href={config.Routes.home}>Liên hệ</Infor>
          <Infor href={config.Routes.home}>Sự nghiệp của doanh nghiệp</Infor>
        </nav>
      </div>
    </div>
  );
}

export default InforBussiness;
