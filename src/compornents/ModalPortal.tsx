import type { ReactNode, VFC } from "react";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  children?: ReactNode;
};

export const ModalPortal: VFC<Props> = (props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal");
    setMounted(true);
  }, []);

  if (!props.open) {
    return null;
  }
  return mounted && ref.current
    ? createPortal(props.children, ref.current)
    : null;
};
