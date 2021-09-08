import { DOMAttributes, VFC } from "react";
import { ModalBasic } from "./ModalBasic";
import styles from "../styles/MessagePortal.module.css";

type Props = {
  open: boolean;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const MessageBasic: VFC<Props> = (props) => {
  return (
    <ModalBasic open={props.open}>
      <h2>title</h2>
      <main className={styles.message}>
        <span>message</span>
      </main>
      <footer className={styles.button}>
        <button onClick={props.onClick}>閉じる</button>
      </footer>
    </ModalBasic>
  );
};
