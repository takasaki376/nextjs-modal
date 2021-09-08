import type { ReactNode, VFC } from "react";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  children: ReactNode;
};

export const ModalPortal: VFC<Props> = (props) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector("#modal");
  }, []);

  if (!props.open) {
    return null;
  }
  return ref.current ? createPortal(props.children, ref.current) : null;
};
