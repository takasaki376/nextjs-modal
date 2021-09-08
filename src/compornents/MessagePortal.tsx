import { DOMAttributes, VFC } from "react";
import { ModalPortal } from "./ModalPortal";
import styles from "../styles/MessagePortal.module.css";

type Props = {
  open: boolean;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const MessagePortal: VFC<Props> = (props) => {
  return (
    <ModalPortal open={props.open}>
      <div className={styles.root}>
        <div className={styles.main}>
          <h2>title</h2>
          <main className={styles.message}>
            <span>message</span>
          </main>
          <footer className={styles.button}>
            <button onClick={props.onClick}>閉じる</button>
          </footer>
        </div>
        <div className={styles.back} />
      </div>
    </ModalPortal>
  );
};
