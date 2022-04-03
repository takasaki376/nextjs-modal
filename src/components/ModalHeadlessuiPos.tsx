import { Dialog, Transition } from "@headlessui/react";
import type { ReactNode, VFC } from "react";
import { Fragment } from "react";
import styles from "../styles/ModalHeadlessui.module.css";
import cc from "classcat";

type Props = {
  open: boolean;
  onClick: () => void;
  title: string;
  message: string;
  position?: "top" | "left" | "right" | "bottom";
};

export const ModalHeadlessuiPos: VFC<Props> = (props) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog static open={props.open} onClose={props.onClick}>
        <div
          className="text-center"
          // className={styles.transitionFrame}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // enter={styles.overrayTransitionEnter}
            // enterFrom={styles.overrayTransitionEnterFrom}
            // enterTo={styles.overrayTransitionEnterTo}
            // leave={styles.overrayTransitionLeave}
            // leaveFrom={styles.overrayTransitionEnterTo}
            // leaveTo={styles.overrayTransitionEnterFrom}
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-black bg-opacity-40"
              // className={styles.dialogOverray}
            />
          </Transition.Child>
          {/* <div
            className={cc([
              "fixed ",
              {
                "top-0": props.position === "top",
                "bottom-0 ": props.position === "bottom",
                "right-0": props.position === "right",
                "left-0": props.position === "left",
              },
            ])}
          > */}
          <span
            className="inline-block align-middle h-screen"
            // className={styles.span}
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-0 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-0 scale-95"
            // enter={styles.dialogTransitionEnter}
            // enterFrom={styles.dialogTransitionEnterFrom}
            // enterTo={styles.dialogTransitionEnterTo}
            // leave={styles.dialogTransitionLeave}
            // leaveFrom={styles.dialogTransitionEnterTo}
            // leaveTo={styles.dialogTransitionEnterFrom}
          >
            <div
              className={cc([
                "fixed inline-block bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-sm w-10/12 p-4 sm:p-6",
                {
                  "top-0 right-0 left-0 mx-auto": props.position === "top",
                  "bottom-0 right-0 left-0 mx-auto":
                    props.position === "bottom",
                  "right-0 top-0 bottom-0 my-auto": props.position === "right",
                  "left-0": props.position === "left",
                },
              ])}
              // className={styles.mainFrame}
            >
              <div
                className="text-center"
                // className={styles.transitionFrame}
              >
                <Dialog.Title
                  as="h3"
                  className="leading-6 font-bold text-gray-900"
                  // className={styles.dialogTitle}
                >
                  {props.title}
                </Dialog.Title>
                <div
                  className="mt-2"
                  // className={styles.dialogMessageFrame}
                >
                  <p
                    className="text-sm text-gray-500"
                    // className={styles.dialogMessage}
                  >
                    {props.message}
                  </p>
                </div>
              </div>
              <div
                className="mt-6 flex space-x-3 sm:space-x-4"
                // className={styles.buttonFrame}
              >
                <button
                  type="button"
                  className="inline-flex justify-center rounded-full border border-gray-300 shadow-sm flex-1 py-2 bg-white font-bold text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto text-sm"
                  // className={styles.button}
                  onClick={props.onClick}
                >
                  閉じる
                </button>
              </div>
            </div>
          </Transition.Child>
          {/* </div> */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};
