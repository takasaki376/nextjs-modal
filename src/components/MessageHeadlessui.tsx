import { VFC } from "react";
import { ModalHeadlessui } from "./ModalHeadlessui";
import styles from "../styles/MessageHeadlessui.module.css";

type Props = {
  open: boolean;
  onClick: () => void;
};

export const MessageHeadlessui: VFC<Props> = (props) => {
  return (
    <ModalHeadlessui
      open={props.open}
      onClick={props.onClick}
      title="title"
      message="Message headless-ui"
    >
      <div
        // className="mt-6 flex space-x-3 sm:space-x-4"
        className={styles.buttonFrame}
      >
        <button
          type="button"
          // className="inline-flex justify-center rounded-full border border-gray-300 shadow-sm flex-1 py-2 bg-white font-bold text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto text-sm"
          className={styles.button}
          onClick={props.onClick}
        >
          閉じる
        </button>
      </div>
    </ModalHeadlessui>
  );
};
