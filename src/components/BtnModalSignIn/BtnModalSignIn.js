import { faClose, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Btn.module.scss";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function BtnModalSignIn() {
  const [opened, { open, close }] = useDisclosure(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <Button
        onClick={open}
        primary
        leftIcon={<FontAwesomeIcon icon={faSignIn} />}
      >
        Log In
      </Button>
      <Modal
        withCloseButton={false}
        size="55rem"
        opened={opened}
        onClose={close}
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
        styles={{
          close: { width: "50px", height: "50px", fontSize: "25px" },
          title: { fontSize: "25px" },
        }}
        centered
      >
        {
          <div className={cx("wrapper")}>
            <div className={cx("header")}>
              <div className={cx("tittle")}>
                {signIn ? <h2>Log In </h2> : <h2>Sign Up </h2>}
              </div>
              <button className={cx("btn-close")} onClick={close}>
                <FontAwesomeIcon className={cx("close")} icon={faClose} />
              </button>
            </div>
            <div className={cx("log-action")}>
              <br></br>
              {signIn ? (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Log In Facebook
                </Button>
              ) : (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Sign Up Facebook
                </Button>
              )}

              <br></br>

              {signIn ? (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Log In Number
                </Button>
              ) : (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Sign Up Number
                </Button>
              )}
              <br></br>
              {signIn ? (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Log In Gmail
                </Button>
              ) : (
                <Button logaction>
                  <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
                  Sign Up Gmail
                </Button>
              )}
            </div>
            <div className={cx("describe")}>
              By continuing, you agree to TikTok’s Terms of Service and confirm
              that you have read TikTok’s Privacy Policy.
            </div>
            <div className={cx("footer")}>
              <h3>Don't have an account?</h3>
              <button
                onClick={() => {
                  setSignIn(!signIn);
                }}
                className={cx("signup")}
              >
                {signIn ? "Sign Up" : "Log In"}
              </button>
            </div>
          </div>
        }
      </Modal>
    </>
  );
}

export default BtnModalSignIn;
