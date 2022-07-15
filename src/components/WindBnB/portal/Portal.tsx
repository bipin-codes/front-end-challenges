import React, { FC, PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  parentId: string;
}
const createContainer = (id: string): HTMLDivElement => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", id);
  document.body.appendChild(wrapper);
  return wrapper;
};
const Portal: FC<PropsWithChildren<ModalProps>> = ({
  parentId = "portal",
  children,
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null
  );

  useLayoutEffect(() => {
    let created = false;
    let element: HTMLDivElement = document.getElementById(
      parentId
    ) as HTMLDivElement;

    if (!element) {
      element = createContainer(parentId);
      created = true;
    }
    setWrapperElement(element);

    return () => {
      if (created && element.parentNode)
        element.parentElement?.removeChild(element);
    };
  }, [parentId]);
  // Check if HTMLDivElement exists

  return createPortal(children, wrapperElement!);
};
export default Portal;
