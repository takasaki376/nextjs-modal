import type { VFC } from "react";
import styles from "../styles/MessagePortal.module.css";
import { DOMAttributes } from "react";

type Props = {
  open: boolean;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const ModalBasic: VFC<Props> = (props) => {
  if (!props.open) {
    return null;
  }

  return (
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
  );
};
