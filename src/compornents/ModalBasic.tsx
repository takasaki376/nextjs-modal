import type { ReactNode, VFC } from "react";
import styles from "../styles/MessagePortal.module.css";

type Props = {
  open: boolean;
  children?: ReactNode;
};

export const ModalBasic: VFC<Props> = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.main}>{props.children}</div>
      <div className={styles.back} />
    </div>
  );
};
