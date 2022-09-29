import React, { FC, PropsWithChildren } from "react";
import useDisableScroll from "../../../hooks/useDisableScroll";
import "./Modal.css";
interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  children,
  handleClose,
}) => {
  useDisableScroll({ isOpen });

  if (!isOpen) return null;

  return (
    <div className="custom_modal">
      <div className="custom_modal_content">{children}</div>
    </div>
  );
};
export default Modal;
